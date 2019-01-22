import React, { Component } from "react";
import { SwitchView } from "./SwitchView";

class Switch extends Component {
  state = {
    selected: 0
  };

  // 0 => normal
  // 1 => dark
  // 2 => other?

  handleClick = () => {
    this.setState(prevState => ({
      selected: (prevState.selected + 1) % 3
    }));
  };

  render() {
    const { selected } = this.state;

    return (
      <SwitchView
        selected={selected}
        handleClick={this.handleClick}
        {...this.props}
      />
    );
  }
}

export default Switch;
