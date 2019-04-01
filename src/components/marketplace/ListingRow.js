import React from "react";
import styled from "styled-components";

export default function ListingRow({ business }) {
  const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 10px;
    margin: 3px 0;
    background-color: var(--med-peach);

    p {
      margin: 0;
      padding: 0;
    }

    @media (max-width: 800px) {
      p {
        font-size: 14px;
        margin: 0;
        padding: 0;
      }
    }

    .row-biz-name {
      width: 250px;
      background-color: yellow;
    }
    .row-owner-name {
      width: 200px;
      background-color: purple;
    }
    .row-phone {
      width: 200px;
      background-color: green;
    }

    .row-email {
      width: 200px;
      background-color: red;
    }
  `;
  return (
    <Row>
      <div className="row-biz-name">
        <strong>
          <p>{business.bizName}</p>
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
    </Row>
  );
}
