const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
const width = 20;
const height = 20;
let xSpeed = 3;
let ySpeed = 3;

document.addEventListener("keydown", (event) => {
    if (event.key === "j") {
        y += height;
    }
    if (event.key === "k") {
        y -= height;
    }
    if (event.key === "h") {
        x -= width;
    }
    if (event.key === "l") {
        x += width;
    }
});
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(x, y, width, height);
    console.log("rendered");
}

function loop() {
    // x += xSpeed;
    // y += ySpeed;
    // const left = x;
    // const top = y;
    // const right = x + width;
    // const bottom = y + height;
    // if (right > canvas.width || left < 0) {
    //     xSpeed = -xSpeed;
    // }
    // if (bottom > canvas.height || top < 0) {
    //     ySpeed = -ySpeed;
    // }
    clear();
    draw();
    requestAnimationFrame(loop);
}

loop();
