import React from "react";
import PopupForm from "./PopupForm";
import { useState } from "react";

function ContactUs() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <section className="py-32 bg-green-200 space-y-24">
        <div className="flex justify-center space-y-6 lin">
          <p className="text-center text-green-900 font-bold text-5xl w-[45rem]">
            Contact us now and let us provide the perfect insurance
          </p>
        </div>
        <div className="flex justify-center">
          <div className="">
            <input
              type="text"
              placeholder="Enter your Email address"
              className="shadow-lg px-6 py-5 w-96 pr-12 rounded-l-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={togglePopup}
              className="shadow-lg px-6 py-5 bg-green-600 text-white font-semibold rounded-r-full hover:bg-green-700 focus:outline-none focus:bg-green-700"
            >
              Click Here
            </button>
            {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
