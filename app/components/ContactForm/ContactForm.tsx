import React from "react";

const ContactForm = () => {
  return (
    <section className="pb-[90px] mx-[172px] ">
        <form className="space-y-9 border border-[#f2f2f2] shadow-[0px_3px_10px_#f2f2f2] block px-[40px] py-[70px]">
      <div className="text-center mb-10">
        <p className="text-gray-500 mb-1 tracking-wider">
          For Any Enquiry
        </p>
        <h2 className="text-3xl font-semibold text-gray-800">
          Send Message Us
        </h2>
        <div className="w-16 h-[1px] bg-blue-600 mt-2 mx-auto"></div>
      </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
           
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name*"
              required
            />
          </div>
          <div className="flex flex-col">

            <input
              type="email"
              id="email"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-[1px] focus:ring-[#3740b0]"
              placeholder="Your Mail*"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">

            <input
              type="text"
              id="phone"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-[1px] focus:ring-[#3740b0]"
              placeholder="Phone"
            />
          </div>
          <div className="flex flex-col">

            <input
              type="text"
              id="subject"
              className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-[1px] focus:ring-[#3740b0]"
              placeholder="Subject"
            />
          </div>
        </div>

        <div className="flex flex-col">
        
          <textarea
            id="message"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-[1px] focus:ring-[#3740b0]"
            placeholder="Your Message.."
            required
          ></textarea>
        </div>

        <div className=" flex flex-col text-center">
          <button
            type="submit"
            className="bg-[#3740b0] text-white py-3 px-8 rounded-md hover:opacity-70 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
