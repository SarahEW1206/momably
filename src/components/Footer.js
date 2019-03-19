import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  height: 200px;
  width: 100%;
  background-color: var(--light-peach);
  text-align: center;
  padding: 20px;
  position: relative;
`;

export default function Footer() {
  return <FooterContainer>I am a footer!</FooterContainer>;
}
