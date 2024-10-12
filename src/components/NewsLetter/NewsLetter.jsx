import React, { useState } from 'react';
import './NewsLetter.scss';
import emailjs from '@emailjs/browser';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_6cep1cu';
    const templateId = 'template_wrmmlkk';
    const publicKey = 'VqPm2SKaHsw53QC6C';

    const templateParams = {
      from_email: email, // Matches the parameter defined in your EmailJS template
      message: message, // Ensure this matches your template parameter name
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setEmail(''); // Clear input field after successful submission
        setMessage(''); // Clear message
        alert("you have subscribed.");
      })
      .catch((error) => {
        console.log('Error sending email:', error);
      });
  };

  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className="box" id='checkbox'>
        <form onSubmit={handleSubmit}>
          <input
            className="place"
            type="email"
            placeholder="Your Email id"
            value={email} // Bind value to state
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
          />
          <button className="subs" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
