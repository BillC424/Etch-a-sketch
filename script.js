const grid = document.getElementById('sketch-container');


function createGridDiv() {
    const div = document.createElement('div');
    grid.appendChild(div);
}

for (i=0; i < 257; i++) {
createGridDiv();

}


