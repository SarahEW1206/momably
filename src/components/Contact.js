import React, { Component } from "react";
import styled from "styled-components";
import PatternedHeader from "./elements/PatternedHeader";
import FormBox from "./elements/FormBox";

const ContactContainer = styled.section`
  width: 100%;
  padding: 0;
  margin-bottom: 100px;
`;

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <ContactContainer>
        <PatternedHeader />
        <FormBox>
          <h1>Contact Us</h1>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              required
              //   value={this.state.password}
              //   onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              required
              //   value={this.state.password}
              //   onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Message</label>
            <textarea
              type="text"
              className="form-control"
              name="message"
              required
              //   value={this.state.password}
              //   onChange={this.onChange}
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
          />
        </FormBox>
      </ContactContainer>
    );
  }
}

export default Contact;
