const gridContainer = document.querySelector("#grid-container");
for(let i = 0; i < 16; i++){
  let div = document.createElement("div");
  div.classList.add("grid-item");
  div.addEventListener("mouseover", function() {
    div.classList.add("other-background")
  });
  gridContainer.appendChild(div);
}
