let container = document.querySelector("#container");

let doWeDraw = true;

for(let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
        if(doWeDraw) {
            square.classList.add("hover");
        }
        else {
            square.classList.remove("hover");
        }
    });
}

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    let squareList = document.querySelectorAll(".square");
    squareList.forEach(square => {
        square.classList.remove("hover");
    });
});

let drawBtn = document.querySelector("#draw");
let eraseBtn = document.querySelector("#erase");
drawBtn.addEventListener("click", () => {
    doWeDraw = true;
});
eraseBtn.addEventListener("click", () => {
    doWeDraw = false;
})

let gridBtn = document.querySelector("#GridSize");
gridBtn.addEventListener("click", () => {
    let size = prompt("Enter a new gridsize (max 100)");
    if(size > 100) {
        alert("Gridsize is to big");
    }
    let totalSquares = size * size;
    container.textContent = '';
    let squareSize = Math.floor(container.clientWidth / size);

    for(let i = 0; i < totalSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.length = `${squareSize}px`;
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            if(doWeDraw) {
                square.classList.add("hover");
            }
            else {
                square.classList.remove("hover");
            }
        });
    }
})