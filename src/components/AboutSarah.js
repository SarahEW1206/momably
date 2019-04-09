import React from "react";
import StyledHeadingOne from "./elements/StyledHeadingOne";
import styled from "styled-components";
import BioPic from "../images/momandgirl.jpg";

const AboutBox = styled.main`
  width: 95%;
  max-width: 900px;
  margin: 100px auto;
  background-color: white;
  border: 1px solid var(--dark-teal);
  padding: 60px;
`;

export default function AboutSarah() {
  return (
    <AboutBox>
      <StyledHeadingOne content="Hi, I'm Sarah." color="var(--dark-teal)" />
      <img className="header-logo" src={BioPic} width="400px" alt="biophoto" />
    </AboutBox>
  );
}
