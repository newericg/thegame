// eslint-disable-next-line no-unused-vars
class Obstacles {
  constructor(height, width, x, y, ctx) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
  }

  move() {
    this.x -= 5;
  }

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
