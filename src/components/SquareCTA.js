import React from "react";
import styled from "styled-components";

import Styledh1 from "./StyledHeadingOne";

const CTABox = styled.div`
  width: 60%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #00b290;
  color: var(--light-peach);

  div {
    padding: 100px;
  }

  @media (max-width: 900px) {
    width: 100%;
    div {
      padding: 50px;
    }
  }

  //   div.highlighted {
  //     max-width: 350px;
  //     padding: 0;
  //     background-color: rgba(255, 255, 255, 0.6);
  //     margin-top: 30px;

  //     p {
  //       position: relative;
  //       top: -10px;
  //       font-weight: bold;
  //       line-height: 1;
  //     }
  //   }
`;

export default function SquareCTA() {
  return (
    <CTABox className="ctabox">
      <div>
        <Styledh1
          color="#ffffff"
          content="Good things happen when moms work together!"
        />
        {/* <div className="highlighted">
          <p>Happy International Women's Day!</p>
        </div> */}
        <h5>Momably is:</h5>
        <ul>
          <li>
            A marketplace made up of moms who are business owners, freelancers,
            entrepreneurs, side hustlers, etc.
          </li>
          <li>
            A place to sell your products and services to others who appreciate
            how hard you work, because they are moms too.
          </li>
          <li>
            A place to support other moms by buying what they are selling.
          </li>
          <li>A supportive community.</li>
        </ul>
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
