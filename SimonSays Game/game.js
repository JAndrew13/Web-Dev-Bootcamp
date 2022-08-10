const buttonColors = ["red", "blue", "yellow", "green"];
var level = 0;

var gamePattern = [];
var userPattern = [];

var gameChosenColor = null;
var userChosenColor = null;


//   BUTTONS   //

// on click user functions
var btnRed = $("#red");
btnRed.on("click", function() {
  userClick("red");
});
var btnBlue = $("#blue");
btnBlue.on("click", function() {
  userClick("blue");
});
var btnYellow = $("#yellow");
btnYellow.on("click", function() {
  userClick("yellow");
});
var btnGreen = $("#green");
btnGreen.on("click", function() {
  userClick("green");
});

// button response
function clickTile(color) {
  $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100); // animate tile
  playSound(color);
}

// Handles user clicks
function userClick(color) {
  userChosenColor = color;
  $("#" + userChosenColor).addClass("pressed");
  clickTile(color);
    setTimeout(function () {
      $("#" + userChosenColor).removeClass("pressed");
    }, 100);

  userPattern.push(color)
  checker();
  };
//   GAMEPLAY   //

// determine next item in sequence, return color (string)
function nextSequence() {
  userPattern = [];
  level += 1;
  var randomNumber = Math.floor((Math.random() * 4)); // selects random int 0-3
  var randomColor = buttonColors[randomNumber]; // picks colors based on random selected int
  gamePattern.push(randomColor); //adds selected color to game pattern (memory)
  $("h1").text("Level " + (level)); //display level number
  clickTile(randomColor);
}

// Check answer
function checker() {
  var selectionId = userPattern[(userPattern.length - 1)];

  if (userPattern[(userPattern.length-1)] === gamePattern[(userPattern.length-1)]) {
    if (userPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  } else {
    wrongAnswer();
  }
}

// Worng answer
function wrongAnswer() {
  playSound("wrong");
      $("body").addClass("game-over");
      $("h1").text("Game Over, Press A key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
}

// Reset and start new game
function resetGame() {
  gamePattern = []; // reset game memory
  userPattern = []; // reset user memory
  level = 0; // reset game level
  nextSequence();
}

//   SYSTEM FUNCTIONS   //

// Detect "a" keydown (start game)
$(document).keypress(function(event) {
  var key = (event.keyCode ? event.keyCode : event.which);
  var ch = String.fromCharCode(key);
  if (ch === "a") {
    resetGame();
  };
});

// Play Sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
