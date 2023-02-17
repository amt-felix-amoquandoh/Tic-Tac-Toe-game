const cellElements = document.querySelectorAll(".game--cell");
const restart = document.querySelector(".game--restart");
const winner = document.querySelector(".game--field");
const winnings = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const xclass = "-cross";
const circleClass = "-circle";
const winnerText = "-win";
let circlesTurn;

startGame();

restart.addEventListener("click", startGame)

function startGame(){
    circlesTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(xclass);
        cell.classList.remove(circleClass); 
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, {once:true})
    })
    winner.classList.remove(winnerText);
}

function handleClick(e){
    const cell = e.target;
    const currentClass = circlesTurn ? circleClass : xclass;
    //place mark
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()){
        endGame(true);
    } else{
      swapTurns()
    }
}


function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains(xclass) || cell.classList.contains(circleClass) 
    })
}

function endGame(draw){
    if (draw) {
        winner.innerText ="Draw!"
    } else {
        winner.innerHTML = `${circlesTurn ? "0's" : "X's"} Wins!`;
    }
    winner.classList.add(winnerText);
}

function placeMark(cell, currentClass){
  cell.classList.add(currentClass);
}

function swapTurns(){
    circlesTurn = !circlesTurn;
}

function checkWin(currentClass){
   return winnings.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass);
        })
    })
}


