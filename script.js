const grid = document.getElementById('sketch-container');


function createGridDiv() {
    const div = document.createElement('div');
    div.classList.add('square');
    grid.appendChild(div);
}

for (i=0; i < 256; i++) {
createGridDiv();

}


