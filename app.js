let upgrades = {
  typewriter: {
    price: 50,
    quantity: 0,
    mod: 2,
    auto: false
  },
  laptop: {
    price: 250,
    quantity: 0,
    mod: 5,
    auto: false
  },
  editor: {
    price: 1000,
    quantity: 0,
    mod: 50,
    auto: true
  },
  monkeys: {
    price: 20000,
    quantity: 0,
    mod: 9001,
    auto: true
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
  up1.innerHTML = `<p id="typewriter">(${upgrades.typewriter.price})You have(${upgrades.typewriter.quantity})Current modifier(${upgrades.typewriter.mod * upgrades.typewriter.quantity})</p>`
  up2.innerHTML = `<p id="laptop">(${upgrades.laptop.price})You have(${upgrades.laptop.quantity})Current modifier(${upgrades.laptop.mod * upgrades.laptop.quantity})</p>`
  up3.innerHTML = `<p id="editor">(${upgrades.editor.price})You have(${upgrades.editor.quantity})Current modifier(${upgrades.editor.mod * upgrades.editor.quantity})</p>`
  up4.innerHTML = `<p id="monkeys">(${upgrades.monkeys.price})You have(${upgrades.monkeys.quantity})Current modifier(${upgrades.monkeys.mod * upgrades.monkeys.quantity})</p>`
}

function revenueClick() {
  count = count + 1 * clickModifier;
  drawCount();
}


function buyUpgrade(name) {
  let item = upgrades[name]
  if (item.price > count) {
    return
  }
  count -= item.price;
  item.quantity++;
  item.price = item.price * 1.5;
  clickModifier = clickModifier * item.mod;
  drawUpgrades();
  drawCount();
}

setInterval(function collectAutoUpgrades() {
  for (let key in upgrades) {
    let item = upgrades[key]
    if (item.auto) {
      count += item.quantity * item.mod
    }
  } drawCount();
}, 1000)

collectAutoUpgrades();
