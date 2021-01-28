import { NodeBuilder } from "./NodeBuilder";
import { TextBuilder } from "./TextBuilder";

let parentId = "";

export const stemSwiftMain = (sceneNodes: ReadonlyArray<SceneNode>): string => {
  return sceneNodes
    .map((node) => {
      console.log(node);
      switch (node.type) {
        case "TEXT":
          return new TextBuilder(<TextNode>node);
        case "RECTANGLE":
          return new NodeBuilder(node);
      }
    })
    .map((builder) => {
      return builder?.build();
    })
    .join("\n");
};
