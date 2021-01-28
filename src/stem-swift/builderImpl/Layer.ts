export class Layer {

  //// 是否显示
  isVisibility: boolean = true;
  /// 透明度 0 - 1
  opacity: number = 1;
  blendMode: string = "";

  build(node: SceneNode): this {
    // this.opacity = node.opacity
    // if (node.visible !== undefined && node.visible === false) {
    //   this.isVisibility = false
    // }
    // this.blendMode = node.blendMode
    return this
  }


}
