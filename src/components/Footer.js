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
    width: 280px;
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
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          <Link to={process.env.PUBLIC_URL + "/signup"}>Join Us</Link>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </div>
      </div>
      <div className="footer-second">
        <p>
          Created by{" "}
          <a className="link-highlight" href="https://sassafrasbiz.com">
            Sarah Waldie
          </a>
        </p>
      </div>
      <div className="footer-third">
        <p>For MotherCoders NYC, Spring 2019</p>
        <p>
          <em>
            Hompage Statistics from:{" "}
            <a
              className="link-highlight"
              href="https://www.entrepreneur.com/article/294184"
            >
              Entrepreneur.com
            </a>
          </em>
        </p>
      </div>
    </FooterContainer>
  );
}
