const container = document.querySelector("#container");
const button = document.querySelector("button");
createGrid(16);
button.addEventListener("click", size);


function size() {
    removeGrid();
    size = prompt("Grid Size: ");
    if (size>64 || size<1) return;
    createGrid(size);
}

function createGrid(size) {
    container.style.cssText = `grid-template-columns: repeat(${size}, auto);`;
    for (let i=0; i<size**2; i++) {
        let div = document.createElement("div");
        div.classList.add("div");
        div.addEventListener("mouseover", () => div.style.background = "pink");
        container.append(div);
    }
}

function removeGrid() {
    const divs = document.querySelectorAll(".div");
    divs.forEach(div => div.remove())
}