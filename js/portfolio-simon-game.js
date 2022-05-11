
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0
var i = 0

$(document).one("keydown", function() {
  nextSequence();
  level = 0;

});




$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  // alert(userChosenColor);
  checkClickedPattern();

  playSound(userChosenColor);
  animatePress(userChosenColor);

  console.log("user: " + userClickedPattern);

})


function checkClickedPattern() {

  if (userClickedPattern.length === gamePattern.length) {
    i = 0;
    nextSequence();
  } else if (userClickedPattern.length < gamePattern.length) {
    if (userClickedPattern[i] === gamePattern[i]) {
      i++;
      console.log(i + "good!");
      return;
    } else {
      gameOver();
    }
  } else {
    gameOver();
  }
}

function nextSequence() {
  userClickedPattern = [];

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  setTimeout(function() {
    $("#" + randomChosenColor).fadeTo(100, 0.5).fadeTo(100, 1);

    playSound(randomChosenColor);

  }, 1000);

  console.log("game: " + gamePattern);

  // alert(gamePattern[level]);
  level++;
}




function playSound(name) {
  var audio = new Audio("sounds/sounds-simon-game/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function gameOver() {
  $("#level-title").html("Game Over, Refresh to Restart");
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 100);
  var gameOver = new Audio("sounds/sounds-simon-game/wrong.mp3");
  gameOver.play();
  startOver();
}

function startOver(){
  level = 0;
  gamePattern = [];
}



// function checkClickedPattern() {
//   for (i = 0; i <= gamePattern.length;) {
//     if (userClickedPattern.length <= gamePattern.length) {
//       for (let i = 0; i <= gamePattern.length; i++) {
//
//         if (userClickedPattern[i] == gamePattern[i]) {
//           continue;
//         } else {
//           console.log("WRONG");
//         }
//
//       }
//
//     }
//     i++
//   }
// }

// for (let i = 0 ; i < gamePattern.length; ) {
//   if (userClickedPattern[i] !== gamePattern[i]) {
//     console.log("YOU ARE WRONG!");
//     console.log(gamePattern);
//     console.log(userClickedPattern);
//     console.log("level " + level);
//     gameOver();
//
//   } else if (userClickedPattern[i] === gamePattern[i]){
//     console.log("right!!");
//     console.log(gamePattern);
//     console.log(userClickedPattern);
//     console.log("LEVEL " + level);
//     i++;
//   }
// }

// function checkPattern(){
// if (userClickedPattern[level] != gamePattern[level]) {
//   console.log("wrong!");
// } else if (userClickedPattern[level] == gamePattern[level]) {
//     for (userClickedPattern.length <= gamePattern.length) {
//       console.log(userClickedPattern);
//       console.log(gamePattern);
//   }
//   else if {
//     console("WRONG.");
//   }
// }









// $("#"+randomChosenColor).click(function(){
//   $("#"+randomChosenColor).fadeTo(100, 0.5).fadeTo(100, 1);
// });

// $(".btn").click(function(){
//   $("#red").fadeTo(100, 0.5).fadeTo(100, 1);
// });

//
//
// if (userClickedPattern == gamePattern) {
//
//   nextSequence();
//
// } else {
//
//     $("#level-title").text("Game Over, Press Any Key to Restart");
//     $("body").addClass("game-over");
//     setTimeout(function(){
//       $("body").removeClass("game-over");
//     }, 100);
//     var gameOver = new Audio("../sounds/sounds-simon-game/wrong.mp3");
//    gameOver.play();
//
//     // setTimeout(function(){
//     //   $(document).addClass("game-over");
//     // }, 1000);
// }
