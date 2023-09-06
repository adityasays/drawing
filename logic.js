const canvas = document.getElementById("canvas");
const body = document.querySelector("body");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var color = '';
var lwidth = 5;
let prevx = null;
let prevy = null;
let draw = false;
body.style.backgroundColor = "#FFFFFF";
var inputt = document.getElementById("pickcol");
inputt.addEventListener("input", function () {
    color = inputt.value;
    body.style.backgroundColor = color;
}, false);
const ctx = canvas.getContext("2d");
ctx.lineWidth = lwidth;
document.getElementById("colinputid").oninput = function () {
    draw = null;
    lwidth = document.getElementById("colinputid").value;
    document.getElementById("coloutputid").innerHTML = lwidth;
    ctx.lineWidth = lwidth;
};
let clr = document.querySelectorAll(".col");
clr = Array.from(clr);
clr.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.col;
    });
});
let clrbutton = document.querySelector(".clear");
clrbutton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
let savebtn = document.querySelector(".save");
savebtn.addEventListener("click", () => {
    let data = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    a.href = data;
    a.download = "sketch.png";
    a.click();
});
window.addEventListener("mousedown", (e) => draw = true);
window.addEventListener("mouseup", (e) => draw = false);
window.addEventListener("mousemove", (e) => {
    if (prevx == null || prevy == null || !draw) {
        prevx = e.clientX;
        prevy = e.clientY;
    }
    let currentX = e.clientX;
    let currentY = e.clientY;
    ctx.beginPath();
    ctx.moveTo(prevx, prevy);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    prevx = currentX;
    prevy = currentY;
});
