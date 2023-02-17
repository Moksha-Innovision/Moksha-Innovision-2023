import { Koulen } from "@next/font/google";
import Image from "next/image";

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

import ContactUsForm from "./ContactUsForm";
import Navbar from "../Navbar/Navbar";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const ContactUs = () => {
  const containerRef: any = useRef();

  return (
    <>
      <div
        className={`${koulen.className} text-white min-h-screen bg-prussian-blue-1000 bg-event-pattern bg-contain justify-center items-center flex  overflow-x-hidden relative pt-[7vh]`}
        ref={containerRef}
      >
        <div className="z-10"></div>

        <div className="mt-6 md:mt-4 flex flex-col relative ">
          <div className="absolute -bottom-16 transition-all duration-100  -right-[15%]  ">
            <Image
              src="border-event-contact.svg"
              width={100}
              height={100}
              alt="border"
              className=" w-28 lg:w-36 xl:w-42  rotate-[10deg] -scale-x-100 bird-1 md:scale-[1.4] scale-[1.1] animate-wheel"
            />
          </div>
          <div className="absolute -top-0 -left-[15%]  transition-all duration-100   ">
            <Image
              src="border-event-contact.svg"
              width={100}
              height={100}
              alt="border"
              className=" w-28 lg:w-36 xl:w-42 bird-2 md:scale-[1.4] scale-[1.1] animate-wheel"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl text-center  mb-7 md:mb-4 drop-shadow-xl contact-us">
            CONTACT US
          </h1>
          <ContactUsForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
