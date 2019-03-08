import React, { Component } from "react";
import styled from "styled-components";

import Styledh1 from "./styledh1";

const CTABox = styled.div`
  width: 50%;
  padding: 120px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #00b290;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export default class SquareCTA extends Component {
  render() {
    return (
      <CTABox className="ctabox">
        <Styledh1
          color="#ffffff"
          content="Good things happen when Moms Work Together!"
        />
        <p>Happy International Women's Day!</p>
        <h5>
          Sign up today to do business with other moms who work just as hard as
          you do.
        </h5>
        <button className="btn">Join Us!</button>
      </CTABox>
    );
  }
}
