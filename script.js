const div = document.querySelector(".container");
let size = 20;
let dem = 600;
div.style.width = dem + "px";
div.style.height = "600PX";

for (i = 0; i < size*size; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.width = "16px";
   // cell.style.height = "16px";
    //cell.textContent = "hi";
    div.appendChild(cell);
}
const cell = document.querySelector(".cell");
div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
})
