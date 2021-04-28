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
  layoutSquare(inputNum);
  return;
}

const gridDiv = document.getElementById("grid-div");

function layoutSquare(inputNum) {
  gridDiv.style.gridTemplateColumns = `repeat(${inputNum}, 1fr)`;
  gridDiv.style.gridTemplateRows = `repeat(${inputNum}, 1fr)`;
}
