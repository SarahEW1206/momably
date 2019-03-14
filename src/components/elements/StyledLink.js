import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLinkComponent = styled(Link)`
  font-size: 1em;
  color: ${props => props.color || "#ff7c4d"};
  font-family: helvetica, sans-serif;
`;

export default class StyledLink extends Component {
  render() {
    return (
      <StyledLinkComponent to={this.props.to} color={this.props.color}>
        {this.props.content}
      </StyledLinkComponent>
    );
  }
}
