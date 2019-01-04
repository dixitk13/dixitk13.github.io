import React, { Component } from "react";
import ProjectView from "./ProjectView";

class Project extends Component {
  render() {
    return <ProjectView {...this.props} />;
  }
}

export default Project;
