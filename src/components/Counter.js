import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }
  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  handleDecrease = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
      return;
    }
    this.setState({
      count: 0,
    });
  };
  render() {
    return (
      <div className="row m-2-top">
        <div className="col-10 text-center m-auto noselectable">
          <i
            onClick={this.handleDecrease}
            className="fa fa-minus-circle font-1-3 text-danger cursor-pointer"
          ></i>
          &nbsp;&nbsp;&nbsp;
          <label className="text-center background-fade-white width-3">
            {this.state.count}
          </label>
          &nbsp;&nbsp;&nbsp;
          <i
            onClick={this.handleIncrease}
            className="fa fa-plus-circle font-1-3 text-success cursor-pointer"
          ></i>
        </div>
      </div>
    );
  }
}
