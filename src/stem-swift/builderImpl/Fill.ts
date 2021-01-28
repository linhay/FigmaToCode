import { Color } from "./Color"
import { Image } from "./Image"

enum FillType {
 color,
 image,
 unknown
}

export class Fill {
  type: FillType = FillType.unknown;

  color: Color | null = null;
  image: Image | null = null;

  constructor(value: Paint) {
    switch (value.type) {
      case "IMAGE":
        this.type = FillType.image;
        if (true) {
          const paint = <ImagePaint>value;
          this.image = null;
        }
        break
      case "SOLID":
        this.type = FillType.color;
        if (true) {
          const paint = <SolidPaint>value;
          this.color = new Color(
            paint.color.r,
            paint.color.g,
            paint.color.b,
            paint.opacity ?? 1
          );
        }
        break
    }

    console.log("------------", this);
  }
}
