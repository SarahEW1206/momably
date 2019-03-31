import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import styled from "styled-components";
// import StyledHeadingOne from "../elements/StyledHeadingOne";
import PatternedHeader from "../elements/PatternedHeader";

const ProfileContainer = styled.div`
  width: 100%;
  padding: 0px;
`;

const ProfileInnerCont = styled.div`
  width: 95%;
  max-width: 800px;
  margin: 50px auto;
  border: 1px solid var(--dark-teal);
  padding: 50px;
  margin-top: -200px;
  background-color: white;
  position: relative;
  z-index: 1000;

  img {
    width: 100%;
    max-width: 200px;
    margin: 20px 0;
  }
`;

class UserProfile extends Component {
  render() {
    const { user } = this.props;

    if (user) {
      return (
        <ProfileContainer>
          <PatternedHeader />
          <ProfileInnerCont>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <h2>{user.bizName}</h2>
            <img src={user.imgURL} alt={user.bizName} />
            <p>{user.bizDesc}</p>
            <p>{user.phone}</p>
            <p>{user.email}</p>
          </ProfileInnerCont>
        </ProfileContainer>
      );
    } else {
      return <div style={{ height: "100vh" }} />;
    }
  }
}

UserProfile.propTypes = {
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
)(UserProfile);
