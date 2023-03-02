import { Koulen } from "@next/font/google";
import Image from "next/image";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const ContactUsForm = () => {
  return (
    <div
      className={`relative z-[1] w-[80vw] max-w-[550px] items-center  justify-center space-y-5  overflow-hidden rounded-2xl border-4  border-yellow-500  bg-prussian-blue-1000   bg-event-pattern bg-pattern      bg-repeat py-6 px-12 text-black shadow-xl md:px-20   `}
    >
      <div className="absolute -bottom-16 -right-[40px] h-[150px] w-[150px] transition-all duration-100  xl:scale-[1.5]  ">
        <Image
          src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="  bird-1  h-full w-full rotate-[10deg] scale-[1.1] -scale-x-100 animate-wheel md:scale-[1.4] lg:w-36"
        />
      </div>

      <div className=" absolute -top-16 -left-[50px] h-[150px]  w-[150px] transition-all duration-100 xl:scale-[1.5]   ">
        <Image
          src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className=" bird-2 h-full w-full scale-[1.1] animate-wheel md:scale-[1.4] lg:w-36"
        />
      </div>

      <div className="">
        <div className=" text-center text-[26px] leading-7 text-white">
          DROP US A MESSAGE
        </div>
        <div className="text-md text-center text-yellow-500">
          we’d love to hear from you!
        </div>
      </div>
      <div className="flex w-full flex-col text-xl">
        <label htmlFor="" className="text-white">
          YOUR NAME*
        </label>
        <input
          type="text"
          className="h-8 rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
          placeholder="FULL NAME"
        />
      </div>
      <div className="flex w-full flex-col text-xl">
        <label htmlFor="" className="text-white">
          email Address*
        </label>
        <input
          type="text"
          className="h-8 rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
          placeholder="user@email.com"
        />
      </div>
      <div className="flex w-full flex-col text-xl">
        <label htmlFor="" className="text-white">
          Contact Number{" "}
          <span className="text-lg text-gray-500">(optional)</span>
        </label>
        <input
          type="text"
          className="h-8 rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
          placeholder="CONTACT"
        />
      </div>
      <div className="flex w-full flex-col text-xl">
        <label htmlFor="" className="text-white">
          YOUR MESSAGE*
        </label>
        <textarea
          name=""
          id=""
          placeholder="MOKSHA WAS REALLY FUN TO ATTEND!"
          className="  h-[100px] resize-none rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white"
          maxLength={250}
        ></textarea>
      </div>
      <div className="flex w-full flex-col items-center text-xl">
        <button className="h-14 w-[60%]  rounded-lg bg-[#BF932F] text-white shadow-md transition-[transform] duration-100  hover:scale-[1.04]">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactUsForm;
{
  /**h-14 w-[60%]  rounded-lg bg-prussian-blue-1000 text-white transition-[transform] duration-100 hover:scale-[1.04]  */
}
