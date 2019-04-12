import React from "react";
import styled from "styled-components";

import StyledHeadingOne from "./elements/StyledHeadingOne";
import PatternedHeader from "./elements/PatternedHeader";
import FullWidth from "./elements/FullWidth";

import BioPic from "../images/mom-and-lincoln2.jpg";

const AboutBox = styled.main`
  width: 95%;
  max-width: 900px;
  margin: 100px auto;
  background-color: white;
  padding: 40px;
  border: 1px solid var(--light-teal);
  margin-top: -200px;
  position: relative;
  z-index: 1000;
  box-shadow: 0px 2px 3px #999;

  h1 {
    text-align: center;
    width: 100%;
  }

  i,
  p {
    font-size: 24px;
  }

  i {
    color: var(--dark-peach);
  }
`;

const BioRow = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    border-radius: 100%;
    padding: 40px 0px;
    margin: 0 auto;
  }
`;

const BioText = styled.div`
  flex-grow: 1;
  width: 60%;
  padding: 30px;

  p {
    margin: 30px;
  }
`;

export default function AboutSarah() {
  return (
    <FullWidth>
      <PatternedHeader />
      <AboutBox>
        <StyledHeadingOne content="Sarah Waldie" color="var(--dark-teal)" />
        <BioRow>
          <img src={BioPic} width="300px" alt="biophoto" />
          <BioText>
            <p>
              <i className="fas fa-code" /> Frontend Developer (HTML, CSS,
              JavaScript, React)
            </p>
            <p>
              <i className="fas fa-baby" /> Full-Stack Mom (All the things!)
            </p>

            <p>
              <i className="fas fa-bolt" /> Former Advertising and Marketing
              Professional
            </p>
            <p>
              <i className="fas fa-heart" /> Grateful MotherCoder!
            </p>
          </BioText>
        </BioRow>
      </AboutBox>
    </FullWidth>
  );
}
