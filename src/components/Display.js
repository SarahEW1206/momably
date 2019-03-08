import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";

import SquareCTA from "./SquareCTA";
import FeaturedProfile from "./FeaturedProfile";
import FeaturedListings from "./FeaturedListings";
import Styledh1 from "./styledh1";
import StyledLink from "./StyledLink";

const Container = styled.div`
  width: 100%;
  //   max-width: 1200px;
  margin: 0 auto;
`;
const Marquee = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  //   align-items: flex-start; screws with CTA div height!
  margin-bottom: 20px;
`;

class Display extends Component {
  render() {
    const { users } = this.props;
    console.log(users);

    if (users) {
      return (
        <Container>
          <Marquee>
            <SquareCTA />
            <FeaturedProfile />
          </Marquee>
          <main>
            <Styledh1 color="var(--dark-teal)" content="Featured Listings" />
            <FeaturedListings />
            <StyledLink to="/signup" content="Sign Up Now!" />
          </main>
        </Container>
      );
    } else {
      return null;
    }
  }
}

Display.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "users" }]),
  connect((state, props) => ({
    users: state.firestore.ordered.users
  }))
)(Display);
