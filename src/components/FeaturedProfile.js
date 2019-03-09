import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";
import HeadingOne from "./StyledHeadingOne";

const FeaturedContainer = styled.div`
  padding: 20px;
  background-color: #ffebcd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  img {
    margin: 20px 0;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    img {
      margin: 0 20px;
    }
  }

  @media (min-width: 1200px) {
    flex: 1;
    width: 50%;
    flex-direction: column;
    img {
      margin: 20px 0;
    }
  }
`;

class FeaturedProfile extends Component {
  render() {
    const { users } = this.props;
    console.log(users);

    return (
      <FeaturedContainer>
        <HeadingOne content="Featured Profile" />
        {users
          .filter(item => item.user_id == "iDX0VulK2xOkRjWlFxYlmQfivc62")
          .map(feature => (
            <Fragment>
              <img src={feature.imgURL} />
              <div>
                <h2>{feature.bizName}</h2>
                <h3>
                  {feature.firstName} {feature.lastName}
                </h3>
                <p>{feature.bizDesc}</p>
              </div>
            </Fragment>
          ))}
      </FeaturedContainer>
    );
  }
}

export default compose(
  firestoreConnect([{ collection: "users" }]),
  connect((state, props) => ({
    users: state.firestore.ordered.users
  }))
)(FeaturedProfile);
