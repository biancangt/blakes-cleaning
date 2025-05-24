import React, { useState } from "react";
import { FaEnvelope, FaComment } from "react-icons/fa";

export default function ContactUs() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/xpwdgwqr", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Message sent!");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <section id="contactme" className="contact-container">
      <h2 className="contact-heading">Contact</h2>

      <div className="contact-wrapper">
        {/* Formulário com título interno */}
        <form onSubmit={handleSubmit} className="contact-form">
          <h3 className="form-title">Message Us</h3>
          <input type="text" name="name" placeholder="Name" required />
          <input type="tel" name="phone" placeholder="Phone" />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="send-button">Send</button>
          {status && <p className="status-message">{status}</p>}
        </form>

        {/* Botões embaixo */}
        <div className="contact-buttons">
          <a href="sms:+12544888917" className="contact-button">
            <FaComment className="contact-icon" /> Text Us
          </a>
          <a href="mailto:magdamiralha@gmail.com" className="contact-button">
            <FaEnvelope className="contact-icon" /> Mail Us
          </a>
        </div>
      </div>
    </section>
  );
}
