let sum = 0;
let dealersum = 0;
let playercards = document.getElementById("sum")
let dealercards = document.getElementById("dealer")

function randint(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function newGame() {
  sum =+ randint(1, 10)
  sum =+ randint(1, 10)
  playercards.textContent = "Sum: " + sum;
}
function hit() {}
function stand() {}
