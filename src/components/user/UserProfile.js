import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import styled from "styled-components";
import StyledHeadingOne from "../elements/StyledHeadingOne";
import StyledHeadingTwo from "../elements/StyledHeadingTwo";

import PatternedHeader from "../elements/PatternedHeader";

const ProfileContainer = styled.div`
  width: 100%;
  padding: 0px;
`;

const ProfileInnerCont = styled.div`
  width: 95%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  border: 1px solid var(--light-teal);
  padding: 50px;
  margin-top: -200px;
  background-color: white;
  position: relative;
  z-index: 1000;
  box-shadow: 0px 2px 3px #999;

  img {
    width: 200px;
    height: 200px;
    margin: 20px 0;
    border-radius: 100%;
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
            <StyledHeadingOne
              content={`${user.firstName} ${user.lastName}`}
              color="var(--dark-teal)"
            />
            <StyledHeadingTwo
              content={`${user.bizName}`}
              color="var(--dark-peach)"
            />
            <img src={user.imgURL} alt={user.bizName} />
            <p>{user.bizDesc}</p>
            {user.extURL && (
              <Link to={user.extURL}>
                <p>Visit Website</p>
              </Link>
            )}
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <p className="biz-category">
              <span className="info-label">Category:</span> {user.category}
            </p>
            <Link className="link-highlight" to="/marketplace">
              Back to Marketplace
            </Link>
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
