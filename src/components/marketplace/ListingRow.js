import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ListingRow({ business }) {
  const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px;
    margin: 0;
    background-color: var(--med-peach);

    :nth-of-type(even) {
      background-color: white;
    }

    p {
      font-size: 16px;
      margin: 0;
      padding: 0;
    }

    .row-biz-name {
      width: 250px;
    }
    .row-owner-name {
      width: 200px;
    }
    .row-phone {
      width: 150px;
    }

    .row-email {
      width: 240px;
    }

    @media (max-width: 800px) {
      a,
      p {
        font-size: 14px;
      }

      .row-biz-name {
        width: 140px;
      }
      .row-owner-name {
        width: 140px;
      }
      .row-phone {
        width: 140px;
      }

      .row-email {
        width: 200px;
      }
    }
  `;
  return (
    <Row>
      <div className="row-biz-name">
        <strong>
          <Link to={process.env.PUBLIC_URL + `/profile/${business.user_id}`}>
            {business.bizName}
          </Link>
        </strong>
      </div>
      <div className="row-owner-name">
        <p>
          {business.firstName} {business.lastName}
        </p>
      </div>
      <div className="row-phone">
        <p>{business.phone}</p>
      </div>
      <div className="row-email">
        <p>{business.email}</p>
      </div>
      <div className="row-category">
        <p>Category: {business.category}</p>
      </div>
    </Row>
  );
}
