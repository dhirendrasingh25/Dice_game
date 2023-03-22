var randomnumber1= Math.floor(Math.random()*6) +1;
var randomnumber2= Math.floor(Math.random()*6) +1;

var randomDiceImage1="./images/dice"+randomnumber1+".png";
var randomDiceImage2="./images/dice"+randomnumber2+".png";

var image1=document.querySelectorAll("img ")[0];

image1.setAttribute("src",randomDiceImage1);

var image2=document.querySelectorAll("img ")[1];

image2.setAttribute("src",randomDiceImage2);
