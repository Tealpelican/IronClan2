
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
                    abyssal_sire: {
                        title: 'Abyssal Sire',
                        items: [
                            { name: 'Abyssal orphan', collected: [false, false, false, false, false] },
                            { name: 'Unsired', collected: [false, false, false, false, false] },
                            { name: 'Abyssal head', collected: [false, false, false, false, false] },
                            { name: 'Bludgeon spine', collected: [false, false, false, false, false] },
                            { name: 'Bludgeon claw', collected: [false, false, false, false, false] },
                            { name: 'Bludgeon axon', collected: [false, false, false, false, false] },
                            { name: 'Jar of miasma', collected: [false, false, false, false, false] },
                            { name: 'Abyssal dagger', collected: [false, false, false, false, false] },
                            { name: 'Abyssal whip', collected: [false, false, false, false, false] }
                        ]
                    },
                    alchemical_hydra: {
                        title: 'Alchemical Hydra',
                        items: [
                            { name: 'Ikkle hydra (serpentine)', collected: [false, false, false, false, false] },
                            { name: "Hydra's claw", collected: [false, false, false, false, false] },
                            { name: 'Hydra tail', collected: [false, false, false, false, false] },
                            { name: 'Hydra leather', collected: [false, false, false, false, false] },
                            { name: "Hydra's fang", collected: [false, false, false, false, false] },
                            { name: "Hydra's eye", collected: [false, false, false, false, false] },
                            { name: "Hydra's heart", collected: [false, false, false, false, false] },
                            { name: 'Dragon knife', collected: [false, false, false, false, false] },
                            { name: 'Dragon thrownaxe', collected: [false, false, false, false, false] },
                            { name: 'Jar of chemicals', collected: [false, false, false, false, false] },
                            { name: 'Alchemical hydra heads', collected: [false, false, false, false, false] }
                        ]
                    },
                    amoxliatl: {
                        title: 'Amoxliatl',
                        items: [
                            { name: 'Moxi', collected: [false, false, false, false, false] },
                            { name: 'Glacial temotli', collected: [false, false, false, false, false] },
                            { name: 'Pendant of ates (inert)', collected: [false, false, false, false, false] },
                            { name: 'Frozen tear', collected: [false, false, false, false, false] }
                        ]
                    },
                    araxxor: {
                        title: 'Araxxor',
                        items: [
                            { name: 'Nid', collected: [false, false, false, false, false] },
                            { name: 'Araxyte venom sack', collected: [false, false, false, false, false] },
                            { name: 'Spider cave teleport', collected: [false, false, false, false, false] },
                            { name: 'Araxyte fang', collected: [false, false, false, false, false] },
                            { name: 'Noxious point', collected: [false, false, false, false, false] },
                            { name: 'Noxious blade', collected: [false, false, false, false, false] },
                            { name: 'Noxious pommel', collected: [false, false, false, false, false] },
                            { name: 'Araxyte head', collected: [false, false, false, false, false] },
                            { name: 'Jar of venom', collected: [false, false, false, false, false] },
                            { name: 'Coagulated venom', collected: [false, false, false, false, false] }
                        ]
                    },
                    barrows_chests: {
                        title: 'Barrows Chests',
                        items: [
                            { name: "Ahrim's hood", collected: [false, false, false, false, false] },
                            { name: "Ahrim's robetop", collected: [false, false, false, false, false] },
                            { name: "Ahrim's robeskirt", collected: [false, false, false, false, false] },
                            { name: "Ahrim's staff", collected: [false, false, false, false, false] },
                            { name: "Dharok's helm", collected: [false, false, false, false, false] },
                            { name: "Dharok's platebody", collected: [false, false, false, false, false] },
                            { name: "Dharok's platelegs", collected: [false, false, false, false, false] },
                            { name: "Dharok's greataxe", collected: [false, false, false, false, false] },
                            { name: "Guthan's helm", collected: [false, false, false, false, false] },
                            { name: "Guthan's platebody", collected: [false, false, false, false, false] },
                            { name: "Guthan's chainskirt", collected: [false, false, false, false, false] },
                            { name: "Guthan's warspear", collected: [false, false, false, false, false] },
                            { name: "Karil's coif", collected: [false, false, false, false, false] },
                            { name: "Karil's leathertop", collected: [false, false, false, false, false] },
                            { name: "Karil's leatherskirt", collected: [false, false, false, false, false] },
                            { name: "Karil's crossbow", collected: [false, false, false, false, false] },
                            { name: "Torag's helm", collected: [false, false, false, false, false] },
                            { name: "Torag's platebody", collected: [false, false, false, false, false] },
                            { name: "Torag's platelegs", collected: [false, false, false, false, false] },
                            { name: "Torag's hammers", collected: [false, false, false, false, false] },
                            { name: "Verac's helm", collected: [false, false, false, false, false] },
                            { name: "Verac's brassard", collected: [false, false, false, false, false] },
                            { name: "Verac's plateskirt", collected: [false, false, false, false, false] },
                            { name: "Verac's flail", collected: [false, false, false, false, false] }
                        ]
                    },
                    bryophyta: {
                        title: 'Bryophyta',
                        items: [
                            { name: "Bryophyta's essence", collected: [false, false, false, false, false] }
                        ]
                    },
                    callisto_artio: {
                        title: 'Callisto and Artio',
                        items: [
                            { name: 'Callisto cub', collected: [false, false, false, false, false] },
                            { name: 'Tyrannical ring', collected: [false, false, false, false, false] },
                            { name: 'Dragon pickaxe', collected: [false, false, false, false, false] },
                            { name: 'Dragon 2h sword', collected: [false, false, false, false, false] },
                            { name: 'Claws of callisto', collected: [false, false, false, false, false] },
                            { name: 'Voidwaker hilt', collected: [false, false, false, false, false] }
                        ]
                    },
                    cerberus: {
                        title: 'Cerberus',
                        items: [
                            { name: 'Hellpuppy', collected: [false, false, false, false, false] },
                            { name: 'Eternal crystal', collected: [false, false, false, false, false] },
                            { name: 'Pegasian crystal', collected: [false, false, false, false, false] },
                            { name: 'Primordial crystal', collected: [false, false, false, false, false] },
                            { name: 'Jar of souls', collected: [false, false, false, false, false] },
                            { name: 'Smouldering stone', collected: [false, false, false, false, false] },
                            { name: 'Key master teleport', collected: [false, false, false, false, false] }
                        ]
                    },
                    chaos_elemental: {
                        title: 'Chaos Elemental',
                        items: [
                            { name: 'Pet chaos elemental', collected: [false, false, false, false, false] },
                            { name: 'Dragon pickaxe', collected: [false, false, false, false, false] },
                            { name: 'Dragon 2h sword', collected: [false, false, false, false, false] }
                        ]
                    },
                    chaos_fanatic: {
                        title: 'Chaos Fanatic',
                        items: [
                            { name: 'Pet chaos elemental', collected: [false, false, false, false, false] },
                            { name: 'Odium shard 1', collected: [false, false, false, false, false] },
                            { name: 'Malediction shard 1', collected: [false, false, false, false, false] }
                        ]
                    },
                    commander_zilyana: {
                        title: 'Commander Zilyana',
                        items: [
                            { name: 'Pet zilyana', collected: [false, false, false, false, false] },
                            { name: 'Armadyl crossbow', collected: [false, false, false, false, false] },
                            { name: 'Saradomin hilt', collected: [false, false, false, false, false] },
                            { name: 'Saradomin sword', collected: [false, false, false, false, false] },
                            { name: "Saradomin's light", collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 1', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 2', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 3', collected: [false, false, false, false, false] }
                        ]
                    },
                    corporeal_beast: {
                        title: 'Corporeal Beast',
                        items: [
                            { name: 'Pet dark core', collected: [false, false, false, false, false] },
                            { name: 'Elysian sigil', collected: [false, false, false, false, false] },
                            { name: 'Spectral sigil', collected: [false, false, false, false, false] },
                            { name: 'Arcane sigil', collected: [false, false, false, false, false] },
                            { name: 'Holy elixir', collected: [false, false, false, false, false] },
                            { name: 'Spirit shield', collected: [false, false, false, false, false] },
                            { name: 'Jar of spirits', collected: [false, false, false, false, false] }
                        ]
                    },
                    crazy_archaeologist: {
                        title: 'Crazy archaeologist',
                        items: [
                            { name: 'Odium shard 2', collected: [false, false, false, false, false] },
                            { name: 'Malediction shard 2', collected: [false, false, false, false, false] },
                            { name: 'Fedora', collected: [false, false, false, false, false] }
                        ]
                    },
                    dagannoth_kings: {
                        title: 'Dagannoth Kings',
                        items: [
                            { name: 'Pet dagannoth prime', collected: [false, false, false, false, false] },
                            { name: 'Pet dagannoth supreme', collected: [false, false, false, false, false] },
                            { name: 'Pet dagannoth rex', collected: [false, false, false, false, false] },
                            { name: 'Berserker ring', collected: [false, false, false, false, false] },
                            { name: 'Archers ring', collected: [false, false, false, false, false] },
                            { name: 'Seers ring', collected: [false, false, false, false, false] },
                            { name: 'Warrior ring', collected: [false, false, false, false, false] },
                            { name: 'Dragon axe', collected: [false, false, false, false, false] },
                            { name: 'Seercull', collected: [false, false, false, false, false] },
                            { name: 'Mud battlestaff', collected: [false, false, false, false, false] }
                        ]
                    },
                    deranged_archaeologist: {
                        title: 'Deranged Archaeologist',
                        items: [
                            { name: 'Steel ring', collected: [false, false, false, false, false] }
                        ]
                    },
                    doom_of_mokhaiotl: {
                        title: 'Doom of Mokhaiotl',
                        items: [
                            { name: 'Dom', collected: [false, false, false, false, false] },
                            { name: 'Avernic treads', collected: [false, false, false, false, false] },
                            { name: 'Eye of ayak (uncharged)', collected: [false, false, false, false, false] },
                            { name: 'Mokhaiotl cloth', collected: [false, false, false, false, false] },
                            { name: 'Mokhaiotl waystone 5', collected: [false, false, false, false, false] },
                            { name: 'Demon tear', collected: [false, false, false, false, false] }
                        ]
                    },
                    duke_sucellus: {
                        title: 'Duke Sucellus',
                        items: [
                            { name: 'Baron', collected: [false, false, false, false, false] },
                            { name: 'Eye of the duke', collected: [false, false, false, false, false] },
                            { name: 'Virtus mask', collected: [false, false, false, false, false] },
                            { name: 'Virtus robe top', collected: [false, false, false, false, false] },
                            { name: 'Virtus robe bottom', collected: [false, false, false, false, false] },
                            { name: 'Magus vestige', collected: [false, false, false, false, false] },
                            { name: 'Ice quartz', collected: [false, false, false, false, false] },
                            { name: 'Frozen tablet', collected: [false, false, false, false, false] },
                            { name: 'Chromium ingot', collected: [false, false, false, false, false] },
                            { name: "Awakener's orb", collected: [false, false, false, false, false] }
                        ]
                    },
                    fight_caves: {
                        title: 'The Fight Caves',
                        items: [
                            { name: 'Tzrek-jad', collected: [false, false, false, false, false] },
                            { name: 'Fire cape', collected: [false, false, false, false, false] }
                        ]
                    },
                    fortis_colosseum: {
                        title: 'Fortis Colosseum',
                        items: [
                            { name: 'Smol heredit', collected: [false, false, false, false, false] },
                            { name: "Dizana's quiver (uncharged)", collected: [false, false, false, false, false] },
                            { name: 'Sunfire fanatic cuirass', collected: [false, false, false, false, false] },
                            { name: 'Sunfire fanatic chausses', collected: [false, false, false, false, false] },
                            { name: 'Sunfire fanatic helm', collected: [false, false, false, false, false] },
                            { name: 'Echo crystal', collected: [false, false, false, false, false] },
                            { name: 'Tonalztics of ralos (uncharged)', collected: [false, false, false, false, false] },
                            { name: 'Sunfire splinters 4', collected: [false, false, false, false, false] },
                            { name: 'Uncut onyx', collected: [false, false, false, false, false] }
                        ]
                    },
                    the_gauntlet: {
                        title: 'The Gauntlet',
                        items: [
                            { name: 'Youngllef', collected: [false, false, false, false, false] },
                            { name: 'Crystal armour seed', collected: [false, false, false, false, false] },
                            { name: 'Crystal weapon seed', collected: [false, false, false, false, false] },
                            { name: 'Enhanced crystal weapon seed', collected: [false, false, false, false, false] },
                            { name: 'Gauntlet cape', collected: [false, false, false, false, false] }
                        ]
                    },
                    general_graardor: {
                        title: 'General Graardor',
                        items: [
                            { name: 'Pet general graardor', collected: [false, false, false, false, false] },
                            { name: 'Bandos chestplate', collected: [false, false, false, false, false] },
                            { name: 'Bandos tassets', collected: [false, false, false, false, false] },
                            { name: 'Bandos boots', collected: [false, false, false, false, false] },
                            { name: 'Bandos hilt', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 1', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 2', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 3', collected: [false, false, false, false, false] }
                        ]
                    },
                    giant_mole: {
                        title: 'Giant Mole',
                        items: [
                            { name: 'Baby mole', collected: [false, false, false, false, false] },
                            { name: 'Mole skin', collected: [false, false, false, false, false] },
                            { name: 'Mole claw', collected: [false, false, false, false, false] }
                        ]
                    },
                    grotesque_guardians: {
                        title: 'Grotesque Guardians',
                        items: [
                            { name: 'Noon', collected: [false, false, false, false, false] },
                            { name: 'Black tourmaline core', collected: [false, false, false, false, false] },
                            { name: 'Granite gloves', collected: [false, false, false, false, false] },
                            { name: 'Granite ring', collected: [false, false, false, false, false] },
                            { name: 'Granite hammer', collected: [false, false, false, false, false] },
                            { name: 'Jar of stone', collected: [false, false, false, false, false] },
                            { name: 'Granite dust', collected: [false, false, false, false, false] }
                        ]
                    },
                    hespori: {
                        title: 'Hespori',
                        items: [
                            { name: 'Bottomless compost bucket', collected: [false, false, false, false, false] },
                            { name: 'Iasor seed 5', collected: [false, false, false, false, false] },
                            { name: 'Kronos seed 5', collected: [false, false, false, false, false] },
                            { name: 'Attas seed 5', collected: [false, false, false, false, false] }
                        ]
                    },
                    the_hueycoatl: {
                        title: 'The Hueycoatl',
                        items: [
                            { name: 'Huberte', collected: [false, false, false, false, false] },
                            { name: 'Dragon hunter wand', collected: [false, false, false, false, false] },
                            { name: 'Tome of earth (empty)', collected: [false, false, false, false, false] },
                            { name: 'Soiled page', collected: [false, false, false, false, false] },
                            { name: 'Hueycoatl hide', collected: [false, false, false, false, false] },
                            { name: 'Huasca seed 1', collected: [false, false, false, false, false] }
                        ]
                    },
                    the_inferno: {
                        title: 'The Inferno',
                        items: [
                            { name: 'Jal-nib-rek', collected: [false, false, false, false, false] },
                            { name: 'Infernal cape', collected: [false, false, false, false, false] }
                        ]
                    },
                    kalphite_queen: {
                        title: 'Kalphite Queen',
                        items: [
                            { name: 'Kalphite princess', collected: [false, false, false, false, false] },
                            { name: 'Kq head', collected: [false, false, false, false, false] },
                            { name: 'Jar of sand', collected: [false, false, false, false, false] },
                            { name: 'Dragon 2h sword', collected: [false, false, false, false, false] },
                            { name: 'Dragon chainbody', collected: [false, false, false, false, false] },
                            { name: 'Dragon pickaxe', collected: [false, false, false, false, false] }
                        ]
                    },
                    king_black_dragon: {
                        title: 'King Black Dragon',
                        items: [
                            { name: 'Prince black dragon', collected: [false, false, false, false, false] },
                            { name: 'Kbd heads', collected: [false, false, false, false, false] },
                            { name: 'Dragon pickaxe', collected: [false, false, false, false, false] },
                            { name: 'Draconic visage', collected: [false, false, false, false, false] }
                        ]
                    },
                    kraken: {
                        title: 'Kraken',
                        items: [
                            { name: 'Pet kraken', collected: [false, false, false, false, false] },
                            { name: 'Kraken tentacle', collected: [false, false, false, false, false] },
                            { name: 'Trident of the seas', collected: [false, false, false, false, false] },
                            { name: 'Jar of dirt', collected: [false, false, false, false, false] }
                        ]
                    },
                    kreearra: {
                        title: "Kree'arra",
                        items: [
                            { name: "Pet kree'arra", collected: [false, false, false, false, false] },
                            { name: 'Armadyl helmet', collected: [false, false, false, false, false] },
                            { name: 'Armadyl chestplate', collected: [false, false, false, false, false] },
                            { name: 'Armadyl chainskirt', collected: [false, false, false, false, false] },
                            { name: 'Armadyl hilt', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 1', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 2', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 3', collected: [false, false, false, false, false] }
                        ]
                    },
                    kril_tsutsaroth: {
                        title: "K'ril Tsutsaroth",
                        items: [
                            { name: "Pet k'ril tsutsaroth", collected: [false, false, false, false, false] },
                            { name: 'Staff of the dead', collected: [false, false, false, false, false] },
                            { name: 'Zamorakian spear', collected: [false, false, false, false, false] },
                            { name: 'Steam battlestaff', collected: [false, false, false, false, false] },
                            { name: 'Zamorak hilt', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 1', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 2', collected: [false, false, false, false, false] },
                            { name: 'Godsword shard 3', collected: [false, false, false, false, false] }
                        ]
                    },
                    the_leviathan: {
                        title: 'The Leviathan',
                        items: [
                            { name: "Lil'viathan", collected: [false, false, false, false, false] },
                            { name: "Leviathan's lure", collected: [false, false, false, false, false] },
                            { name: 'Virtus mask', collected: [false, false, false, false, false] },
                            { name: 'Virtus robe top', collected: [false, false, false, false, false] },
                            { name: 'Virtus robe bottom', collected: [false, false, false, false, false] },
                            { name: 'Venator vestige', collected: [false, false, false, false, false] },
                            { name: 'Smoke quartz', collected: [false, false, false, false, false] },
                            { name: 'Scarred tablet', collected: [false, false, false, false, false] },
                            { name: 'Chromium ingot', collected: [false, false, false, false, false] },
                            { name: "Awakener's orb", collected: [false, false, false, false, false] }
                        ]
                    },
                    moons_of_peril: {
                        title: 'Moons of Peril',
                        items: [
                            { name: 'Eclipse moon chestplate', collected: [false, false, false, false, false] },
                            { name: 'Eclipse moon tassets', collected: [false, false, false, false, false] },
                            { name: 'Eclipse moon helm', collected: [false, false, false, false, false] },
                            { name: 'Eclipse atlatl', collected: [false, false, false, false, false] },
                            { name: 'Blue moon chestplate', collected: [false, false, false, false, false] },
                            { name: 'Blue moon tassets', collected: [false, false, false, false, false] },
                            { name: 'Blue moon helm', collected: [false, false, false, false, false] },
                            { name: 'Blue moon spear', collected: [false, false, false, false, false] },
                            { name: 'Blood moon chestplate', collected: [false, false, false, false, false] },
                            { name: 'Blood moon tassets', collected: [false, false, false, false, false] },
                            { name: 'Blood moon helm', collected: [false, false, false, false, false] },
                            { name: 'Dual macuahuitl', collected: [false, false, false, false, false] },
                            { name: 'Atlatl dart 5', collected: [false, false, false, false, false] }
                        ]
                    },
                    nex: {
                        title: 'Nex',
                        items: [
                            { name: 'Nexling', collected: [false, false, false, false, false] },
                            { name: 'Ancient hilt', collected: [false, false, false, false, false] },
                            { name: 'Nihil horn', collected: [false, false, false, false, false] },
                            { name: 'Zaryte vambraces', collected: [false, false, false, false, false] },
                            { name: 'Torva full helm (damaged)', collected: [false, false, false, false, false] },
                            { name: 'Torva platebody (damaged)', collected: [false, false, false, false, false] },
                            { name: 'Torva platelegs (damaged)', collected: [false, false, false, false, false] },
                            { name: 'Nihil shard', collected: [false, false, false, false, false] }
                        ]
                    },
                    the_nightmare: {
                        title: 'The Nightmare',
                        items: [
                            { name: 'Little nightmare', collected: [false, false, false, false, false] },
                            { name: "Inquisitor's mace", collected: [false, false, false, false, false] },
                            { name: "Inquisitor's great helm", collected: [false, false, false, false, false] },
                            { name: "Inquisitor's hauberk", collected: [false, false, false, false, false] },
                            { name: "Inquisitor's plateskirt", collected: [false, false, false, false, false] },
                            { name: 'Nightmare staff', collected: [false, false, false, false, false] },
                            { name: 'Volatile orb', collected: [false, false, false, false, false] },
                            { name: 'Harmonised orb', collected: [false, false, false, false, false] },
                            { name: 'Eldritch orb', collected: [false, false, false, false, false] },
                            { name: 'Jar of dreams', collected: [false, false, false, false, false] },
                            { name: 'Slepey tablet', collected: [false, false, false, false, false] },
                            { name: 'Parasitic egg', collected: [false, false, false, false, false] }
                        ]
                    },
                    obor: {
                        title: 'Obor',
                        items: [
                            { name: 'Hill giant club', collected: [false, false, false, false, false] }
                        ]
                    },
                        phantom_muspah: {
                            title: 'Phantom Muspah',
                            items: [
                                { name: 'Muphin (shielded)', collected: [false, false, false, false, false] },
                                { name: 'Venator shard', collected: [false, false, false, false, false] },
                                { name: 'Ancient icon', collected: [false, false, false, false, false] },
                                { name: 'Charged ice', collected: [false, false, false, false, false] },
                                { name: 'Frozen cache', collected: [false, false, false, false, false] },
                                { name: 'Ancient essence 500', collected: [false, false, false, false, false] }
                            ]
                        },
                        royal_titans: {
                            title: 'Royal Titans',
                            items: [
                                { name: 'Bran', collected: [false, false, false, false, false] },
                                { name: 'Deadeye prayer scroll', collected: [false, false, false, false, false] },
                                { name: 'Mystic vigour prayer scroll', collected: [false, false, false, false, false] },
                                { name: 'Giantsoul amulet (uncharged)', collected: [false, false, false, false, false] },
                                { name: 'Ice element staff crown', collected: [false, false, false, false, false] },
                                { name: 'Fire element staff crown', collected: [false, false, false, false, false] },
                                { name: 'Desiccated page', collected: [false, false, false, false, false] }
                            ]
                        },
                        sarachnis: {
                            title: 'Sarachnis',
                            items: [
                                { name: 'Sraracha', collected: [false, false, false, false, false] },
                                { name: 'Jar of eyes', collected: [false, false, false, false, false] },
                                { name: 'Giant egg sac(full)', collected: [false, false, false, false, false] },
                                { name: 'Sarachnis cudgel', collected: [false, false, false, false, false] }
                            ]
                        },
                        scorpia: {
                            title: 'Scorpia',
                            items: [
                                { name: 'Scorpia\'s offspring', collected: [false, false, false, false, false] },
                                { name: 'Odium shard 3', collected: [false, false, false, false, false] },
                                { name: 'Malediction shard 3', collected: [false, false, false, false, false] }
                            ]
                        },
                        skotizo: {
                            title: 'Skotizo',
                            items: [
                                { name: 'Jar of darkness', collected: [false, false, false, false, false] },
                                { name: 'Dark totem', collected: [false, false, false, false, false] },
                                { name: 'Clue scroll (hard)', collected: [false, false, false, false, false] },
                                { name: 'Uncut onyx', collected: [false, false, false, false, false] },
                                { name: 'Ancient shard', collected: [false, false, false, false, false] }
                            ]
                        },
                        spindel: {
                            title: 'Spindel',
                            items: [
                                { name: 'Fangs of venenatis', collected: [false, false, false, false, false] },
                                { name: 'Claws of callisto', collected: [false, false, false, false, false] },
                                { name: 'Voidwaker hilt', collected: [false, false, false, false, false] }
                            ]
                        },
                        tempoross: {
                            title: 'Tempoross',
                            items: [
                                { name: 'Tiny tempor', collected: [false, false, false, false, false] },
                                { name: 'Big harpoonfish', collected: [false, false, false, false, false] },
                                { name: 'Spirit angler headband', collected: [false, false, false, false, false] },
                                { name: 'Spirit angler top', collected: [false, false, false, false, false] },
                                { name: 'Spirit angler waders', collected: [false, false, false, false, false] },
                                { name: 'Spirit angler boots', collected: [false, false, false, false, false] },
                                { name: 'Tome of water (empty)', collected: [false, false, false, false, false] },
                                { name: 'Soaked page', collected: [false, false, false, false, false] },
                                { name: 'Tackle box', collected: [false, false, false, false, false] },
                                { name: 'Fish barrel', collected: [false, false, false, false, false] },
                                { name: 'Dragon harpoon', collected: [false, false, false, false, false] },
                                { name: 'Spirit flakes 9', collected: [false, false, false, false, false] }
                            ]
                        },
                        thermonuclear_smoke_devil: {
                            title: 'Thermonuclear Smoke Devil',
                            items: [
                                { name: 'Smoke battlestaff', collected: [false, false, false, false, false] },
                                { name: 'Occult necklace', collected: [false, false, false, false, false] },
                                { name: 'Pet smoke devil', collected: [false, false, false, false, false] }
                            ]
                        },
                        vardorvis: {
                            title: 'Vardorvis',
                            items: [
                                    { name: "Butch", collected: [false, false, false, false, false] },
                                    { name: "Executioner's axe head", collected: [false, false, false, false, false] },
                                    { name: 'Virtus mask', collected: [false, false, false, false, false] },
                                    { name: 'Virtus robe top', collected: [false, false, false, false, false] },
                                    { name: 'Virtus robe bottom', collected: [false, false, false, false, false] },
                                    { name: 'Ultor vestige', collected: [false, false, false, false, false] },
                                    { name: 'Blood quartz', collected: [false, false, false, false, false] },
                                    { name: 'Strangled tablet', collected: [false, false, false, false, false] },
                                    { name: 'Chromium ingot', collected: [false, false, false, false, false] },
                                    { name: "Awakener's orb", collected: [false, false, false, false, false] }
                            ]
                        },
                        venenatis: {
                            title: 'Venenatis',
                            items: [
                                { name: 'Venenatis spiderling', collected: [false, false, false, false, false] },
                                { name: 'Treasonous ring', collected: [false, false, false, false, false] },
                                { name: 'Dragon pickaxe', collected: [false, false, false, false, false] },
                                { name: 'Dragon 2h sword', collected: [false, false, false, false, false] },
                                { name: 'Fangs of venenatis', collected: [false, false, false, false, false] },
                                { name: 'Voidwaker gem', collected: [false, false, false, false, false] }
                            ]
                        },
                        vetion: {
                            title: 'Vet\'ion',
                            items: [
                                { name: "Vet'ion jr. (reborn)", collected: [false, false, false, false, false] },
                                { name: 'Ring of the gods', collected: [false, false, false, false, false] },
                                { name: 'Dragon pickaxe', collected: [false, false, false, false, false] },
                                { name: 'Dragon 2h sword', collected: [false, false, false, false, false] },
                                { name: 'Skull of vet\'ion', collected: [false, false, false, false, false] },
                                { name: 'Voidwaker blade', collected: [false, false, false, false, false] }
                            ]
                        },
                        vorkath: {
                            title: 'Vorkath',
                            items: [
                                { name: 'Vorki', collected: [false, false, false, false, false] },
                                { name: 'Draconic visage', collected: [false, false, false, false, false] },
                                { name: 'Skeletal visage', collected: [false, false, false, false, false] },
                                { name: 'Jar of decay', collected: [false, false, false, false, false] },
                                { name: 'Dragonbone necklace', collected: [false, false, false, false, false] }
                            ]
                        },
                    the_whisperer: {
                        title: 'The Whisperer',
                        items: [
                            { name: "Wisp", collected: [false, false, false, false, false] },
                            { name: "Siren's staff", collected: [false, false, false, false, false] },
                            { name: 'Virtus mask', collected: [false, false, false, false, false] },
                            { name: 'Virtus robe top', collected: [false, false, false, false, false] },
                            { name: 'Virtus robe bottom', collected: [false, false, false, false, false] },
                            { name: 'Bellator vestige', collected: [false, false, false, false, false] },
                            { name: 'Shadow quartz', collected: [false, false, false, false, false] },
                            { name: 'Sirenic tablet', collected: [false, false, false, false, false] },
                            { name: 'Chromium ingot', collected: [false, false, false, false, false] },
                            { name: "Awakener's orb", collected: [false, false, false, false, false] }
                        ]
                    },
                        wintertodt: {
                            title: 'Wintertodt',
                            items: [
                                { name: 'Phoenix', collected: [false, false, false, false, false] },
                                { name: 'Tome of fire', collected: [false, false, false, false, false] },
                                { name: 'Warm gloves', collected: [false, false, false, false, false] },
                                { name: 'Bruma torch', collected: [false, false, false, false, false] }
                            ]
                        },
                        zalcano: {
                            title: 'Zalcano',
                            items: [
                                { name: 'Smolcano', collected: [false, false, false, false, false] },
                                { name: 'Crystal tool seed', collected: [false, false, false, false, false] },
                                { name: 'Zalcano shard', collected: [false, false, false, false, false] },
                                { name: 'Uncut onyx', collected: [false, false, false, false, false] }
                            ]
                        },
                        zulrah: {
                            title: 'Zulrah',
                            items: [
                                { name: 'Pet snakeling', collected: [false, false, false, false, false] },
                                { name: 'Tanzanite mutagen', collected: [false, false, false, false, false] },
                                { name: 'Magma mutagen', collected: [false, false, false, false, false] },
                                { name: 'Jar of swamp', collected: [false, false, false, false, false] },
                                { name: 'Magic fang', collected: [false, false, false, false, false] },
                                { name: 'Serpentine visage', collected: [false, false, false, false, false] },
                                { name: 'Tanzanite fang', collected: [false, false, false, false, false] },
                                { name: 'Zul-andra teleport', collected: [false, false, false, false, false] },
                                { name: 'Uncut onyx', collected: [false, false, false, false, false] },
                                { name: "Zulrah's scales 5", collected: [false, false, false, false, false] },
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

                let img = document.createElement('img'); 
                img.src = "https://oldschool.runescape.wiki/images/" + item.name.replace(/ /g,"_") + ".png";
                img.alt = item.name;
                itemSlot.appendChild(img);
                    
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
