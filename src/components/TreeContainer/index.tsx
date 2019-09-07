import React from "react";
import { TreeNodeComponent } from "../TreeNodeComponent";
import { TreeNode, BST } from "../../types";
import "./index.scss";
import { RefsMap } from "types/RefsMap";

interface IProps {
  bst: BST;
}

const createRefsMap = (bst: BST): RefsMap => {
  const refsMap: RefsMap = {};
  bst.forEach((_, index) => {
    refsMap[index] = React.createRef<HTMLDivElement>();
  });
  return refsMap;
};

export const TreeContainer: React.FC<IProps> = ({ bst }) => {
  const refsMap = createRefsMap(bst);

  return (
    <div className="tree-node-container">
      {bst.map((node, index) => (
        <TreeNodeComponent
          key={node.value}
          node={node}
          index={index}
          bst={bst}
          ref={refsMap[index]}
          refsMap={refsMap}
        ></TreeNodeComponent>
      ))}
    </div>
  );
};
