import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import { firestoreConnect } from "react-redux-firebase";
// import styled from "styled-components";
import PatternedHeader from "../elements/PatternedHeader";
import FormBox from "../elements/FormBox";
import FullWidth from "../elements/FullWidth";
import StyledHeadingOne from "../elements/StyledHeadingOne";

class UpdateCreds extends Component {
  state = {
    currentPassword: "",
    newPassword: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  reauthenticate = currentPassword => {
    var user = firebase.auth().currentUser;
    console.log(user);
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateAndRetrieveDataWithCredential(cred);
  };

  changePassword = (currentPassword, newPassword) => {
    this.reauthenticate(currentPassword.toString())
      .then(() => {
        var user = firebase.auth().currentUser;
        user
          .updatePassword(newPassword.toString())
          .then(() => {
            console.log("Password updated!");
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
  //   changeEmail = (currentPassword, newEmail) => {
  //     this.reauthenticate(currentPassword)
  //       .then(() => {
  //         var user = firebase.auth().currentUser;
  //         user
  //           .updateEmail(newEmail)
  //           .then(() => {
  //             console.log("Email updated!");
  //           })
  //           .catch(error => {
  //             console.log(error);
  //           });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   };

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
          <form onSubmit={this.changePassword}>
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                className="form-control"
                name="currentPassword"
                required
                value={this.state.currentPassword}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                className="form-control"
                name="newPassword"
                required
                value={this.state.newPassword}
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

UpdateCreds.propTypes = {
  firebase: PropTypes.object.isRequired,
  firestore: PropTypes.object.isRequired
};

export default firestoreConnect()(UpdateCreds);
