import Image from "next/image";
import ContactUsForm from "../ui/ContactUs/ContactUsForm";

const LandingContactUS = () => {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center   overflow-hidden pt-[7vh] pb-20 text-white">
      <div className="relative mt-6 flex flex-col md:mt-4 ">
        {/*<div className="absolute -bottom-16 transition-all duration-100  -right-[15%]  ">
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
        </div>*/}
        <h1 className="mb-7 flex flex-col  items-center text-center   text-4xl text-white drop-shadow-lowGlowtext md:mb-6 lg:text-5xl ">
          <div className="">CONTACT US</div>
          <Image
            src="/underline.svg"
            width={100}
            height={20}
            alt={"underlien "}
            className={`b-2 inline w-24 scale-150`}
          />
        </h1>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default LandingContactUS;
