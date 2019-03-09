import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Logo from "../images/logo-ish.png";

class TopNav extends Component {
  render() {
    // const aboutClass = location.pathname.match(/^\/about/)
    //   ? "active nav-item"
    //   : "nav-item";
    // const signupClass = location.pathname.match(/^\/signup/)
    //   ? "active nav-item"
    //   : "nav-item";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          <img src={Logo} width="140px" />
        </NavLink>
        <ul className="nav ml-auto">
          <li className="nav-item">
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="nav-link"
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-item signupClass">
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="nav-link"
              to="/signup"
            >
              Sign Up
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fas fa-user-circle" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(TopNav);
