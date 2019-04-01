import React from "react";
import styled from "styled-components";

const FullWidthContainer = styled.div`
  width: 100%;
  padding: 0;
  margin-bottom: 100px;
  min-height: 50vh;
`;

export default function FormBox(props) {
  return <FullWidthContainer>{props.children}</FullWidthContainer>;
}
