export class Color {

  r: number;
  g: number;
  b: number;
  alpha: number;

  hex() {
    let str = "";
    if (this.alpha < 1) {
      str += ((this.alpha * 255) | (1 << 8)).toString(16).slice(1);
    }
    str +=
      ((this.r * 255) | (1 << 8)).toString(16).slice(1) +
      ((this.g * 255) | (1 << 8)).toString(16).slice(1) +
      ((this.b * 255) | (1 << 8)).toString(16).slice(1);
    return str.toUpperCase();
  }

  constructor(r: number, g: number, b: number, alpha: number = 1) {
    this.r = r
    this.g = g
    this.b = b
    this.alpha = alpha
  }
}
