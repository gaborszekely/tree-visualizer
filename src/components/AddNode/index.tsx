import React, { Component } from "react";

interface IState {
  newNodeVal: string;
}

interface IProps {
  addNode: (value: number) => void;
}

class AddNode extends Component<IProps, IState> {
  state: Readonly<IState> = {
    newNodeVal: ""
  };

  constructor(props: Readonly<IProps>) {
    super(props);
    this.addNewNode = this.addNewNode.bind(this);
    this.updateNodeVal = this.updateNodeVal.bind(this);
  }

  addNewNode() {
    this.props.addNode(Number(this.state.newNodeVal));
    this.setState({ newNodeVal: "" });
  }

  updateNodeVal(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      newNodeVal: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Add new node..."
          value={this.state.newNodeVal}
          onChange={this.updateNodeVal}
        />
        <button type="button" onClick={this.addNewNode}>
          Add
        </button>
      </div>
    );
  }
}

export { AddNode };
