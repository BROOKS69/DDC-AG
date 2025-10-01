import React from "react";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="mb-4">
            123 Church Street<br />
            City, State 12345
          </p>
          <p className="mb-4">
            Phone: (123) 456-7890<br />
            Email: info@church.com
          </p>
          <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
            <p>Google Maps Embed Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
