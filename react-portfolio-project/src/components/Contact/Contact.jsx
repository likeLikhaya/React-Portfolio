import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_00ku9j4", "template_xuab666", form.current, {
        publicKey: "FRhyKNtvM70NdMjaM",
      })
      .then(
        () => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <form ref={form} onSubmit={sendEmail} className="contact-left">
        <div className="contact-left-title">
          <h2>Have a project idea?</h2>
          <h2>Let's get in touch.</h2>
          <hr />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="contact-inputs"
            required
          />
          <input
            type="text"
            name="user_surname"
            placeholder="Surname"
            className="contact-inputs"
            required
          />
        </div>
        <input
          type="email"
          name="user_email"
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
        <ReCAPTCHA sitekey="6LeyCn8pAAAAADbWcRseOkjd9QdbetMvbhjfzimx" />
        <button type="submit"> Send!</button>
      </form>
    </div>
  );
};

export default Contact;
