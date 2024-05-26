import React, { useState } from 'react';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-5 z-50">
      <button
        onClick={toggleMenu}
        className="block text-gray-500 focus:outline-none focus:text-gray-900"
      >
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M2 6h20a1 1 0 010 2H2a1 1 0 010-2zM2 12h20a1 1 0 010 2H2a1 1 0 010-2zM2 18h20a1 1 0 010 2H2a1 1 0 010-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg overflow-hidden transition-opacity ease-in-out duration-300">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerIcon;
