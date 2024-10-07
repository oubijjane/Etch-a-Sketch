const div = document.querySelector(".container");
const div2 = document.querySelector(".container1");
const body = document.querySelector("body");
const btn = document.querySelector("button");
const input = document.querySelector("input");
let color = ["rgb(255, 0, 0,",
    "rgb(255, 165, 0,",
    "rgb(255, 255, 0,",
    "rgb(0, 128, 0,",
    "rgb(0, 0, 255,",
    "rgb(75, 0, 130,",
    "rgb(238, 130, 238,"];
let size = 10;
let op = 0.11;
let dem = 600;
div.style.width = dem + "px";
div.style.height = dem + "px";
function getRandomNUmber() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(color.length);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function createGrid(size) {
    if (size > 100) {
        size = 100;
    }
    let result = dem / size - 2;
    for (i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = result + "px";
        cell.style.height = result + "px";
        //cell.style.opacity = op + "%";
        div.appendChild(cell);
    }
}
createGrid(size);
const cell = document.querySelector(".cell");
div.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cell")) {
        e.target.style.backgroundColor = "rgba(255, 0, 0," + op + ")";
        op += 0.10;
        console.log(op);
        if (op > 1) {
            op = 0.11;
        }
    }
})

div2.addEventListener("click", (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
        case "reset":
            div.querySelectorAll(".cell").forEach((cell) => {
                cell.style.backgroundColor = "white";

            })
            break;
        case "size":
            size = input.value;
            div.querySelectorAll(".cell").forEach((cell) => {
                cell.remove();
            })
            createGrid(size);
    }

})
