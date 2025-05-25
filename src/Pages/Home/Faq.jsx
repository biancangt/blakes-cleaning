import React, { useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "What cleaning services do you offer?",
      answer: "We offer residential and commercial cleaning, deep cleaning, move-in/move-out cleaning, and more. Contact us for a customized quote.",
    },
    {
      question: "Are your cleaning products safe?",
      answer: "Yes! We use safe cleaning products to ensure a clean and healthy environment for you and your family.",
    },
    {
      question: "How can I book a service?",
      answer: "You can easily book a service by sending us a message or clicking the 'Book Now' button on our website. We'll get back to you promptly.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "Not necessarily. We can discuss access arrangements when you book your cleaning service.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <h2 className="sections-heading">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <p>{item.question}</p>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
