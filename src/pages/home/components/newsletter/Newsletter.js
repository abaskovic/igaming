import './Newsletter.css';
import React, { useState } from 'react';
import location from './assets/location.svg';
import airplane from './assets/airplane.svg';
import icon from './assets/subscribeIcon.svg';
function Newsletter() {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Email cannot be empty');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }


    setError('Thank you for subscribing!');
    setEmail('');
  };
  return (
    <section className="newsletter">
      <div className="newsletterBlock">
        <div className="newsletterContent">



          <h1>Sign up to our newsletter</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Egestas et feugiat purus enim facilisi nunc blandit nullam.</p>


          <form className="newsletterForm" onSubmit={handleSubmit}>
            <input id="email" value={email} onChange={handleInputChange} placeholder="Your email address" />
            <button type="submit">
              <img src={icon} alt="icon" />
            </button>
          </form>
          <span className="error">{error}</span>
        </div>
      <img src={location} alt="location" className="location" />
      <img src={airplane} alt="airplane" className="airplane" />
      </div>

    </section>
  );
}

export default Newsletter;
