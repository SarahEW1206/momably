import React from "react";
import styled from "styled-components";

const StyledForm = styled.div`
  width: 95%;
  max-width: 800px;
  margin: 50px auto;
  border: 1px solid var(--light-teal);
  padding: 20px;
  margin-top: -200px;
  background-color: white;
  position: relative;
  z-index: 1000;

  input {
    width: 100%;
  }
`;

export default function FormBox(props) {
  return <StyledForm>{props.children}</StyledForm>;
}
