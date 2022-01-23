var randomNumber1=Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);
var randomImg1="dice"+randomNumber1+".png";
var randomImgSrc1="images/"+randomImg1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSrc1);

var randomNumber2=Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber2);
var randomImg2="dice"+randomNumber2+".png";
var randomImgSrc2="images/"+randomImg2;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImgSrc2);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
if(randomNumber1 == randomNumber2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
//document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
// while(1)
// {
//   if(randomNumber1==1) {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
//   }
//   else if(randomNumber1==2) {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
//   }
//   else if(randomNumber1==3) {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
//   }
//   else if(randomNumber1==4) {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
//   }
//   else if(randomNumber1==5) {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
//   }
//   else if(randomNumber1==6) {
//     document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
//   }
// }
