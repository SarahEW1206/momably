import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import StyledHeadingOne from "../elements/StyledHeadingOne";
import StyledHeadingTwo from "../elements/StyledHeadingTwo";

const slideIn = keyframes`
  from {
    transform: translateX(700px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const FeaturedContainer = styled.div`
  background-color: #ffebcd;
  width: 55%;
  transform: translateX(700px);
  opacity: 0;
  animation: ${slideIn} 1s linear forwards;
  -webkit-clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);

  .inner-cont {
    padding: 100px 170px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (max-width: 1150px) {
    width: 100%;
    animation: none;
    transform: translateX(0px);
    opacity: 1;

    -webkit-clip-path: polygon(0 13%, 100% 0%, 100% 100%, 0% 100%);
    clip-path: polygon(0 13%, 100% 0%, 100% 100%, 0% 100%);

    .inner-cont {
      margin-left: 0px;
      padding: 120px 40px;
    }
  }
`;

const FeatProfTopRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;

  i {
    font-size: 16px;
  }

  img {
    width: 100%;
    max-width: 200px;
    height: 200px;
    margin-bottom: 20px;
    border-radius: 100%;
  }

  @media (min-width: 650px) {
    flex-direction: row;

    img {
      margin-right: 20px;
    }
  }

  @media (min-width: 1150px) {
    flex-direction: column;

    img {
      margin-right: 0px;
    }
  }

  @media (min-width: 1400px) {
    flex-direction: row;

    img {
      margin-right: 50px;
    }
  }
`;

class FeaturedProfile extends Component {
  render() {
    const { users } = this.props;

    return (
      <FeaturedContainer>
        <div className="inner-cont">
          <StyledHeadingOne content="Featured Member" />
          {users
            .filter(item => item.user_id === "Dso9Mo3ncBZnzU2HH4myTGcdMxj2")
            .map(feature => (
              <Fragment key={feature.user_id}>
                <FeatProfTopRow>
                  <img src={feature.imgURL} alt={feature.bizName} />
                  <div>
                    <StyledHeadingTwo content={feature.bizName} color="#333" />
                    <p>
                      Rating:
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </p>
                    <p>{feature.bizDesc}</p>
                    <p>
                      <strong>Owner: </strong>
                      {feature.firstName} {feature.lastName}
                    </p>
                    <p>
                      <strong>Category: </strong>
                      {feature.category}
                    </p>
                    <Link
                      className="link-highlight"
                      to={
                        process.env.PUBLIC_URL + `/profile/${feature.user_id}`
                      }
                    >
                      View Profile
                    </Link>
                  </div>
                </FeatProfTopRow>
              </Fragment>
            ))}
        </div>
      </FeaturedContainer>
    );
  }
}

FeaturedProfile.propTypes = {
  users: PropTypes.array.isRequired
};

export default FeaturedProfile;
