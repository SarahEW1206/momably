import React from "react";
import styled from "styled-components";
import Logo from "../images/momably.png";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  // display: flex;
  // flex-wrap: wrap;
  background-color: white;
  text-align: center;
  padding: 20px;
  position: relative;

  .footer-first {
    margin: 50px 0;
  }

  .footer-second {
    margin: 10px 0;
  }

  .footer-menu {
    width: 350px;
    display: flex;
    font-size: 16px;
    margin: 10px auto 0 auto;
    justify-content: space-around;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-first">
        <img
          className="header-logo"
          src={Logo}
          width="140px"
          alt="momably logo"
        />
        <div className="footer-menu">
          <Link to="/">Home</Link>
          <Link to="/signup">Join Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-second">
        Created by <a href="https://sassafrasbiz.com">Sarah Waldie</a>
      </div>
      <div className="footer-third">For MotherCoders NYC, Spring 2019</div>
    </FooterContainer>
  );
}
