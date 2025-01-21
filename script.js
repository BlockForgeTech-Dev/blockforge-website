// Dynamic text animation (for hero section - if needed)
window.addEventListener('load', () => {
  const dynamicText = document.querySelector('.dynamic-text');
  if (dynamicText) {
    setTimeout(() => {
      dynamicText.classList.add('visible');
    }, 300);
  }
});

// Dynamic navigation highlighting
window.addEventListener('load', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});

// --- Demo Interactions (for smart-contract-platform.html) ---

const templateSelection = document.getElementById('template-selection');
const configuration = document.getElementById('configuration');
const securityAudit = document.getElementById('security-audit');
const deployment = document.getElementById('deployment');
const management = document.getElementById('management');
const auditProgress = document.getElementById('audit-progress');
const auditMessage = document.getElementById('audit-message');
const connectWalletButton = document.getElementById('connect-wallet');
const deployButton = document.getElementById('deploy-button');
const deploymentMessage = document.getElementById('deployment-message');
const contractAddress = document.getElementById('contract-address');
const contractStatus = document.getElementById('contract-status');
const viewContractLink = document.getElementById('view-contract');

// 1. Template Selection
const templateCards = document.querySelectorAll('[data-template]');
if (templateSelection){
  templateSelection.addEventListener('click', (event) => {
    const templateCard = event.target.closest('[data-template]');
    if (templateCard) {
      // Remove highlight from all cards
      templateCards.forEach(card => card.classList.remove('ring-4', 'ring-blue-500'));
  
      // Highlight selected template
      templateCard.classList.add('ring-4', 'ring-blue-500');
  
      const selectedTemplate = templateCard.dataset.template;
      console.log('Selected template:', selectedTemplate);
  
      // Update configuration section based on selected template (placeholder)
      updateConfigurationFields(selectedTemplate);
    }
  });
}

// Function to update configuration fields based on selected template
function updateConfigurationFields(template) {
  const tokenNameInput = document.getElementById('token-name');
  const tokenSymbolInput = document.getElementById('token-symbol');
  const tokenSupplyInput = document.getElementById('token-supply');
  const aiSuggestion = document.querySelector('#configuration .italic');

  // Reset fields
  tokenNameInput.value = "";
  tokenSymbolInput.value = "";
  tokenSupplyInput.value = "";
  aiSuggestion.textContent = "";

  // Show/hide relevant fields based on template (placeholder logic)
  if (template === 'token') {
    tokenNameInput.parentElement.classList.remove('hidden');
    tokenSymbolInput.parentElement.classList.remove('hidden');
    tokenSupplyInput.parentElement.classList.remove('hidden');
    tokenNameInput.placeholder = "Enter token name (e.g., MyToken)";
    tokenSymbolInput.placeholder = "Enter token symbol (e.g., MTK)";
    tokenSupplyInput.placeholder = "Enter token supply (e.g., 1000000)";
  } else if (template === 'nft') {
    tokenNameInput.parentElement.classList.remove('hidden');
    tokenSymbolInput.parentElement.classList.remove('hidden');
    tokenNameInput.placeholder = "Enter NFT name (e.g., MyNFT)";
    tokenSymbolInput.placeholder = "Enter NFT symbol (e.g., NFT)";
    tokenSupplyInput.parentElement.classList.add('hidden'); // Hide supply for NFTs
  } else if (template === 'defi') {
    tokenNameInput.parentElement.classList.remove('hidden');
    tokenSymbolInput.parentElement.classList.remove('hidden');
    tokenSupplyInput.parentElement.classList.remove('hidden');
    tokenNameInput.placeholder = "Enter defi name (e.g., MyDefi)";
    tokenSymbolInput.placeholder = "Enter defi symbol (e.g., MDEFI)";
    tokenSupplyInput.placeholder = "Enter defi supply (e.g., 1000)";
  } else if (template === 'dao') {
    tokenNameInput.parentElement.classList.remove('hidden');
    tokenSymbolInput.parentElement.classList.remove('hidden');
    tokenNameInput.placeholder = "Enter DAO name (e.g., MyDAO)";
    tokenSymbolInput.placeholder = "Enter DAO symbol (e.g., MDAO)";
    tokenSupplyInput.parentElement.classList.add('hidden'); // Hide supply for DAO
  } else {
    // Hide all fields if no template is selected
    tokenNameInput.parentElement.classList.add('hidden');
    tokenSymbolInput.parentElement.classList.add('hidden');
    tokenSupplyInput.parentElement.classList.add('hidden');
  }
}

// 2. Configuration
if (configuration) {
  configuration.addEventListener('input', (event) => {
    const inputField = event.target;
    const aiSuggestion = document.querySelector('#configuration .italic');

    if (inputField.id === 'token-supply') {
      const tokenSupply = inputField.value;

      // Basic placeholder suggestion
      if (tokenSupply > 1000000) {
        aiSuggestion.textContent = "AI Suggestion: Consider a lower supply for scarcity.";
      } else {
        aiSuggestion.textContent = "";
      }
    } else if (inputField.id === 'token-name') {
      const tokenName = inputField.value;

      // Basic placeholder suggestion
      if (tokenName.length > 0 && tokenName.length < 3) {
        aiSuggestion.textContent = "AI Suggestion: Token name should be at least 3 characters.";
      } else if (tokenName.length > 20) {
        aiSuggestion.textContent = "AI Suggestion: Token name is too long, consider a shorter name.";
      } else {
        aiSuggestion.textContent = "";
      }
    } else if (inputField.id === 'token-symbol') {
      const tokenSymbol = inputField.value;
      if (tokenSymbol.length > 0 && tokenSymbol.length < 2) {
        aiSuggestion.textContent = "AI Suggestion: Token symbol should be at least 2 characters.";
      } else if (tokenSymbol.length > 5) {
        aiSuggestion.textContent = "AI Suggestion: Token symbol is too long, consider a shorter symbol.";
      } else {
        aiSuggestion.textContent = "";
      }
    }
  });
}

// 3. Security Audit (Placeholder Animation)
if (securityAudit) {
  securityAudit.addEventListener('click', () => {
    auditProgress.style.width = '0%'; // Reset
    auditMessage.textContent = "Scanning for vulnerabilities..."
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 100) {
        clearInterval(interval);
        // Display mock security issues (placeholder)
        auditMessage.textContent = "Security Audit Complete. No issues found.";
        auditProgress.style.backgroundColor = 'green';
      } else {
        width += 10;
        auditProgress.style.width = width + '%';
      }
    }, 200); // Adjust animation speed here
  });
}

// 4. Deployment (Placeholder)
if (connectWalletButton){
  connectWalletButton.addEventListener('click', () => {
    // Simulate wallet connection
    connectWalletButton.textContent = 'Wallet Connected';
    connectWalletButton.disabled = true;
    deploymentMessage.textContent = 'Wallet connected successfully. Ready to deploy.';
  });
}

if (deployButton) {
  deployButton.addEventListener('click', () => {
    if (!connectWalletButton.disabled) {
      deploymentMessage.textContent = 'Please connect your wallet first.';
      return;
    }

    // Simulate deployment process
    deployButton.disabled = true;
    deployButton.textContent = 'Deploying...';
    deploymentMessage.textContent = 'Deploying contract to the Solana blockchain...';

    // Simulate a delay for deployment
    setTimeout(() => {
      deployButton.remove();
      deploymentMessage.textContent = 'Contract deployed successfully!';
      contractAddress.textContent = '5h3AJ8oqWTL8sBySt2ZXBCGqPV3jz9bLfyJAzgP3wibn'; // Valid Solana address
      contractStatus.textContent = 'Active';
      contractStatus.classList.remove('text-red-500');
      contractStatus.classList.add('text-green-500');
      management.classList.remove('hidden')

      // Show the "View Contract Dashboard" link and update href
      viewContractLink.classList.remove('hidden');
      viewContractLink.href = 'contract-management.html';
    }, 3000); // 3 seconds delay for deployment simulation
  });
}