import React from "react";
import styled from "styled-components";

import StyledHeadingOne from "./elements/StyledHeadingOne";
import PatternedHeader from "./elements/PatternedHeader";
import FullWidth from "./elements/FullWidth";

import BioPic from "../images/mom-and-lincoln.jpg";

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

  @media screen and (max-width: 917px) {
    h1 {
      text-align: center;
      width: 100%;
    }
  }

  i {
    font-size: 24px;
    color: var(--dark-peach);
  }
`;

const BioRow = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

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
`;

export default function AboutSarah() {
  return (
    <FullWidth>
      <PatternedHeader />
      <AboutBox>
        <StyledHeadingOne content="Hi, I'm Sarah." color="var(--dark-teal)" />
        <BioRow>
          <img src={BioPic} width="300px" alt="biophoto" />
          <BioText>
            <p>
              <i className="fas fa-baby" /> I am mom to Lincoln. As you can see,
              he's not at all cute and we never have any fun.
            </p>
            <p>
              <i className="fas fa-laptop-code" /> I left an unfulfilling
              marketing/advertising career to learn front-end development and
              couldn't be happier about that choice!
            </p>
            <p>
              <i className="fas fa-running" /> I run whenever I can and
              participate in half marathons and whatnot. It keeps me sane and
              hopefully healthy.
            </p>
            <p>
              <i className="fas fa-bolt" /> I am a pretty big Tampa Bay
              Lightning fan (a client of mine during said advertising career)
              and it's time for playoffs so please be nice if I look stressed!
              #GoBolts
            </p>
          </BioText>
        </BioRow>
      </AboutBox>
    </FullWidth>
  );
}
