"use strict"


let randomNumber1 = Math.floor(Math.random() * 6);
randomNumber1 = randomNumber1 + 1;
console.log(randomNumber1);

document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");

let randomNumber2 = Math.floor(Math.random() * 6);
randomNumber2 = randomNumber2 + 1;
console.log(randomNumber2);

document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if ( randomNumber1 > randomNumber2 ) {
    document.querySelector('h1').innerHTML = '<img class="imgWinner" src="./images/WINNER.png">' + 'Player 1 Winner!';
    document.querySelector('h1').style.fontSize = '100px';
} else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector('h1').innerHTML = 'Player 2 Winner!' + '<img class="imgWinner" src="./images/WINNER.png">';
    document.querySelector('h1').style.fontSize = '100px';
} else {
    document.querySelector('h1').innerHTML = 'Draw!';
    document.querySelector('h1').style.fontSize = '100px';
}