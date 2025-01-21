// Utility functions for generating random data
function generateRandomSolanaAddress() {
    const characters = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let address = '';
    for (let i = 0; i < 44; i++) {
        address += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return address;
}

function generateRandomTokenSymbol() {
    const symbols = ['TOK', 'COIN', 'SOL', 'ABC', 'XYZ', 'DEF', 'GHI', 'JKL'];
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateRandomAmount() {
    return Math.floor(Math.random() * 1000) + 1; // Random number between 1 and 1000
}

// Function to update contract details
function updateContractDetails() {
    const contractAddressElement = document.getElementById('contract-address');
    const contractStatusElement = document.getElementById('contract-status');

    contractAddressElement.textContent = generateRandomSolanaAddress();
    contractStatusElement.textContent = 'Active';

    setInterval(() => {
        contractStatusElement.textContent = Math.random() > 0.8 ? 'Inactive' : 'Active';
        contractStatusElement.className = contractStatusElement.textContent === 'Active' ? 'text-green-500' : 'text-red-500';
    }, 30000);
}

// Function to update live bundles
function updateLiveBundles() {
    const liveBundlesElement = document.getElementById('live-bundles');

    setInterval(() => {
        const newBundle = {
            id: Math.floor(Math.random() * 1000),
            transactions: Math.floor(Math.random() * 10) + 1,
        };

        const bundles = Array.from(liveBundlesElement.children).map(li => {
            const [id, transactions] = li.textContent.match(/\d+/g);
            return { id: parseInt(id), transactions: parseInt(transactions) };
        });

        const updatedBundles = [newBundle, ...bundles].slice(0, 5);

        liveBundlesElement.innerHTML = updatedBundles.map(bundle => `
            <li>Bundle #${bundle.id}: ${bundle.transactions} Transactions</li>
        `).join('');
    }, 10000);
}

// Function to update holdings
function updateHoldings() {
    const devHoldingsElement = document.getElementById('dev-holdings');
    const insiderHoldingsElement = document.getElementById('insider-holdings');
    const holdersElement = document.getElementById('holders');

    let devHoldings = 10;
    let insiderHoldings = 5;
    let holders = 1234;

    setInterval(() => {
        devHoldings = Math.max(0, devHoldings + (Math.random() - 0.5) * 2);
        insiderHoldings = Math.max(0, insiderHoldings + (Math.random() - 0.5) * 1);
        holders = Math.max(0, holders + Math.floor((Math.random() - 0.5) * 10));

        devHoldingsElement.textContent = devHoldings.toFixed(2) + '%';
        insiderHoldingsElement.textContent = insiderHoldings.toFixed(2) + '%';
        holdersElement.textContent = holders;
    }, 20000);
}

// Function to update volume
function updateVolume() {
    const volumeElement = document.getElementById('volume');
    let volume = 500000;

    setInterval(() => {
        volume = Math.max(0, volume + (Math.random() - 0.5) * 50000);
        volumeElement.textContent = '$' + volume.toFixed(0);
    }, 15000);
}

// Function to update snipers
function updateSnipers() {
    const snipersElement = document.getElementById('snipers');

    setInterval(() => {
        const newSniper = {
            address: generateRandomSolanaAddress(),
            amount: (Math.random() * 100).toFixed(2),
        };

        const snipers = Array.from(snipersElement.children).map(li => {
            const [address, amount] = li.textContent.split(':');
            return { address, amount: parseFloat(amount) };
        });

        const updatedSnipers = [newSniper, ...snipers].slice(0, 3); // Keep only last 3 snipers

        snipersElement.innerHTML = updatedSnipers.map(sniper => `
            <li>${sniper.address}: ${sniper.amount} SOL</li>
        `).join('');
    }, 25000);
}

// Function to update sniper actions
function updateSniperActions() {
    const sniperActionsElement = document.getElementById('sniper-actions');

    setInterval(() => {
        const actionType = Math.random() > 0.5 ? 'sell' : 'transfer';
        const newAction = {
            address: generateRandomSolanaAddress(),
            amount: Math.floor(Math.random() * 50000),
            type: actionType,
            to: actionType === 'transfer' ? generateRandomSolanaAddress() : null,
        };

        const actions = Array.from(sniperActionsElement.children).map(li => {
            const parts = li.textContent.split(':');
            const address = parts[0];
            const amountAndType = parts[1].trim().split(' ');
            const amount = parseFloat(amountAndType[0]);
            const type = amountAndType[1];
            const to = type === 'transfer' && parts.length > 2 ? parts[2].split('->')[1].trim() : null;
            return { address, amount, type, to };
        });

        const updatedActions = [newAction, ...actions].slice(0, 5); // Keep only last 5 actions

        sniperActionsElement.innerHTML = updatedActions.map(action => `
            <li>${action.address}: ${action.amount} Tokens (${action.type})${action.to ? ' -> ' + action.to : ''}</li>
        `).join('');
    }, 15000);
}

// Function to simulate contract interactions in SOL
function simulateContractInteraction() {
    const interactionsList = document.getElementById("interactions-list");
  
    setInterval(() => {
        const newInteraction = {
            type: Math.random() > 0.5 ? "Buy" : "Sell",
            from: generateRandomSolanaAddress(),
            to: generateRandomSolanaAddress(),
            amount: (Math.random() * 5).toFixed(2) // Simulate amounts up to 5 SOL
        };
  
        const listItem = document.createElement("li");
        listItem.className = "bg-gray-700 p-4 rounded-lg mb-2";
        listItem.innerHTML = `
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-semibold text-gray-300">Type: <span class="font-mono text-blue-400">${newInteraction.type}</span></p>
                    <p class="text-sm text-gray-400">From: <span class="font-mono">${newInteraction.from}</span></p>
                    <p class="text-sm text-gray-400">To: <span class="font-mono">${newInteraction.to}</span></p>
                    <p class="text-sm text-gray-400">Amount: <span class="font-mono text-green-400">${newInteraction.amount} SOL</span></p>
                </div>
                <span class="text-xs text-gray-500">Just now</span>
            </div>
        `;
  
        interactionsList.prepend(listItem);
  
        if (interactionsList.children.length > 5) {
            interactionsList.lastChild.remove();
        }
    }, 10000);
  }

// Initialize the chart
function initializeChart() {
    const transactionCanvas = document.getElementById('transactionChart');
    if (!transactionCanvas) return;

    const transactionChart = new Chart(transactionCanvas, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Transaction Volume',
                data: [120, 150, 80, 200, 160, 250, 300],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                tension: 0.4,
            }],
        },
        options: {
            scales: {
                y: { beginAtZero: true },
            },
            plugins: {
                legend: { labels: { color: 'white' } },
            },
            layout: {
                padding: { left: 10, right: 10, top: 10, bottom: 10 },
            },
        },
    });

    setInterval(() => {
        const newDataPoint = Math.floor(Math.random() * 100) + 50;
        const newLabel = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        transactionChart.data.labels.push(newLabel);
        transactionChart.data.datasets[0].data.push(newDataPoint);

        if (transactionChart.data.labels.length > 7) {
            transactionChart.data.labels.shift();
            transactionChart.data.datasets[0].data.shift();
        }

        transactionChart.update();
    }, 5000);
}

// Placeholder for AI function simulations
const namegenResult = document.getElementById('namegen-result');
const logoGenResult = document.getElementById('logo-gen-result');
const tokenomicsResult = document.getElementById('tokenomics-result');
const vulnerabilityScanResult = document.getElementById('vulnerability-scan-result');
const rugPullDetectResult = document.getElementById('rug-pull-detect-result');
const trendIdentifyResult = document.getElementById('trend-identify-result');
const sentimentAnalyzeResult = document.getElementById('sentiment-analyze-result');
const pricePredictResult = document.getElementById('price-predict-result');
const socialMediaManageResult = document.getElementById('social-media-manage-result');

// Placeholder for AI function simulations
document.getElementById('namegen-button').addEventListener('click', () => {
    namegenResult.textContent = 'ExampleCoin (ECO) - (Demo)';
});

document.getElementById('logo-gen-button').addEventListener('click', () => {
    logoGenResult.innerHTML = '<img src="placeholder-logo.png" alt="Generated Logo" class="w-32 h-32">';
});

document.getElementById('tokenomics-button').addEventListener('click', () => {
    tokenomicsResult.textContent = 'Total Supply: 1,000,000,000 ECO, Initial Burn: 20%, Tax: 5% on each transaction - (Demo)';
});

document.getElementById('vulnerability-scan-button').addEventListener('click', () => {
    vulnerabilityScanResult.textContent = 'No vulnerabilities found (Demo).';
});

document.getElementById('rug-pull-detect-button').addEventListener('click', () => {
    rugPullDetectResult.textContent = 'Low risk of rug pull (Demo).';
});

document.getElementById('trend-identify-button').addEventListener('click', () => {
    trendIdentifyResult.textContent = 'Current trends: Community-driven, NFTs, Metaverse - (Demo)';
});

document.getElementById('sentiment-analyze-button').addEventListener('click', () => {
    sentimentAnalyzeResult.textContent = 'Sentiment: Positive (Demo)';
});

document.getElementById('price-predict-button').addEventListener('click', () => {
    pricePredictResult.textContent = 'Predicted price in 24h: $0.0012 (Demo)';
});

document.getElementById('social-media-manage-button').addEventListener('click', () => {
    socialMediaManageResult.textContent = 'Managing Twitter and Telegram... (Demo)';
});

// DexScreener Update (simulated)
const dexscreenerUpdateInput = document.getElementById('dexscreener-update-input');
const updateDexscreenerBtn = document.getElementById('update-dexscreener-btn');
const dexscreenerUpdateResult = document.getElementById('dexscreener-update-result');

if (updateDexscreenerBtn) {
    updateDexscreenerBtn.addEventListener('click', () => {
        const newLink = dexscreenerUpdateInput.value;
        if (newLink) {
            dexscreenerUpdateResult.textContent = `DexScreener link updated to: ${newLink}`;
            dexscreenerUpdateInput.value = ''; // Clear input
        } else {
            dexscreenerUpdateResult.textContent = 'Please enter a DexScreener link.';
        }
    });
}

// Call the functions to initialize the dynamic elements
document.addEventListener('DOMContentLoaded', () => {
    updateContractDetails();
    updateLiveBundles();
    updateHoldings();
    updateVolume();
    updateSnipers();
    updateSniperActions();
    simulateContractInteraction();
    initializeChart();
});