import React, { Component } from "react";
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";
// import styled from "styled-components";
import PatternedHeader from "../elements/PatternedHeader";
import FormBox from "../elements/FormBox";
import FullWidth from "../elements/FullWidth";
import StyledHeadingOne from "../elements/StyledHeadingOne";

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { firebase, history } = this.props;
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

      .catch(error => {
        alert(error);
        history.push("/login");
      })
      .then(history.push("/marketplace"));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <FullWidth>
        <PatternedHeader />
        <FormBox>
          <StyledHeadingOne color="var(--dark-teal)" content="Log In" />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                required
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                required
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>

            <input
              type="submit"
              value="Sign In"
              className="btn btn-primary btn-block"
            />
          </form>
        </FormBox>
      </FullWidth>
    );
  }
}

SignUp.propTypes = {
  firebase: PropTypes.object.isRequired,
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(SignUp);
