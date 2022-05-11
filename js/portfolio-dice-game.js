// function checkFirstVisit() {
//   if(document.cookie.indexOf('mycookie')==-1) {
//     // cookie doesn't exist, create it now
//     document.cookie = 'mycookie=1';
//   }
//   else {
//     // not first visit, so alert
//     alert('You refreshed!');
//   }
// }



window.onload = die1(), die2(), winner(), firstVisit()  ;
window.onunload = exitPage();

function firstVisit() {
    // Check if localStorage is available (IE8+) and make sure that the visited flag is not already set.
    if(typeof window.localStorage !== "undefined" && !localStorage.getItem('visited')) {
         // Set visited flag in local storage
         localStorage.setItem('visited', true);
         // Alert the user
         alert("Hello my friend. This is your first visit.");
         homepage();
    }
}

function exitPage() {
  localStorage.setItem('visited', false);
}
// function checkFirstVisit() {
//   if(document.cookie.indexOf('mycookie')==-1) {
//     // cookie doesn't exist, create it now
//     document.cookie = 'mycookie=1';
//     homepage();
//   }
//   else {
//     // not first visit, so alert
//     alert('You refreshed!');
//   }
// }



// window.onunload = cookieZero();

//
// cookieZero() {
//   document.cookie = 'mycookie=-1';
// }

function homepage() {
  document.querySelector("h1").innerHTML = "Refresh Me";
  document.querySelector(".img1").setAttribute("src", "images/images-dice-game/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/images-dice-game/dice6.png");
}



function die1() {
randomNumber1 = Math.floor(Math.random() * 6) + 1;
  if (randomNumber1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/images-dice-game/dice1.png");
  }
  else if (randomNumber1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/images-dice-game/dice2.png");
  }
  else if (randomNumber1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/images-dice-game/dice3.png");
  }
  else if (randomNumber1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/images-dice-game/dice4.png");
  }
  else if (randomNumber1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/images-dice-game/dice5.png");
  }
  else if (randomNumber1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/images-dice-game/dice6.png");
  }

}

function die2() {
randomNumber2 = Math.floor(Math.random() * 6) + 1;

  if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/images-dice-game/dice1.png");
  }
  else if (randomNumber2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/images-dice-game/dice2.png");
  }
  else if (randomNumber2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/images-dice-game/dice3.png");
  }
  else if (randomNumber2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/images-dice-game/dice4.png");
  }
  else if (randomNumber2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/images-dice-game/dice5.png");
  }
  else if (randomNumber2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/images-dice-game/dice6.png");
  }

}

function winner() {
  if (parseInt(randomNumber1) > parseInt(randomNumber2)) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }

  else if (parseInt(randomNumber2) > parseInt(randomNumber1)) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else{
    document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
  }

}
