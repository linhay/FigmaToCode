export class Color {
  hex: string = "";

  build(r: number, g: number, b: number, alpha: number) {
    let str = "";
    if (alpha < 1) {
      str += ((alpha * 255) | (1 << 8)).toString(16).slice(1);
    }
    str +=
      ((r * 255) | (1 << 8)).toString(16).slice(1) +
      ((g * 255) | (1 << 8)).toString(16).slice(1) +
      ((b * 255) | (1 << 8)).toString(16).slice(1);
    this.hex = str.toUpperCase();
  }

  constructor(hex: string) {
    this.hex = hex.toUpperCase();
  }
}
