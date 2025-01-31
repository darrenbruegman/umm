let sum = 0;
let dealersum = 0;
let topmsg = document.getElementById("msg");
let playercards = document.getElementById("sum");
let dealercards = document.getElementById("dealer");
let xrc;
function randint(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function newGame() {
  sum = 0
  dealersum = 0
  sum += randint(1, 11)
  sum += randint(1, 11)
  topmsg.textContent = "Blackjack";
  playercards.textContent = "You: " + sum;
  dealercards.textContent = "Dealer: " + 0;
}
function hit() {
  sum += randint(1, 11)
  playercards.textContent = "You: " + sum;
  if (sum >= 21) {
    window.alert("you bust!\nStarting New Game!")
    newGame()
  }
}
function dealerhit() {
    if (dealersum <= 18) {
      dealersum += randint(1,11)
      dealercards.textContent = "Dealer: " + dealersum
    }
}
function stand() {
  dealersum += randint(1,11)
  dealersum += randint(1,11)
  dealercards.textContent = "Dealer: " + dealersum
  xrc = setInterval(dealerhit(), 1500);
  clearInterval(xrc)
  if (dealersum == 21) {
    topmsg.textContent = "The Dealer Has Blackjack!"
  }
  else if (dealersum >= sum && dealersum <= 21) {
    topmsg.textContent = "The Dealer Wins!"
  }
  else if (sum == 21 && dealersum != 21) {
    topmsg.textContent = "You Have Blackjack!"
  }
  else if (sum >= dealersum && sum <= 21) {
    topmsg.textContent = "You Are Win!!!!!"
  }
}
