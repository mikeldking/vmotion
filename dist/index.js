import { Cursor } from "./cursor.js";
import { Grid } from "./grid.js";
// Add the mounds
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
const cursor = new Cursor({ canvasHeight: 1000, canvasWidth: 1000 });
let activeKey = null;
document.addEventListener("keydown", (event) => {
    console.log("Keypress: " + event.key);
    if (event.key === "j") {
        cursor.moveDown();
    }
    if (event.key === "k") {
        cursor.moveUp();
    }
    if (event.key === "h") {
        cursor.moveLeft();
    }
    if (event.key === "l") {
        cursor.moveRight();
    }
    if (event.key === "$") {
        cursor.moveToEndOfLine();
    }
    if (event.key === "G") {
        cursor.moveToBeginningOfLine();
        cursor.moveToBottom();
    }
    if (event.key === "0") {
        cursor.moveToBeginningOfLine();
    }
    if (event.key === "g") {
        if (activeKey === "g") {
            cursor.moveToBeginningOfLine();
            cursor.moveToTop();
            activeKey = null;
        }
        activeKey = event.key;
    }
});
const grid = new Grid(canvas);
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
    ctx.fillStyle = "blue";
    ctx.fillRect(cursor.x, cursor.y, cursor.size, cursor.size);
}
function loop() {
    clear();
    grid.render();
    draw();
    requestAnimationFrame(loop);
}
loop();
//# sourceMappingURL=index.js.map