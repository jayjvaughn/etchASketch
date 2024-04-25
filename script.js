const container = document.querySelector("#container");
const clearCanvasBtn = document.querySelector("#clearCanvasBtn");
// userInput = prompt("");
// const size = Number(userInput);

// v1 code
for (i = 0; i < 625; i++) {
const div1 = document.createElement("div");
container.appendChild(div1);
div1.classList.add("box");
div1.addEventListener("mousemove", () => {div1.style.backgroundColor = "black"} );
clearCanvasBtn.addEventListener("click",() => {div1.style.backgroundColor = "white"});
}
// v2 code, will add a custom canvas size button later
// userInput = prompt("");
// const size = Number(userInput);
// function canvasSize(size){
//     for (i = 0; i < size; i++) {
//         const div1 = document.createElement("div");
//         container.appendChild(div1);
//         div1.classList.add("box");
//         div1.addEventListener("mousemove", () => {div1.style.backgroundColor = "black"} );
//         clearCanvasBtn.addEventListener("click",() => {div1.style.backgroundColor = "white"});
//         }
// }
// canvasSize(size);