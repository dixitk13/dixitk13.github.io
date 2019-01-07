import React, { Component } from "react";
import ProjectCardView from "./ProjectCardView";

class ProjectCard extends Component {
  state = {
    open: false
  };

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    return (
      <ProjectCardView
        open={this.state.open}
        toggleOpen={this.toggleOpen}
        {...this.props}
      />
    );
  }
}

export default ProjectCard;
