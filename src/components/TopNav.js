import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-ish.png";

export default class TopNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={Logo} width="140px" />
        </Link>
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
              Sign Up
            </a>
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
