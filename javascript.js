// Global variables
let gameData = {};
let playerData = {};
const players = ['Soy Teal', 'SOY JUB', 'SOY DJM', 'SOY RD9', 'SOY MagMan'];

// Load JSON files
async function loadGameData() {
    try {
        const response = await fetch('./gameData.json');
        if (!response.ok) {
            throw new Error(`Failed to load game data: ${response.status}`);
        }
        gameData = await response.json();
        console.log('Game data loaded successfully');
        return true;
    } catch (error) {
        console.error('Error loading game data:', error);
        // Fallback to hardcoded data if needed
        gameData = getHardcodedGameData();
        return false;
    }
}

async function loadPlayerData() {
    try {
        const response = await fetch('./playerData.json');
        if (!response.ok) {
            throw new Error(`Failed to load player data: ${response.status}`);
        }
        playerData = await response.json();
        console.log('Player data loaded successfully');
        
        // Ensure all players exist in the data
        initPlayerData();
        return true;
    } catch (error) {
        console.error('Error loading player data:', error);
        // Initialize empty player data if file doesn't exist
        initPlayerData();
        return false;
    }
}

// Initialize player data structure for any missing players
function initPlayerData() {
    players.forEach(player => {
        if (!playerData[player]) {
            playerData[player] = {
                goals: [],
                completedItems: {},
                completedGoals: {}
            };
        }
    });
}

// Save player data back to JSON (for development - in production you'd need a backend)
async function savePlayerData() {
    try {
        // Note: This won't work directly in browser due to CORS restrictions
        // You'd need a backend endpoint to save the JSON file
        console.log('Saving player data:', playerData);
        
        // For now, we'll save to localStorage as backup
        localStorage.setItem('osrs_player_data', JSON.stringify(playerData));
        
        // In a real implementation, you'd POST to your server:
        /*
        const response = await fetch('./savePlayerData.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerData)
        });
        */
        
        return true;
    } catch (error) {
        console.error('Error saving player data:', error);
        return false;
    }
}

// Load data from localStorage as fallback
function loadFromLocalStorage() {
    try {
        const stored = localStorage.getItem('osrs_player_data');
        if (stored) {
            const parsed = JSON.parse(stored);
            // Merge with existing playerData
            Object.keys(parsed).forEach(player => {
                if (players.includes(player)) {
                    playerData[player] = parsed[player];
                }
            });
            return true;
        }
    } catch (error) {
        console.error('Error loading from localStorage:', error);
    }
    return false;
}

// Import JSON file functionality
async function handleJSONFile(file) {
    const statusDiv = document.getElementById('jsonStatus');
    const fileNameSpan = document.getElementById('jsonFileName');
    
    try {
        fileNameSpan.textContent = file.name;
        statusDiv.textContent = 'Processing JSON file...';
        statusDiv.className = '';
        
        const text = await readFileAsText(file);
        const importedData = JSON.parse(text);
        
        // Validate and import the data
        if (importedData && typeof importedData === 'object') {
            // Check if it's game data or player data
            if (importedData.f2pQuests || importedData.membersQuests) {
                // It's game data
                gameData = importedData;
                populateAllSections();
                statusDiv.textContent = `✅ Successfully imported game data from ${file.name}`;
            } else {
                // It's player data
                Object.keys(importedData).forEach(player => {
                    if (players.includes(player)) {
                        playerData[player] = {
                            goals: importedData[player].goals || [],
                            completedItems: importedData[player].completedItems || {},
                            completedGoals: importedData[player].completedGoals || {}
                        };
                    }
                });
                populateAllSections();
                updateAllProgress();
                statusDiv.textContent = `✅ Successfully imported player data from ${file.name}`;
            }
            
            savePlayerData();
        } else {
            throw new Error('Invalid JSON structure');
        }
    } catch (error) {
        console.error('JSON Import Error:', error);
        statusDiv.textContent = `❌ Error importing JSON: ${error.message}`;
        statusDiv.className = 'error';
        fileNameSpan.textContent = '';
    }
}

// Export current player data as JSON
function exportPlayerData() {
    const dataStr = JSON.stringify(playerData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'osrs_player_data.json';
    link.click();
}

// Export current game data as JSON
function exportGameData() {
    const dataStr = JSON.stringify(gameData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'osrs_game_data.json';
    link.click();
}

// Fallback hardcoded data in case JSON loading fails
function getHardcodedGameData() {
    return {
        f2pQuests: [
            { name: "Cook's Assistant", icon: "🍳" },
            { name: "Demon Slayer", icon: "👹" },
            { name: "The Restless Ghost", icon: "👻" }
            // ... add more as fallback
        ],
        // ... other sections
    };
}

// Updated initialization function
async function init() {
    // Load game data first
    await loadGameData();
    
    // Load player data
    const playerDataLoaded = await loadPlayerData();
    
    // If loading from files failed, try localStorage
    if (!playerDataLoaded) {
        loadFromLocalStorage();
    }
    
    // Initialize UI
    populateAllSections();
    updateAllProgress();
    addGoalInputListeners();
    addJSONInputListener();
}

// Add JSON file input listener
function addJSONInputListener() {
    const jsonInput = document.getElementById('jsonFileInput');
    if (jsonInput) {
        jsonInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file && file.type === 'application/json') {
                handleJSONFile(file);
            } else if (file) {
                const statusDiv = document.getElementById('jsonStatus');
                statusDiv.textContent = '❌ Please select a valid JSON file';
                statusDiv.className = 'error';
            }
        });
    }
}

// Utility function to read file as text
function readFileAsText(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = (e) => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
}
// Main tab switching
function switchMainTab(tabName) {
    document.querySelectorAll('.main-tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.main-tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Player tab switching within sections
function switchPlayer(sectionId, player) {
    // Find all player tabs for this section and update active state
    const allPlayerTabs = document.querySelectorAll(`[onclick*="switchPlayer('${sectionId}'"]`);
    allPlayerTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Find all player content divs for this section and update active state
    players.forEach(p => {
        const contentDiv = document.getElementById(`${sectionId}_${p}`);
        if (contentDiv) {
            contentDiv.classList.remove('active');
        }
    });
    
    // Activate the selected player's content
    const activeContent = document.getElementById(`${sectionId}_${player}`);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    updateProgress(sectionId);
}

// Goals management
function addGoal(player) {
    const input = document.getElementById(`newGoal_${player}`);
    const goalText = input.value.trim();
    
    if (goalText) {
        playerData[player].goals.push(goalText);
        input.value = '';
        saveData();
        updateGoalsDisplay(player);
        updateGoalsProgress(player);
    }
}

function toggleGoal(player, index) {
    const goalKey = `goal_${index}`;
    playerData[player].completedGoals[goalKey] = 
        !playerData[player].completedGoals[goalKey];
    
    saveData();
    updateGoalsDisplay(player);
    updateGoalsProgress(player);
}

function deleteGoal(player, index) {
    playerData[player].goals.splice(index, 1);
    saveData();
    updateGoalsDisplay(player);
    updateGoalsProgress(player);
}
