// Menu Toggle
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('active');
}

// Scroll Buttons Functionality
document.querySelectorAll('.collection .scroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = document.querySelector('.tiles-horizontal');
    container.scrollBy({ left: btn.classList.contains('left') ? -300 : 300, behavior: 'smooth' });
  });
});

document.querySelectorAll('.antique .scroll-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = document.querySelector('.antique-gallery');
    container.scrollBy({ left: btn.classList.contains('left') ? -300 : 300, behavior: 'smooth' });
  });
});

const heroOverlay = document.querySelector('.hero-overlay');
const heroWatch = document.querySelector('.hero-watch');

// Show animation on page load
window.addEventListener('load', () => {
  heroOverlay.classList.add('show');
  heroWatch.classList.add('show');
});

// Show/hide animation on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  if (currentScroll < lastScroll || currentScroll === 0) {
    // Scrolling up or top of page
    heroOverlay.classList.add('show');
    heroWatch.classList.add('show');
  } else {
    // Scrolling down
    heroOverlay.classList.remove('show');
    heroWatch.classList.remove('show');
  }

  lastScroll = currentScroll;
});
