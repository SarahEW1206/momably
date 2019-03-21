import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";
import styled from "styled-components";

const FeaturedListingsSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  //   align-items: flex-start;
`;

function FeaturedListings(props) {
  const { users, selected } = props;

  if (selected) {
    console.log(typeof selected);
    return (
      <FeaturedListingsSection>
        {users
          .filter(item => item.category === `${selected}`)
          .map(business => (
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
              <p>{business.category}</p>
              <Link to={`/profile/${business.user_id}`}>
                <p className="link-highlight" style={{ width: "105px" }}>
                  View Profile
                </p>
              </Link>
            </div>
          ))}
      </FeaturedListingsSection>
    );
  } else {
    return (
      <FeaturedListingsSection>
        {users
          .filter(item => item.featured)
          .map(business => (
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
              <p>{business.category}</p>
              <Link to={`/profile/${business.user_id}`}>
                <p className="link-highlight" style={{ width: "105px" }}>
                  View Profile
                </p>
              </Link>
            </div>
          ))}
      </FeaturedListingsSection>
    );
  }
}

// export default compose(
//   firestoreConnect([{ collection: "clients" }]),
//   connect((state, props) => ({
//     users: state.firestore.ordered.users
//   }))
// )(FeaturedListings);

export default FeaturedListings;
