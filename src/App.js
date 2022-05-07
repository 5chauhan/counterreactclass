import "./styles.css";
import React, { Component } from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count <= 0 ? 0 : this.state.count - 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}> increase </button>
        <button onClick={this.decrement}> decrease </button>
      </>
    );
  }
}

export default Counter;
