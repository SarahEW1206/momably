import React, { Component, Fragment } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <Fragment>
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
              <button
                className="category-button nav-link"
                value="Art & Photography"
                onClick={this.props.onClick}
              >
                Art & Photography
              </button>
              <button
                className="category-button nav-link"
                value="Clothing & Accessories"
                onClick={this.props.onClick}
              >
                Clothing & Accessories
              </button>
              <button
                className="category-button nav-link"
                value="Entertainment"
                onClick={this.props.onClick}
              >
                Entertainment
              </button>
              <button
                className="category-button nav-link"
                value="Hair & Beauty"
                onClick={this.props.onClick}
              >
                Hair & Beauty
              </button>
              <button
                className="category-button nav-link"
                value="Health & Fitness"
                onClick={this.props.onClick}
              >
                Health & Fitness
              </button>
              <button
                className="category-button nav-link"
                value="Kids & Baby"
                onClick={this.props.onClick}
              >
                Kids & Baby
              </button>
              <button
                className="category-button nav-link"
                value="Household"
                onClick={this.props.onClick}
              >
                Household
              </button>
              <button
                className="category-button nav-link"
                value="Pets"
                onClick={this.props.onClick}
              >
                Pets
              </button>
              <button
                className="category-button nav-link"
                value="Professional Services"
                onClick={this.props.onClick}
              >
                Professional Services
              </button>
            </div>
          </div>
        </nav>
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
