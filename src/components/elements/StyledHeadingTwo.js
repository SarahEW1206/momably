import React from "react";
import styled from "styled-components";

const HeadingTwo = styled.h2`
  font-size: 2em;
  color: ${props => props.color || "#ff7c4d"};
  font-family: "Abril Fatface", cursive;
`;

export default function StyleHeadingTwo(props) {
  return <HeadingTwo color={props.color}>{props.content}</HeadingTwo>;
}
