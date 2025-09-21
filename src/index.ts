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

let activeKey: string | null = null;
let numberBuffer: string[] = [];

class Target {
  x: number;
  y: number;
  size: number = 20;
  constructor() {
    this.x = 0;
    this.y = 0;
  }
  setNew() {
    this.x = Math.floor(Math.random() * (1000 / this.size)) * this.size;
    this.y = Math.floor(Math.random() * (1000 / this.size)) * this.size;
  }
  render() {}
}
/**
 * perform movement the number of times
 * Note: probably not how to do this
 */
function perform({
  multiplier,
  action,
}: {
  multiplier: number;
  action: () => void;
}) {
  let counter = multiplier;
  do {
    action();
    counter--;
  } while (counter > 0);
}
document.addEventListener("keydown", (event) => {
  console.log("Keypress: " + event.key);
  // Check if the value is a number
  if (
    event.key.charCodeAt(0) >= "0".charCodeAt(0) &&
    event.key.charCodeAt(0) <= "9".charCodeAt(0)
  ) {
    numberBuffer.push(event.key);
    return;
  }
  // materialize the number buffer
  const multiplier = parseInt(numberBuffer.join("")) || 1;
  numberBuffer = [];
  let action: (() => void) | null = null;
  // TODO: clear buffer of number
  // TODO: handle escape key
  if (event.key === "j") {
    action = () => cursor.moveDown();
  }
  if (event.key === "k") {
    action = () => cursor.moveUp();
  }
  if (event.key === "h") {
    action = () => cursor.moveLeft();
  }
  if (event.key === "l") {
    action = () => cursor.moveRight();
  }
  if (event.key === "$") {
    action = () => cursor.moveToEndOfLine();
  }
  if (event.key === "G") {
    action = () => {
      cursor.moveToBeginningOfLine();
      cursor.moveToBottom();
    };
  }
  if (event.key === "0") {
    action = () => {
      cursor.moveToBeginningOfLine();
    };
  }
  if (event.key === "g") {
    if (activeKey === "g") {
      action = () => {
        cursor.moveToBeginningOfLine();
        cursor.moveToTop();
      };
      activeKey = null;
    }
    activeKey = event.key;
  }

  if (typeof action === "function") {
    perform({ action, multiplier });
  }
});

const target = new Target();
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
  ctx.fillStyle = "orange";
  ctx.fillRect(target.x, target.y, target.size, target.size);
  ctx.fillStyle = "blue";
  ctx.fillRect(cursor.x, cursor.y, cursor.size, cursor.size);
  if (cursor.x === target.x && cursor.y === target.y) {
    target.setNew();
  }
}
function loop() {
  clear();
  grid.render();
  draw();
  requestAnimationFrame(loop);
}

loop();
