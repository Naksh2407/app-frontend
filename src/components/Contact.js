import React from "react";

function Contact() {
  return (
    <div className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-600"
          rows="4"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
