import { Koulen } from "@next/font/google";
import Image from "next/image";

import { useRef } from "react";

import ContactUsForm from "./ContactUsForm";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const ContactUs = () => {
  const containerRef: any = useRef();

  return (
    <>
      <div
        className={`${"font-koulen"} sdfdsf434 relative mt-[20px] flex min-h-screen items-center justify-center overflow-x-hidden pt-[4vh] text-white md:pt-[7vh] `}
        ref={containerRef}
      >
        <div className="fixed top-0 left-0 z-[1] h-[100vh] w-[100vw] backdrop-blur-[3px] "></div>

        <div className="z-10"></div>
        <div className="relative mt-6 flex flex-col md:mt-4 ">
          {/*<div className="absolute -bottom-16 -right-[15%] transition-all  duration-100  ">
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
  </div>*/}
          <h1 className="contact-us z-[1] mb-7  text-center  text-4xl drop-shadow-lowGlowtext md:mb-4 lg:text-5xl">
            CONTACT US
          </h1>
          <div className="relative">
            <div className="absolute -bottom-[60px] -right-[38px] h-[150px] w-[150px] transition-all duration-100  xl:scale-[1.5]  ">
              <Image
                src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/border-event-contact.svg"
                width={100}
                height={100}
                alt="border"
                className="  bird-1  h-full w-full rotate-[10deg] scale-[1.1] -scale-x-100 animate-wheel md:scale-[1.4] lg:w-36"
              />
            </div>

            <div className=" absolute -top-[40px] -left-[48px] h-[150px]  w-[150px] transition-all duration-100 xl:scale-[1.5]   ">
              <Image
                src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/border-event-contact.svg"
                width={100}
                height={100}
                alt="border"
                className=" bird-2 h-full w-full scale-[1.1] animate-wheel md:scale-[1.4] lg:w-36"
              />
            </div>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
