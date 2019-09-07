import React, { Component } from "react";
import { AddNode } from "./components/AddNode";
import { TreeNode, BST } from "./types";
import { TreeContainer } from "./components/TreeContainer";
import "./App.scss";

interface IState {
  bstArray: BST;
}

class App extends Component<{}, IState> {
  state: Readonly<IState> = {
    bstArray: []
  };

  constructor(props: Readonly<{}>) {
    super(props);
    this.addNode = this.addNode.bind(this);
    this.setDelay = this.setDelay.bind(this);
    this.setProcessing = this.setProcessing.bind(this);
  }

  setProcessing(index: number): BST {
    const newBst = this.state.bstArray.slice();
    newBst[index].processing = !newBst[index].processing;
    return newBst;
  }

  setDelay(index: number, delay: number, animationDelay: number): void {
    setTimeout(
      () => this.setState({ bstArray: this.setProcessing(index) }),
      delay * animationDelay
    );

    setTimeout(
      () => this.setState({ bstArray: this.setProcessing(index) }),
      delay * animationDelay + animationDelay
    );
  }

  addNode(value: number, animationDelay = 600): void {
    const bstArray = this.state.bstArray.slice();
    const node = new TreeNode(value);

    if (bstArray.length === 0) {
      this.setState({ bstArray: [node] });
      this.setDelay(0, 0, animationDelay);
      return;
    }

    let index = 0;
    let delay = 0;

    while (bstArray[index]) {
      ((i: number, d: number) => {
        const current = bstArray[i];

        this.setDelay(i, d, animationDelay);

        if (node.value === current.value) {
          return;
        }

        if (node.value < current.value) {
          index = 2 * (index + 1) - 1;
        } else {
          index = 2 * (index + 1);
        }

        delay += 1;
      })(index, delay);
    }

    bstArray[index] = node;

    this.setState({ bstArray });
    this.setDelay(index, delay, animationDelay);
  }

  render() {
    return (
      <div>
        <AddNode addNode={this.addNode}></AddNode>
        <TreeContainer bst={this.state.bstArray}></TreeContainer>
      </div>
    );
  }
}

export default App;
