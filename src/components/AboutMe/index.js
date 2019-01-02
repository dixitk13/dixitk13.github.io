import React, { Component } from "react";
import AboutMeView from "./AboutMeView";

export default class AboutMe extends Component {
  state = {
    on: false
  };

  toggleOn = () => {
    this.setState(({ on }) => ({ on: !on }));

    this.toggleHeart = setTimeout(() => {
      this.setState(({ on }) => ({ on: !on }));
    }, 1000);
  };

  componentWillUnmount() {
    clearTimeout(this.toggleHeart);
  }

  render() {
    return <AboutMeView on={this.state.on} toggleOn={this.toggleOn} />;
  }
}
