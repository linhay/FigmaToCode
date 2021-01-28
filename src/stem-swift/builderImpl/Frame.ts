import { AltCornerMixin, AltSceneNode } from "../../altNodes/altMixins";

export class Frame {
  x: number = 0;
  y: number = 0;
  width: number = 0;
  height: number = 0;
  /// 旋转角度 0 - 360
  rotation: number = 0;

  build(node: SceneNode, parentId: string = "") {
    this.x = node.x;
    this.y = node.y;
    this.width = node.width;
    this.height = node.height;
    this.rotation = node.rotation;
    console.log("------------", this)
  }
}
