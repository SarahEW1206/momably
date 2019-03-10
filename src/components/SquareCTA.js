import React from "react";
import styled from "styled-components";

import Styledh1 from "./StyledHeadingOne";

const CTABox = styled.div`
  width: 50%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #00b290;

  div {
    padding: 100px;
  }
  @media (max-width: 1200px) {
    width: 100%;
  }

  div.highlighted {
    max-width: 350px;
    padding: 0;
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: 30px;

    p {
      position: relative;
      top: -10px;
      font-weight: bold;
      line-height: 1;
    }
  }
`;

export default function SquareCTA() {
  return (
    <CTABox className="ctabox">
      <div>
        <Styledh1
          color="#ffffff"
          content="Good things happen when Moms Work Together!"
        />
        {/* <div className="highlighted">
          <p>Happy International Women's Day!</p>
        </div> */}
        <h5>
          Sign up today to do business with other moms who work just as hard as
          you do.
        </h5>
        <br />
        <button className="btn">Join Us!</button>
      </div>
    </CTABox>
  );
}
