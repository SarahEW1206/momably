import React, { Component } from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  width: 100%;
  padding: 0;
  margin-bottom: 100px;

  img {
    width: 100%;
  }
`;
const ContactImage = styled.div`
background-image: url("https://picsum.photos/2000/1000?random");
background-size: cover;
width 100%;
height: 300px;
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 800px;
  margin: 50px auto;
  border: 2px solid var(--light-teal);
  padding: 20px;
  margin-top: -200px;
  background-color: white;
  position: relative;
  z-index: 1000;

  input {
    width: 100%;
  }
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
        <ContactImage />
        <ContactForm>
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
        </ContactForm>
      </ContactContainer>
    );
  }
}

export default Contact;
