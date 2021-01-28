import { NodeBuilder } from "./NodeBuilder";
import { Typography } from "./builderImpl/Typography";

export class TextBuilder extends NodeBuilder {

  typography: Typography;
  content: string;

  constructor(node: TextNode) {
    super(node);
    this.content = node.characters;

    this.typography = new Typography()
    this.typography.build(node);

    this.nodeClassType = "UILabel";
  }

  buildNodeStyles(): Array<string> {
    let list = new Array<string>()
    list.push(this.nodeFrame())
    list.push(this.nodeTextColor())
    list.push(`item.font = .systemFont(ofSize: ${this.typography.size}, weight: .${this.typography.style})`)
    list.push(`item.text = "${this.content}"`)
    list.push(`// Line height: ${this.typography.lineHeight} pt`)
    if (this.typography.lineCount != 1) {
      list.push(`item.numberOfLines = ${this.typography.lineCount}`);
    }
    return list
  }

  nodeTextColor(): string {
    if (this.fills.length > 0 && this.fills[0].color != null) {
      return `item.textColor = Colors._${this.fills[0].color.hex()}.value()`;
    } else {
      return "";
    }
  }

}
