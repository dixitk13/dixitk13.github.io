import React, { Component } from "react";
import { ContainerView } from "./ContainerView";
import { LayoutContext } from "./LayoutContext";
import { ThemeProvider } from "styled-components";

class Container extends Component {
  constructor(props) {
    super(props);
    this.windowGlobal = typeof window !== "undefined" && window;
    this.state = {
      y: 0,
      theme: this.windowGlobal
        ? this.windowGlobal.localStorage.getItem("theme") || "light"
        : "light"
    };
  }

  windowGlobal = null;

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
    this.windowGlobal.localStorage.setItem("theme", theme);
  };

  render() {
    const value = {
      ...this.state,
      themeToggle: this.themeToggle
    };
    return (
      <LayoutContext.Provider value={value}>
        <ThemeProvider theme={{ theme: this.state.theme }}>
          <ContainerView>{this.props.children}</ContainerView>
        </ThemeProvider>
      </LayoutContext.Provider>
    );
  }
}

export default Container;
