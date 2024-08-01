import React from 'react';

const FAQSection = ({ faqs }) => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <dl>
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <dt>{faq.question}</dt>
            <dd>{faq.answer}</dd>
          </React.Fragment>
        ))}
     /</dl>
    </div>
  );
};
export default FAQSection;