import React from "react";
import styled from "styled-components";

export default function ListingRow({ business }) {
  const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px;
    margin: 3px 0;
    background-color: var(--med-peach);
  `;
  return (
    <Row>
      <strong>{business.bizName}</strong>
      <p>
        {business.firstName}
        {business.lastName}
      </p>
      <p>{business.phone}</p>
      {business.email} {business.extURL}{" "}
    </Row>
  );
}
