// Declare Player IDs
var image1 = 0;
var image2 = 1;

// Dice roll function
function rollDice(imageNumber) {
  var randomNumber = Math.floor((Math.random()*6)+1);
  var imageSource = "images/dice" + randomNumber + ".png";
  document.querySelectorAll("img")[imageNumber].setAttribute("src", imageSource);
  return randomNumber;
}

// Roll Dice for both players
var dice1 = rollDice(image1);
var dice2 = rollDice(image2);

// Input dice rolls and determine outcome
function outcome(dice11, dice2) {
    var outcome = "Refresh me";
    if (dice1 > dice2) {
        return outcome = "Player 1 Wins!";
    } else if (dice1 < dice2){
        return outcome = "Player 2 Wins!";
    } else {
        return outcome = "Draw! Roll again";
    }
}

// Set Title "h1" to rolled outcome
document.querySelectorAll("h1")[0].innerHTML = outcome(dice1, dice2);
