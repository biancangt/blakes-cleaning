import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-box">
        <div className="map-description">
          <h2></h2>
          <p>Proudly based in Austin, serving the entire surrounding community.</p>
        </div>
        <div className="map-container">
          <iframe
            title="Localização em Austin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110547.41325911714!2d-97.83571938906917!3d30.30786224237479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a9ebf1e2d5%3A0x1e7df7a0e19a770!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbr!4v1685050000000!5m2!1sen!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
