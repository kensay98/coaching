import * as THREE from 'three';
import { NURBSCurve } from 'three/addons/curves/NURBSCurve.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';

// ── Graceful degradation ──────────────────────────────────────────
const canvas = document.getElementById('hero-canvas');
if (!canvas) throw new Error('No canvas');

const testCanvas = document.createElement('canvas');
let hasWebGL = false;
try {
    hasWebGL = !!(testCanvas.getContext('webgl2') || testCanvas.getContext('webgl'));
} catch (_) { /* swallow */ }
if (!hasWebGL) {
    canvas.style.display = 'none';
    throw new Error('No WebGL');
}

// ── Renderer ──────────────────────────────────────────────────────
const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'low-power',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);

// ── Scene & Camera ────────────────────────────────────────────────
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 1, 2000);
camera.position.set(0, 150, 450);

const group = new THREE.Group();
group.position.y = 50;
scene.add(group);

// ── Seeded PRNG for consistent curves across reloads ──────────────
function mulberry32(seed) {
    let s = seed | 0;
    return function () {
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// ── NURBS curve construction — same method as Three.js example ────
const CURVE_COUNT = 7;
const NUM_POINTS = 20;
const DEGREE = 3;
const SEGMENTS = 1000;

let isMobile = window.innerWidth <= 600;

const curveSeeds = [4271, 8839, 1597, 6263, 3407, 9721, 5113];
const curveOpacities = isMobile
    ? [0.04, 0.06, 0.03, 0.05, 0.03, 0.04, 0.02]
    : [0.24, 0.34, 0.20, 0.28, 0.16, 0.26, 0.12];
const curveWidths = [1.5, 2.0, 1.2, 1.8, 1.0, 1.6, 1.0];

const curveMeshes = [];
const curveGeometries = [];
const curveMaterials = [];
const baseControlPoints = [];
const curveKnots = [];

function buildKnotsForCurve() {
    const knots = [];
    for (let i = 0; i <= DEGREE; i++) {
        knots.push(0);
    }
    for (let i = 0; i < NUM_POINTS; i++) {
        const knot = (i + 1) / (NUM_POINTS - DEGREE);
        knots.push(THREE.MathUtils.clamp(knot, 0, 1));
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

for (let i = 0; i < CURVE_COUNT; i++) {
    const random = mulberry32(curveSeeds[i]);
    const controlPoints = [];
    const knots = buildKnotsForCurve();

    for (let j = 0; j < NUM_POINTS; j++) {
        controlPoints.push(
            new THREE.Vector4(
                random() * 400 - 200,
                random() * 400,
                random() * 400 - 200,
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
        opacity: curveOpacities[i],
        linewidth: curveWidths[i],
        depthWrite: false,
        depthTest: false,
        resolution: new THREE.Vector2(canvas.clientWidth, canvas.clientHeight),
    });

    const line = new Line2(geometry, material);
    line.computeLineDistances();
    line.position.set(0, -100, 0);
    group.add(line);

    curveMeshes.push(line);
    curveGeometries.push(geometry);
    curveMaterials.push(material);
}

// ── Responsive offset ─────────────────────────────────────────────
function updateScenePosition() {
    isMobile = window.innerWidth <= 600;
    group.position.x = isMobile ? 0 : 0;
}
updateScenePosition();

// ── Mouse tracking ────────────────────────────────────────────────
let targetRotationY = 0;
let targetRotationX = 0;
const hero = document.querySelector('.hero');

function onPointerMove(event) {
    // Map mouse position to rotation: center = 0, edges = ±1
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = (event.clientY / window.innerHeight) * 2 - 1;
    targetRotationY = x * 1.2;
    targetRotationX = -y * 0.4;
}
window.addEventListener('pointermove', onPointerMove, { passive: true });

// ── Scroll tracking ──────────────────────────────────────────────
let scrollProgress = 0;
let smoothScroll = 0;

function getHeroScrollProgress() {
    if (!hero) return 0;
    const rect = hero.getBoundingClientRect();
    // 0 at top, 1 when hero is fully scrolled past
    const raw = -rect.top / rect.height;
    return Math.max(0, Math.min(1, raw));
}

// ── Resize ────────────────────────────────────────────────────────
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
        // LineMaterial needs resolution updates
        for (let i = 0; i < CURVE_COUNT; i++) {
            curveMaterials[i].resolution.set(w, h);
        }
        updateScenePosition();
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

// ── IntersectionObserver — pause when off-screen ──────────────────
let isVisible = true;
const observer = new IntersectionObserver(
    ([entry]) => { isVisible = entry.isIntersecting; },
    { threshold: 0 }
);
if (hero) observer.observe(hero);

// ── Animation loop ────────────────────────────────────────────────
const baseGroupY = group.position.y;

function rebuildCurve(index) {
    const base = baseControlPoints[index];
    const knots = curveKnots[index];
    const time = performance.now() * 0.001;

    // Scroll modulates sway: less motion as user scrolls away
    const scrollFade = 1 - smoothScroll * 0.25; // 1 → 0.75
    // Scroll pushes curves upward as hero scrolls out
    const scrollPush = smoothScroll * 8;

    const controlPoints = base.map((bp, j) => {
        const t = j / (NUM_POINTS - 1);
        const swayX = Math.sin(time * 0.3 + index * 0.7 + t * 2) * 3 * scrollFade;
        const swayY = Math.cos(time * 0.25 + index * 0.5 + t * 1.5) * 2 * scrollFade + scrollPush * t;
        const swayZ = Math.sin(time * 0.2 + index * 0.9 + t * 3) * 2 * scrollFade;
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

    // Update scroll
    scrollProgress = getHeroScrollProgress();
    smoothScroll += (scrollProgress - smoothScroll) * 0.03;

    // Smooth lerp towards mouse target
    group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
    group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

    // Scroll-driven rotation (tilt as scrolling down)
    group.rotation.x += smoothScroll * 0.12;
    group.rotation.z = smoothScroll * -0.04;

    // Scroll-driven parallax
    group.position.y = baseGroupY + smoothScroll * -25;

    for (let i = 0; i < CURVE_COUNT; i++) {
        rebuildCurve(i);
    }

    renderer.render(scene, camera);

    // Reveal canvas after first frame is rendered
    if (!canvas.classList.contains('ready')) {
        canvas.style.opacity = '';
        canvas.style.background = '';
        canvas.classList.add('ready');
    }
}

animate();
