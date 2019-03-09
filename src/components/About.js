import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StyledHeadingOne from "./StyledHeadingOne";

const AboutContainer = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;

  img {
    width: 100%;
  }
`;
const WhySection = styled.section`
  display: flex;
  flex-direction: row;
  padding: 100px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px;
    flex-direction: column;
  }
`;

export default function About() {
  return (
    <AboutContainer>
      <picture>
        <source
          media="(min-width: 1200px)"
          srcSet="https://via.placeholder.com/2000x650/"
        />
        <source
          media="(min-width: 600px)"
          srcSet="https://via.placeholder.com/1200x600/"
        />
        <img src="https://via.placeholder.com/600/" alt="Flowers" />
      </picture>
      <WhySection>
        <StyledHeadingOne content="Hello" />
      </WhySection>
    </AboutContainer>
  );
}
