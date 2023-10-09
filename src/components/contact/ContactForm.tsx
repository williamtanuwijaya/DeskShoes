// components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <>
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row w-full mb-9">
        <div className="lg:w-1/2 order-2 lg:order-1 h-96 lg:h-auto">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127504.44553976129!2d104.68056342149958!3d-2.9547940587549273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75e8fc27a3e3%3A0x3039d80b220d0c0!2sPalembang%2C%20Palembang%20City%2C%20South%20Sumatra!5e0!3m2!1sen!2sid!4v1696867850757!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="lg:w-1/2 bg-white border rounded-md p-8 order-1 lg:order-2">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <p>Cara untuk menghubungi content creator bisa DM Instagram dan email</p>
          <form className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                Name:
              </label>
              <input type="text" id="name" name="name" placeholder="Your Name" className="border rounded-md py-2 px-3 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                Email:
              </label>
              <input type="email" id="email" name="email" placeholder="Your Email" className="border rounded-md py-2 px-3 w-full" />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                Message:
              </label>
              <textarea id="message" name="message" placeholder="Your Message" className="border rounded-md py-2 px-3 h-48 resize-none w-full"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
