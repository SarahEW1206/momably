import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";
import ListingRow from "./ListingRow";
import ListingCard from "./ListingCard";

const FeaturedListingsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
`;

class FeaturedListings extends Component {
  state = {
    gridView: true
  };

  onToggle = () => {
    this.setState({ gridView: !this.state.gridView });
  };

  compare = (a, b) => {
    const bizA = a.bizName.toUpperCase();
    const bizB = b.bizName.toUpperCase();

    let comparison = 0;
    if (bizA > bizB) {
      comparison = 1;
    } else if (bizA < bizB) {
      comparison = -1;
    }
    return comparison;
  };

  render() {
    const { users, selected } = this.props;

    //If state reflects a selection, return the button (dependent on grid view or list view in state) and listings filtered by category (depending on grid view or list view in state).

    //If there is NO selection in state, return the button (dependent on grid view or list view in state) and ALL listings (depending on grid view or list view in state).

    if (selected) {
      return (
        <Fragment>
          {this.state.gridView ? (
            <button className="btn" onClick={this.onToggle}>
              View as List
            </button>
          ) : (
            <button className="btn" onClick={this.onToggle}>
              View as Grid
            </button>
          )}
          <FeaturedListingsContainer>
            {users
              .filter(item => item.category === `${selected}`)
              .sort(this.compare)
              .map(business => (
                <Fragment key={business.user_id}>
                  {this.state.gridView ? (
                    <ListingCard business={business} />
                  ) : (
                    <ListingRow business={business} />
                  )}
                </Fragment>
              ))}
          </FeaturedListingsContainer>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          {this.state.gridView ? (
            <button className="btn" onClick={this.onToggle}>
              View as List
            </button>
          ) : (
            <button className="btn" onClick={this.onToggle}>
              View as Grid
            </button>
          )}
          <FeaturedListingsContainer>
            {users.sort(this.compare).map(business => (
              <Fragment key={business.user_id}>
                {this.state.gridView ? (
                  <ListingCard business={business} />
                ) : (
                  <ListingRow business={business} />
                )}
              </Fragment>
            ))}
          </FeaturedListingsContainer>
        </Fragment>
      );
    }
  }
}

export default FeaturedListings;
