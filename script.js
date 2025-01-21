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

// Function to generate a random Solana address (for demo purposes)
function generateRandomSolanaAddress() {
    const characters = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let address = '';
    for (let i = 0; i < 44; i++) {
        address += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return address;
}

// Function to generate a random token symbol (for demo purposes)
function generateRandomTokenSymbol() {
    const symbols = ['TOK', 'COIN', 'SOL', 'ABC', 'XYZ', 'DEF', 'GHI', 'JKL']; // Add more as needed
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to generate a random amount (for demo purposes)
function generateRandomAmount() {
    return Math.floor(Math.random() * 1000) + 1; // Random number between 1 and 1000
}

// Function to simulate a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- Demo Interactions (for smart-contract-platform.html) ---
let isDemoInitialized = false;

// Initialize demo interactions only once
if (!isDemoInitialized) {
    initializeDemo();
    isDemoInitialized = true;
}

function initializeDemo() {
    // Get elements (assuming these IDs exist on your smart-contract-platform.html)
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
    if (templateSelection) {
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
    if (connectWalletButton) {
        connectWalletButton.addEventListener('click', () => {
            // Simulate wallet connection
            connectWalletButton.textContent = 'Wallet Connected';
            connectWalletButton.disabled = true;
            deploymentMessage.textContent = 'Wallet connected successfully. Ready to deploy.';
        });
    }

    if (deployButton) {
        deployButton.addEventListener('click', async () => {
            if (!connectWalletButton.disabled) {
                deploymentMessage.textContent = 'Please connect your wallet first.';
                return;
            }

            // Simulate deployment process
            deployButton.disabled = true;
            deployButton.textContent = 'Deploying...';
            deploymentMessage.textContent = 'Deploying contract to the Solana blockchain...';

            // Simulate a delay for deployment
            await delay(3000); // Wait for 3 seconds

            deployButton.remove();
            deploymentMessage.textContent = 'Contract deployed successfully!';

            // Generate a random Solana address for the demo
            const generatedAddress = generateRandomSolanaAddress();
            contractAddress.textContent = generatedAddress;

            contractStatus.textContent = 'Active';
            contractStatus.classList.remove('text-red-500');
            contractStatus.classList.add('text-green-500');
            management.classList.remove('hidden')

            // Show the "View Contract Dashboard" link and update href
            viewContractLink.classList.remove('hidden');
            viewContractLink.href = 'contract-management.html';
        });
    }
}

// --- Contract Management Page Interactions ---

// Placeholder Data for Contract Management (replace with real data later)
const contractAddressElement = document.getElementById('contract-address');
const contractStatusElement = document.getElementById('contract-status');
const totalTransactionsElement = document.getElementById('total-transactions');
const avgGasPriceElement = document.getElementById('avg-gas-price');
const uniqueInteractorsElement = document.getElementById('unique-interactors');
const solanaPriceElement = document.getElementById('solana-price')

if (contractAddressElement) {
  contractAddressElement.textContent =
    "5h3AJ8oqWTL8sBySt2ZXBCGqPV3jz9bLfyJAzgP3wibn"; // Valid Solana address
}
if (contractStatusElement) {
  contractStatusElement.textContent = "Active";
  contractStatusElement.classList.add("text-green-500");
}

// Chart.js for Transaction Volume Tracking
const transactionCanvas = document.getElementById('transactionChart');
if (transactionCanvas) {
  const transactionChart = new Chart(transactionCanvas, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Transaction Volume",
          data: [120, 150, 80, 200, 160, 250, 300], // Placeholder data
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
          tension: 0.4,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        },
      },
    },
  });

  // Function to add new data to the chart
  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

  // Simulate adding new data to the chart every 5 seconds
  setInterval(() => {
    const newDataPoint = Math.floor(Math.random() * 100) + 50; // Generate random data between 50 and 150
    const newLabel = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    addData(transactionChart, newLabel, newDataPoint);

    // Keep only the last 7 data points
    if (transactionChart.data.labels.length > 7) {
      transactionChart.data.labels.shift();
      transactionChart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
      });
    }

    transactionChart.update();
  }, 5000); // 5 seconds interval

  // Update the following metrics with simulated data
  if (totalTransactionsElement) {
    totalTransactionsElement.textContent = "1,234";
  }
  if (avgGasPriceElement) {
    avgGasPriceElement.textContent = "50 Gwei";
  }
  if (uniqueInteractorsElement) {
    uniqueInteractorsElement.textContent = "456";
  }
}

// Function to simulate contract interactions
function simulateContractInteraction() {
  const interactionsList = document.getElementById("interactions-list");

  // Check if interactionsList exists before proceeding
  if (!interactionsList) {
    console.error("Element with ID 'interactions-list' not found.");
    return; // Exit the function if the element does not exist
  }

  const interactions = [
    {
      type: "Transfer",
      from: generateRandomSolanaAddress(),
      to: generateRandomSolanaAddress(),
      amount: `${generateRandomAmount()} ${generateRandomTokenSymbol()}`,
    },
    {
      type: "Mint",
      to: generateRandomSolanaAddress(),
      amount: `${generateRandomAmount()} ${generateRandomTokenSymbol()}`,
    },
    {
      type: "Transfer",
      from: generateRandomSolanaAddress(),
      to: generateRandomSolanaAddress(),
      amount: `${generateRandomAmount()} ${generateRandomTokenSymbol()}`,
    },
    // Add more interaction types as needed
  ];

  const newInteraction = interactions[Math.floor(Math.random() * interactions.length)];
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <div class="bg-gray-800 p-4 rounded-lg mb-2 flex items-center justify-between">
      <div>
        <p class="font-semibold">Interaction: <span class="font-mono">${newInteraction.type}</span></p>
        ${
          newInteraction.from
            ? `<p class="text-sm">From: <span class="font-mono">${newInteraction.from}</span></p>`
            : ""
        }
        <p class="text-sm">To: <span class="font-mono">${newInteraction.to}</span></p>
        <p class="text-sm">Amount: <span class="font-mono">${newInteraction.amount}</span></p>
      </div>
      <span class="text-xs text-gray-500">Just now</span>
    </div>
  `;

  interactionsList.prepend(listItem); // Add to the top of the list

  // Keep only the last 5 interactions
  if (interactionsList.children.length > 5) {
    interactionsList.lastChild.remove();
  }
}

// Add a new simulated interaction every 10 seconds
setInterval(simulateContractInteraction, 10000);

// Placeholder data for bribe updates (replace with real data when available)
const bribeUpdates = [
  { platform: "Platform X", amount: "1.2 SOL", time: "2 mins ago" },
  { platform: "Platform Y", amount: "0.8 SOL", time: "5 mins ago" },
  { platform: "Platform Z", amount: "2.5 SOL", time: "10 mins ago" },
  { platform: "Platform A", amount: "0.5 SOL", time: "15 mins ago" },
  { platform: "Platform B", amount: "1.8 SOL", time: "20 mins ago" },
];

let currentBribeIndex = 0;

function updateBribeUpdates() {
  const bribeUpdatesDiv = document.getElementById("bribe-updates");

  // Check if bribeUpdatesDiv exists before proceeding
  if (!bribeUpdatesDiv) {
    console.error("Element with ID 'bribe-updates' not found.");
    return; // Exit the function if the element does not exist
  }

  const newBribe = bribeUpdates[currentBribeIndex];

  const bribeItem = document.createElement("div");
  bribeItem.className =
    "flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-2";
  bribeItem.innerHTML = `
    <p><span class="font-semibold">${newBribe.platform}</span>: ${newBribe.amount}</p>
    <span class="text-xs text-gray-500">${newBribe.time}</span>
  `;

  bribeUpdatesDiv.prepend(bribeItem); // Add to the top

  // Keep only the last 5 updates
  if (bribeUpdatesDiv.children.length > 5) {
    bribeUpdatesDiv.lastChild.remove();
  }

  currentBribeIndex = (currentBribeIndex + 1) % bribeUpdates.length;
}

// Initial update and set interval for updates
if (document.getElementById("bribe-updates")) {
  updateBribeUpdates();
  setInterval(updateBribeUpdates, 5000); // Update every 5 seconds
}

// Fetch and display the current Solana price
async function fetchSolanaPrice() {
  const solanaPriceElement = document.getElementById("solana-price");
  if (solanaPriceElement) {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
      );
      const data = await response.json();
      const solanaPrice = data.solana.usd;
      solanaPriceElement.textContent = `Current Solana Price: $${solanaPrice}`;
    } catch (error) {
      console.error("Error fetching Solana price:", error);
      solanaPriceElement.textContent = "Failed to fetch Solana price";
    }
  }
}

fetchSolanaPrice();