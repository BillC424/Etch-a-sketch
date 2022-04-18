const grid = document.getElementById('sketch-container');
const clearButton = document.getElementById('clear-button');


function createGridDiv() {
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
    div.addEventListener ("mouseenter", function(){ div.classList.add('black'); } )
}

for (i=0; i < 256; i++) {
    createGridDiv();
    }

function clearGrid() {
const filledSquare = document.getElementsByClassName("black");
const clearSquare = Array.from(filledSquare);
for (let i = 0; i < clearSquare.length; i++) {
    clearSquare[i].classList.remove('black');   
} 

const newGrid = window.prompt("Enter a number for the number of squares per side of the new grid");

if (newGrid > 100) {
    alert("That's too many squares!!! Enter a number lower than 100");
    clearGrid();
}
return newGrid;
}



clearButton.addEventListener ("click", clearGrid )



