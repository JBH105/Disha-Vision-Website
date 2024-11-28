import React from 'react';
import '../styles/contactform.css'
import { RxCross2 } from 'react-icons/rx';
const ContactForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-button" onClick={onClose}>
      <RxCross2 />
        </button>
        <h1>Share your details</h1>
        <p>Our team will get back to you in 2-3 working days</p>
        <form>
        
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email e.g., user@example.com"
            required
          />
          <button type="submit" className="submit-button">
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
