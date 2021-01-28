export class TextAlignment {

    font: string = "";
    size: number = 0;
    weight: number = 0;

    style: string = "";
    lineHeight: number = 0;
    letter: number = 0;

    build(node: TextNode) {
        this.font  = (<FontName>node.fontName).family
        this.style = (<FontName>node.fontName).style.toLowerCase()
        this.size  = <number>node.fontSize
        console.log("------------", this)
    }

}
