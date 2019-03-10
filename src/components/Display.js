import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";

import SquareCTA from "./SquareCTA";
import FeaturedProfile from "./FeaturedProfile";
import FeaturedListings from "./FeaturedListings";
import StyledHeadingOne from "./StyledHeadingOne";
import StyledHeadingTwo from "./StyledHeadingTwo";
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
            <FeaturedProfile users={users} />
          </Marquee>
          <main>
            <StyledHeadingOne
              color="var(--dark-teal)"
              content="Featured Listings"
            />
            <FeaturedListings users={users} />
            <StyledLink to="/signup" content="Sign Up Now!" />
            <StyledHeadingTwo color="#000000" content="This is an H2" />
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
