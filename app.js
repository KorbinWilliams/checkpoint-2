let upgrades = {
  Typewriter: {
    "price": 50,
    "quantity": 0,
    "mod": 2,
    "auto": false
  },
  Laptop: {
    "price": 250,
    "quantity": 0,
    "mod": 5,
    "auto": false
  },
  Editor: {
    "price": 1000,
    "quantity": 0,
    "mod": 50,
    "auto": true
  },
  Monkeys: {
    "price": 20000,
    "quantity": 0,
    "mod": 9001,
    "auto": true
  }
}


let count = 0;
let counter = document.querySelector("#counter");
let clickModifier = 1;
let up1 = document.querySelector("#typewriter")
let up2 = document.querySelector("#laptop")
let up3 = document.querySelector("#editor")
let up4 = document.querySelector("#monkeys")

function drawCount() {
  counter.innerHTML = `
  <span id="counter">${count}</span>`
}

function drawUpgrades() {
  up1.innerHTML = `<p id="typewriter">(${upgrades.Typewriter.price})</p>`
  up2.innerHTML = `<p id="laptop">(${upgrades.Laptop.price})</p>`
  up3.innerHTML = `<p id="editor">(${upgrades.Editor.price})</p>`
  up4.innerHTML = `<p id="monkeys">(${upgrades.Monkeys.price})</p>`
}

function revenueClick() {
  count = count + 1 * clickModifier;
  drawCount();
}

debugger;
function buyUpgrade(name) {
  let item = upgrades[name]
  if (item.price < count) {
    return
  }
  count -= item.price;
  item.quantity++
  item.price = item.price * 1.5
  drawUpgrades();
  drawCount();
}

buyUpgrade();


setInterval(function collectAutoUpgrades() {
  for (let key in upgrades) {
    let item = upgrades[key]
    if (item.auto) {
      count += item.quantity * item.mod
    }
  } drawCount();
}, 1000)

