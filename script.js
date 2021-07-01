// gives easy access to elements
const gridDiv = document.getElementById("grid-div");
const pixels = document.getElementsByClassName("pixels");

// Input is same as createGrid, Output is a square dislay scheme
function layoutSquare(inputNum) {
  gridDiv.style.gridTemplateColumns = `repeat(${inputNum}, 1fr)`;
  gridDiv.style.gridTemplateRows = `repeat(${inputNum}, 1fr)`;
}

// Input is number, Output is that number of divs added to gridDiv
function createGrid(inputNum) {
  // loop runs inputNum times
  for (var i = 0; i < inputNum * inputNum; i++) {
    // for each loop, create a div
    const createDiv = document.createElement("div");
    // assign class pixels to div
    createDiv.className = "pixels";
    // append div to gridDiv
    document.getElementById("grid-div").appendChild(createDiv);
  }
  // make square shape of rows/columns
  layoutSquare(inputNum);
  return;
}

// set initial 16X16 grid
createGrid(16);
