import React from "react";
import styled from "styled-components";
import Styledh1 from "../elements/StyledHeadingOne";

const CTABox = styled.div`
  width: 35%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #00b290;
  color: var(--light-peach);

  div {
    padding: 100px;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    font-size: 3rem;
    color: white;
    width: 300px;
    animation: fadein 3s;
  }

  @media (max-width: 1150px) {
    width: 100%;
    div {
      padding: 50px;
    }
  }
`;

export default function SquareCTA() {
  return (
    <CTABox className="ctabox">
      <div>
        {/* <Styledh1
          className="fade-in"
          color="#ffffff"
          content="Things I've Made!"
        /> */}
        <h1 className="fade-in">The Momably Marketplace.</h1>
      </div>
    </CTABox>
  );
}
