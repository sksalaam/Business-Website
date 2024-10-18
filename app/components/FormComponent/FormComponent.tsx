"use client";
import React from "react";

const FormComponent = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <>
      <div className="mx-[174px]">
        <div className="flex flex-col justify-center items-center text-center pb-12">
          <p className="text-[#b4b4b4] mb-2">Free Enquiry</p>
          <h1 className="text-3xl font-medium">Get A Free Consultation</h1>
          <div className="h-[2px] w-[65px] bg-[#2d509a] mt-4"></div>
        </div>
      </div>
      <div
        className="mx-[174px] block pt-[65px] ps-[30px] "
        style={{ boxShadow: "0px 0px 15px 2px #ebebf2" }}
      >
        <div className="bg-white  flex">
          <div className="w-1/2 pe-4">
            <p className="mb-8 text-gray-500">
              Would you like to take free consultation from our business
              advisers over the phone? Just submit your details in the given
              fields, and our experts will be in touch as soon as possible.
            </p>

            <form className="space-y-7">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full border h-[52px] bg-gray-100 text-gray-500  px-5"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  placeholder="Email address*"
                  className="w-full border bg-gray-100 text-gray-500 px-5"
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Phone*"
                  className="w-full border bg-gray-100 text-gray-500 px-5"
                  onChange={handleChange}
                />
                <select
                  className="w-full border bg-gray-100 text-gray-500 px-5 py-4"
                  onChange={handleChange}
                >
                  <option>Select Service</option>
                  <option>Business Growth</option>
                  <option>Sustainability</option>
                  <option>Performance</option>
                  <option>Advanced Analytics</option>
                  <option>Organisation</option>
                  <option>Customer Insights</option>
                  <option>Marketing Plan</option>
                  <option>Online Consulting</option>
                </select>
              </div>

              <button
                onClick={handleSubmit}
                className=" max-w-[170px] w-full font-semibold bg-[#3740b0] text-white py-[12px] px-[30px]  hover:opacity-70  transition-opacity"
              >
                Submit Now
              </button>
            </form>
          </div>

          <div className="w-1/2 flex ps-3 items-center justify-center">
            <img
              src="https://www.americanholdingintl.com/images/resources/consultation-bg.png"
              alt="Consultation"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
