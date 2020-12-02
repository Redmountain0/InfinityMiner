upgrades = 0
curcooldown = 0
cooldown = 50
stone = 0
copper = 0
iron = 0
silver = 0
gold = 0
platinum = 0
diamond = 0
emerald = 0
coin = 0
sellmult = 1
picklevel = 0
autominerunlock = false
artifactunlock = false
autominertier = 1
autominerpower = 100
autominerpowermult = 1
selectedore = 1
autominerinterval = 3
intervalupgs = 0
powerupgs = 0
playtime = 0
minecount = 0
upgradelistr = ['Stone Max +1 | 50 Coin', 'Cooldown -1.0s | 80 Coin', 'Stone Base +1 | 120 Coin',
  'Copper Chance +10% | 300 Coin', 'Stone Max +3 | 350 Coin', 'Copper Chance +15% | 400 Coin',
  'Stone Base +2 | 400 Coin', 'Sell Multiplier x1.5 | 500 Coin', 'Cooldown -0.5s | 500 Coin',
  'Copper Chance +25% | 1000 Coin', 'Sell Multiplier x1.8 | 1200 Coin', 'Stone Base +3 | 1500 Coin',
  'Copper Max +1 | 2000 Coin', 'Stone Max +10 | 2300 Coin', 'Cooldown -0.5s | 2500 Coin',
  'Copper Max +1 | 3250 Coin', 'Stone Base +8 | 3500 Coin', 'Copper Base +1 | 5000 Coin',
  'Iron Chance +10% | 1.0e4 Coin', 'Iron Chance +10% | 1.5e4 Coin', 'Copper Max +2 | 2.0e4 Coin',
  'Cooldown -0.5s | 2.2e4 Coin', 'Stone Base +12 | 2.5e4 Coin', 'Iron Chance +15% | 3.0e4 Coin',
  'Sell Multiplier x2.0 | 5.0e4 Coin', 'Stone Max +40 | 8.0e4 Coin', 'Copper Base +2 | 9.0e4 Coin',
  'Iron Chance +15% | 1.0e5 Coin', 'Copper Max +6 | 1.2e5 Coin', 'Cooldown -0.5s | 1.5e5 Coin',
  'Copper Max +8 | 1.8e5 Coin', 'Copper Base +4 | 2.2e5 Coin', 'Iron Chance +20% | 3.0e5 Coin',
  'Sell Multiplier x2.0 | 4.0e5 Coin', 'Iron Max +1 | 7.0e5 Coin', 'Silver Chance +10% | 1.0e6 Coin',
  'Copper Max +25 | 1.2e6 Coin', 'Stone Base +100 | 1.5e6 Coin', 'Iron Base +1 | 2.0e6 Coin',
  'Silver Chance +10% | 2.5e6 Coin', 'Iron Max +3 | 3.0e6 Coin', 'Iron Base +2 | 3.0e6 Coin',
  'Silver Chance +20% | 5.0e6 Coin', 'Copper Max +60 | 6.0e6 Coin', 'Sell Multiplier x1.5 | 7.5e6 Coin',
  'Stone Max +500 | 1.0e7 Coin', 'Iron Max +5 | 1.2e7 Coin', 'Silver Chance +20% | 1.5e7 Coin',
  'Iron Base +3 | 1.5e7 Coin', 'Cooldown -0.4s | 2.0e7 Coin', 'Iron Max +7 | 2.5e7 Coin',
  'Silver Chance +30% | 3.0e7 Coin', 'Sell Multiplier x2.0 | 5.0e7 Coin', 'Silver Max +1 | 8.0e7 Coin',
  'Iron Base +5 | 1.0e8 Coin', 'Copper Base +70 | 1.0e8 Coin', 'Gold Chance +5% | 1.2e8 Coin',
  'Cooldown -0.3s | 1.5e8 Coin', 'Iron Max +15 | 2.0e8 Coin', 'Silver Base +1 | 2.0e8 Coin',
  'Gold Chance +5% | 2.5e8 Coin', 'Silver Max +3 | 3.0e8 Coin', 'Copper Max +230 | 3.0e8 Coin',
  'Gold Chance +10% | 4.4e8 Coin', 'Iron Base +20 | 5.0e8 Coin', 'Silver Base +2 | 5.0e8 Coin',
  'Cooldown -0.3s | 5.0e8 Coin', 'Copper Base +200 | 6.0e8 Coin', 'Gold Chance +15% | 7.0e8 Coin',
  'Silver Base +3 | 8.0e8 Coin', 'Stone Base +900 | 1.0e9 Coin', 'Gold Chance +20% | 1.0e9 Coin',
  'Silver Max +8 | 1.2e9 Coin', 'Gold Chance +20% | 1.5e9 Coin', 'Sell Multiplier x2.0 | 2.5e9 Coin',
  'Gold Chance +20% | 4.0e9 Coin', 'Copper Max +500 | 4.0e9 Coin', 'Silver Base +6 | 5.0e9 Coin',
  'Cooldown -0.2s | 7.5e9 Coin', 'Gold Max +1 | 1.0e10 Coin', 'Platinum Chance +2% | 1.2e10 Coin',
  'Silver Max +15 | 1.5e10 Coin', 'Copper Base +1234 | 2.0e10 Coin', 'Platinum Chance +4% | 2.5e10 Coin',
  'Gold Max +1 | 2.5e10 Coin', 'Stone Base +10101 | 3.0e10 Coin', 'Silver Base +12 | 4.0e10 Coin',
  'Platinum Chance +5% | 5.0e10 Coin', 'Gold Base +1 | 6.0e10 Coin', 'Silver Base +25 | 7.0e10 Coin',
  'Sell Multiplier x3.0 | 1.0e11 Coin', 'Gold Max +3 | 1.2e11 Coin', 'Cooldown -0.1s | 1.5e11 Coin',
  'Platinum Chance +6% | 2.0e11 Coin', 'Gold Base +3 | 2.2e11 Coin', 'Gold Max +7 | 2.5e11 Coin',
  'Iron Max +500 | 3.0e11 Coin', 'Iron Base +300 | 3.0e11 Coin', 'Copper Max +7777 | 5.0e11 Coin',
  'Gold Base +8 | 5.0e11 Coin', 'Silver Max +123 | 7.7e11 Coin', 'Gold Max +20 | 1.0e12 Coin',
  'Platinum Chance +10% | 1.0e12 Coin', 'Platinum Chance +15% | 1.5e12 Coin', 'Iron Max +1500 | 2.0e12 Coin',
  'Copper Base +4000 | 2.0e12 Coin', 'Stone Base +3.0e5 | 2.0e12 Coin', 'Cooldown -0.1s | 3.3e12 Coin',
  'Platinum Chance +25% | 5.0e12 Coin', 'Iron Base +1200 | 8.0e12 Coin', 'Platinum Chance +30% | 1.0e13 Coin',
  'Platinum Max +1 | 2.0e13 Coin', 'Gold Base +40 | 2.5e13 Coin', 'Iron Max +5000 | 3.0e13 Coin',
  'Diamond Chance +2% | 5.0e13 Coin', 'Iron Base +6000 | 8.0e13 Coin', 'Diamond Chance +3% | 1.0e14 Coin',
  'Platinum Base +1 | 1.2e14 Coin', 'Copper Max +5.0e4 | 1.5e14 Coin', 'Iron Max +2.5e4 | 2.5e14 Coin',
  'Platinum Base +3 | 3.0e14 Coin', 'Iron Max +18000 | 3.0e14 Coin', 'Diamond Chance +3% | 5.0e14 Coin',
  'Autominer Power x4.0 | 8.0e14 Coin', 'Platinum Base +8 | 1.0e15 Coin', 'Silver Max +9000 | 1.0e15 Coin',
  'Platinum Base +32 | 4.0e15 Coin', 'Diamond Chance +5% | 5.0e15 Coin', 'Iron Base +1.0e5 | 1.0e16 Coin',
  'Silver Base +2.0e4 | 1.5e16 Coin', 'Diamond Chance +5% | 2.0e16 Coin', 'Diamond Chance +10% | 3.0e16 Coin',
  'Diamond Chance +20% | 4.0e16 Coin', 'Copper Max +3.0e6 | 1.0e17 Coin', 'Diamond Max +1 | 2.5e17 Coin',
  'Gold Base +800 | 3.0e17 Coin', 'Diamond Base +1 | 5.0e17 Coin', 'Sell Multiplier x2.5 | 8.0e17 Coin',
  'Gold Max +2000 | 2.0e18 Coin', 'Diamond Max +3 | 3.0e18 Coin', 'Iron Base +8.0e5 | 3.0e18 Coin',
  'Iron Max +1.0e6 | 3.5e18 Coin', 'Diamond Base +10 | 5.0e18 Coin', 'Emerald Chance +1% | 6.0e18 Coin',
  'Sell Multiplier x2.0 | 1.0e19 Coin', 'Emerald Chance +1% | 1.0e19 Coin', 'Emerald Chance +2% | 1.5e19 Coin',
  'Emerald Chance +2% | 2.0e19 Coin', 'Emerald Chance +3% | 4.0e19 Coin']
oreupgradelistr =
  ['Sell Multiplier x5.0 | 1.4e7 Stone', 'Gold Base +25 | 15 Platinum', 'Iron Base +1500 | 1.0e5 Iron',
    'Copper Max +1.0e4 | 5.5e5 Copper', 'Cooldown -0.1s | 50 Platinum', 'Platinum Max +1 | 4000 Gold',
    'Iron Max +4000 | 1.0e4 Silver', 'Platinum Base +1 | 1.5e8 Stone', 'Copper Base +2.5e4 | 4.0e4 Silver',
    'Sell Multiplier x2.0 | 400 Platinum', 'Copper Base +2.0e4 | 1.5e4 Gold', 'Stone Base +1.0e5 | 1 Diamond',
    'Platinum Max +7 | 4 Diamond', 'Autominer Power x6.0 | 1234 Platinum', 'Silver Base +4000 | 3.0e8 Stone',
    'Autominer Power x3.0 | 15 Diamond', 'Platinum Base +20 | 1.5e5 Gold', 'Iron Base +4.4e4 | 4.4e7 Copper',
    'Sell Multiplier x2.0 | 1.0e4 Platinum', 'Platinum Max +100 | 2.0e4 Gold', 'Platinum Base +150 | 8.0e4 Gold',
    'Copper Base +1.0e6 | 1.0e9 Stone', 'Sell Multiplier x3.0 | 1.0e6 Gold', 'Cooldown -0.1s | 2.0e9 Stone',
    'Diamond Chance +25% | 80 Diamond', 'Diamond Chance +25% | 100 Diamond', 'Gold Max +300 | 2.0e4 Platinum',
    'Diamond Base +1 | 250 Diamond', 'Silver Max +5.0e4 | 8.0e5 Gold', 'Stone Max +1.0e7 | 1.0e5 Platinum',
    'Stone Base +1.5e7 | 400 Diamond', 'Copper Base +9.0e6 | 5.0e9 Stone', 'Autominer Power x2.0 | 700 Diamond',
    'Sell Multiplier x2.0 | 5.0e6 Silver', 'Diamond Base +4 | 1000 Diamond', 'Diamond Max +7 | 1000 Diamond',
    'Sell Multiplier x1.6 | 1 Emerald', 'Diamond Max +25 | 2 Emerald', 'Autominer Power x2.0 | 10 Emerald',
    'Stone Base +8.0e7 | 4.0e10 Stone', 'Copper Base +5.0e7 | 2.0e9 Copper', '']
function deepcopy(a, b) {
  for (j = 0; a.length != b.length; j++) {
    b.push(a[j])
  }
}
pickupglist = [3, 15, 30, 55, 75, 110, 135, 160]
pickupgprice = ['10 Stone', '20 Copper', '30 Iron', '40 Silver', '60 Gold', '300 Platinum', '1200 Diamond', '3000 Emerald']
tierupgprice = ['NaN Stone', '3000 Copper', '2000 Iron', '1500 Silver', '1750 Gold', '4000 Platinum', '1.0e4 Diamond', 'Infinity Emerald']
picknames = ['Wooden Pickaxe', 'Stone Pickaxe', 'Copper Pickaxe', 'Iron Pickaxe', 'Silver Pickaxe', 'Gold Pickaxe', 'Platinum Pickaxe', 'Diamond Pickaxe']
pickcolor = ['#742', '#555', '#fb5', '#ccc', '#ddd', '#ee6', '#dda', '#9cf']
orelist = [stone, copper, iron, silver, gold, platinum, diamond, emerald]
orelists = ["Stone", "Copper", "Iron", "Silver", "Gold", "Platinum", "Diamond", "Emerald", "Ruby"]
// [type, base, max]
// [type, percent]
// type 2 = random base to base+max
// type 1 = random percent to 1
// type 0 = locked
stonetype = [2, 100, 1, 1]
coppertype = [0, 50, 1, 0]
irontype = [0, 30, 1, 0]
silvertype = [0, 10, 1, 0]
goldtype = [0, 5, 1, 0]
platinumtype = [0, 3, 1, 0]
diamondtype = [0, 2, 1, 0]
emeraldtype = [0, 1, 1, 0]
selectedupgrade = 0
selectedartifact = 0
upgradecopied = []
oreupgradelist = []
oreupgradeboughtlist = []
oreupgradecopied = []
oreupgrades = 0
cost = 0
box = [0, 0, 0, 0, 0] // common, uncommon, rare, epic, legendary
artifactstat = [
  {id:0, level:0, maxlevel:30, name:"Improved Gear", lore:"Decrease Autominer Interval Limit", rarity:0},
  {id:1, level:0, maxlevel:20, name:"Broken Necklace", lore:"Critical Mine with a constant Probability", rarity:0},
  {id:2, level:0, maxlevel:50, name:"Slow Machine", lore:"Increase Cooldown, but you get more ores", rarity:0},
  {id:3, level:0, maxlevel:15, name:"Automated Clock", lore:"Increase Autominer Power based on Time Played", rarity:1}, 
  {id:4, level:0, maxlevel:30, name:"Enchanted Ore", lore:"Increase Sell Multiplier based on Mine Count", rarity:1},
  {id:5, level:0, maxlevel:10, name:"Mechanical Pickaxe", lore:"Mine Automatically(Not Autominer), but Cooldown in longer", rarity:2}
]
artifactpage = 0
debug = true
// artifacts
/*
Improved Gear / Decrease Autominer Interval Limit / MAX LEVEL 30 / Common
Broken Necklace / Critical Mine with a constant probability / MAX LEVEL 20 / Common
Slow Machine / Increase Cooldown, but you get more ores / MAX LEVEL 50 / Common
Automated Clock / Increases Autominer Power based on Time Played / MAX LEVEL 15 / Uncommon
Enchanted Ore / Increase Sell Multiplier based on Mine Count / MAX LEVEL 30 / Uncommon
Mechanical Pickaxe / Mine Automatically(Not Autominer), but Cooldown is longer / MAX LEVEL 10 / Rare
*/