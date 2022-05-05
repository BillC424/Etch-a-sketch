const grid = document.getElementById('sketch-container');
const clearButton = document.getElementById('clear-button');
const rainbowButton = document.getElementById('rainbow-mode');


function addBlack(e) {
    const blackSquare = e.target;
    blackSquare.classList.add('black');
}

function addRainbow(e) {
    const rainbowSquare = e.target;
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    rainbowSquare.style.backgroundColor = "#" + randomColor;
}

function createGridDiv(gridSize) { for (i=0; i < gridSize * gridSize; i++) {
    grid.style.gridTemplateColumns = 'repeat (newGrid, auto) ;';
    const square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    square.addEventListener ("mouseenter", addBlack  ) 

}
    
}


createGridDiv(16);

function clearGrid() {
const filledSquare = Array.from(document.getElementsByClassName('square'));
for (let i = 0; i < filledSquare.length; i++) {
    grid.removeChild(filledSquare[i]);
} 

let newGrid = window.prompt("Enter a number for the number of squares per side of the new grid");

if (newGrid > 99) {
    alert("That's too many squares!!! Enter a number lower than 100");
    clearGrid();
}

if (isNaN(newGrid)) {
    alert("That's not a number!!! Enter a number");
    clearGrid();
}

if (newGrid === "0") {
    alert("That won't work!!! Enter a number higher than 0");
    clearGrid();
}

if (Math.sign(newGrid) === -1) {
    alert("You can't have a negative grid! Enter a positive number");
    clearGrid();
  }

if (newGrid === null) {
    newGrid = 16;
}

createGridDiv(newGrid);
grid.style.gridTemplateColumns = `repeat(${newGrid}, auto)`;
}

function rainbowGrid() { 
    
    const square = Array.from(document.getElementsByClassName('square'));
    for (i=0; i < square.length; i++) {
    
        square[i].removeEventListener ("mouseenter", addBlack  ) 
        square[i].addEventListener ("mouseenter", addRainbow)  
        
    }
    
    }

clearButton.addEventListener ("click", e => clearGrid() )

rainbowButton.addEventListener ("click", e => rainbowGrid() )



