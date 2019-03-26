import React, { Component } from "react";
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  height: 70vh;
`;

const LogInForm = styled.div`
  width: 95%;
  max-width: 400px;
  margin: 50px auto;
  border: 1px solid var(--light-teal);
  padding: 20px;
  margin-top: -200px;
  background-color: white;
  position: relative;
  z-index: 1000;

  input {
    width: 100%;
  }
`;

const LogInImage = styled.div`
background-image: url("https://picsum.photos/2000/1000?random");
background-size: cover;
width 100%;
height: 300px;
`;

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
      .then(history.push("/marketplace"))
      // history.push(`/edit/${user.user.uid}`);

      .catch(error => alert(error))
      .then(history.push("/login"));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <FormContainer>
        <LogInImage />
        <LogInForm>
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
        </LogInForm>
      </FormContainer>
    );
  }
}

SignUp.propTypes = {
  firebase: PropTypes.object.isRequired,
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(SignUp);
