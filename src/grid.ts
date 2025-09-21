export class Grid {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("invalid context");
    }
    this.ctx = ctx;
  }
  render() {
    for (let i = 20; i < 1000; i += 20) {
      this.ctx.beginPath();
      this.ctx.moveTo(i, 0);
      this.ctx.lineTo(i, 1000);
      this.ctx.strokeStyle = "blue";
      this.ctx.lineWidth = 1;
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(0, i);
      this.ctx.lineTo(1000, i);
      this.ctx.strokeStyle = "blue";
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    }
  }
}
