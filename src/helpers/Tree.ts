export class GenericTreeNode {
  left: GenericTreeNode = null;
  right: GenericTreeNode = null;

  constructor(public value: any) {}

  contains(value: any): boolean {
    if (value === this.value) {
      return true;
    }

    const leftContains = this.left ? this.left.contains(value) : false;
    const rightContains = this.right ? this.right.contains(value) : false;

    return leftContains || rightContains;
  }
}

export class BSTreeNode {
  left: BSTreeNode = null;
  right: BSTreeNode = null;

  constructor(public value: number) {}

  // addNode(value: number): void {
  //   if (value < this.value) {
  //     if (this.left) {
  //       return this.left.addNode(value);
  //     }
  //     this.left = new BSTreeNode(value);
  //   }

  //   if (value > this.value) {
  //     if (this.right) {
  //       return this.right.addNode(value);
  //     }
  //     this.right = new BSTreeNode(value);
  //   }
  // }

  // contains(value: number): boolean {
  //   if (value === this.value) {
  //     return true;
  //   }

  //   if (value < this.value && this.left) {
  //     return this.left.contains(value);
  //   }

  //   if (value > this.value && this.right) {
  //     return this.right.contains(value);
  //   }

  //   return false;
  // }
}

export type TreeNode = GenericTreeNode | BSTreeNode;

export class Tree {
  constructor(public root: TreeNode) {}

  // findCommonAncestor(val1: any, val2: any): TreeNode {
  //   if (!this.root.contains(val1) || !this.root.contains(val2)) {
  //     throw new Error("One or more nodes do not exist in tree.");
  //   }

  //   let ancestor = null;

  //   const inner = (node: TreeNode): void => {
  //     if (
  //       node.value !== val1 &&
  //       node.value !== val2 &&
  //       node.contains(val1) &&
  //       node.contains(val2)
  //     ) {
  //       ancestor = node;
  //     }

  //     if (node.left) {
  //       inner(node.left);
  //     }

  //     if (node.right) {
  //       inner(node.right);
  //     }
  //   };

  //   //   console.log(node);
  //   //   const leftContainsNodeOne = node.left.contains(val1);

  //   //   if (!node.left) {
  //   //     return inner(node.right);
  //   //   }

  //   //   if (!node.right) {
  //   //     return inner(node.left);
  //   //   }

  //   //   if (
  //   //     (leftContainsNodeOne && node.right.contains(val2)) ||
  //   //     (node.right.contains(val1) && node.left.contains(val2))
  //   //   ) {
  //   //     return node;
  //   //   }

  //   //   return inner(leftContainsNodeOne ? node.left : node.right);
  //   // };

  //   // return inner(this.root);

  //   inner(this.root);

  //   if (ancestor) {
  //     return ancestor;
  //   }

  //   throw new Error("No common ancestor");
  // }
}

const root = new BSTreeNode(10);

// root.addNode(12);
// root.addNode(7);
// root.addNode(8);
// root.addNode(3);

const genericRoot = new GenericTreeNode("hello");
genericRoot.left = new GenericTreeNode("hi");
genericRoot.right = new GenericTreeNode("hola");
genericRoot.left.left = new GenericTreeNode("bonjour");

const tree = new Tree(root);

// console.log(tree.findCommonAncestor(3, 12).value);
