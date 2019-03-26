import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";

const FeaturedListingsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;

  .biz-category {
    color: #999;
    font-size: 14px;
  }
`;

const ListingRows = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
  margin: 3px 0;
  background-color: var(--med-peach);
`;

class FeaturedListings extends Component {
  state = {
    gridView: true
  };

  onToggle = () => {
    this.setState({ gridView: !this.state.gridView });
  };

  render() {
    const { users, selected } = this.props;

    if (selected) {
      return (
        <Fragment>
          {this.state.gridView ? (
            <button onClick={this.onToggle}>View as List</button>
          ) : (
            <button onClick={this.onToggle}>View as Grid</button>
          )}
          <FeaturedListingsContainer>
            {users
              .filter(item => item.category === `${selected}`)
              .map(business => (
                <Fragment>
                  {this.state.gridView ? (
                    <div
                      key={business.user_id}
                      className="feat-card card col-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <h4>{business.bizName}</h4>
                      <img src={business.imgURL} alt={business.bizName} />
                      <h5>
                        {business.firstName} {business.lastName}
                      </h5>
                      <p>{business.email}</p>

                      <Link to={`/profile/${business.user_id}`}>
                        <p
                          className="link-highlight"
                          style={{ width: "105px" }}
                        >
                          View Profile
                        </p>
                      </Link>
                      <p className="biz-category">{business.category}</p>
                    </div>
                  ) : (
                    <ListingRows>
                      <strong>{business.bizName}</strong> {business.firstName}{" "}
                      {business.lastName} {business.phone} {business.email}{" "}
                      {business.extURL}{" "}
                    </ListingRows>
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
            <button onClick={this.onToggle}>View as List</button>
          ) : (
            <button onClick={this.onToggle}>View as Grid</button>
          )}
          <FeaturedListingsContainer>
            {users
              .filter(item => item.featured)
              .map(business => (
                <Fragment>
                  {this.state.gridView ? (
                    <div
                      key={business.user_id}
                      className="feat-card card col-12 col-sm-6 col-md-4 col-lg-3"
                    >
                      <h4>{business.bizName}</h4>
                      <img src={business.imgURL} alt={business.bizName} />
                      <h5>
                        {business.firstName} {business.lastName}
                      </h5>
                      <p>{business.email}</p>
                      <Link to={`/profile/${business.user_id}`}>
                        <p
                          className="link-highlight"
                          style={{ width: "105px" }}
                        >
                          View Profile
                        </p>
                      </Link>
                      <p className="biz-category">
                        Category: {business.category}
                      </p>
                    </div>
                  ) : (
                    <ListingRows>
                      <strong>{business.bizName}</strong>
                      <p>
                        {business.firstName}
                        {business.lastName}
                      </p>
                      <p>{business.phone}</p>
                      {business.email} {business.extURL}{" "}
                    </ListingRows>
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
