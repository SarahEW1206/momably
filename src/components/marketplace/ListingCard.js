import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ListingCard({ business }) {
  const ListCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--light-teal);
    box-sizing: border-box;
    padding: 20px;
    text-align: center;

    h6 {
      margin-top: 10px;
    }

    img {
      width: 100%;
      height: 150px;
      max-width: 150px;
      border-radius: 100%;
    }

    .info-label {
      font-weight: bolder;
    }

    .biz-category {
      color: #999;
      font-size: 14px;
    }
  `;

  return (
    <ListCard className="card col-12 col-sm-12 col-md-6 col-lg-4">
      <h4>{business.bizName}</h4>
      <img src={business.imgURL} alt={business.bizName} />
      <h6>
        <span className="info-label">Business Owner:</span> {business.firstName}{" "}
        {business.lastName}
      </h6>
      {/* <p>
        <span className="info-label">Email:</span> {business.email}
      </p> */}

      <Link to={process.env.PUBLIC_URL + `/profile/${business.user_id}`}>
        <p className="link-highlight">View Profile</p>
      </Link>
      <p className="biz-category">
        <span className="info-label">Category:</span> {business.category}
      </p>
    </ListCard>
  );
}
