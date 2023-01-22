import { Koulen } from "@next/font/google";
import Image from "next/image";
import ContactUsForm from "./ContactUsForm";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const ContactUs = () => {
  return (
    <div
      className={`${koulen.className} text-white h-[93vh] bg-prussian-blue-1000 justify-center flex  overflow-x-hidden `}
    >
      <div className="z-10">
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-36 lg:w-40 xl:w-52 left-0 "
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-36 lg:w-40 xl:w-52 right-0 -scale-x-100 "
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-36 lg:w-40 xl:w-52 bottom-0 left-0 -scale-y-100 "
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-36 lg:w-40 xl:w-52 bottom-0 right-0 -scale-y-100 -scale-x-100"
        />
      </div>

      <div className="mt-8 flex flex-col relative mb-4">
        <div className="absolute md:bottom-[20%] bottom-[28%] transition-all duration-100 md:-right-[30%] -right-[20%]  md:scale-[2.2] scale-[1.8]">
          <Image
            src="bird.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-36 lg:w-40 xl:w-52  rotate-[10deg] -scale-x-100"
          />
        </div>
        <div className="absolute md:top-[18%] top-[12%] -left-[20%] transition-all duration-100 md:-left-[30%]  md:scale-[2.2] scale-[1.8]">
          <Image
            src="bird.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-36 lg:w-40 xl:w-52 "
          />
        </div>
        <h1 className="text-5xl lg:text-6xl text-center  mb-10 drop-shadow-xl">
          CONTACT US
        </h1>
        <ContactUsForm />
      </div>
    </div>
  );
  /*<div className={`${koulen.className} text-white h-[93vh] bg-prussian-blue-1000 justify-between flex flex-row overflow-hidden `}>
        <div className="flex flex-col justify-between ">
          <Image
            src="border-event-contact.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-36 lg:w-40 xl:w-52"
          />
          <Image
            src="bird.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-36 lg:w-40 xl:w-52 md:scale scale-[5] relative -top-52 -rotate-[10deg]"
          />
          <Image
            src="border-event-contact.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-36 lg:w-40 xl:w-52  -scale-y-100 "
          />
        </div>
        <div className="mt-8">
          <h1 className="text-5xl lg:text-6xl text-center  mb-10 ">CONTACT US</h1>
          <ContactUsForm />
        </div>
        <div className="flex flex-col justify-between items-end">
          <Image
            src="border-event-contact.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-36 lg:w-40 xl:w-52 -scale-x-100"
          />
          <div className="">
            <Image
              src="bird.svg"
              width={100}
              height={100}
              alt="border"
              className=" w-36 lg:w-40 xl:w-52 -scale-x-100 rotate-[20deg] "
            />
          </div>
          <Image
            src="border-event-contact.svg"
            width={100}
            height={100}
            alt="border"
            className=" w-36 lg:w-40 xl:w-52  -scale-x-100 -scale-y-100"
          />
        </div>
      </div>*/
};

export default ContactUs;
