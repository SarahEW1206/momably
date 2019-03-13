import React, { Component } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import Logo from "../images/momably.png";

class TopNav extends Component {
  onLogOutClick = e => {
    e.preventDefault();

    const { firebase, history } = this.props;

    firebase.logout().then(() => history.push("/"));
  };
  render() {
    const {
      props: { auth }
    } = this;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">
          <img
            className="header-logo"
            src={Logo}
            width="140px"
            alt="momably logo"
          />
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
            <a className="nav-link" href="/">
              <i className="fas fa-user-circle" />
            </a>
          </li>
          {/* <li className="nav-item">
          <NavLink
              exact={true}
              activeClassName="is-active"
              className="nav-link"
              to="/login"
            >
              Log In
            </NavLink>
          </li> */}
          {auth.uid ? (
            <li className="nav-item">
              <a href="#!" className="nav-link">
                {auth.email}
              </a>
            </li>
          ) : null}
          {auth.uid ? (
            <li className="nav-item">
              <a href="#!" className="nav-link" onClick={this.onLogOutClick}>
                Log Out
              </a>
            </li>
          ) : (
            <NavLink
              exact={true}
              activeClassName="is-active"
              className="nav-link"
              to="/login"
            >
              Log In
            </NavLink>
          )}
        </ul>
      </nav>
    );
  }
}

export default compose(
  firebaseConnect(),
  withRouter,
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(TopNav);
