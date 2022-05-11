console.log("Hello");

var player = "O";

// $("#0-0").text("X");

var grid = [
  ["0-0", "0-1", "0-2"],
  ["1-0", "1-1", "1-2"],
  ["2-0", "2-1", "2-2"]
];


$(".cell").click(function() {

  var clickedCell = $(this).attr("id");

  if (isWin() === true || isTie() === true) {
    //repeated code..
    $(".directions").html("To restart game, refresh the page.")
    return;
  }

  if ($("#" + clickedCell).text() == "X" || $("#" + clickedCell).text() == "O") {
    console.log("This box is already filled.");
    $(".directions").text("Please click an empty square.");
    return;

  } else {
    if (player == "O") {
      $(".title").text("Player " + player + "'s turn!");
      player = "X";
    } else {
      $(".title").text("Player " + player + "'s turn!");
      player = "O";
    }

    $(".directions").text("");

    console.log(player + " marked in box " + clickedCell);

    $("#" + clickedCell).text(player);

    pushToGrid();
    isTie();
    //repeated code..
    if (isWin() === true) {
      $(".title").text(player + " WINS!");
      $(".directions").text("To restart game, refresh the page.")
      return;
    }
  }
  // isWin();
  // if (isWin() === true)

  function pushToGrid() {
    var identifyRow = parseInt(clickedCell.charAt(0));
    var positionClickedCell = grid[identifyRow].indexOf(clickedCell);

    grid[identifyRow].splice(positionClickedCell, 1, player);
    console.log(grid);
  }
})

function isTie() {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (grid[r][c] != "X" && grid[r][c] != "O") {
        console.log("not a TIE");
        return;
      }
    }
  }
  console.log("*** TIE ***");
  $(".title").text("It's a TIE!");
  $(".directions").text("To restart game, refresh the page.")
  return true;
}


function isWin() {
  for (let r = 0; r < 3; r++) {
    if (isHorizontalWin(grid, player, r)) {
      return true;
    }
  }
  for (let c = 0; c < 3; c++) {
    if (isVerticalWin(grid, player, c)) {
      return true;
    }
  }
  if (isDiagonalUpWin(grid, player)) {
    return true;
  }
  // console.log("PLAYER " + player + " WINS!");

  if (isDiagonalDownWin(grid, player)) {
    return true;
  }
  // if (isHorizontalWin() != false || isVerticalWin() != false || isDiagonalUpWin() != false || isDiagonalUpWin() != false){
  //   return true;
  // }
}

function isHorizontalWin(grid, player, r) {
  for (let c = 0; c < 3; c++) {
    if (grid[r][c] !== player) {
      return false;
    }

  }
  console.log("horiz win");
  return true;
}

function isVerticalWin(grid, player, c) {
  for (let r = 0; r < 3; r++) {
    if (grid[r][c] !== player) {
      return false
    }
  }
  console.log("vert win");
  return true;
}

function isDiagonalUpWin(grid, player) {
  if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) {
    console.log("diag UP win!");
    return true;
  } else {
    return false;
  }
}

function isDiagonalDownWin() {
  if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) {
    console.log("diag DOWN win");
    return true;
  } else {
    return false;
  }

}




//
//
//
// //PANDU:
// addMark(1, 2, "O");
//
// [
//   ["X", "", "O"],
//   ["", "", "O"],
//   ["X", "", ""]
// ]
//
// function addStrike() {}
//
//
// function isWin(
//   grid, /* [["X", ...], ...] */
//   player /* "X" or "O" */
// ) {
//   for (let r = 0; r < 3; r++) {
//     if (isHorizontalWin(grid, r, player)) {
//       return true;
//     }
//   }
//
//   // for (let c ...) {
//   //	 isVerticalWin(...);
//   // }
//
//   if (isDiagonalUpWin(grid, player)) {
//     return true;
//   }
//
//   // if (isDiagonalDownWin(...) { ... }
//
//   return false;
// }
//
// isHorizontalWin(grid, "X", 0);
//
// function isHorizontalWin(grid, player, r) {
//   for (let c = 0; c < 3; c++) {
//     if (grid[r][c] !== player) {
//       return false;
//     }
//   }
//   return true;
// }
//
//
// // . . X
// // . X .
// // X . .
// function isDiagonalUpWin(grid, player) {
//   return (
//     grid[2][0] === player &&
//     grid[1][1] === player &&
//     grid[0][2] === player
//   );
// }
//
// // X . .
// // . X .
// // . . X
