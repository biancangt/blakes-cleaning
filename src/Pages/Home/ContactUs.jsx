import React from "react";
import { FaEnvelope, FaComment } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section id="contactme" className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <div className="cards-container">
        {/* Card 1 - SMS */}
        <div className="contact-card">
          <FaComment className="contact-icon" />
          <a href="sms:+12544888917" className="contact-button">
            Text Us
          </a>
        </div>

        {/* Card 2 - Email */}
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:magdamiralha@gmail.com" className="contact-button">
            Mail Us
          </a>
        </div>
      </div>
    </section>
  );
}
