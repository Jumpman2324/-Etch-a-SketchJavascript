const gridContainer = document.querySelector(".grid-container")
const clearButton = document.querySelector(".clear-btn")

function createGrid(rows, cols) {
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

   

for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div")
    cell.classList.add ("grid-cell")
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "purple"
    })


    gridContainer.appendChild(cell)
}
}

clearButton.addEventListener("click", function () {
    const cells = document.querySelectorAll(".grid-cell")
    cells.forEach(cell => {
        cell.style.backgroundColor = "white"
    })
   
})


createGrid(16,16)

