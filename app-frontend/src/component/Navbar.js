import { Component } from "react";
import React from "react";
import NavItem from "./NavItem";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavbarActive: "",
    };
  }
  activeitem(item) {
    if (this.state.NavbarActive.length > 0) {
      document.getElementById(
        this.state.NavbarActive.classList.remove("active")
      );
    }
    this.setState({ NavItemActive: item }, () => {
      document.getElementById(this.state.NavbarActive.classList.add("active"));
    });
  }
  render() {
    return (
      <>
        <nav>
          <ul>
            <NavItem
              item="Home"
              tolink="/"
              activeitem={this.activeitem}
            ></NavItem>
            <NavItem
              item="About"
              tolink="/About"
              activeitem={this.activeitem}
            ></NavItem>
            <NavItem
              item="Education"
              tolink="/Education"
              activeitem={this.activeitem}
            ></NavItem>
            <NavItem
              item="Contact"
              tolink="/Contact"
              activeitem={this.activeitem}
            ></NavItem>
            <NavItem
              item="Knowledge"
              tolink="/Knowledge"
              activeitem={this.activeitem}
            ></NavItem>
          </ul>
          <div>
          <a href="https://th.linkedin.com/" target="_blank" rel="noopender noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopender noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopender noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopender noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
