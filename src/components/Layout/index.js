import React, { Component } from "react";
import { ContainerView } from "./ContainerView";
import { LayoutContext } from "./LayoutContext";

class Container extends Component {
  state = { y: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ y: window.scrollY });
  };

  themeToggle = theme => {
    this.setState({ theme: theme });
  };

  render() {
    return (
      <LayoutContext.Provider value={this.state}>
        <ContainerView>{this.props.children}</ContainerView>
      </LayoutContext.Provider>
    );
  }
}

export default Container;
