import Image from "next/image";
import ContactUsForm from "../ui/ContactUs/ContactUsForm";

const LandingContactUS = () => {
  return (
    <div className="text-white justify-center items-center flex overflow-hidden   relative pt-[7vh] min-h-[70vh] pb-20">
      <div className="mt-6 md:mt-4 flex flex-col relative ">
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
        <h1 className="text-4xl lg:text-5xl text-center  mb-7 md:mb-6   drop-shadow-lowGlowtext flex flex-col items-center text-white ">
          <div className="">CONTACT US</div>
          <Image
            src="/underline.svg"
            width={100}
            height={20}
            alt={"underlien "}
            className={`b-2 inline scale-150 w-24`}
          />
        </h1>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default LandingContactUS;
