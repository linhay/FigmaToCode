import { Frame } from "./builderImpl/Frame";
import { Effects } from "./builderImpl/Effects";
import { Fill } from "./builderImpl/Fill";
import { Stroke } from "./builderImpl/Stroke";
import { Layer } from "./builderImpl/Layer";
import { CornerRadius } from "./builderImpl/CornerRadius";

export class NodeBuilder {
  layer: Layer = new Layer();
  cornerRadius: CornerRadius;
  frame: Frame = new Frame();
  fills: Array<Fill> = [];
  stroke: Stroke = new Stroke();
  effects: Effects = new Effects();

  constructor(node: SceneNode) {
    this.cornerRadius = new CornerRadius(node);
    this.layer.build(node);
    this.frame.build(node);

    let fills = (<GeometryMixin>node).fills;
    if (fills != figma.mixed) {
      for (const iterator of <ReadonlyArray<Paint>>fills) {
        let builder = new Fill(iterator);
        this.fills.push(builder);
      }
    }
  }

  nodeClassType: string = "UIView";

  nodeBackgroundColor(): string {
    if (this.fills.length > 0 && this.fills[0].color != null) {
      return `item.backgroundColor = Colors._${this.fills[0].color.hex()}.value()`;
    } else {
      return "";
    }
  }

  nodeCornerRadius(): string[] {
    if (this.cornerRadius.cornerRadius == 0) {
      return []
    }
    if (this.cornerRadius.cornerRadius != null) {
      return [
        `item.layer.cornerRadius = ${this.cornerRadius.cornerRadius},
      item.layer.masksToBounds = true`,
      ];
    } else {
      return [];
    }
  }

  nodeFrame(): string {
    return `item.frame = .init(x: ${this.frame.x}, y: ${this.frame.y}, width: ${this.frame.width}, height: ${this.frame.height})`;
  }

  buildNodeStyles(): Array<string> {
    let list = new Array<string>();
    list.push(this.nodeFrame());
    list.concat(this.nodeCornerRadius());
    list.push(this.nodeBackgroundColor());
    return list;
  }

  build(): string {
    var code = `private lazy var view: ${this.nodeClassType} = {
      let item = ${this.nodeClassType}()
${this.buildNodeStyles()
  .filter((str): boolean => {
    return str.length > 0;
  })
  .join("\n")}
      return item
    }()`;
    return code;
  }
}
