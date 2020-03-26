
var colors=[]
var numberOfSquares=6
generateRandomColor()
var $square=document.querySelectorAll(".square")
var pickedColor=colors[pickColor(0,colors.length-1)]
var clickedColor
var ganador=false
$colorDisplay=document.querySelector("#colorDisplay")
$colorDisplay.textContent=pickedColor
play()
var $reset=document.querySelector("#reset")
reset()
var $playButtons=document.querySelectorAll(".styleButtons");
hardEasyButtons()
//funciones//
//----------jugar a elegir colores------------//
function play(){$square.forEach(function (element, index){
    element.style.background=colors[index];
    element.addEventListener("click", function(){
        clickedColor=colors[index];document.querySelector("#message").textContent="correct!"
     if(clickedColor==pickedColor){;
     document.querySelector("h1").style.background=clickedColor;
     document.querySelector("#reset").textContent="Play Again"
     changeColors(pickedColor);
    }else{$square[index].style.background="#232323";
          $square[index].style.transition="background  1.5s";
         
         document.querySelector("#message").textContent="try again";}
    });
  })};
//----------colores------------//
function changeColors(pickedColor){
    for(var i=0; i<$square.length; i++){$square[i].style.background=pickedColor;}
        }
function randomColor(){return "rgb("+Math.floor(Math.random() * 250)+","+Math.floor(Math.random() * 250)+","+
     Math.floor(Math.random() * 250)+")"}
function pickColor(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;}
function generateRandomColor(){ colors=[];  
    for(var i=0; i<numberOfSquares; i++){colors[i]=randomColor();}}
function init(){
        colors=[]
        for(var i=0; i<numberOfSquares; i++){colors[i]=randomColor(); $square[i].style.background=colors[i];
            $square[i].style.display="block";
             if(numberOfSquares==3){for(j=3; j<6; j++){$square[j].style.display="none"}}
        pickedColor=colors[pickColor(0,colors.length-1)]
        $colorDisplay.textContent=pickedColor;
        document.querySelector("h1").style.background="cornflowerblue";}}
//-------buttons--------//
function reset(){
    $reset.addEventListener("click", function(){
        document.querySelector("#reset").textContent="New Colors";
        document.querySelector("#message").textContent="";
        document.querySelector("h1").style.background="cornflowerblue";
        init();})}
function hardEasyButtons(){
$playButtons[1].classList.add("selected");
$playButtons.forEach(function (element, index){
    $playButtons[index].addEventListener("click",function(){
        $playButtons[index].classList.add("selected");
        if(index==0){var num=1; numberOfSquares=3}else{var num=0; numberOfSquares=6}
        $playButtons[num].classList.remove("selected");
        init()
    })})}

