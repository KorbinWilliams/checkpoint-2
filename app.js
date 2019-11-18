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


let clickModifier = 1;
let count = 0;
let counter = document.querySelector("#counter");


function revenueClick() {
  count + 1 * clickModifier;
  counter.innerHTML = `
  <span id="counter">${count}</span>`
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
  let autoModifier = 1 * upgrades["quantity"] * upgrades["mod"];
  count - cost;
  upgrades.find(upgrades => upgrades["price"] == cost); {
    upgrades["quantity"] + 1;
  };

}



function collectAutoUpgrades(num) {
  // itterate over automaticUpgrades, total modifiers, add to count (setInterval()) 
  if () {

  }
}