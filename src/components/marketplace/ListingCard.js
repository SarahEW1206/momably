import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function ListingCard({ business }) {
  const ListCard = styled.div`
    border: 1px solid var(--light-teal);
    box-sizing: border-box;
    padding: 20px;

    .biz-category {
      color: #999;
      font-size: 14px;
    }
  `;

  return (
    <ListCard
      key={business.user_id}
      className="card col-12 col-sm-6 col-md-4 col-lg-3"
    >
      <h4>{business.bizName}</h4>
      <img src={business.imgURL} alt={business.bizName} />
      <h5>
        {business.firstName} {business.lastName}
      </h5>
      <p>{business.email}</p>

      <Link to={`/profile/${business.user_id}`}>
        <p className="link-highlight" style={{ width: "105px" }}>
          View Profile
        </p>
      </Link>
      <p className="biz-category">{business.category}</p>
    </ListCard>
  );
}
