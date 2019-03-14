import React, { Component } from "react";
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 95%;
  max-width: 900px;
  margin: 50px auto;
`;

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { firestore, firebase, history } = this.props;
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(firebase.auth());
        history.push(`/edit/${user.user.uid}`);
      })
      // .then(() => history.push(`/client/edit/${user_id}`));
      .catch(error => alert(error));
  };

  render() {
    return (
      <FormContainer>
        <h1>Log In</h1>
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
              type="text"
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
      </FormContainer>
    );
  }
}

SignUp.propTypes = {
  firebase: PropTypes.object.isRequired,
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(SignUp);
