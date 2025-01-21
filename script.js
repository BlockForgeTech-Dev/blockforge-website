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

// Demo Interactions
const templateSelection = document.getElementById('template-selection');
const configuration = document.getElementById('configuration');
const securityAudit = document.getElementById('security-audit');
const deployment = document.getElementById('deployment');
const management = document.getElementById('management');
const auditProgress = document.getElementById('audit-progress');

// Template Selection
templateSelection.addEventListener('click', (event) => {
  const templateCard = event.target.closest('[data-template]');
  if (templateCard) {
    // Highlight selected template (add styling or classes)
    const selectedTemplate = templateCard.dataset.template;
    console.log('Selected template:', selectedTemplate);

    // Update configuration section based on selected template (placeholder)
    // ...
  }
});

// Configuration
configuration.addEventListener('input', (event) => {
  if (event.target.id === 'token-supply') {
    const tokenSupply = event.target.value;
    const aiSuggestion = event.target.nextElementSibling; // Get the AI suggestion element

    // Basic placeholder suggestion
    if (tokenSupply > 1000000) {
      aiSuggestion.textContent = "AI Suggestion: Consider a lower supply for scarcity.";
    } else {
      aiSuggestion.textContent = "";
    }
  }
});

// Security Audit (Placeholder Animation)
securityAudit.addEventListener('click', () => {
  auditProgress.style.width = '0%'; // Reset
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      // Display mock security issues (placeholder)
      console.log('Security Audit Complete. Mock issues found.');
    } else {
      width += 10;
      auditProgress.style.width = width + '%';
    }
  }, 200); // Adjust animation speed here
});

// Deployment (Placeholder)
deployment.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(event.target.textContent, 'clicked'); // Log button clicks
    // Simulate wallet connection or deployment
  }
});