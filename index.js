
// Dice Random Number

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";

document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);

// H1 change base on the winner

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "😆 1st Player Win ";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").innerHTML = "2nd Player Win 😆";
}

else {
  document.querySelector(".container h1").innerHTML = "Draw 😉";
}
