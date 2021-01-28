import { Color } from "./Color"

export class Fill {

  blendMode: string = ""
  color: Color = new Color("")

  constructor(paint: Paint) {
    let solidPaint = <SolidPaint>paint
    this.color.build(solidPaint.color.r, solidPaint.color.g, solidPaint.color.b, solidPaint.opacity ?? 1)
  }

}
