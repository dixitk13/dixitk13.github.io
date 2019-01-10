import React, { Component } from "react";
import ProjectView from "./ProjectView";

class Project extends Component {
  state = {
    open: false
  };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    return (
      <ProjectView
        open={this.state.open}
        toggleOpen={this.toggleOpen}
        {...this.props}
      />
    );
  }
}

export default Project;
