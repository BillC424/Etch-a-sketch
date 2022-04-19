const grid = document.getElementById('sketch-container');
const clearButton = document.getElementById('clear-button');


function createGridDiv(gridSize) { for (i=0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
    div.addEventListener ("mouseenter", function(){ div.classList.add('black'); } ) }
}

createGridDiv(16);

function clearGrid() {
const filledSquare = document.getElementsByClassName("square");
const clearSquare = Array.from(filledSquare);
for (let i = 0; i < clearSquare.length; i++) {
    grid.removeChild(clearSquare[i]);
} 

const newGrid = window.prompt("Enter a number for the number of squares per side of the new grid");

if (newGrid > 100) {
    alert("That's too many squares!!! Enter a number lower than 100");
    clearGrid();
}

if (isNaN(newGrid)) {
    alert("That's not a number!!! Enter a number lower than 100");
    clearGrid();
}

if (newGrid === "0") {
    alert("That won't work!!! Enter a number higher than 0");
    clearGrid();
}

createGridDiv(newGrid);

}

clearButton.addEventListener ("click", e => clearGrid() )