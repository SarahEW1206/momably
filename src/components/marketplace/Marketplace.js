import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";

import SquareCTA from "./SquareCTA";
import FeaturedProfile from "./FeaturedProfile";
import BrowseByCategory from "./BrowseByCategory";
import FeaturedListings from "./FeaturedListings";
import StyledHeadingOne from "../elements/StyledHeadingOne";
import StyledHeadingTwo from "../elements/StyledHeadingTwo";
import StyledLink from "../elements/StyledLink";

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

class Marketplace extends Component {
  render() {
    const { users } = this.props;

    if (users) {
      return (
        <Container>
          <Marquee>
            <SquareCTA />
            <FeaturedProfile users={users} />
          </Marquee>
          <main>
            <StyledHeadingOne
              color="var(--dark-teal)"
              content="Browse By Category"
            />
            <BrowseByCategory users={users} />
            <StyledHeadingOne
              color="var(--dark-teal)"
              content="Featured Listings"
            />
            <FeaturedListings users={users} />
            {/* <StyledLink to="/signup" content="Sign Up Now!" />
            <StyledHeadingTwo color="#000000" content="This is an H2" /> */}
          </main>
        </Container>
      );
    } else {
      return null;
    }
  }
}

Marketplace.propTypes = {
  firestore: PropTypes.object.isRequired
};

export default compose(
  firestoreConnect([{ collection: "users" }]),
  connect((state, props) => ({
    users: state.firestore.ordered.users
  }))
)(Marketplace);
