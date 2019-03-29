import React, { Component } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import styled, { keyframes } from "styled-components";

import SquareCTA from "./SquareCTA";
import FeaturedProfile from "./FeaturedProfile";
import FeaturedListings from "./FeaturedListings";
import StyledHeadingOne from "../elements/StyledHeadingOne";
import NavBar from "../nav/NavBar";
// import StyledHeadingTwo from "../elements/StyledHeadingTwo";
// import StyledLink from "../elements/StyledLink";

const SlideUp = keyframes`
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  transform: translateY(0);
  animation: ${SlideUp} 1.5s ease forwards;

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

const BrowseControls = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 20px;

  align-items: center;
  cursor: pointer;

  .filter-by,
  .filter-clear {
    margin-left: 0px;
    font-size: 14px;
    margin-top: 10px;
  }

  .filter-by {
    margin-right: 30px;
  }
`;

class Marketplace extends Component {
  state = {
    clickedItem: ""
  };

  onClick = e => {
    this.setState({ clickedItem: e.target.value });
  };

  onFilterClear = () => {
    this.setState({ clickedItem: "" });
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
            <BrowseControls>
              <div className="filter-by">
                Showing:{" "}
                {this.state.clickedItem
                  ? `All > ${this.state.clickedItem}`
                  : "All"}
              </div>
              <div className="filter-clear" onClick={this.onFilterClear}>
                <i className="fa fa-times" /> Clear Filter
              </div>
            </BrowseControls>
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
