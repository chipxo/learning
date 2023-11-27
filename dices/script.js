let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "img/dice" + randomNumber1 + ".png";
let randomDiceImage2 = "img/dice" + randomNumber2 + ".png";
let img = document.querySelectorAll("img");
let heading = document.querySelector("h1");
img[0].setAttribute("src", randomDiceImage1);
img[1].setAttribute("src", randomDiceImage2);
if (randomDiceImage1 > randomDiceImage2) {
  heading.innerHTML = "🚩Player 1 wins!";
} else if (randomDiceImage1 < randomDiceImage2) {
  heading.innerHTML = "Player 2 wins!🚩";
} else {
  heading.innerHTML = "Draw!";
}
