const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle menu on hamburger click
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent click from reaching document
  navLinks.classList.toggle('show');
});

// Close menu if clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    navLinks.classList.remove('show');
  }
});