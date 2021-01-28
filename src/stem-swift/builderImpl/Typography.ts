export class Typography {
  font: string = "";
  size: number = 0;
  weight: number = 0;

  style: string = "";
  lineHeight: number = 0;
  letter: number = 0;
  lineCount: number = 1;

  build(node: TextNode) {
    this.font = (<FontName>node.fontName).family;
    this.style = (<FontName>node.fontName).style.toLowerCase();
    this.size = <number>node.fontSize;
    this.lineCount = Math.floor(node.height / this.size);

    if (node.lineHeight != figma.mixed) {
      if (node.lineHeight.unit === "PIXELS") {
        this.lineHeight = node.lineHeight.value;
      } else if (node.lineHeight.unit === "PERCENT") {
        this.lineHeight = node.lineHeight.value;
      } else {
        this.lineHeight = Math.floor(node.height / this.lineCount);
      }
    } else {
      this.lineHeight = Math.floor(node.height / this.lineCount);
    }
    console.log("------------", this);
  }
}
