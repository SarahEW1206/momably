import React from "react";
import styled from "styled-components";

const HeadingOne = styled.h1`
  font-size: 3em;
  color: ${props => props.color || "#ff7c4d"};
  font-family: "Abril Fatface", cursive;

  @media (max-width: 768px) {
    font-size: 2.25em;
  }
`;

export default function StyledHeadingOne(props) {
  return <HeadingOne color={props.color}>{props.content}</HeadingOne>;
}
