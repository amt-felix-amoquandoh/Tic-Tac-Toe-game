const cellElements = document.querySelectorAll(".game--cell");
const restart = document.querySelector(".game--restart");
const xclass = "-cross";
const circleClass = "-circle";
let circlesTurn;

startGame();


function startGame(){
    circlesTurn = false;
    cellElements.forEach(cell => {
        cell.addEventListener("click", handleClick, {once:true})
    })
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circlesTurn ? circleClass : xclass;
    //place mark
    placeMark(cell, currentClass)
    //check for winner
    //check for draw
    //switch turns 
    swapTurns()
}

function placeMark(cell, currentClass){
  cell.classList.add(currentClass);
}

function swapTurns(){
    circlesTurn = !circlesTurn;
}

restart.addEventListener("click", startGame);