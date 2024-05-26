import React from "react";
import PopupForm from "./PopupForm";
import { useState } from "react";

function JoinUsButton() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button
        className="bg-green-600 text-white rounded-full px-5 py-2 hover:bg-green-700"
        onClick={togglePopup}
      >
        Get in Touch
      </button>
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </div>
  );

  // return (
  //   <div>
  //     <button className="bg-green-600 text-white rounded-full px-5 py-2 hover:bg-green-700">
  //       Get in Touch
  //     </button>
  //   </div>
  // );
}

export default JoinUsButton;
