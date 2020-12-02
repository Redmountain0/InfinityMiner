function buyabletest(num) {
  if (selectedupgrade == 0) {
  if (upgradelist[num].split("|")[1].split(" ")[1] <= coin) {
    if (upgradelist[num].split("|")[0].split(" ")[0] == "Copper") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (coppertype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (coppertype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Iron") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (irontype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (irontype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Silver") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (silvertype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (silvertype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Gold") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (goldtype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (goldtype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Platinum") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (platinumtype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (platinumtype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Diamond") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (diamondtype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (diamondtype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Emerald") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (emeraldtype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (emeraldtype[0] == 1) {i = true}
        else {i = false}
      }
    } else {
      i = true
    }
  } else {i=false}
  if (i) {
    document.getElementById('pickupgrade' + (num + 1) + 'price').classList.add("buyable")
  } else {
    document.getElementById('pickupgrade' + (num + 1) + 'price').classList.remove("buyable")
  }
} else {
  cost = oreupgradelist[num].split("|")[1].split(" ")[2]
  if (orelist[orelists.indexOf(cost)] >= oreupgradelist[num].split("|")[1].split(" ")[1]) {
    if (upgradelist[num].split("|")[0].split(" ")[0] == "Copper") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (coppertype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (coppertype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Iron") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (irontype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (irontype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Silver") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (silvertype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (silvertype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Gold") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (goldtype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (goldtype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Platinum") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (platinumtype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (platinumtype[0] == 1) {i = true}
        else {i = false}
      }
    } else if (upgradelist[num].split("|")[0].split(" ")[0] == "Diamond") {
      if (upgradelist[num].split("|")[0].split(" ")[1] == "Max" ||
      upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
        if (diamondtype[0] == 2) {i = true}
        else {i = false}
      } else {
        if (diamondtype[0] == 1) {i = true}
        else {i = false}
      }
    } else {
      i = true
    }
  } else {i=false}
  if (i) {
    document.getElementById('pickupgrade' + (num + 1) + 'price').classList.add("buyable")
  } else {
    document.getElementById('pickupgrade' + (num + 1) + 'price').classList.remove("buyable")
  }
}
}
function pickupgrade(num) {
  if (selectedupgrade == 0) {
    if (upgradelist[num].split("|")[1].split(" ")[1] <= coin) {
      undef = upgrade(num, upgradelist)
      console.log(undef)
      if (undef == 0) {return}
      coin -= upgradelist[num].split("|")[1].split(" ")[1]
      upgrades += 1
      upgradeboughtlist.push(upgradelistr.indexOf(upgradelist[num]))
      upgradelist.splice(num, 1)
      upgradeboughtlist.sort(function(a, b) {
        return a - b;
      })
    }
  } else if (selectedupgrade == 1) {
    cost = oreupgradelist[num].split("|")[1].split(" ")[2]
    console.log(orelist[orelists.indexOf(cost)])
    console.log(oreupgradelist[num].split("|")[1].split(" ")[1])
    if (orelist[orelists.indexOf(cost)] >= oreupgradelist[num].split("|")[1].split(" ")[1]) {
      undef = upgrade(num, oreupgradelist)
      console.log(undef)
      if (undef == 0) {return}
      if (cost == "Stone") {
        stone -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Copper") {
        copper -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Iron") {
        iron -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Silver") {
        silver -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Gold") {
        gold -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Platinum") {
        platinum -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Diamond") {
        diamond -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Emerald") {
        emerald -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      oreupgrades += 1
      oreupgradeboughtlist.push(oreupgradelistr.indexOf(oreupgradelist[num]))
      oreupgradelist.splice(num, 1)
      oreupgradeboughtlist.sort(function(a, b) {
        return a - b;
      })
    }
  }
}
function pickupgradev2(num) {
  if (selectedupgrade == 0) {
    if (upgradelist[num].split("|")[1].split(" ")[1] <= coin) {
      undef = upgrade(num, upgradelist)
      console.log(undef)
      if (undef == 0) {return}
      coin -= upgradelist[num].split("|")[1].split(" ")[1]
      upgrades += 1

      upgradelist.splice(num, 1)
      upgradeboughtlist.sort(function(a, b) {
        return a - b;
      })
    }
  } else if (selectedupgrade == 1) {
    cost = oreupgradelist[num].split("|")[1].split(" ")[2]
    console.log(orelist[orelists.indexOf(cost)])
    console.log(oreupgradelist[num].split("|")[1].split(" ")[1])
    if (orelist[orelists.indexOf(cost)] >= oreupgradelist[num].split("|")[1].split(" ")[1]) {
      undef = upgrade(num, oreupgradelist)
      console.log(undef)
      if (undef == 0) {return}
      if (cost == "Stone") {
        stone -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Copper") {
        copper -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Iron") {
        iron -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Silver") {
        silver -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Gold") {
        gold -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Platinum") {
        platinum -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Diamond") {
        diamond -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      if (cost == "Emerald") {
        emerald -= oreupgradelist[num].split("|")[1].split(" ")[1]
      }
      oreupgrades += 1
      oreupgradelist.splice(num, 1)
      oreupgradeboughtlist.sort(function(a, b) {
        return a - b;
      })
    }
  }
}
function upgrade(num, upgradelist) {
  if (upgradelist[num].split("|")[0].split(" ")[0] == "Stone") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Max") {
          stonetype[3] += Number(upgradelist[num].split("|")[0].split(" ")[2])
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
          stonetype[2] += Number(upgradelist[num].split("|")[0].split(" ")[2])
        }
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Copper") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Chance") {
          if (coppertype[0] == 1) {
            coppertype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,3))
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Max") {
          if (coppertype[0] == 2) {
            coppertype[3] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
          if (coppertype[0] == 2) {
            coppertype[2] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
        
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Iron") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Chance") {
          if (irontype[0] == 1) {
          irontype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,3))
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Max") {
          if (irontype[0] == 2) {
          irontype[3] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
          if (irontype[0] == 2) {
            irontype[2] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Silver") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Chance") {
          if (silvertype[0] == 1) {
          silvertype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,3))
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Max") {
          if (silvertype[0] == 2) {
          silvertype[3] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
          if (silvertype[0] == 2) {
            silvertype[2] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Gold") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Chance") {
          if (goldtype[0] == 1) {
            if (upgradelist[num].split("|")[0].split(" ")[2].length == 4) {
              goldtype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,3))
            } else {
              goldtype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,2))
            }
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Max") {
          if (goldtype[0] == 2) {
            goldtype[3] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
          if (goldtype[0] == 2) {
            goldtype[2] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Platinum") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Chance") {
          if (platinumtype[0] == 1) {
            if (upgradelist[num].split("|")[0].split(" ")[2].length == 4) {
              platinumtype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,3))
            } else {
              platinumtype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,2))
            }
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Max") {
          if (platinumtype[0] == 2) {
            platinumtype[3] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
          if (platinumtype[0] == 2) {
            platinumtype[2] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Diamond") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Chance") {
          if (diamondtype[0] == 1) {
            if (upgradelist[num].split("|")[0].split(" ")[2].length == 4) {
              diamondtype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,3))
            } else {
              diamondtype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,2))
            }
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Max") {
          if (diamondtype[0] == 2) {
            diamondtype[3] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
          if (diamondtype[0] == 2) {
            diamondtype[2] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Emerald") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Chance") {
          if (emeraldtype[0] == 1) {
            if (upgradelist[num].split("|")[0].split(" ")[2].length == 4) {
              emeraldtype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,3))
            } else {
              emeraldtype[1] += Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,2))
            }
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Max") {
          if (emeraldtype[0] == 2) {
            emeraldtype[3] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Base") {
          if (emeraldtype[0] == 2) {
            emeraldtype[2] += Number(upgradelist[num].split("|")[0].split(" ")[2])
          } else {return 0}
        }
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Cooldown") {
        cooldown -= 10 * Number(upgradelist[num].split("|")[0].split(" ")[1].substring(1,4))
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Sell") {
        sellmult *= Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,4))
      }
      if (upgradelist[num].split("|")[0].split(" ")[0] == "Autominer") {
        if (upgradelist[num].split("|")[0].split(" ")[1] == "Power") {
          autominerpowermult *= Number(upgradelist[num].split("|")[0].split(" ")[2].substring(1,upgradelist[num].split("|")[0].split(" ")[2].length))
        }
      }
}