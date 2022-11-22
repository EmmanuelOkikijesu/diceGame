var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage= "images/dice" + randomNumber1 + ".jpeg";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage= "images/dice" + randomNumber2 + ".jpeg";
document.querySelectorAll("img")[1].setAttribute("src",randomImage);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h2").innerHTML="Player One Wins!!!<br>Beef QUASHED";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h2").innerHTML="Player Two Wins!!!<br>Beef QUASHED";
}
else {
  document.querySelector("h2").innerHTML="It's A Draw!!!<br>Beef QUASHED";};

