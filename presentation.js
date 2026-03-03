const deck = document.getElementById('deck');
const slides = Array.from(document.querySelectorAll('.slide'));
const currentEl = document.getElementById('current');
const totalEl = document.getElementById('total');

let activeIndex = 0;
let wheelLocked = false;

totalEl.textContent = String(slides.length);

function goTo(index) {
  const clamped = Math.max(0, Math.min(index, slides.length - 1));
  slides[clamped].scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateCounter() {
  const deckTop = deck.scrollTop;
  const viewport = deck.clientHeight;

  let closest = 0;
  let closestDistance = Number.POSITIVE_INFINITY;

  slides.forEach((slide, i) => {
    const distance = Math.abs(slide.offsetTop - deckTop);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = i;
    }
  });

  activeIndex = closest;
  currentEl.textContent = String(activeIndex + 1);

  const endReached = deckTop + viewport >= deck.scrollHeight - 4;
  if (endReached) {
    activeIndex = slides.length - 1;
    currentEl.textContent = String(slides.length);
  }
}

deck.addEventListener('scroll', updateCounter, { passive: true });

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
    event.preventDefault();
    goTo(activeIndex + 1);
  }

  if (event.key === 'ArrowUp' || event.key === 'PageUp') {
    event.preventDefault();
    goTo(activeIndex - 1);
  }
});

deck.addEventListener('wheel', (event) => {
  if (wheelLocked || Math.abs(event.deltaY) < 15) {
    return;
  }

  wheelLocked = true;
  goTo(activeIndex + Math.sign(event.deltaY));

  setTimeout(() => {
    wheelLocked = false;
  }, 420);
}, { passive: true });

updateCounter();
