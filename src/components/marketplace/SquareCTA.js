import React from "react";
import styled from "styled-components";
import StyledHeadingOne from "../elements/StyledHeadingOne";

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
    color: white;
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
        <StyledHeadingOne
          className="fade-in"
          content="The Momably Marketplace."
          color="white"
        />
        <p>
          Please note that these listings are for demo purposes only, which is
          why many contain my contact info ;-)
        </p>
      </div>
    </CTABox>
  );
}
