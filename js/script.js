resetGrid(4);

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function() {
  let dimension = prompt("How many boxes per side do you wish?");
  while(isNaN(dimension)){
    dimension = prompt("Invalid input. How many boxes per side do you wish?");
  }

  let gridContainerStyle = document.querySelector("#reset-button");
  resetGrid(dimension);

});

function resetGrid(sideLength){
  gridContainer = document.querySelector("#grid-container");
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  gridContainer.setAttribute('style',
  `grid-template-columns: repeat(${sideLength}, 1fr); grid-template-rows: repeat(${sideLength}, 1fr);`);
  for(let i = 0; i < sideLength**2; i++){
    let div = document.createElement("div");
    div.classList.add("grid-item");
    div.addEventListener("mouseover", function() {
      div.classList.add("other-background")
    });
    gridContainer.appendChild(div);
  }
}
