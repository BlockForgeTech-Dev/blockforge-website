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
    const symbols = ['TOK', 'COIN', 'SOL', 'ABC', 'XYZ', 'DEF', 'GHI', 'JKL']; 
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Function to generate a random amount (for demo purposes)
function generateRandomAmount() {
    return Math.floor(Math.random() * 1000) + 1; 
}

// Function to simulate a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// --- Contract Management Page Interactions ---
document.addEventListener('DOMContentLoaded', () => {
    // Placeholder Data for Contract Management (replace with real data later)
    const contractAddressElement = document.getElementById('contract-address');
    const contractStatusElement = document.getElementById('contract-status');
    const totalTransactionsElement = document.getElementById('total-transactions');
    const avgGasPriceElement = document.getElementById('avg-gas-price');
    const uniqueInteractorsElement = document.getElementById('unique-interactors');
    const solanaPriceElement = document.getElementById('solana-price');
  
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
  
      const newInteraction =
        interactions[Math.floor(Math.random() * interactions.length)];
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div class="bg-gray-800 p-4 rounded-lg mb-2 flex items-center justify-between">
          <div>
            <p class="font-semibold">Interaction: <span class="font-mono">${newInteraction.type
        }</span></p>
            ${newInteraction.from
          ? `<p class="text-sm">From: <span class="font-mono">${newInteraction.from
          }</span></p>`
          : ""
        }
            <p class="text-sm">To: <span class="font-mono">${newInteraction.to
        }</span></p>
            <p class="text-sm">Amount: <span class="font-mono">${newInteraction.amount
        }</span></p>
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
      const solanaPriceElement = document.getElementById('solana-price');
      if (solanaPriceElement) {
        try {
          const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
          const data = await response.json();
          const solanaPrice = data.solana.usd;
          solanaPriceElement.textContent = `Current Solana Price: $${solanaPrice}`;
        } catch (error) {
          console.error('Error fetching Solana price:', error);
          solanaPriceElement.textContent = 'Failed to fetch Solana price';
        }
      }
    }
    // Update Solana price every 60 seconds
    setInterval(fetchSolanaPrice, 60000);
  
    // Initial fetch on page load
    fetchSolanaPrice();
  });