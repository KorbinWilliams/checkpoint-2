let upgrades = {
  Typewriter: {
    "price": 50,
    "quantity": 0,
    "mod": 2
  },
  Laptop: {
    "price": 250,
    "quantity": 0,
    "mod": 5
  },
  Editor: {
    "price": 1000,
    "quantity": 0,
    "mod": 50
  },
  Monkeys: {
    "price": 20000,
    "quantity": 0,
    "mod": 9001
  }
}


let count = 0;
let counter = document.querySelector("#counter");
let clickModifier = 1;
let autoModifier = upgrades["quantity"] * upgrades["mod"];

function revenueClick() {
  counter.innerHTML = `
  <span id="counter">${count}</span>`
  count = count + 1 * clickModifier;
}

function buyUpgrade(num) {
  // take in price output count and modifier
  // define rvn lost, rvn modifier, resource check then add to counter

  // upgrades.find(upgrades => upgrades.price == num);
  // } count - num;
  // upgrades.forEach(upgrades => upgrades["quantity"] >= 1); {
  // autoModifier = upgrades["quantity"] * upgrades["mod"]
  // };
  let cost = num;
  count = count - cost;
  upgrades.find(upgrades => upgrades["price"] == cost);
  upgrades.math(upgrades["quantity"] + 1);
  if (count < cost) {
    return cost = count + cost
  }
}



setInterval(function collectAutoUpgrades(num) {
  // itterate over automaticUpgrades, total modifiers, add to count
  upgrades.forEach(upgrades => upgrades["mod"] > 49);
  autoModifier + count;
  return count;
}, 1000)
