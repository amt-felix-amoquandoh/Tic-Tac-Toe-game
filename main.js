const cellElements = document.querySelectorAll(".game--cell");

cellElements.forEach(cell => {
    cell.addEventListener("click", handleClick, {once:true})
})

function handleClick(e){
    console.log("clicked");
}