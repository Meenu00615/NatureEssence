import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Contact us</h1>
          <p>
            Need to get in touch with us? Fill out the form with your inquiry.
          </p>
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="First name*" className="input-field" />
              <input type="text" placeholder="Last name" className="input-field" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email*" className="input-field full-width" />
            </div>
            <div className="form-group">
              <textarea placeholder="What can we help you with?" className="input-field full-width"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
