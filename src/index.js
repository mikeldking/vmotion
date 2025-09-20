"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas = document.getElementById("canvas");
if (!canvas) {
    throw new Error("Failed to get canvas element");
}
if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("No canvas element");
}
const ctx = canvas.getContext("2d");
if (!ctx) {
    throw new Error("No canvas context");
}
let x = 0;
let y = 0;
class Square {
    x;
    y;
    size;
    constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 20;
    }
    moveRight() {
        this.x += this.size;
    }
    moveLeft() {
        this.x -= this.size;
    }
    moveDown() {
        this.y += this.size;
    }
    moveUp() {
        this.y -= this.size;
    }
}
const square = new Square();
document.addEventListener("keydown", (event) => {
    if (event.key === "j") {
        square.moveDown();
    }
    if (event.key === "k") {
        square.moveUp();
    }
    if (event.key === "h") {
        square.moveLeft();
    }
    if (event.key === "l") {
        square.moveRight();
    }
});
function clear() {
    if (!ctx) {
        throw new Error("No canvas context");
    }
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
        throw new Error("Canvas missing");
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw() {
    if (!ctx) {
        throw new Error("No canvas context");
    }
    ctx.fillStyle = "green";
    ctx.fillRect(square.x, square.y, square.size, square.size);
    console.log("rendered");
}
function loop() {
    clear();
    draw();
    requestAnimationFrame(loop);
}
loop();
//# sourceMappingURL=index.js.map