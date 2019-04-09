import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import StyledHeadingOne from "./elements/StyledHeadingOne";
import StyledHeadingTwo from "./elements/StyledHeadingTwo";
import MainImage from "../images/momably-home-collab.jpg";

const pageFade = keyframes`
  from {
    opacity: 0;
    // transform: translateX(100%);
  }

  to {
    opacity: 1;
    // transform: translateX(0);
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
  background-image: url("${MainImage}");
  background-size: cover;
  background-position: 40% 20%;
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
    animation: ${dropIn} 3s ease-in-out forwards;
    text-shadow: 1px 1px 5px black;
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
  flex-direction: column;
  padding: 100px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px;
    align-items: flex-start;
  }

  a {
    width: 100%;
  }
`;

const WhyDescription = styled.div`
  width: 100%;

  ul {
    padding: 0;
    margin: 0 0 40px 0;
    width: 100%;
    text-align: center;
  }

  li {
    display: inline-block;
    padding: 0px 40px 0px 0;
    color: var(--dark-teal);
    font-weight: bolder;
    line-height: 2em;
  }

  @media (max-width: 768px) {
    padding: 0px;
    ul {
      text-align: left;
    }
    li {
      display: list-item;
      list-style-type: disc;
      list-style-position: inside;
      padding: 0;
      color: #333;
      font-weight: normal;
    }
  }
`;

//Don't necessarily need this now, but will serve as a container if future elements are added here.
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
  background-color: white;

  @media (max-width: 768px) {
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
  padding: 50px;
  
  p, h1 {
    text-align: center;
  }


  i {
    display: flex;
    font-size: 40px;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    color: white;
    background-color: var(--dark-teal);
    text-align: center;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 5px #999;
    transition: transform 1.0s ease-in-out, background-color 1.0s ease-in-out;
  }

  :hover i {
    transform: rotateY(180deg);
    background-color: var(--med-peach);
  }

  @media (max-width: 768px) {
    height: auto;
  }

`;

const BottomRow = styled.section`
  display: flex;
  flex-flow: row wrap;
`;

const VisionBox = styled.div`
  width: 30%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--dark-peach);
  padding: 60px;

  @media (max-width: 900px) {
    width: 100%;
  }

  p {
    padding: 20px;
    background-color: var(--light-peach);
    box-shadow: 0px 2px 3px #666;
    border: 1px solid var(--light-teal);
  }
`;

const StoryBox = styled.div`
  width: 70%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--dark-teal);
  padding: 60px;

  @media (max-width: 900px) {
    width: 100%;
  }
  p {
    padding: 20px;
    background-color: var(--light-peach);
    box-shadow: 0px 2px 3px #666;
    border: 1px solid var(--light-teal);
  }
`;

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <AboutContainer>
        <Top>
          <h1>Moms know how hard other moms work.</h1>
        </Top>
        <WhySection>
          {/* <StyledHeadingTwo content="A rising tide lifts all boats." /> */}
          <WhyDescription>
            <p>
              <span style={{ fontSize: "24px" }}>
                Momably is a marketplace where moms can support one another in
                their business ventures. As a mom with your own business, you
                know that every client, every dollar, every minute matters.
                Here, you can find clients who GET that, and buy from others who
                LIVE that. Imagine what we can all accomplish with this kind of
                mutual support!
              </span>
            </p>
            <p>
              <strong>Momably moms are:</strong>
            </p>
            <ul>
              <li>Professional Organizers</li>
              <li>Web Developers</li>
              <li>Dog Walkers</li>
              <li>Childcare Providers</li>
              <li>Graphic Designers</li>
              <li>Retailers</li>
              <li>Event Planners</li>
              <li>And MUCH More!</li>
            </ul>
          </WhyDescription>

          <Link to={process.env.PUBLIC_URL + "/signup"} className="btn">
            Join Us!
          </Link>
        </WhySection>
        <StatsSection>
          <Stats>
            <Stat className="col-xs-12 col-s-4">
              <StyledHeadingOne content="71%" />
              <p>Of mom entrepreneurs are the primary childcare provider.</p>
              <i className="fas fa-baby" />
            </Stat>
            <Stat className="col-xs-12 col-s-4">
              <StyledHeadingOne content="44%" />
              <p>
                Of mom entrepreneurs sometimes feel guilty about
                entrepreneurship!
              </p>
              <i className="far fa-sad-tear" />
            </Stat>
            <Stat className="col-xs-12 col-s-4">
              <StyledHeadingOne content="80%" />
              <p>
                Of mom entrepreneurs started their business after having a
                child.
              </p>
              <i className="fas fa-baby-carriage" />
            </Stat>
          </Stats>
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
              Momably was created by{" "}
              <Link
                className="link-highlight"
                to={process.env.PUBLIC_URL + "/about"}
              >
                Sarah Waldie
              </Link>
              , a freelance web developer who shifted careers and began learning
              to code in 2016 while pregnant with my son. As a freelancer, I
              found that I was most passionate about opportunities to provide
              services to other moms. I appreciated their support and always
              sought to pay it forward by hiring moms whenever possible. In
              Momably, I want to create a community that makes it easy for moms
              (and others!) to hire moms and support this powerful and motivated
              group of businesspeople.
            </p>
          </StoryBox>
        </BottomRow>
      </AboutContainer>
    );
  }
}

export default Home;
