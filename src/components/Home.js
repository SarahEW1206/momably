import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import StyledHeadingOne from "./StyledHeadingOne";
import StyledHeadingTwo from "./StyledHeadingTwo";

const AboutContainer = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;

  img {
    width: 100%;
  }
`;

const Top = styled.div`
  position: relative;
  h1 {
    position: absolute;
    top: 100px;
    left: 20%;
    color: white;
    font-size: 3rem;
    line-height: 2.4rem;
    width: 300px;
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
  align-items: flex-start;

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
  flex-wrap: wrap:
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1
  background-color: var(--dark-teal);
  border-top: 2px solid var(--med-peach);
  border-bottom: 2px solid var(--med-peach);
  border-left: 1px solid var(--med-peach);
  border-right: 1px solid var(--med-peach);
  padding: 70px 0;
  
`;

const BottomRow = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

const VisionBox = styled.div`
  width: 50%;
  height: 400px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--dark-peach);
  padding: 60px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const StoryBox = styled.div`
  width: 50%;
  height: 400px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #ffffff;
  padding: 60px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default function Home() {
  return (
    <AboutContainer>
      <Top>
        <picture>
          <source
            media="(min-width: 1000px)"
            srcSet="https://picsum.photos/2000/650?random"
          />
          <source
            media="(min-width: 600px)"
            srcSet="https://picsum.photos/1200/600?random"
          />
          <img src="https://picsum.photos/500?random" alt="about momably" />
        </picture>
        <h1>Moms know how hard other moms work.</h1>
      </Top>
      <WhySection>
        {/* <StyledHeadingOne content="Moms know how hard other moms work." /> */}
        <WhyDescription>
          Momably is a marketplace where mothers who run businesses can sell to
          (and buy from or hire) other moms. With this kind of mutual support of
          one another's business ventures, moms can focus less on tracking down
          new clients and customers, and more on things that matter, like
          spending quality time with the ones they work so hard for.
        </WhyDescription>
      </WhySection>
      <StatsSection>
        {/* <StyledHeadingOne
          color="000000"
          content="stats section of some sort..."
        /> */}
        <Stats>
          <Stat className="col-xs-12 col-s-4">
            <h1>20%</h1>
          </Stat>
          <Stat className="col-xs-12 col-s-4">
            <h1>6 Years</h1>
          </Stat>
          <Stat className="col-xs-12 col-s-4">
            <h1>1 in 10</h1>
          </Stat>
        </Stats>
      </StatsSection>
      <BottomRow>
        <VisionBox>
          <StyledHeadingTwo content="Vision" color="white" />
          <p>
            Our vision is empower mothers to grow their businesses while
            supporting other mothers trying to do the same.
          </p>
        </VisionBox>
        <StoryBox>
          <StyledHeadingTwo content="Story" color="var(--dark-peach)" />
        </StoryBox>
      </BottomRow>
    </AboutContainer>
  );
}
