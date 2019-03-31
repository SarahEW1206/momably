import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

// import styled from "styled-components";
import FullWidth from "../elements/FullWidth";
import StyledHeadingOne from "../elements/StyledHeadingOne";
import PatternedHeader from "../elements/PatternedHeader";
import FormBox from "../elements/FormBox";

class EditAccount extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  };

  //To input current as value and make it editable.
  componentDidUpdate() {
    const { user } = this.props;
    //the if statement needs to be there to make sure you don't keep updating state, you'll get errors otherwise. That should let it run only the once, and once the user is loaded.
    if (
      user &&
      //The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
      //The every() method tests whether all elements in the array pass the test implemented by the provided function.

      Object.keys(this.state).every(index => this.state[index].length === 0)
    ) {
      this.setState(state => ({ ...user }));
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { user, firestore, history } = this.props;
    const { firstName, lastName, email, phone } = this.state;

    let userEdits = {
      //If something is put in the input field, added to the userEdits object. Otherwise the value is not changed from what is in Firestore (aka user.whatever).
      firstName: firstName === "" ? user.firstName : firstName,
      lastName: lastName === "" ? user.lastName : lastName,
      email: email === "" ? user.email : email,
      phone: phone === "" ? user.phone : phone
    };

    //Update the info in Firestore
    firestore
      .update({ collection: "users", doc: user.id }, userEdits)
      .then(() => history.push(`/`));
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { user } = this.props;
    const { firstName, lastName, email, phone } = this.state;

    if (user) {
      return (
        <FullWidth>
          <PatternedHeader />
          <FormBox>
            <StyledHeadingOne content="Edit Your Account Info" color="#333" />
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="firstName" className="htmlFor">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  minLength="2"
                  onChange={this.onChange}
                  placeholder={user.firstName}
                  value={firstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="htmlFor">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  minLength="2"
                  onChange={this.onChange}
                  placeholder={user.lastName}
                  value={lastName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="htmlFor">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  minLength="2"
                  // required
                  onChange={this.onChange}
                  placeholder={user.email}
                  value={email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="htmlFor">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  minLength="10"
                  // required
                  onChange={this.onChange}
                  placeholder={user.phone}
                  value={phone}
                />
              </div>

              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </FormBox>
        </FullWidth>
      );
    } else {
      return <p>Waiting...</p>;
    }
  }
}

EditAccount.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect(props => [
    //we already have "users" from users.js, and we only need one here, so we will get the user id from URL and store the respective user data as "user"
    { collection: "users", storeAs: "user", doc: props.match.params.id }
  ]),
  //Below we are replacing the "state" param with destructuring of state.firestore.ordered, which if broken out would look like this:
  // { firestore } = state
  // and then
  // { ordered } = firestore
  // So when you use the "ordered" variable, it reflects state.firestore.ordered
  connect(({ firestore: { ordered } }, props) => ({
    user: ordered.user && ordered.user[0]
  }))
)(EditAccount);
