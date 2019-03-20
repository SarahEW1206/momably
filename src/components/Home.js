import React from "react";
import styled, { keyframes } from "styled-components";
// import { Link } from "react-router-dom";
import StyledHeadingOne from "./elements/StyledHeadingOne";
import StyledHeadingTwo from "./elements/StyledHeadingTwo";

const pageFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }

`;

const dropIn = keyframes`
from {
  top: -500px
}
to {
  top: 100px
}

`;

const AboutContainer = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  transform: translateX(0);
  animation: ${pageFade} 2s linear forwards;

  img {
    width: 100%;
  }
`;

const Top = styled.div`
  position: relative;
  background-image: url("https://picsum.photos/2000/1000?random");
  background-size: cover;
  background-color: purple;
  width 100%;
  height: 500px;

  h1 {
    position: absolute;
    top: -500px;
    left: 20%;
    color: white;
    font-size: 3rem;
    line-height: 2.4rem;
    width: 300px;
    animation-delay: 10s;
    animation: ${dropIn} 4s ease-in-out forwards;
  }

  @media (max-width: 500px) {
    h1 {
      left: 20px;
    }
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
  // background-color: var(--light-peach);
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
  height: 400px;
  background-color: #fff;
  border-top: 2px solid var(--med-peach);
  border-bottom: 2px solid var(--med-peach);
  border-left: 1px solid var(--med-peach);
  border-right: 1px solid var(--med-peach);
  padding: 70px 0;
  
  p {
    text-align: center;
  }
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

  p {
    padding: 20px;
    background-color: white;
  }
`;

const StoryBox = styled.div`
  width: 50%;
  height: 400px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--dark-teal);
  padding: 60px;

  @media (max-width: 600px) {
    width: 100%;
  }
  p {
    padding: 20px;
    background-color: white;
  }
`;

export default function Home() {
  return (
    <AboutContainer>
      <Top>
        {/* <picture>
          <source
            media="(min-width: 1000px)"
            srcSet="https://picsum.photos/2000/650?random"
          />
          <source
            media="(min-width: 600px)"
            srcSet="https://picsum.photos/1200/600?random"
          />
          <img src="https://picsum.photos/500?random" alt="about momably" />
        </picture> */}
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
        <button className="btn">Join Us!</button>
      </WhySection>
      <StatsSection>
        {/* <StyledHeadingOne
          color="000000"
          content="stats section of some sort..."
        /> */}
        <Stats>
          <Stat className="col-xs-12 col-s-4">
            <h1>5 Years</h1>
            <p>Average Number of Years in Business</p>
          </Stat>
          <Stat className="col-xs-12 col-s-4">
            <h1>52 Hours</h1>
            <p>Average Number of Hours Spent Working Per Week</p>
          </Stat>
          <Stat className="col-xs-12 col-s-4">
            <h1>70%</h1>
            <p>Started their business after having a child.</p>
          </Stat>
        </Stats>
        <h4>See more data about the moms of Momably!</h4>
      </StatsSection>
      <BottomRow>
        <VisionBox>
          <StyledHeadingTwo content="Vision" color="white" />
          <p>
            Our vision is empower mothers to help one another to be successful
            in their business ventures.
          </p>
        </VisionBox>
        <StoryBox>
          <StyledHeadingTwo content="Story" color="white" />
          <p>
            Momably was created by me,{" "}
            <a className="link-highlight" href="/">
              Sarah Waldie
            </a>
            , a freelance web developer who shifted careers and began learning
            to code in 2016 while pregnant with my son. I found that I was most
            passionate about opportunities to provide services to other moms. I
            appreciated their support and always sought to pay it forward by
            hiring moms whenever possible. In Momably, I want to create a
            community that makes it easy for moms (and others!) to hire moms and
            support this powerful and motivated group of businesspeople.
          </p>
        </StoryBox>
      </BottomRow>
    </AboutContainer>
  );
}
