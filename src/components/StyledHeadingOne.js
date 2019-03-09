import React from "react";
import styled from "styled-components";

const HeadingOne = styled.h1`
  font-size: 2em;
  color: ${props => props.color || "#ff7c4d"};
  font-family: "Abril Fatface", cursive;
`;

export default function StyledHeadingOne(props) {
  return <HeadingOne color={props.color}>{props.content}</HeadingOne>;
}
