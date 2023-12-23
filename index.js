var n = Math.random();
n = n*6 +1;
n = Math.floor(n);
console.log(n);
if (n == 5) {
    document.querySelector("img").setAttribute("src","./images/dice5.png");
} else if (n == 4) {
    document.querySelector("img").setAttribute("src","./images/dice4.png");
} else if (n == 3) {
    document.querySelector("img").setAttribute("src","./images/dice3.png");
} else if (n==2) {
    document.querySelector("img").setAttribute("src","./images/dice2.png");
} else if (n==1) {
    document.querySelector("img").setAttribute("src","./images/dice1.png");
}
var n1 = Math.random();
n1 = n1*6 +1;
n1 = Math.floor(n1);
console.log(n1);
if (n1 == 5) {
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
} else if (n1 == 4) {
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
} else if (n1 == 3) {
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
} else if (n1==2) {
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
} else if (n1==1) {
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
if ( n > n1) {
    document.querySelector("h1").innerHTML = "winner is player 1";
} else if ( n1 > n) {
    document.querySelector("h1").innerHTML = "winner is player 2";
} else {
    ocument.querySelector("h1").innerHTML = "its draw";
}
