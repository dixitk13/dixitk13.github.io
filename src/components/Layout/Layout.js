import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { LayoutContext, getInitialTheme } from "./LayoutContext";
import { offset } from "../../common";

export class Layout extends Component {
  constructor(props) {
    super(props);
    // NOTE: if you don't let it flicker(by using getInitialTheme), it wont work
    this.state = {
      y: 0,
      theme: "light",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ theme: getInitialTheme() });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      y: window.scrollY - offset,
    });
  };

  themeToggle = (theme) => {
    this.setState({ theme: theme });

    let windowGlobal = typeof window !== "undefined" && window;
    windowGlobal.localStorage.setItem("theme", theme);
  };

  render() {
    const value = {
      ...this.state,
      themeToggle: this.themeToggle,
    };
    return (
      <LayoutContext.Provider value={value}>
        <ThemeProvider theme={{ theme: this.state.theme }}>
          {this.props.children}
        </ThemeProvider>
      </LayoutContext.Provider>
    );
  }
}
