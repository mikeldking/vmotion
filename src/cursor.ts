type CursorParams = {
  canvasHeight: number;
  canvasWidth: number;
};
export class Cursor {
  private _x: number;
  private _y: number;
  private canvasHeight: number;
  private canvasWidth: number;
  size: number;
  constructor({ canvasHeight, canvasWidth }: CursorParams) {
    this._x = 0;
    this._y = 0;
    this.size = 20;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(newX: number) {
    this._x = Math.max(Math.min(newX, this.canvasWidth - this.size), 0);
  }
  set y(newY: number) {
    this._y = Math.max(Math.min(newY, this.canvasHeight - this.size), 0);
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
  moveToEndOfLine() {
    this.x = 1000 - this.size;
  }
  moveToBeginningOfLine() {
    this.x = 0;
  }
  moveToTopStart() {
    this.moveToTop();
    this.moveToBeginningOfLine();
  }
  moveToTop() {
    this.y = 0;
  }
  moveToBottom() {
    this.y = 1000 - this.size;
  }
}
