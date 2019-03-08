import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  color: ${props => props.color || "#ff7c4d"};
  font-family: "Abril Fatface", cursive;
`;

export default class styledh1 extends Component {
  render() {
    return <Title color={this.props.color}>{this.props.content}</Title>;
  }
}
