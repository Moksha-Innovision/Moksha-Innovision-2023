import React from "react";
import logo from "../../../public/moksha.png";
import Image from "next/image";

// type Props = {};

const Navbar = () => {
  return (
    <div className="space-x-4 ">
      <nav className="bg-slate-50 border-2 rounded-b-xl h-16 border-black flex justify-center">
        <div>
          <img src={logo} />
        </div>
        <div className="flex">
          <ul className="items-center space-x-8 text-2xl align-baseline">
            <li className="float-left ">EVENTS</li>
            <li className="float-left">FAQs</li>
            <li className="float-left">SPONSORS</li>
            <li className="float-left">ABOUT US</li>
            <li className="float-left">CONTACT US</li>
          </ul>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
