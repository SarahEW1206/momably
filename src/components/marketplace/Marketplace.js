import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styled, { keyframes } from "styled-components";

import SquareCTA from "./SquareCTA";
import FeaturedProfile from "./FeaturedProfile";
import BrowseByCategory from "./BrowseByCategory";
import FeaturedListings from "./FeaturedListings";
import StyledHeadingOne from "../elements/StyledHeadingOne";
import NavBar from "../nav/NavBar";
// import StyledHeadingTwo from "../elements/StyledHeadingTwo";
// import StyledLink from "../elements/StyledLink";

const pageFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(100vh);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }

`;
const Container = styled.div`
  width: 100%;
  //   max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(0);
  animation: ${pageFade} 1s linear forwards;

  main {
    padding: 30px;
  }
`;
const Marquee = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  //   align-items: flex-start; screws with CTA div height!
  // margin-bottom: 20px;
  background-color: var(--dark-teal);
`;

class Marketplace extends Component {
  state = {
    clickedItem: ""
  };

  onClick = e => {
    this.setState({ clickedItem: e.target.value });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { users } = this.props;

    if (users) {
      return (
        <Container>
          <Marquee>
            <SquareCTA />
            <FeaturedProfile users={users} />
          </Marquee>
          <NavBar onClick={this.onClick} />
          <main>
            <StyledHeadingOne
              color="var(--dark-teal)"
              content="Browse by Category"
            />
            <p>
              Category:{" "}
              {this.state.clickedItem ? this.state.clickedItem : "All"}
            </p>

            <FeaturedListings users={users} selected={this.state.clickedItem} />
          </main>
        </Container>
      );
    } else {
      return <div style={{ height: "100vh" }} />;
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
