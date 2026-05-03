import * as THREE from 'three';
import { NURBSCurve } from 'three/addons/curves/NURBSCurve.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';

// ── WebGL check ──────────────────────────────────────────────────
const testCanvas = document.createElement('canvas');
let hasWebGL = false;
try {
    hasWebGL = !!(testCanvas.getContext('webgl2') || testCanvas.getContext('webgl'));
} catch (_) { /* swallow */ }
if (!hasWebGL) throw new Error('No WebGL');

// ── Seeded PRNG ──────────────────────────────────────────────────
function mulberry32(seed) {
    let s = seed | 0;
    return function () {
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// ── Shared constants ─────────────────────────────────────────────
const DEGREE = 3;
const NUM_POINTS = 20;
const SEGMENTS = 800;

function buildKnots() {
    const knots = [];
    for (let i = 0; i <= DEGREE; i++) knots.push(0);
    for (let i = 0; i < NUM_POINTS; i++) {
        knots.push(THREE.MathUtils.clamp((i + 1) / (NUM_POINTS - DEGREE), 0, 1));
    }
    return knots;
}

function pointsToPositions(pts) {
    const arr = new Float32Array(pts.length * 3);
    for (let i = 0; i < pts.length; i++) {
        arr[i * 3] = pts[i].x;
        arr[i * 3 + 1] = pts[i].y;
        arr[i * 3 + 2] = pts[i].z;
    }
    return arr;
}

// ── Scroll progress: 0 = section entering bottom, 1 = leaving top ─
function getScrollProgress(section) {
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    // progress: 0 when section top hits viewport bottom, 1 when section bottom hits viewport top
    const raw = (vh - rect.top) / (vh + rect.height);
    return Math.max(0, Math.min(1, raw));
}

const isMobile = window.innerWidth <= 600;

// ── Factory: create a section NURBS animation ────────────────────
function createSectionAnimation(config) {
    const canvas = document.getElementById(config.canvasId);
    if (!canvas) return null;

    const section = canvas.closest('.section') || canvas.parentElement;

    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 1, 2000);
    camera.position.set(config.cameraX, config.cameraY, config.cameraZ);

    const group = new THREE.Group();
    const baseGroupY = config.groupY || 0;
    group.position.set(config.groupX || 0, baseGroupY, config.groupZ || 0);
    scene.add(group);

    const curveMeshes = [];
    const curveGeometries = [];
    const curveMaterials = [];
    const baseControlPoints = [];
    const curveKnots = [];

    for (let i = 0; i < config.curveCount; i++) {
        const random = mulberry32(config.seeds[i]);
        const controlPoints = [];
        const knots = buildKnots();

        for (let j = 0; j < NUM_POINTS; j++) {
            controlPoints.push(
                new THREE.Vector4(
                    random() * config.spread - config.spread / 2,
                    random() * config.spread,
                    random() * config.spread - config.spread / 2,
                    1
                )
            );
        }

        baseControlPoints.push(controlPoints.map(p => p.clone()));
        curveKnots.push(knots);

        const nurbsCurve = new NURBSCurve(DEGREE, knots, controlPoints);
        const pts = nurbsCurve.getPoints(SEGMENTS);

        const geometry = new LineGeometry();
        geometry.setPositions(pointsToPositions(pts));

        const material = new LineMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: config.opacities[i],
            linewidth: config.widths[i],
            depthWrite: false,
            depthTest: false,
            resolution: new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
        });

        const line = new Line2(geometry, material);
        line.computeLineDistances();
        line.position.set(0, config.lineOffsetY || -100, 0);
        group.add(line);

        curveMeshes.push(line);
        curveGeometries.push(geometry);
        curveMaterials.push(material);
    }

    // ── Resize ───────────────────────────────────────────────────
    let resizeTimeout;
    function onResize() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const w = canvas.clientWidth;
            const h = canvas.clientHeight;
            if (w === 0 || h === 0) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            for (let i = 0; i < config.curveCount; i++) {
                curveMaterials[i].resolution.set(w, h);
            }
        }, 100);
    }
    window.addEventListener('resize', onResize);

    // Initial size
    {
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;
        if (w > 0 && h > 0) {
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }
    }

    // ── Visibility observer ──────────────────────────────────────
    let isVisible = false;
    const observer = new IntersectionObserver(
        ([entry]) => { isVisible = entry.isIntersecting; },
        { threshold: 0 }
    );
    observer.observe(section);

    // ── Mouse tracking ───────────────────────────────────────────
    let targetRotY = 0;
    let targetRotX = 0;
    window.addEventListener('pointermove', (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        targetRotY = x * config.mouseInfluence;
        targetRotX = -y * (config.mouseInfluence * 0.35);
    }, { passive: true });

    // ── Scroll state (smoothed) ──────────────────────────────────
    let scrollProgress = 0;
    let smoothScroll = 0;

    // ── Animation ────────────────────────────────────────────────
    function rebuildCurve(index) {
        const base = baseControlPoints[index];
        const knots = curveKnots[index];
        const time = performance.now() * 0.001 * config.speed;

        // Scroll modulates sway: peaks at center of section (smoothScroll ~0.5)
        const scrollPeak = 1 - Math.abs(smoothScroll - 0.5) * 2; // 0→1→0
        const swayMul = 0.85 + scrollPeak * 0.25; // range 0.85–1.1
        // Scroll adds a directional push to control points
        const scrollPush = (smoothScroll - 0.5) * config.scrollDisplace;

        const controlPoints = base.map((bp, j) => {
            const t = j / (NUM_POINTS - 1);
            const sway = config.swayAmount * swayMul;
            const swayX = Math.sin(time * 0.3 + index * 0.7 + t * 2) * sway;
            const swayY = Math.cos(time * 0.25 + index * 0.5 + t * 1.5) * (sway * 0.67) + scrollPush * t;
            const swayZ = Math.sin(time * 0.2 + index * 0.9 + t * 3) * (sway * 0.67);
            return new THREE.Vector4(bp.x + swayX, bp.y + swayY, bp.z + swayZ, bp.w);
        });

        const nurbsCurve = new NURBSCurve(DEGREE, knots, controlPoints);
        const pts = nurbsCurve.getPoints(SEGMENTS);

        curveGeometries[index].setPositions(pointsToPositions(pts));
        curveMeshes[index].computeLineDistances();
    }

    function animate() {
        requestAnimationFrame(animate);
        if (!isVisible) return;

        // Update scroll progress
        scrollProgress = getScrollProgress(section);
        smoothScroll += (scrollProgress - smoothScroll) * 0.03;

        // Mouse rotation
        group.rotation.y += (targetRotY - group.rotation.y) * 0.04;
        group.rotation.x += (targetRotX - group.rotation.x) * 0.04;

        // Scroll-driven rotation (layered on top of mouse)
        const scrollRotY = (smoothScroll - 0.5) * config.scrollRotation;
        const scrollRotX = (smoothScroll - 0.5) * (config.scrollRotation * 0.4);
        group.rotation.y += scrollRotY;
        group.rotation.x += scrollRotX;

        // Scroll-driven parallax Y offset
        const parallaxY = (smoothScroll - 0.5) * config.scrollParallax;
        group.position.y = baseGroupY + parallaxY;

        for (let i = 0; i < config.curveCount; i++) {
            rebuildCurve(i);
        }

        renderer.render(scene, camera);

        if (!canvas.classList.contains('ready')) {
            canvas.style.opacity = '';
            canvas.style.background = '';
            canvas.classList.add('ready');
        }
    }

    animate();
    return { renderer, scene, camera };
}

// ── "Who I Am" section — gentle, contemplative, offset right ─────
createSectionAnimation({
    canvasId: 'about-canvas',
    curveCount: 5,
    seeds: [7193, 2851, 9437, 4619, 6073],
    opacities: isMobile ? [0.07, 0.10, 0.06, 0.09, 0.05] : [0.16, 0.22, 0.14, 0.20, 0.12],
    widths: [1.2, 1.6, 1.0, 1.4, 0.8],
    spread: 350,
    cameraX: 0,
    cameraY: 120,
    cameraZ: 500,
    groupX: 0,
    groupY: 30,
    groupZ: 0,
    lineOffsetY: -80,
    speed: 0.6,
    swayAmount: 2.5,
    mouseInfluence: 0.6,
    scrollRotation: 0.12,
    scrollParallax: 15,
    scrollDisplace: 6,
});

// ── "Free First Session" CTA — slightly more energy, centered ────
createSectionAnimation({
    canvasId: 'cta-canvas',
    curveCount: 6,
    seeds: [3187, 8461, 5729, 1943, 7321, 4567],
    opacities: isMobile ? [0.08, 0.12, 0.06, 0.10, 0.05, 0.09] : [0.18, 0.26, 0.14, 0.22, 0.12, 0.20],
    widths: [1.4, 1.8, 1.0, 1.6, 0.9, 1.3],
    spread: 400,
    cameraX: 0,
    cameraY: 140,
    cameraZ: 480,
    groupX: 0,
    groupY: 40,
    groupZ: 0,
    lineOffsetY: -100,
    speed: 0.7,
    swayAmount: 3.0,
    mouseInfluence: 0.8,
    scrollRotation: 0.15,
    scrollParallax: 20,
    scrollDisplace: 8,
});
