import React, { Component, Fragment } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";

class NavBar extends Component {
  render() {
    const {
      props: { auth }
    } = this;

    return (
      <Fragment>
        {/* {auth.uid ? ( */}
        <nav className="main-nav navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" href="/">
                Art & Photography
              </a>
              <a className="nav-item nav-link" href="/">
                Clothing & Accessories
              </a>
              <a className="nav-item nav-link" href="/">
                Entertainment
              </a>
              <a className="nav-item nav-link" href="/">
                Hair & Beauty
              </a>
              <a className="nav-item nav-link" href="/">
                Health & Fitness
              </a>
              <a className="nav-item nav-link" href="/">
                Home & Living
              </a>
              <a className="nav-item nav-link" href="/">
                Kids & Baby
              </a>
              <a className="nav-item nav-link" href="/">
                Pets
              </a>
              <a className="nav-item nav-link" href="/">
                Professional Services
              </a>
            </div>
          </div>
        </nav>
        {/* ) : null} */}
      </Fragment>
    );
  }
}

export default compose(
  // firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(NavBar);
