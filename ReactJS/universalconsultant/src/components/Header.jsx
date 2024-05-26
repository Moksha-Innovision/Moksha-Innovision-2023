import React from "react";
import headerImg from "../Assessts/freepik-export-202405021701289WjB.png";
import PopupForm from "./PopupForm";
import { useState } from "react";

function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <header className="pt-8 px-4 md:px-40 bg-sky-100">
        <div className="md:flex md:justify-between md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <div>
              <p className="text-3xl md:text-6xl font-semibold md:w-[35rem]">
                Protecting Your Tomorrow, Today: Your Trusted Insurance Partner
              </p>
            </div>
            <div className="mt-10 md:mt-16 mb-2 ">
              <p className="font-semibold mb-2  md:ml-2">Get Consultation</p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your Email address"
                  className="px-6 py-5 w-full md:w-96 pr-12 rounded-l-full rounded-r-full border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={togglePopup}
                  className="shadow-lg px-6 py-5 bg-green-600 text-white font-semibold rounded-r-full hover:bg-green-700 focus:outline-none focus:bg-green-700 absolute right-0 top-0 mt-1 md:mt-0 md:static"
                >
                  Click Here
                </button>
                {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img className="h-auto w-full" src={headerImg} alt="header" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
