// ContactForm.js
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2gfv57d', '__ejs-test-mail-service__', e.target, 'UCKKih5IQspVduNdt')
      .then((result) => {
        console.log(result.text);
        setConfirmationMessage("Your message has been sent successfully!");
      }, (error) => {
        console.log(error.text);
        setConfirmationMessage("There was an error sending your message. Please try again later.");
      });
  };

  return (
    <div>
      <h2 className="animated-text">Contact Me</h2> {/* Teks animasi */}
      <form id="contactForm" onSubmit={sendEmail}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {confirmationMessage &&
        <p id="confirmationMessage" className="message">{confirmationMessage}</p>
      }
    </div>
  );
};

export default ContactForm;
