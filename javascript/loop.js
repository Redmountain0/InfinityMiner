function autominer() {
    setTimeout(function () {
      if (autominerunlock) {
        if (artifactstat[3]["level"] >= 1) {
          playtimeboost = (playtime ** (0.09 + (0.01 * artifactstat[3]["level"])))
        } else { playtimeboost = 1 }
        if (selectedore == 1) { autominergains = Math.floor(autominerpower * autominerpowermult * intervalboost * playtimeboost); stone += autominergains }
        if (selectedore == 2) { autominergains = Math.floor(autominerpower / autominergain[1] * autominerpowermult * intervalboost * playtimeboost); copper += autominergains }
        if (selectedore == 3) { autominergains = Math.floor(autominerpower / autominergain[2] * autominerpowermult * intervalboost * playtimeboost); iron += autominergains }
        if (selectedore == 4) { autominergains = Math.floor(autominerpower / autominergain[3] * autominerpowermult * intervalboost * playtimeboost); silver += autominergains }
        if (selectedore == 5) { autominergains = Math.floor(autominerpower / autominergain[4] * autominerpowermult * intervalboost * playtimeboost); gold += autominergains }
        if (selectedore == 6) { autominergains = Math.floor(autominerpower / autominergain[5] * autominerpowermult * intervalboost * playtimeboost); platinum += autominergains}
        if (selectedore == 7) { autominergains = Math.floor(autominerpower / autominergain[6] * autominerpowermult * intervalboost * playtimeboost); diamond += autominergains }
      }
      autominer()
    }, realinterval)
  }
  autominer()
  setInterval(function () {
    if (intervalupgs >= 39) {
      intervale = 950
    } else { intervale = 900 }
    if (autominerinterval * intervale > 50 / (1.5 ** (artifactstat[0]["level"] + 1))) {
      if (iron >= Math.floor(300 * (1.35 + 0.005 * intervalupgs) ** intervalupgs)) {
        document.getElementById('autominerintervalup').innerHTML = 'Interval Upgrade<br>' + (1000 * autominerinterval).toFixed(1) + 'ms > ' + (intervale * autominerinterval).toFixed(1) + 'ms<br><span style="color: #eee; font-size:2.2vmin">' + notation(Math.floor(300 * (1.35 + 0.005 * intervalupgs) ** intervalupgs)) + ' Iron</span>'
      } else {
        document.getElementById('autominerintervalup').innerHTML = 'Interval Upgrade<br>' + (1000 * autominerinterval).toFixed(1) + 'ms > ' + (intervale * autominerinterval).toFixed(1) + 'ms<br>' + notation(Math.floor(300 * (1.35 + 0.005 * intervalupgs) ** intervalupgs)) + ' Iron'
      }
    } else if (autominerinterval * 1000 > 50 / (1.5 ** (artifactstat[0]["level"] + 1))) {
      if (iron >= Math.floor(300 * (1.35 + 0.005 * intervalupgs) ** intervalupgs)) {
        document.getElementById('autominerintervalup').innerHTML = 'Interval Upgrade<br>' + (1000 * autominerinterval).toFixed(1) + 'ms > ' + (50 / (1.5 ** (artifactstat[0]["level"] + 1))).toFixed(1) + 'ms<br><span style="color: #eee; font-size:2.2vmin">' + notation(Math.floor(300 * (1.35 + 0.005 * intervalupgs) ** intervalupgs)) + ' Iron</span>'
      } else {
        document.getElementById('autominerintervalup').innerHTML = 'Interval Upgrade<br>' + (1000 * autominerinterval).toFixed(1) + 'ms > ' + (50 / (1.5 ** (artifactstat[0]["level"] + 1))).toFixed(1) + 'ms<br>' + notation(Math.floor(300 * (1.35 + 0.005 * intervalupgs) ** intervalupgs)) + ' Iron'
      }
    } else {
      document.getElementById('autominerintervalup').innerHTML = 'Interval Upgrade<br> ' + (50 / (1.5 ** (artifactstat[0]["level"] + 1))).toFixed(1) + ' ms'
    }
    if (copper >= Math.floor(1000 * ((1.15 * (1.005 ** powerupgs)) ** powerupgs))) {
      document.getElementById('autominerpowerup').innerHTML = 'Power Upgrade<br>' + notation(100 * ((1.15 ** powerupgs) + powerupgs)) + ' > ' + notation(100 * ((1.15 ** (powerupgs + 1)) + powerupgs + 1)) + '<br><span style="color: #eee; font-size:2.2vmin">' + notation(Math.floor(1000 * ((1.15 * (1.005 ** powerupgs)) ** powerupgs))) + ' Copper</span>'
    } else {
      document.getElementById('autominerpowerup').innerHTML = 'Power Upgrade<br>' + notation(100 * ((1.15 ** powerupgs) + powerupgs)) + ' > ' + notation(100 * ((1.15 ** (powerupgs + 1)) + powerupgs + 1)) + '<br>' + notation(Math.floor(1000 * ((1.15 * (1.005 ** powerupgs)) ** powerupgs))) + ' Copper'
    }
    document.getElementById('autominerselected').innerHTML = picknames[selectedore].split(" ")[0]
    document.getElementById('autominerselected').style.color = pickcolor[selectedore]
  }, 50)
  setInterval(function () {
    if (curcooldown != 0) {
      curcooldown -= 1
    } else if (automine == true) { mine() }
    document.getElementById('commonbox').innerHTML = 'Common Box x' + box[0]
    document.getElementById('uncommonbox').innerHTML = 'Uncommon Box x' + box[1]
    document.getElementById('rarebox').innerHTML = 'Rare Box x' + box[2]
    document.getElementById('epicbox').innerHTML = 'Epic Box x' + box[3]
    document.getElementById('legendbox').innerHTML = 'Legendary Box x' + box[4]
    document.getElementById('cooldown').innerHTML = 'cooldown: ' + curcooldown / 10 + 's'
    document.getElementById('coin').innerHTML = notation(coin) + " Coin"
    document.getElementById('stone').innerHTML = 'Stone x' + notation(stone)
    document.getElementById('copper').innerHTML = 'Copper x' + notation(copper)
    document.getElementById('iron').innerHTML = 'Iron x' + notation(iron)
    document.getElementById('silver').innerHTML = 'Silver x' + notation(silver)
    document.getElementById('gold').innerHTML = 'Gold x' + notation(gold)
    document.getElementById('platinum').innerHTML = 'Platinum x' + notation(platinum)
    document.getElementById('diamond').innerHTML = 'Diamond x' + notation(diamond)
    document.getElementById('emerald').innerHTML = 'Emerald x' + notation(emerald)
    document.getElementById('ruby').innerHTML = 'Ruby x' + notation(ruby)
    if (upgrades < pickupglist[picklevel]) { document.getElementById('picklvup').innerHTML = 'Level up [ ' + upgrades + " / " + pickupglist[picklevel] + " Upgrades ]" }
    else { document.getElementById('picklvup').innerHTML = 'Level up [ ' + pickupgprice[picklevel] + ' ]' }
    document.getElementById('curpicklv').innerHTML = picknames[picklevel]
    document.getElementById('curpicklv').style.color = pickcolor[picklevel]
    document.getElementById('stonepermine').innerHTML = '' + Math.floor((picklevel + 2) / 2) + ' ~ ' + Math.floor((picklevel + 3) / 1.5)

    artifactunlocked = artifactstat.filter(isTrue)
    raritylist = ["Common", "Uncommon", "Rare", "Epic", "Legendary"]
    raritycolor = ["#fb5", "#dcc", "#aae", "#c9e", "#ee6"]
    raritycolordark = ["#c95", "#a88", "#66d", "#75a", "#aa5"]
    for (i = (artifactpage * 4) + 1; i < (artifactpage * 4) + 5; i++) {
      if (artifactunlocked.length >= i) {
        document.getElementById('AFname' + (i - (artifactpage * 4))).innerHTML = artifactunlocked[i - 1]["name"]
        document.getElementById('AFrarity' + (i - (artifactpage * 4))).innerHTML = '[' + raritylist[artifactunlocked[i - 1]["rarity"]] + ']'
        document.getElementById('AFrarity' + (i - (artifactpage * 4))).style.color = raritycolor[artifactunlocked[i - 1]["rarity"]]
        document.getElementById('AFrarity' + (i - (artifactpage * 4))).style.textShadow = '0px 0px 5px' + raritycolordark[artifactunlocked[i - 1]["rarity"]]
        document.getElementById('AFlevel' + (i - (artifactpage * 4))).innerHTML = 'Lv. ' + artifactunlocked[i - 1]["level"] + ' / ' + artifactunlocked[i - 1]["maxlevel"]
        if (i - (artifactpage * 4) == clickedartifact) {
          document.getElementById('AFdesc' + (i - (artifactpage * 4))).innerHTML = artifactunlocked[i - 1]["stat"]
        } else {
          document.getElementById('AFdesc' + (i - (artifactpage * 4))).innerHTML = artifactunlocked[i - 1]["lore"]
        }
      } else {
        document.getElementById('AFname' + (i - (artifactpage * 4))).innerHTML = ' '
        document.getElementById('AFrarity' + (i - (artifactpage * 4))).innerHTML = ' '
        document.getElementById('AFlevel' + (i - (artifactpage * 4))).innerHTML = ' '
        document.getElementById('AFdesc' + (i - (artifactpage * 4))).innerHTML = ' '
      }
    }

    if (artifactstat[5]["level"] >= 1) {
      document.getElementById("automine").style.display = 'block'
    } else { document.getElementById("automine").style.display = 'none' }

    if (selectedupgrade == 0) {
      document.getElementById('pickupgrade1detail').innerHTML = upgradelist[0].split('|')[0]
      document.getElementById('pickupgrade2detail').innerHTML = upgradelist[1].split('|')[0]
      document.getElementById('pickupgrade3detail').innerHTML = upgradelist[2].split('|')[0]
      document.getElementById('pickupgrade4detail').innerHTML = upgradelist[3].split('|')[0]
      document.getElementById('pickupgrade5detail').innerHTML = upgradelist[4].split('|')[0]
      document.getElementById('pickupgrade1price').innerHTML = notation(Number(upgradelist[0].split('|')[1].split(' ')[1])) + ' ' + upgradelist[0].split('|')[1].split(' ')[2]
      document.getElementById('pickupgrade2price').innerHTML = notation(Number(upgradelist[1].split('|')[1].split(' ')[1])) + ' ' + upgradelist[1].split('|')[1].split(' ')[2]
      document.getElementById('pickupgrade3price').innerHTML = notation(Number(upgradelist[2].split('|')[1].split(' ')[1])) + ' ' + upgradelist[2].split('|')[1].split(' ')[2]
      document.getElementById('pickupgrade4price').innerHTML = notation(Number(upgradelist[3].split('|')[1].split(' ')[1])) + ' ' + upgradelist[3].split('|')[1].split(' ')[2]
      document.getElementById('pickupgrade5price').innerHTML = notation(Number(upgradelist[4].split('|')[1].split(' ')[1])) + ' ' + upgradelist[4].split('|')[1].split(' ')[2]
    } else if (selectedupgrade == 1) {
      document.getElementById('pickupgrade1detail').innerHTML = oreupgradelist[0].split('|')[0]
      document.getElementById('pickupgrade2detail').innerHTML = oreupgradelist[1].split('|')[0]
      document.getElementById('pickupgrade3detail').innerHTML = oreupgradelist[2].split('|')[0]
      document.getElementById('pickupgrade4detail').innerHTML = oreupgradelist[3].split('|')[0]
      document.getElementById('pickupgrade5detail').innerHTML = oreupgradelist[4].split('|')[0]
      document.getElementById('pickupgrade1price').innerHTML = notation(Number(oreupgradelist[0].split('|')[1].split(' ')[1])) + ' ' + oreupgradelist[0].split('|')[1].split(' ')[2]
      document.getElementById('pickupgrade2price').innerHTML = notation(Number(oreupgradelist[1].split('|')[1].split(' ')[1])) + ' ' + oreupgradelist[1].split('|')[1].split(' ')[2]
      document.getElementById('pickupgrade3price').innerHTML = notation(Number(oreupgradelist[2].split('|')[1].split(' ')[1])) + ' ' + oreupgradelist[2].split('|')[1].split(' ')[2]
      document.getElementById('pickupgrade4price').innerHTML = notation(Number(oreupgradelist[3].split('|')[1].split(' ')[1])) + ' ' + oreupgradelist[3].split('|')[1].split(' ')[2]
      document.getElementById('pickupgrade5price').innerHTML = notation(Number(oreupgradelist[4].split('|')[1].split(' ')[1])) + ' ' + oreupgradelist[4].split('|')[1].split(' ')[2]
    }
    if (orelist[autominertier] >= tierupgprice[autominertier].split(" ")[0]) {
      document.getElementById('autominertierup').innerHTML = 'Tier Upgrade<br>' + tierupgprice[autominertier - 1].split(" ")[1] + ' > ' + tierupgprice[autominertier].split(" ")[1] + '<br><span style="color: #eee; font-size:2.2vmin">' + notation(Number(tierupgprice[autominertier].split(" ")[0])) + ' ' + tierupgprice[autominertier].split(" ")[1] + "</span>"
    } else {
      document.getElementById('autominertierup').innerHTML = 'Tier Upgrade<br>' + tierupgprice[autominertier - 1].split(" ")[1] + ' > ' + tierupgprice[autominertier].split(" ")[1] + '<br>' + notation(Number(tierupgprice[autominertier].split(" ")[0])) + ' ' + tierupgprice[autominertier].split(" ")[1]
    }
    if (autominerunlock == true) {
      document.getElementById('autominerlocked').style.display = 'none'
      for (i = 0; i < document.getElementsByClassName('autominer').length; i++) { document.getElementsByClassName('autominer')[i].style.display = 'block' }
    } else {
      document.getElementById('autominerlocked').style.display = 'block'
      for (i = 0; i < document.getElementsByClassName('autominer').length; i++) { document.getElementsByClassName('autominer')[i].style.display = 'none' }
    }
    if (artifactunlock == true) {
      if (selectedartifact == 0) {
        document.getElementById('artifactlocked').style.display = 'none'
        document.getElementById('boxselect').style.display = 'block'
        document.getElementById('artifactselect').style.display = 'block'
        for (i = 0; i < document.getElementsByClassName('box').length; i++) { document.getElementsByClassName('box')[i].style.display = 'block' }
        for (i = 0; i < document.getElementsByClassName('artifacts').length; i++) { document.getElementsByClassName('artifacts')[i].style.display = 'none' }
      }
      else {
        document.getElementById('artifactlocked').style.display = 'none'
        document.getElementById('boxselect').style.display = 'block'
        document.getElementById('artifactselect').style.display = 'block'
        for (i = 0; i < document.getElementsByClassName('box').length; i++) { document.getElementsByClassName('box')[i].style.display = 'none' }
        for (i = 0; i < document.getElementsByClassName('artifacts').length; i++) { document.getElementsByClassName('artifacts')[i].style.display = 'block' }
      }
    } else {
      document.getElementById('artifactlocked').style.display = 'block'
      for (i = 0; i < document.getElementsByClassName('artifact').length; i++) { document.getElementsByClassName('artifact')[i].style.display = 'none' }
    }
    if (debug == true) {
      for (i = 0; i < document.getElementsByClassName('debug').length; i++) { document.getElementsByClassName('debug')[i].style.display = 'block' }
    } else {
      for (i = 0; i < document.getElementsByClassName('debug').length; i++) { document.getElementsByClassName('debug')[i].style.display = 'none' }
    }
    if (coppertype[0] == 1 && coppertype[1] == 100) {
      coppertype[0] = 2
    }
    if (irontype[0] == 1 && irontype[1] == 100) {
      irontype[0] = 2
    }
    if (silvertype[0] == 1 && silvertype[1] == 100) {
      silvertype[0] = 2
    }
    if (goldtype[0] == 1 && goldtype[1] == 100) {
      goldtype[0] = 2
    }
    if (platinumtype[0] == 1 && platinumtype[1] == 100) {
      platinumtype[0] = 2
    }
    if (diamondtype[0] == 1 && diamondtype[1] == 100) {
      diamondtype[0] = 2
    }
    if (emeraldtype[0] == 1 && emeraldtype[1] == 100) {
      emeraldtype[0] = 2
    }
    orelist = [stone, copper, iron, silver, gold, platinum, diamond, emerald, ruby]


    artifactstat[0]["stat"] = "Cooldown Limit -" + (50 - (50 / (1.5 ** (artifactstat[0]["level"] + 1)))).toFixed(2) + 'ms'
    artifactstat[1]["stat"] = "Crit Chance " + artifactstat[1]["level"] * 2 + '%, Crit Mult x' + Math.floor(30 * (1.4 ** (artifactstat[1]["level"] - 1))) / 10
    artifactstat[2]["stat"] = "Cooldown x" + ((artifactstat[2]["level"] + 1) ** 1.2).toFixed(2) + ', Mine Mult x' + ((artifactstat[2]["level"] + 1) ** 1.4).toFixed(2)
    artifactstat[3]["stat"] = "Autominer Power x" + (playtime ** (0.09 + (0.01 * artifactstat[3]["level"]))).toFixed(3)
    artifactstat[4]["stat"] = "Sell Multiplier x" + (minecount ** (0.18 + (0.02 * artifactstat[4]["level"]))).toFixed(3)
    artifactstat[5]["stat"] = "Cooldown x5.00, Automine Duration ∞min"
    buyabletest(0)
    buyabletest(1)
    buyabletest(2)
    buyabletest(3)
    buyabletest(4)
    if (3000 * (0.9 ** intervalupgs) > 50) {
      autominerinterval = 3 * (0.9 ** intervalupgs)
    } else if (50 * (0.95 ** (intervalupgs - 39)) > 50 / (1.5 ** (artifactstat[0]["level"] + 1))) {
      autominerinterval = 0.05 * (0.95 ** (intervalupgs - 39))
    } else {
      autominerinterval = 0.05 / (2 ** artifactstat[0]["level"])
    }

    if (autominerinterval > 0.05) {
      realinterval = autominerinterval * 1000
      intervalboost = 1
    } else {
      realinterval = 50
      intervalboost = autominerinterval * 20
    }

    autominerpower = 100 * ((1.16 ** powerupgs) + powerupgs)
    oretypelist = [stonetype, coppertype, irontype, silvertype, goldtype, platinumtype, diamondtype, emeraldtype, rubytype]
    autominergain = [1, 5, 40, 400, 5000, 300000, 60000000] // 10 100 1300 25000 1e6 8e7 2e10 5e13
    for (i = 0; i < oretypelist.length; i++) {
      if (oretypelist[i][0] == 0) { document.getElementById(orelists[i] + 'gain').innerHTML = '0%' }
      if (oretypelist[i][0] == 1) { document.getElementById(orelists[i] + 'gain').innerHTML = String(oretypelist[i][1]) + '% x' + Math.floor((artifactstat[2]["level"] + 1) ** 1.4) }
      if (oretypelist[i][0] == 2) { document.getElementById(orelists[i] + 'gain').innerHTML = notation(oretypelist[i][2] * Math.floor((artifactstat[2]["level"] + 1) ** 1.4)) + ' - ' + notation((oretypelist[i][2] + oretypelist[i][3]) * Math.floor((artifactstat[2]["level"] + 1) ** 1.4)) }
    }
    if (artifactstat[3]["level"] >= 1) {
      playtimeboost = (playtime ** (0.09 + (0.01 * artifactstat[3]["level"])))
    } else { playtimeboost = 1 }
    document.getElementById('autominergaintick').innerHTML = notation(autominerpower * autominerpowermult / autominergain[selectedore - 1] * playtimeboost) + ' ' + orelists[selectedore - 1] + ' / tick'
    document.getElementById('autominergainsec').innerHTML = notation(autominerpower * autominerpowermult / autominergain[selectedore - 1] * (1 / autominerinterval) * playtimeboost) + ' ' + orelists[selectedore - 1] + ' / second'
    playtime += 1
    if (clicktimer <= 0) {
      clickedartifact = -1
    } else {
      clicktimer -= 1
    }
    document.getElementById('notationname').innerHTML = notationlist[notationsel]
    document.getElementById('Boxgain').innerHTML = ((artifactstat[2]["level"] + 1) ** 1.4 / (2 ** boxgain)).toFixed(3) + '%'
    if (selectedartifact == 0) {document.getElementById('Boxgain').style.display = 'block'} else {document.getElementById('Boxgain').style.display = 'none'}
    /*           } else if (selectedupgrade == 1) {
        if (oreupgradelist[num].split("|")[1].split(" ")[2] == "Stone") {
          stone -= oreupgradelist[num].split("|")[1].split(" ")[1]}
        if (oreupgradelist[num].split("|")[1].split(" ")[2] == "Copper") {
          copper -= oreupgradelist[num].split("|")[1].split(" ")[1]}
        if (oreupgradelist[num].split("|")[1].split(" ")[2] == "Iron") {
          iron -= oreupgradelist[num].split("|")[1].split(" ")[1]}
        if (oreupgradelist[num].split("|")[1].split(" ")[2] == "Silver") {
          silver -= oreupgradelist[num].split("|")[1].split(" ")[1]}
        if (oreupgradelist[num].split("|")[1].split(" ")[2] == "Gold") {
          gold -= oreupgradelist[num].split("|")[1].split(" ")[1]}
        if (oreupgradelist[num].split("|")[1].split(" ")[2] == "Platinum") {
          platinum -= oreupgradelist[num].split("|")[1].split(" ")[1]}
        upgradeboughtlist.push(oreupgradelistr.indexOf(oreupgradelist[num]))
        oreupgradelist.splice(num, 1)
        oreupgradeboughtlist.sort(function(a, b) {
          return a - b;
          */
  }, 100)