import React from 'react';

const Contact = ({ darkMode }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/mblodkej', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className={`right-content contact-us ${darkMode ? 'dark' : ''}`}>
      <div className="content-wrapper" data-aos="fade-up">
        <h2 className="section-title">Contact Us</h2>
        <h1 className="main-heading gradient-text">Let's Build Something Amazing Together</h1>
        
        <div className="contact-info">
          <div className="contact-method" data-aos="fade-right">
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>cyclicit@gmail.com</p>
          </div>
          
          <div className="contact-method" data-aos="fade-left">
            <div className="contact-icon">📱</div>
            <h3>Phone</h3>
            <p>+8801577148188</p>
          </div>
        </div>
        
        <div className="contact-form-container" data-aos="zoom-in">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group floating">
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Full Name</label>
              <div className="underline"></div>
            </div>
            
            <div className="form-group floating">
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Email Address</label>
              <div className="underline"></div>
            </div>
            
            <div className="form-group floating">
              <textarea id="message" name="message" required rows="3"></textarea>
              <label htmlFor="message">Your Message</label>
              <div className="underline"></div>
            </div>
            
            <button type="submit" className="submit-button">
              <span>Send Message</span>
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;