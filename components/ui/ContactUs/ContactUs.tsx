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
        className={`${koulen.className} relative flex min-h-screen items-center justify-center overflow-x-hidden bg-prussian-blue-1000 bg-event-pattern  bg-contain pt-[7vh] text-white`}
        ref={containerRef}
      >
        <div className="z-10"></div>

        <div className="relative mt-6 flex flex-col md:mt-4 ">
          <div className="absolute -bottom-16 -right-[15%] transition-all  duration-100  ">
            <Image
              src="border-event-contact.svg"
              width={100}
              height={100}
              alt="border"
              className=" xl:w-42 bird-1 w-28  rotate-[10deg] scale-[1.1] -scale-x-100 animate-wheel md:scale-[1.4] lg:w-36"
            />
          </div>
          <div className="absolute -top-0 -left-[15%]  transition-all duration-100   ">
            <Image
              src="border-event-contact.svg"
              width={100}
              height={100}
              alt="border"
              className=" xl:w-42 bird-2 w-28 scale-[1.1] animate-wheel md:scale-[1.4] lg:w-36"
            />
          </div>
          <h1 className="contact-us mb-7 text-center  text-4xl drop-shadow-xl md:mb-4 lg:text-5xl">
            CONTACT US
          </h1>
          <ContactUsForm />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
