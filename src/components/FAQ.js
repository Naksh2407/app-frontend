import React from "react";

const faqs = [
  { q: "How can I access offline mode?", a: "You can download lessons for offline use." },
  { q: "Do you support regional languages?", a: "Yes, we provide multi-language support." },
  { q: "Is it free?", a: "Most courses are free, premium ones are affordable." },
];

function FAQ() {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="font-semibold text-lg">{faq.q}</h3>
            <p className="text-gray-600 mt-2">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
