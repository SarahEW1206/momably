import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img
            src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
            width="130"
          />
        </Link>
        <ul className="nav ml-auto">
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
