const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
const width = 20;
const height = 20;

class Square {
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw() {
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
