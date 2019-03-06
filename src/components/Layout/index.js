import React, { Component } from "react";
import { ContainerView } from "./ContainerView";
import { LayoutContext } from "./LayoutContext";
import { ThemeProvider } from "styled-components";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      y: 0,
      theme: "light"
    };
  }

  getInitialTheme = () => {
    // windowGlobal because Gatsby ¯\_(ツ)_/¯
    let windowGlobal = typeof window !== "undefined" && window;

    return windowGlobal
      ? windowGlobal.localStorage.getItem("theme") || "light"
      : "light";
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ theme: this.getInitialTheme() });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ y: window.scrollY });
  };

  themeToggle = theme => {
    this.setState({ theme: theme });

    let windowGlobal = typeof window !== "undefined" && window;
    windowGlobal.localStorage.setItem("theme", theme);
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
