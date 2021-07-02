// gives easy access to parent element
const gridDiv = document.getElementById("grid-div");
const allPixels = document.getElementsByClassName("pixels");

// Input is same as createGrid, Output is a square dislay scheme
function layoutSquare(inputNum) {
  gridDiv.style.gridTemplateColumns = `repeat(${inputNum}, 1fr)`;
  gridDiv.style.gridTemplateRows = `repeat(${inputNum}, 1fr)`;
}

// Input is number, Output is that number of divs added to gridDiv
function createGrid(inputNum) {
  //edge case:
  if (inputNum > 100) {
  }
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

// add listeners function with color change
const pixels = document.querySelectorAll(".pixels");
pixels.forEach((pixel) => {
  pixel.addEventListener("mouseenter", (pixels) => {
    pixel.style.backgroundColor = "black";
  });
});

// reset function

// add grid sizing/reset button
function selectSize() {
  var size = prompt("Number of pixels per side?", "1-100");
  if (typeof size != "number" && size <= 100 && size > 0) {
    createGrid(size);
  } else {
    var size2 = prompt(
      "Number of pixels per side must be between 1 and 100(inclusive)",
      "1-100"
    );
    createGrid(size2);
  }
}
