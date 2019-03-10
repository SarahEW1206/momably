import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
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
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  padding: 100px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WhyDescription = styled.p`
  width: 80%;
  padding: 20px;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0px;
  }
`;

const StatsSection = styled.section`
  background-color: var(--light-peach);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
        <img
          src="https://via.placeholder.com/600/"
          alt="about mwt main image"
        />
      </picture>
      <WhySection>
        <StyledHeadingOne content="Moms know how hard other moms work." />
        <WhyDescription>
          Moms Work Together is a marketplace where mothers who run businesses
          can sell to (and buy from or hire) other moms. With this kind of
          mutual support of one another's business ventures, moms can focus less
          on tracking down new clients and customers, and more on things that
          matter, like spending quality time with the ones they work so hard
          for.
        </WhyDescription>
      </WhySection>
      <StatsSection>
        <StyledHeadingOne
          color="000000"
          content="stats section of some sort..."
        />
        <Stats>
          <div className="col-xs-12 col-s-4">STAT 1</div>
          <div className="col-xs-12 col-s-4">STAT 1</div>
          <div className="col-xs-12 col-s-4">STAT 1</div>
        </Stats>
      </StatsSection>
    </AboutContainer>
  );
}
