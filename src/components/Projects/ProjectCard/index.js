import React, { Component } from "react";
import ProjectCardView from "./ProjectCardView";

class ProjectCard extends Component {
  render() {
    return <ProjectCardView {...this.props} />;
  }
}

export default ProjectCard;
