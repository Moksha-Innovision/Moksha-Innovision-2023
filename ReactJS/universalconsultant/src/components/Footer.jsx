import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="">
        <div className="flex flex-col md:flex-row justify-center md:justify-between md:p-40 items-center space-y-10 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-bold text-2xl md:text-4xl mb-4">Get in Touch</p>
            <p className="my-2">XXXXXXXXXXX</p>
            <div className="text-blue-600 space-x-2">
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className="flex  justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-20">
            <div className="text-center md:text-left space-y-4">
              <p className="font-bold text-2xl md:text-4xl">Company Info</p>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Service</li>
                <li>We are Hiring</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="text-center ml-5 md:text-left space-y-4">
              <p className="font-bold text-2xl md:text-4xl">Feature</p>
              <ul className="space-y-2">
                <li>XXXXXXX</li>
                <li>XXXXXXX</li>
                <li>XXXXXXX</li>
                <li>XXXXXXX</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-sky-100 flex justify-center items-center p-5 md:p-10 mt-5">
          <p className="font-bold text-sm md:text-xl text-gray-500">
            Made With ❤️ By HackTigerlab All Right Reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
