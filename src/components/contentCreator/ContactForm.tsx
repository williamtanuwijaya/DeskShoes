// Import useState dari React
'use client';
import React from 'react';
import Link from 'next/link';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    // Gunakan isVisible untuk mengatur visibilitas elemen
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75`}>
      <div className="bg-white p-8 rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name:
            </label>
            <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email:
            </label>
            <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Message:
            </label>
            <textarea id="message" name="message" className="w-full border border-gray-300 p-2 rounded"></textarea>
          </div>

          <Link href="/">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </Link>
        </form>

        <Link href="/">
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Close</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactForm;
