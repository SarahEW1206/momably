import React, { Component } from "react";
import styled from "styled-components";
import PatternedHeader from "./elements/PatternedHeader";
import FormBox from "./elements/FormBox";
import StyledHeadingOne from "./elements/StyledHeadingOne";

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
          <StyledHeadingOne content="Contact Us" color="var(--dark-teal)" />
          <p>Want to help make Momably a reality? I'd love to hear from you!</p>
          <form
            accept-charset="UTF-8"
            action="https://usebasin.com/f/38cca78d122a"
            method="POST"
          >
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
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
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
            <div
              className="g-recaptcha"
              data-sitekey="6Lew3SMUAAAAAJ82QoS7gqOTkRI_dhYrFy1f7Sqy"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary btn-block"
            />
          </form>
        </FormBox>
      </ContactContainer>
    );
  }
}

export default Contact;
