import React, { useState, useEffect } from "react";
import JoinUsButton from "./JoinUsButton";
import HamburgerIcon from "./HamburgerIcon";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen width is less than 768px (typical mobile width)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex bg-sky-100 justify-between p-10 font-semibold z-10">
      <div>Company Logo</div>
      {isMobile ? (
        <div>
          <HamburgerIcon />
        </div>
      ) : (
        <div>
          <ul className="flex justify-between space-x-5">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Meet our team</li>
            <li>ContactUs</li>
          </ul>
        </div>
      )}
      <div>
        <JoinUsButton />
      </div>
    </nav>
  );
}

export default Navbar;
