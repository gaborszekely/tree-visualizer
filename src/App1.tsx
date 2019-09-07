import React, { Component } from "react";
import { BSTreeNode } from "./helpers/Tree";
import "./App.css";

interface IState {
  newNode: string;
  rootNode: BSTreeNode;
  nodes: BSTreeNode[];
}

interface IProps {}

class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      newNode: "",
      rootNode: null,
      nodes: []
    };

    this.addRootNode = this.addRootNode.bind(this);
    this.addChild = this.addChild.bind(this);
    this.process = this.process.bind(this);
    this.updateNewNode = this.updateNewNode.bind(this);
    this.addNode = this.addNode.bind(this);
  }

  addRootNode(value: number): void {
    this.process(value);

    this.setState({
      rootNode: new BSTreeNode(value)
    });
  }

  addChild(
    value: number,
    rootNode = this.state.rootNode ? { ...this.state.rootNode } : null,
    node = rootNode,
    delay = 0
  ): void {
    if (!rootNode) {
      this.addRootNode(value);
      return;
    }

    this.process(node.value);

    if (value === node.value) {
      return;
    }

    if (value < node.value) {
      if (node.left) {
        this.addChild(value, rootNode, node.left, ++delay);
      } else {
        node.left = new BSTreeNode(value);
        this.setState({ rootNode });
        this.process(value);
      }
    }

    if (value > node.value) {
      if (node.right) {
        this.addChild(value, rootNode, node.right, ++delay);
      } else {
        node.right = new BSTreeNode(value);
        this.setState({ rootNode });
        this.process(value);
      }
    }
  }

  process(value: number): void {
    console.log(value);
  }

  addNode(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const { newNode } = this.state;
    this.addChild(Number(newNode));
    this.setState({ newNode: "" });
  }

  updateNewNode(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ newNode: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <input
          type="number"
          placeholder="Add new node..."
          value={this.state.newNode}
          onChange={this.updateNewNode}
        />
        <button onClick={this.addNode}>Add</button>
      </div>
    );
  }
}

export default App;
