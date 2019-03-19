import React from "react";
import styled from "styled-components";

export default function Contact() {
  const ContactContainer = styled.section`
    width: 100%;
    padding: 0;
    margin-bottom: 100px;

    img {
      width: 100%;
    }
  `;

  const ContactForm = styled.form`
    width: 95%;
    max-width: 400px;
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

  return (
    <ContactContainer>
      <picture>
        <source
          media="(min-width: 1000px)"
          srcSet="https://picsum.photos/2000/400?random"
        />
        <source
          media="(min-width: 500px)"
          srcSet="https://picsum.photos/1200/400?random"
        />
        <img src="https://picsum.photos/400?random" alt="about momably" />
      </picture>

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
