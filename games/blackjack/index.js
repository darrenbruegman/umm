let sum = 0;
let dealersum = 0;
let playercards = document.getElementById("sum");
let dealercards = document.getElementById("dealer");

function randint(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function newGame() {
  sum = 0
  dealersum = 0
  sum += randint(1, 11)
  sum += randint(1, 11)
  playercards.textContent = "You: " + sum;
  dealercards.textContent = "Dealer: " + dealersum;
}
function hit() {
  sum += randint(1, 11)
  playercards.textContent = "You: " + sum;
  if (sum >= 21) {
    window.alert("you bust!\nStarting New Game!")
    newGame()
  }
}
function stand() {
  dealersum += randint(1,11)
  dealersum += randint(1,11)
  dealercards.textContent = "Dealer: " + dealersum
   let xrc = setInterval(function(){
    if (dealersum <= 18) {
      dealersum += randint(1,11)
      dealercards.textContent = "Dealer: " + dealersum
    }
    else {
      
    }
}, 2000);
}
