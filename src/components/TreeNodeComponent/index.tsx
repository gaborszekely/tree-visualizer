import React, { useEffect, useState } from "react";
import { TreeNode } from "../../types/TreeNode";
import "./index.scss";
import { RefsMap } from "types/RefsMap";
import { BST } from "types";

interface IProps {
  node: TreeNode;
  refsMap: RefsMap;
  index: number;
  bst: BST;
}

const TreeNodeComponent = React.forwardRef<HTMLDivElement, IProps>(
  ({ node, refsMap, index, bst }, ref) => {
    const getNodeClassName = (processing: boolean): string => {
      return "tree-node" + (processing ? " active" : "");
    };

    const findParentIndex = (): number => {
      if (index === 0) return 0;

      // If left child
      if (index % 2 !== 0) {
        return (index + 1) / 2 - 1;
      }

      // If right child
      return index / 2 - 1;
    };

    const findOffsets = (
      parentIndex: number,
      index: number
    ): [number, number] => {
      if (index === parentIndex && parentIndex === 0) {
        return [250, 600];
      }

      let parentRef = refsMap[parentIndex];

      const { bottom, left, right } = parentRef.current.getBoundingClientRect();
      let yOffset = bottom + 100;
      let xOffset = right + 30;

      // If right child, change xOffset
      if (index % 2 !== 0) {
        xOffset = left - 30;
      }
      return [yOffset, xOffset];
    };

    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
      const parentIndex = findParentIndex();
      const [newOffsetX, newOffsetY] = findOffsets(parentIndex, index);
      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }, [bst, findOffsets, findParentIndex, index]);

    return (
      <div
        className={getNodeClassName(node.processing)}
        ref={ref}
        style={{
          top: offsetX,
          left: offsetY
        }}
      >
        <span>{node.value}</span>
      </div>
    );
  }
);

export { TreeNodeComponent };
