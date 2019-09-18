// eslint-disable-next-line no-unused-vars
class Obstacles2 {
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
    this.img = new Image();
    this.img.src = './assets/fireball.png';
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
}
