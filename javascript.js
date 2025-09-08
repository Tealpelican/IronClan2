
// Fixed team of 5 players
const players = ['Soy Teal', 'SOY JUB', 'SOY RD9', 'SOY DJM', 'SOY MagMan'];

// Data structure for all trackable items with icons
const gameData = {
    f2pQuests: [
        { name: 'Cook\'s Assistant', icon: '🍳' },
        { name: 'Demon Slayer', icon: '👹' },
        { name: 'The Restless Ghost', icon: '👻' },
        { name: 'Romeo & Juliet', icon: '💕' },
        { name: 'Sheep Shearer', icon: '🐑' },
        { name: 'Shield of Arrav', icon: '🛡️' },
        { name: 'Ernest the Chicken', icon: '🐔' },
        { name: 'Vampire Slayer', icon: '🧛' },
        { name: 'Imp Catcher', icon: '👹' },
        { name: 'Prince Ali Rescue', icon: '👑' },
        { name: 'Doric\'s Quest', icon: '⛏️' },
        { name: 'Black Knights\' Fortress', icon: '⚫' },
        { name: 'Witch\'s Potion', icon: '🧪' },
        { name: 'The Knight\'s Sword', icon: '⚔️' },
        { name: 'Goblin Diplomacy', icon: '👺' },
        { name: 'Pirates Treasure', icon: '💰' },
        { name: 'Dragon Slayer I', icon: '🐲' },
        { name: 'Rune Mysteries', icon: '🔮' },
        { name: 'Misthalin Mystery', icon: '🔍' }
    ],
    membersQuests: [
        { name: 'Waterfall Quest', icon: '🌊' },
        { name: 'Tree Gnome Village', icon: '🌳' },
        { name: 'The Grand Tree', icon: '🌲' },
        { name: 'Monkey Madness I', icon: '🐒' },
        { name: 'Lost City', icon: '🏙️' },
        { name: 'Heroes\' Quest', icon: '🦸' },
        { name: 'Druidic Ritual', icon: '🌿' },
        { name: 'Merlin\'s Crystal', icon: '💎' },
        { name: 'Holy Grail', icon: '🏆' },
        { name: 'Legends\' Quest', icon: '📜' },
        { name: 'Underground Pass', icon: '🕳️' },
        { name: 'Biohazard', icon: '☣️' },
        { name: 'Plague City', icon: '🦠' },
        { name: 'Recipe for Disaster', icon: '🍖' },
        { name: 'Desert Treasure I', icon: '💍' },
        { name: 'Lunar Diplomacy', icon: '🌙' },
        { name: 'Dream Mentor', icon: '😴' },
        { name: 'Swan Song', icon: '🦢' },
        { name: 'Mourning\'s End Part II', icon: '⚰️' },
        { name: 'Monkey Madness II', icon: '🦍' },
        { name: 'Dragon Slayer II', icon: '🐉' },
        { name: 'Song of the Elves', icon: '🧝' },
        { name: 'Sins of the Father', icon: '🩸' }
    ],
    gwdItems: [
        { name: 'Armadyl Helmet', icon: '🪶' },
        { name: 'Armadyl Chestplate', icon: '🪶' },
        { name: 'Armadyl Chainskirt', icon: '🪶' },
        { name: 'Armadyl Crossbow', icon: '🏹' },
        { name: 'Bandos Chestplate', icon: '💪' },
        { name: 'Bandos Tassets', icon: '💪' },
        { name: 'Bandos Boots', icon: '👢' },
        { name: 'Bandos Godsword', icon: '⚔️' },
        { name: 'Saradomin Sword', icon: '🗡️' },
        { name: 'Saradomin\'s Light', icon: '💡' },
        { name: 'Armadyl Godsword', icon: '⚔️' },
        { name: 'Zamorak Godsword', icon: '⚔️' },
        { name: 'Saradomin Godsword', icon: '⚔️' },
        { name: 'Staff of the Dead', icon: '🪄' },
        { name: 'Zamorakian Spear', icon: '🔱' },
        { name: 'Godsword Shard 1', icon: '⚡' },
        { name: 'Godsword Shard 2', icon: '⚡' },
        { name: 'Godsword Shard 3', icon: '⚡' },
        { name: 'Godsword Hilt (Armadyl)', icon: '⚡' },
        { name: 'Pet General Graardor', icon: '🐻' }
    ],
    coxItems: [
        { name: 'Dexterous Prayer Scroll', icon: '📜' },
        { name: 'Arcane Prayer Scroll', icon: '📜' },
        { name: 'Dragon Hunter Crossbow', icon: '🏹' },
        { name: 'Dragon Claws', icon: '🦅' },
        { name: 'Elder Maul', icon: '🔨' },
        { name: 'Kodai Insignia', icon: '🔮' },
        { name: 'Twisted Bow', icon: '🏹' },
        { name: 'Ancestral Hat', icon: '🧙' },
        { name: 'Ancestral Robe Top', icon: '🧙' },
        { name: 'Ancestral Robe Bottom', icon: '🧙' },
        { name: 'Twisted Buckler', icon: '🛡️' },
        { name: 'Olmlet Pet', icon: '🦎' },
        { name: 'Dark Relic', icon: '⚫' },
        { name: 'Metamorphic Dust', icon: '✨' }
    ],
    tobItems: [
        { name: 'Avernic Defender Hilt', icon: '🛡️' },
        { name: 'Ghrazi Rapier', icon: '⚔️' },
        { name: 'Sanguinesti Staff', icon: '🩸' },
        { name: 'Justiciar Faceguard', icon: '⚖️' },
        { name: 'Justiciar Chestguard', icon: '⚖️' },
        { name: 'Justiciar Legguards', icon: '⚖️' },
        { name: 'Scythe of Vitur', icon: '💀' },
        { name: 'Lil\' Zik Pet', icon: '🕷️' },
        { name: 'Sanguine Dust', icon: '🩸' },
        { name: 'Holy Ornament Kit', icon: '✨' },
        { name: 'Sanguine Ornament Kit', icon: '🩸' },
        { name: 'Lil\' Nibbler Pet', icon: '🐭' }
    ],
    baItems: [
        { name: 'Fighter Hat', icon: '🪖' },
        { name: 'Fighter Torso', icon: '💪' },
        { name: 'Ranger Hat', icon: '🏹' },
        { name: 'Ranger Boots', icon: '👢' },
        { name: 'Runner Hat', icon: '🏃' },
        { name: 'Runner Boots', icon: '👟' },
        { name: 'Healer Hat', icon: '❤️' },
        { name: 'Healer Boots', icon: '👟' },
        { name: 'Penance Gloves', icon: '🧤' },
        { name: 'Penance Skirt', icon: '👗' },
        { name: 'Pet Penance Queen', icon: '👸' }
    ],
    pcItems: [
        { name: 'Void Knight Top', icon: '⚫' },
        { name: 'Void Knight Robe', icon: '⚫' },
        { name: 'Void Knight Gloves', icon: '🧤' },
        { name: 'Void Knight Mace', icon: '🔨' },
        { name: 'Elite Void Top', icon: '⚫' },
        { name: 'Elite Void Robe', icon: '⚫' },
        { name: 'Void Ranger Helm', icon: '🏹' },
        { name: 'Void Melee Helm', icon: '⚔️' },
        { name: 'Void Mage Helm', icon: '🪄' }
    ],
    cwItems: [
        { name: 'Castle Wars Decorative Sword', icon: '⚔️' },
        { name: 'Castle Wars Decorative Shield', icon: '🛡️' },
        { name: 'Castle Wars Decorative Armour', icon: '🏰' },
        { name: 'Saradomin Banner', icon: '🏳️' },
        { name: 'Zamorak Banner', icon: '🏴' },
        { name: 'Castle Wars Hood', icon: '🧙' },
        { name: 'Castle Wars Cloak', icon: '🧥' }
    ],
    combatAchievements: [
        { name: 'JAD? More like, JAD? Completed It', icon: '🔥' },
        { name: 'Perfect Zuk', icon: '🌋' },
        { name: 'Grandmaster Combat', icon: '👑' },
        { name: 'Combat Achievements Elite', icon: '⭐' },
        { name: 'Combat Achievements Master', icon: '🏆' },
        { name: 'Inferno Completed', icon: '🔥' },
        { name: 'Fight Caves Completed', icon: '🌋' },
        { name: 'Corporeal Beast Solo', icon: '👻' },
        { name: 'Chambers of Xeric Solo', icon: '🏛️' }
    ],
    diaryTasks: [
        { name: 'Ardougne Easy Diary', icon: '📖' },
        { name: 'Ardougne Medium Diary', icon: '📗' },
        { name: 'Ardougne Hard Diary', icon: '📘' },
        { name: 'Ardougne Elite Diary', icon: '📙' },
        { name: 'Desert Easy Diary', icon: '🏜️' },
        { name: 'Desert Medium Diary', icon: '🏜️' },
        { name: 'Desert Hard Diary', icon: '🏜️' },
        { name: 'Desert Elite Diary', icon: '🏜️' },
        { name: 'Falador Easy Diary', icon: '🏰' },
        { name: 'Falador Medium Diary', icon: '🏰' },
        { name: 'Falador Hard Diary', icon: '🏰' },
        { name: 'Falador Elite Diary', icon: '🏰' },
        { name: 'Fremennik Easy Diary', icon: '❄️' },
        { name: 'Fremennik Medium Diary', icon: '❄️' },
        { name: 'Fremennik Hard Diary', icon: '❄️' },
        { name: 'Fremennik Elite Diary', icon: '❄️' },
        { name: 'Kandarin Easy Diary', icon: '🌲' },
        { name: 'Kandarin Medium Diary', icon: '🌲' },
        { name: 'Kandarin Hard Diary', icon: '🌲' },
        { name: 'Kandarin Elite Diary', icon: '🌲' }
    ]
};

// Player data storage
let playerData = {};

fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  });

// Initialize player data
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

function updateGoalsDisplay(player) {
    const goalsList = document.getElementById(`goalsList_${player}`);
    goalsList.innerHTML = '';
    
    playerData[player].goals.forEach((goal, index) => {
        const goalItem = document.createElement('div');
        goalItem.className = 'goal-item';
        
        const goalKey = `goal_${index}`;
        const isCompleted = playerData[player].completedGoals[goalKey] || false;
        
        if (isCompleted) {
            goalItem.classList.add('completed');
        }
        
        goalItem.innerHTML = `
            <span>🎯 ${goal}</span>
            <div>
                <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                       onchange="toggleGoal('${player}', ${index})">
                <button class="delete-btn" onclick="deleteGoal('${player}', ${index})">Delete</button>
            </div>
        `;
        
        goalsList.appendChild(goalItem);
    });
}

function updateGoalsProgress(player) {
    let completed = 0;
    playerData[player].goals.forEach((goal, index) => {
        const goalKey = `goal_${index}`;
        if (playerData[player].completedGoals[goalKey]) {
            completed++;
        }
    });
    
    const total = playerData[player].goals.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    const progressBar = document.getElementById(`goalsProgress_${player}`);
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${percentage}% (${completed}/${total})`;
}

// Item management
function populateSection(sectionId, items, player) {
    const container = document.getElementById(`${sectionId}_${player}`);
    const itemsGrid = document.createElement('div');
    itemsGrid.className = 'items-grid';
    container.innerHTML = '';
    
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        
        const itemKey = `${sectionId}_${item.name}`;
        const isCompleted = playerData[player].completedItems[itemKey] || false;
        
        if (isCompleted) {
            itemDiv.classList.add('completed');
        }
        
        itemDiv.innerHTML = `
            <div class="item-content">
                <span class="item-icon">${item.icon}</span>
                <span>${item.name}</span>
            </div>
            <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                   onchange="toggleItem('${sectionId}', '${item.name}', '${player}')">
        `;
        
        itemsGrid.appendChild(itemDiv);
    });
    
    container.appendChild(itemsGrid);
}

function toggleItem(sectionId, itemName, player) {
    const itemKey = `${sectionId}_${itemName}`;
    playerData[player].completedItems[itemKey] = 
        !playerData[player].completedItems[itemKey];
    
    saveData();
    populateSection(sectionId, gameData[sectionId], player);
    updateProgress(sectionId);
}

function populateAllSections() {
    Object.keys(gameData).forEach(sectionId => {
        players.forEach(player => {
            populateSection(sectionId, gameData[sectionId], player);
        });
    });
}

// Progress tracking
function updateProgress(sectionId) {
    const items = gameData[sectionId];
    if (!items) return;
    
    // Get currently active player for this section
    const activePlayerContent = document.querySelector(`[id^="${sectionId}_"].player-content.active`);
    if (!activePlayerContent) return;
    
    const activePlayer = activePlayerContent.id.split('_')[1];
    
    let completed = 0;
    items.forEach(item => {
        const itemKey = `${sectionId}_${item.name}`;
        if (playerData[activePlayer].completedItems[itemKey]) {
            completed++;
        }
    });
    
    const percentage = Math.round((completed / items.length) * 100);
    const progressBar = document.getElementById(`${sectionId}Progress`) || 
                      document.getElementById(`${sectionId.replace('Items', 'Progress')}`);
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}% (${completed}/${items.length})`;
    }
}

function updateAllProgress() {
    Object.keys(gameData).forEach(sectionId => {
        updateProgress(sectionId);
    });
    
    players.forEach(player => {
        updateGoalsProgress(player);
        updateGoalsDisplay(player);
    });
}

// Data persistence
function saveData() {
    const data = JSON.stringify(playerData);
    // Store in memory - would use localStorage in a real environment
    window.osrsTrackerData = data;
}

function loadData() {
    try {
        // Load from memory - would use localStorage in a real environment
        const data = window.osrsTrackerData;
        if (data) {
            playerData = JSON.parse(data);
        }
    } catch (e) {
        console.log('No saved data found');
        playerData = {};
    }
}
function processData(data) {
    try {
        // Load from memory - would use localStorage in a real environment
        if (data) {
            playerData = JSON.parse(data);
            console.log(data);
        }
    } catch (e) {
        console.log('No saved data found');
        playerData = {};
    }
}

// Event listeners for goal inputs
function addGoalInputListeners() {
    players.forEach(player => {
        const input = document.getElementById(`newGoal_${player}`);
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    addGoal(player);
                }
            });
        }
    });
}

// Initialize the app
function init() {
    // loadData();
    initPlayerData();
    populateAllSections();
    updateAllProgress();
    addGoalInputListeners();
}

// Start the app
init();
