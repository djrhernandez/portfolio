import React, { Component } from "react";
import { SidebarContainer, SidebarItem } from "./Sidebar.style";

class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <SidebarItem to="/">Home</SidebarItem>
        <SidebarItem to="/projects">Projects</SidebarItem>
        <SidebarItem to="/aboutme">About me</SidebarItem>
        <SidebarItem href="https://github.com/djrhernandez" target="_blank">
          Github
        </SidebarItem>
      </SidebarContainer>
    );
  }
}
export default Sidebar;
