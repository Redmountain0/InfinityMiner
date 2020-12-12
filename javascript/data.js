function exportdata() {
    obj = document.getElementById("selected");
    obj.style.display = 'block'
    obj.value = btoa(JSON.stringify(localStorage));
    obj.select();
    document.execCommand("copy");
    obj.setSelectionRange(0, 0);
    obj.style.display = 'none'
  }
  function importdata() {
    imp = prompt()
    if (imp == "ERROR") {notationsel = 5}
    importjson = JSON.parse(atob(imp))
    localStorage.clear()
    for (i in importjson) {
      localStorage.setItem(i, importjson[i])
    }
    load()
  }    
  function save() {
    localStorage.upgradebought = JSON.stringify(upgradeboughtlist)
    localStorage.oreupgradebought = JSON.stringify(oreupgradeboughtlist)
    localStorage.stone = stone
    localStorage.copper = copper
    localStorage.iron = iron
    localStorage.silver = silver
    localStorage.gold = gold
    localStorage.platinum = platinum
    localStorage.diamond = diamond
    localStorage.emerald = emerald
    localStorage.ruby = ruby
    localStorage.coin = coin
    localStorage.picklevel = picklevel
    localStorage.autominerunlock = Number(autominerunlock)
    localStorage.artifactunlock = Number(artifactunlock)
    localStorage.autominertier = autominertier
    localStorage.intervalupgs = intervalupgs
    localStorage.powerupgs = powerupgs
    localStorage.minecount = minecount
    localStorage.playtime = playtime
    localStorage.box = JSON.stringify(box)
    localStorage.boxgain = boxgain
    localStorage.artifacts = JSON.stringify(artifactstat)
  }
  function isundefined(element) {
    if (element.id === 6) {
      return true
    }
  }
  function load() {
    upgradeboughtlist = JSON.parse(localStorage.upgradebought || "[]")
    oreupgradeboughtlist = JSON.parse(localStorage.oreupgradebought || "[]")
    sellmult = Number(localStorage.sellmult || 1)
    picklevel = Number(localStorage.picklevel || 0)
    autominertier = Number(localStorage.autominertier || 1)
    autominerpowermult = Number(localStorage.autominerpowermult || 1)
    intervalupgs = Number(localStorage.intervalupgs || 0)
    powerupgs = Number(localStorage.powerupgs || 0)
    artifactstat = JSON.parse(localStorage.artifacts || `[{"id":0,"level":0,"maxlevel":30,"name":"Improved Gear","lore":"Decrease Autominer Interval Limit","rarity":0},{"id":1,"level":0,"maxlevel":20,"name":"Broken Necklace","lore":"Critical Mine with a constant Probability","rarity":0},{"id":2,"level":0,"maxlevel":50,"name":"Slow Machine","lore":"Increase Cooldown, but you get more ores","rarity":0},{"id":3,"level":0,"maxlevel":15,"name":"Automated Clock","lore":"Increase Autominer Power based on Time Played","rarity":1},{"id":4,"level":0,"maxlevel":30,"name":"Enchanted Ore","lore":"Increase Sell Multiplier based on Mine Count","rarity":1},{"id":5,"level":0,"maxlevel":10,"name":"Mechanical Pickaxe","lore":"Mine Automatically(Not Autominer), but Cooldown in longer","rarity":2}]`)
    if (artifactstat.find(isundefined) == undefined) {
      artifactstat.push({ id: 6, level: 0, maxlevel: 10, name: "Inferno Autominer", lore: "Autominer power multiplier Increases over time but resets with target ore changes", rarity: 2 })
    }
    box = JSON.parse(localStorage.box || "[0, 0, 0, 0, 0]")
    boxgain = Number(localStorage.boxgain || 0)
    playtime = Number(localStorage.playtime || 0)
    minecount = Number(localStorage.minecount || 0)
    autominerunlock = Boolean(Number(localStorage.autominerunlock) || 0)
    artifactunlock = Boolean(Number(localStorage.artifactunlock) || 0)
    /*
    stonetype = [2, 100, 1, 1]
    coppertype = [0, 50, 1, 0]
    irontype = [0, 30, 1, 0]
    silvertype = [0, 10, 1, 0]
    goldtype = [0, 5, 1, 0]
    platinumtype = [0, 3, 1, 0]
    diamondtype = [0, 2, 1, 0]
    emeraldtype = [0, 1, 1, 0]
    */

    // upgrade load
    upgradecopied = []
    oreupgradecopied = []
    upgradelist = []
    oreupgradelist = []
    upgradeboughtlist2 = []
    oreupgradeboughtlist2 = []
    deepcopy(upgradelistr, upgradelist)
    deepcopy(oreupgradelistr, oreupgradelist)
    deepcopy(upgradeboughtlist, upgradecopied)
    deepcopy(oreupgradeboughtlist, oreupgradecopied)
    upgradecopied.sort(function (a, b) {
      return a - b;
    })
    oreupgradecopied.sort(function (a, b) {
      return a - b;
    })
    upgradelist.push('Unknown | Infinity Coin')
    upgradelist.push('Unknown | Infinity Coin')
    upgradelist.push('Unknown | Infinity Coin')
    upgradelist.push('Unknown | Infinity Coin')
    upgradelist.push('Unknown | Infinity Coin')
    oreupgradelist.push('Unknown | Infinity Ore')
    oreupgradelist.push('Unknown | Infinity Ore')
    oreupgradelist.push('Unknown | Infinity Ore')
    oreupgradelist.push('Unknown | Infinity Ore')
    oreupgradelist.push('Unknown | Infinity Ore')
    stonetype = [2, 100, 1, 1]
    coppertype = [0, 50, 1, 0]
    irontype = [0, 30, 1, 0]
    silvertype = [0, 10, 1, 0]
    goldtype = [0, 5, 1, 0]
    platinumtype = [0, 3, 1, 0]
    diamondtype = [0, 2, 1, 0]
    emeraldtype = [0, 1, 1, 0]
    rubytype = [0, 1, 1, 0]
    cooldown = 50
    sellmult = 1
    upgrades = 0
    oreupgrades = 0
    for (i = 0; i < upgradecopied.length; i++) {
      upgradeboughtlist2.push(upgradecopied[i] - i)
    }
    for (i = 0; i < oreupgradecopied.length; i++) {
      oreupgradeboughtlist2.push(oreupgradecopied[i] - i)
    }
    selectedupgrade = 0
    for (i = 0; i < upgradeboughtlist2.length; i++) {
      pickupgradev2(upgradeboughtlist2[i])
    }
    selectedupgrade = 1
    for (i = 0; i < oreupgradeboughtlist2.length; i++) {
      pickupgradev2(oreupgradeboughtlist2[i])
    }
    selectedupgrade = 0
    stone = Number(localStorage.stone || 0)
    copper = Number(localStorage.copper || 0)
    iron = Number(localStorage.iron || 0)
    silver = Number(localStorage.silver || 0)
    gold = Number(localStorage.gold || 0)
    platinum = Number(localStorage.platinum || 0)
    diamond = Number(localStorage.diamond || 0)
    emerald = Number(localStorage.emerald || 0)
    ruby = Number(localStorage.ruby || 0)
    coin = Number(localStorage.coin || 0)
    if (picklevel > 0) {
      coppertype[0] = 1
    }
    if (picklevel > 1) {
      irontype[0] = 1
    }
    if (picklevel > 2) {
      silvertype[0] = 1
    }
    if (picklevel > 3) {
      goldtype[0] = 1
    }
    if (picklevel > 4) {
      platinumtype[0] = 1
    }
    if (picklevel > 5) {
      diamondtype[0] = 1
    }
    if (picklevel > 6) {
      emeraldtype[0] = 1
    }
    if (picklevel > 7) {
      rubytype[0] = 1
    }
  }