import React from "react";
import reCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="contact-left"
      >
        <div className="contact-left-title">
          <h2>Have a project idea?</h2>
          <h2>Let's get in touch.</h2>
          <hr />
        </div>
        <div className="input-group">
          <input
            type="hidden"
            name="access_key"
            value="d4e43725-8577-4454-ba74-e3c87ebd6b8b"
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="contact-inputs"
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            className="contact-inputs"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="contact-inputs"
          required
        />

        <textarea
          name="message"
          placeholder="Subject"
          className="contact-inputs"
          required
        ></textarea>
        <reCAPTCHA />
        <button type="submit"> Send!</button>
      </form>
    </div>
  );
};

export default Contact;
