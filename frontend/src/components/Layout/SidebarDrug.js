import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div class="sidenav">
        <Link to="/">Form 1-1</Link>
        <Link to="/">---------</Link>
        <Link to="/">---------</Link>
        <Link to="/">--------</Link>
      </div>
    );
  }
}

export default Sidebar;
