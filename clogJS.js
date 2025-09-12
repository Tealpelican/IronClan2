
        let players = ["Soy Teal", "SOY JUB", "SOY DJM", "SOY RD9", "SOY Magman"]
        let playersShort = ["T", "J", "D", "R", "M"]
        let selectedPlayer = 0;
        let activePlayers = [false, false, false, false, false]; // Which players are currently "active" (showing their items)
        let currentCategory = 'bosses';
        let currentSubcategory = 'general_graardor';

        // Enhanced collection data with subcategories
        const collectionData = {
            bosses: {
                title: 'Bosses',
                subcategories: {
                    general_graardor: {
                        title: 'General Graardor',
                        items: [
                            { name: 'Bandos Chestplate', collected: [true, false, true, false, false] },
                            { name: 'Bandos Tassets', collected: [false, true, false, true, false] },
                            { name: 'Bandos Boots', collected: [true, false, false, false, true] },
                            { name: 'Bandos Gloves', collected: [false, false, true, false, false] },
                            { name: 'Pet General Graardor', collected: [false, false, false, false, true] },
                            { name: 'Bandos Hilt', collected: [true, true, false, false, false] },
                            { name: 'Godsword Shard 1', collected: [true, true, true, true, true] },
                            { name: 'Godsword Shard 2', collected: [true, true, true, false, true] }
                        ]
                    },
                    commander_zilyana: {
                        title: 'Commander Zilyana',
                        items: [
                            { name: 'Saradomin Sword', collected: [true, false, false, true, false] },
                            { name: 'Armadyl Crossbow', collected: [false, true, false, false, true] },
                            { name: 'Saradomin Hilt', collected: [false, false, true, false, false] },
                            { name: 'Pet Commander Zilyana', collected: [false, false, false, true, false] }
                        ]
                    },
                    kreearra: {
                        title: 'Kree\'arra',
                        items: [
                            { name: 'Armadyl Helmet', collected: [true, false, true, false, true] },
                            { name: 'Armadyl Chestplate', collected: [false, true, false, true, false] },
                            { name: 'Armadyl Chainskirt', collected: [false, false, true, false, false] },
                            { name: 'Armadyl Hilt', collected: [true, false, false, false, false] },
                            { name: 'Pet Kree\'arra', collected: [false, false, false, false, true] }
                        ]
                    },
                    kril_tsutsaroth: {
                        title: 'K\'ril Tsutsaroth',
                        items: [
                            { name: 'Steam Battlestaff', collected: [true, true, false, false, false] },
                            { name: 'Zamorak Hilt', collected: [false, false, true, true, false] },
                            { name: 'Staff of the Dead', collected: [false, false, false, false, true] },
                            { name: 'Pet K\'ril Tsutsaroth', collected: [true, false, false, false, false] }
                        ]
                    }
                }
            },
            raids: {
                title: 'Raids',
                subcategories: {
                    chambers_of_xeric: {
                        title: 'Chambers of Xeric',
                        items: [
                            { name: 'Twisted Bow', collected: [false, false, false, false, true] },
                            { name: 'Elder Maul', collected: [true, false, false, false, false] },
                            { name: 'Kodai Wand', collected: [false, true, false, false, false] },
                            { name: 'Dragon Hunter Crossbow', collected: [false, false, true, false, false] },
                            { name: 'Ancestral Hat', collected: [false, false, false, true, false] },
                            { name: 'Ancestral Robe Top', collected: [true, false, false, false, false] },
                            { name: 'Ancestral Robe Bottom', collected: [false, true, false, false, false] },
                            { name: 'Dragon Claws', collected: [false, false, true, false, false] },
                            { name: 'Twisted Buckler', collected: [false, false, false, false, true] },
                            { name: 'Dinh\'s Bulwark', collected: [true, false, false, false, false] }
                        ]
                    },
                    theatre_of_blood: {
                        title: 'Theatre of Blood',
                        items: [
                            { name: 'Scythe of Vitur', collected: [false, false, false, true, false] },
                            { name: 'Ghrazi Rapier', collected: [true, false, false, false, false] },
                            { name: 'Sanguinesti Staff', collected: [false, true, false, false, false] },
                            { name: 'Justiciar Faceguard', collected: [false, false, true, false, false] },
                            { name: 'Justiciar Chestguard', collected: [false, false, false, false, true] },
                            { name: 'Justiciar Legguards', collected: [true, false, false, false, false] }
                        ]
                    }
                }
            },
            clues: {
                title: 'Clue Scrolls',
                subcategories: {
                    easy: {
                        title: 'Easy Clues',
                        items: [
                            { name: 'Black (g) Full Helm', collected: [true, true, false, false, true] },
                            { name: 'Black (g) Platebody', collected: [false, true, true, false, false] },
                            { name: 'Black (g) Platelegs', collected: [true, false, false, true, false] },
                            { name: 'Black (g) Kiteshield', collected: [false, false, true, true, true] }
                        ]
                    },
                    medium: {
                        title: 'Medium Clues',
                        items: [
                            { name: 'Ranger Boots', collected: [true, false, false, true, false] },
                            { name: 'Holy Sandals', collected: [false, true, false, false, true] },
                            { name: 'Wizard Boots', collected: [false, false, true, false, false] },
                            { name: 'Robin Hood Hat', collected: [true, false, false, false, false] }
                        ]
                    },
                    hard: {
                        title: 'Hard Clues',
                        items: [
                            { name: 'Gilded Platebody', collected: [false, false, true, false, false] },
                            { name: 'Gilded Platelegs', collected: [true, false, false, false, false] },
                            { name: 'Gilded Full Helm', collected: [false, true, false, false, false] },
                            { name: 'Gilded Kiteshield', collected: [false, false, false, true, false] }
                        ]
                    }
                }
            },
            minigames: {
                title: 'Minigames',
                subcategories: {
                    barbarian_assault: {
                        title: 'Barbarian Assault',
                        items: [
                            { name: 'Fighter Torso', collected: [true, true, true, false, true] },
                            { name: 'Fighter Hat', collected: [true, false, true, true, false] },
                            { name: 'Runner Hat', collected: [false, true, false, true, true] },
                            { name: 'Healer Hat', collected: [true, true, false, false, false] }
                        ]
                    },
                    fight_caves: {
                        title: 'Fight Caves',
                        items: [
                            { name: 'Fire Cape', collected: [true, false, true, true, false] },
                            { name: 'TzRek-Jad', collected: [false, false, false, false, true] }
                        ]
                    },
                    inferno: {
                        title: 'Inferno',
                        items: [
                            { name: 'Infernal Cape', collected: [false, false, false, false, true] },
                            { name: 'JalTok-Jad', collected: [false, false, false, false, false] }
                        ]
                    }
                }
            },
            other: {
                title: 'Other',
                subcategories: {
                    defenders: {
                        title: 'Defenders',
                        items: [
                            { name: 'Bronze Defender', collected: [true, true, true, true, true] },
                            { name: 'Iron Defender', collected: [true, true, true, true, true] },
                            { name: 'Steel Defender', collected: [true, true, true, true, true] },
                            { name: 'Black Defender', collected: [true, true, true, true, true] },
                            { name: 'Mithril Defender', collected: [true, true, true, true, true] },
                            { name: 'Adamant Defender', collected: [true, true, true, true, true] },
                            { name: 'Rune Defender', collected: [true, true, true, true, true] },
                            { name: 'Dragon Defender', collected: [true, true, false, true, true] }
                        ]
                    }
                }
            },
            skilling: {
                title: 'Skilling',
                subcategories: {
                    pets: {
                        title: 'Skilling Pets',
                        items: [
                            { name: 'Beaver', collected: [false, false, false, false, true] },
                            { name: 'Rocky', collected: [true, false, false, false, false] },
                            { name: 'Heron', collected: [false, true, false, false, false] },
                            { name: 'Giant Squirrel', collected: [false, false, true, false, false] },
                            { name: 'Rift Guardian', collected: [false, false, false, true, false] },
                            { name: 'Phoenix', collected: [false, false, false, false, false] }
                        ]
                    },
                    rare_drops: {
                        title: 'Rare Drops',
                        items: [
                            { name: 'Dragon Axe', collected: [true, false, true, false, true] },
                            { name: 'Dragon Pickaxe', collected: [false, true, false, true, false] },
                            { name: 'Dragon Harpoon', collected: [true, false, false, false, false] }
                        ]
                    }
                }
            }
        };

        function selectPlayer(playerIndex) {
            selectedPlayer = playerIndex;
            
            // Update selected player tab
            document.querySelectorAll('.player-tab').forEach((tab, index) => {
                tab.classList.remove('selected');
                if (index === playerIndex) {
                    tab.classList.add('selected');
                }
            });
            
            updateStats();
        }

        function togglePlayerActive(playerIndex) {
            activePlayers[playerIndex] = !activePlayers[playerIndex];
            
            // Update active player tabs
            document.querySelectorAll('.player-tab').forEach((tab, index) => {
                tab.classList.toggle('active', activePlayers[index]);
            });
            
            displaySubcategory(currentCategory, currentSubcategory);
            updateStats();
        }

        function selectCategory(category) {
            currentCategory = category;
            
            // Update category appearance
            document.querySelectorAll('.category-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            event.target.classList.add('active');
            
            // Load subcategories
            loadSubcategories(category);
            
            // Select first subcategory
            const firstSubcategory = Object.keys(collectionData[category].subcategories)[0];
            currentSubcategory = firstSubcategory;
            displaySubcategory(category, firstSubcategory);
        }

        function loadSubcategories(category) {
            const subcategoryList = document.getElementById('subcategory-list');
            subcategoryList.innerHTML = '';
            
            const subcategories = collectionData[category].subcategories;
            let isFirst = true;
            
            Object.entries(subcategories).forEach(([key, subcategory]) => {
                const item = document.createElement('div');
                item.className = `subcategory-item ${isFirst ? 'active' : ''}`;
                item.textContent = subcategory.title;
                item.onclick = () => selectSubcategory(key);
                subcategoryList.appendChild(item);
                isFirst = false;
            });
        }

        function selectSubcategory(subcategoryKey) {
            currentSubcategory = subcategoryKey;
            
            // Update subcategory appearance
            document.querySelectorAll('.subcategory-item').forEach(item => {
                item.classList.remove('active');
            });
            event.target.classList.add('active');
            
            displaySubcategory(currentCategory, subcategoryKey);
        }

        function displaySubcategory(category, subcategoryKey) {
            const subcategoryData = collectionData[category].subcategories[subcategoryKey];
            if (!subcategoryData) return;
            
            document.getElementById('subcategory-title').textContent = subcategoryData.title;
            
            const container = document.getElementById('items-container');
            container.innerHTML = '';
            
            let totalItems = subcategoryData.items.length;
            let collectedItems = 0;
            
            subcategoryData.items.forEach(item => {
                const itemContainer = document.createElement('div');
                itemContainer.className = 'item-container';
                
                const itemSlot = document.createElement('div');
                itemSlot.className = 'item-slot';
                
                // Check if all players have this item
                const allCollected = item.collected.every(collected => collected);
                if (allCollected) {
                    itemSlot.classList.add('all-collected');
                    collectedItems++;
                }
                
                const itemName = document.createElement('div');
                itemName.className = 'item-name';
                itemName.textContent = item.name;
                
                // Create player indicators
                const playerIndicators = document.createElement('div');
                playerIndicators.className = 'player-indicators';
                
                item.collected.forEach((collected, playerIndex) => {
                      const indicator = document.createElement('div');
                      indicator.className = 'player-indicator';
                      indicator.textContent = (playersShort[playerIndex]).toString();
                    
                      if (collected && activePlayers[playerIndex]) {
                          indicator.classList.add('collected');
                      }
                    
                      indicator.onclick = (e) => {
                          e.stopPropagation();
                          toggleItem(category, subcategoryKey, item.name, playerIndex);
                      };
                    
                      playerIndicators.appendChild(indicator);
                });
                
                itemContainer.appendChild(itemSlot);
                itemContainer.appendChild(itemName);
                itemContainer.appendChild(playerIndicators);
                
                container.appendChild(itemContainer);
            });
            
            document.getElementById('subcategory-progress').textContent = `Items: ${collectedItems}/${totalItems}`;
        }

        function toggleItem(category, subcategoryKey, itemName, playerIndex) {
            const subcategoryData = collectionData[category].subcategories[subcategoryKey];
            const item = subcategoryData.items.find(i => i.name === itemName);
            if (item) {
                item.collected[playerIndex] = !item.collected[playerIndex];
                displaySubcategory(category, subcategoryKey);
                updateStats();
            }
        }

        function updateStats() {
            const activePlayerCount = activePlayers.filter(active => active).length;
            
            document.getElementById('selected-player').textContent = `Player ${selectedPlayer + 1}`;
            document.getElementById('active-players').textContent = `${activePlayerCount}/5`;
            
            // Calculate total items for selected player
            let totalCollected = 0;
            let totalItems = 0;
            
            Object.values(collectionData).forEach(category => {
                Object.values(category.subcategories).forEach(subcategory => {
                    subcategory.items.forEach(item => {
                        totalItems++;
                        if (item.collected[selectedPlayer]) {
                            totalCollected++;
                        }
                    });
                });
            });
            
            document.getElementById('total-items').textContent = `${totalCollected}/${totalItems}`;
        }

        // Add click handlers for player tabs to toggle active state
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.player-tab').forEach((tab, index) => {
                tab.addEventListener('contextmenu', function(e) {
                    e.preventDefault();
                    togglePlayerActive(index);
                });
            });
        });

        // Initialize the interface
        loadSubcategories('bosses');
        displaySubcategory('bosses', 'general_graardor');
        updateStats();

        // Close button functionality
        document.querySelector('.close-button').onclick = function() {
            alert('Collection Log closed!');
        };
