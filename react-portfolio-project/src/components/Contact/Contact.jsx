import React from "react";
import "./Contact.css"

const Contact = () => {
  return <div className="contact-container">
    <form action="" className="contact-left">
      <div className="contact-left-title">
        <h2>Have a project idea?</h2>
        <h2>Let's get in touch.</h2>
        <hr/>
      </div>
      <input type="text" name="name" placeholder="Name" className="contact-inputs" required/>
      <input type="text" name="surname" placeholder="Surname" className="contact-inputs" required/>
      <input type="email" name="email" placeholder="Email" className="contact-inputs" required/>
      <textarea name="message" placeholder="Subject" className="contact-inputs" required></textarea>
      <button type="submit"> Send! </button>
    </form>
    <div className="contact-right">


    </div>
  </div>;
};

export default Contact;
