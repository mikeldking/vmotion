const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
const width = 10;
const height = 10;
let xSpeed = 3;
let ySpeed = 3;

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, width, height);
    console.log("rendered");
}

function loop() {
    x += xSpeed;
    y += ySpeed;
    if (x > canvas.width || x < 0) {
        xSpeed = -xSpeed;
    }
    if (y > canvas.height || y < 0) {
        ySpeed = -ySpeed;
    }
    clear();
    draw();
    requestAnimationFrame(loop);
}

loop();
