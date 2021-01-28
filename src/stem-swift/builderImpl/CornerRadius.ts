export class CornerRadius {
  bottomLeftRadius: number = 0;
  bottomRightRadius: number = 0;
  topLeftRadius: number = 0;
  topRightRadius: number = 0;
  cornerRadius: number | null = null;

  constructor(node: SceneNode) {
    let rectangleCornerMixin = <RectangleCornerMixin>node;
    if (rectangleCornerMixin != null) {
      this.topLeftRadius = rectangleCornerMixin.topLeftRadius;
      this.topRightRadius = rectangleCornerMixin.topRightRadius;
      this.bottomLeftRadius = rectangleCornerMixin.bottomLeftRadius;
      this.bottomRightRadius = rectangleCornerMixin.bottomRightRadius;
    }

    let cornerMixin = <CornerMixin>node;
    if (cornerMixin.cornerRadius != figma.mixed) {
      this.cornerRadius = cornerMixin.cornerRadius;
    }

    console.log("------------", this);
  }
}
