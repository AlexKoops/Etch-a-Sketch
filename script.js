let container = document.querySelector("#container");

let doWeDraw = true;

// Initial grid setup
createGrid(16);

function createGrid(size) {
    container.textContent = '';
    let totalSquares = size * size;
    let sizePerSquare = 360 / size;
    for(let i = 0; i < totalSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${sizePerSquare}px`;
        square.style.height = `${sizePerSquare}px`;
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            if(doWeDraw) {
                square.style.backgroundColor = `${makeRandomColor()}`;  
            } else {
                square.style.backgroundColor = 'white';
            }
        });
    }
}

let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
    let squareList = document.querySelectorAll(".square");
    squareList.forEach(square => {
        square.style.backgroundColor = 'white';
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
    size = parseInt(size);
    if(isNaN(size) || size < 1 || size > 100) {
        alert("Invalid input. Please enter a number between 1 and 100.");
        return;
    }
    createGrid(size);
});


function makeRandomColor() {
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}