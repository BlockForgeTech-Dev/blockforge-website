// Dynamic text animation
window.addEventListener('load', () => {
  const dynamicText = document.querySelector('.dynamic-text');
  setTimeout(() => {
    dynamicText.classList.add('visible');
  }, 300);
});

// Dynamic navigation highlighting
window.addEventListener('load', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    // Remove active class from all links
    link.classList.remove('active');

    // Check if the link's href matches the current path or if it's the homepage
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});

// Add other JavaScript code from the <script> tag here
