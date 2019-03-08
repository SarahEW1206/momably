import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";
// import Styledh1 from "./styledh1";

const FeaturedListingsSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  //   align-items: flex-start;
`;

class FeaturedListings extends Component {
  render() {
    const { users } = this.props;

    return (
      <FeaturedListingsSection>
        {users
          .filter(item => item.featured)
          .map(business => (
            <div className="feat-card card col-xs-6 col-sm-6 col-md-4 col-lg-3">
              <h4>{business.bizName}</h4>
              <img src={business.imgURL} />
              <h5>
                {business.firstName} {business.lastName}
              </h5>
              <p>{business.email}</p>
              <p>{business.category}</p>
            </div>
          ))}
      </FeaturedListingsSection>
    );
  }
}

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({
    users: state.firestore.ordered.users
  }))
)(FeaturedListings);
