import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contactez-nous</h1>
        <p>Nous serons ravis de répondre à vos questions.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" placeholder="Votre nom" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Votre email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Votre message"></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
