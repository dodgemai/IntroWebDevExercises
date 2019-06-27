/* function for roll dice and play game */

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function playGame(){
  var startBet = document.forms["luckySevens"]["start-bet"].value;
  var numRolls = 0;
  var rollsAtMax = 0;
  var maxMoney = 0;

  if (startBet <= 0){
    alert("Starting bet must be greater than $0.00");
  } else {
    var total = startBet;
    while(total > 0){
      var die1 = rollDice();
      var die2 = rollDice();
      var sum = die1 + die2;

      numRolls++;

      if (sum == 7){
        total = total + 4;
        if (total > maxMoney){
          maxMoney = total;
          rollsAtMax = numRolls;
        }
      } else {
        total--;
      }
    }
  }

  document.getElementById("results").style.display = "block";
  document.getElementById("playButton").innerText = "Play Again";
  document.getElementById("start").innerText = startBet;
  document.getElementById("totalRolls").innerText = numRolls;
  document.getElementById("highestAmount").innerText = maxMoney;
  document.getElementById("rollsHighest").innerText = rollsAtMax;

  return false;
}
