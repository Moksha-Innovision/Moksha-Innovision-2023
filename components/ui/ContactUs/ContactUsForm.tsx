import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const ContactUsForm = () => {
  return (
    <div
      className={`${koulen.className} flex w-[80vw] max-w-[550px] flex-col items-center space-y-5 rounded-2xl border-4  border-yellow-500 bg-transparent py-6 px-12 text-black shadow-xl backdrop-blur-[2px] md:px-24`}
    >
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
          placeholder="JAMES CHUCH"
        />
      </div>
      <div className="flex w-full flex-col text-xl">
        <label htmlFor="" className="text-white">
          email Address*
        </label>
        <input
          type="text"
          className="h-8 rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
          placeholder="JAMES CHUCH"
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
          placeholder="JAMES CHUCH"
        />
      </div>
      <div className="flex w-full flex-col text-xl">
        <label htmlFor="" className="text-white">
          YOUR MESSAGE*
        </label>
        <textarea
          name=""
          id=""
          placeholder="MOKSHA WAS REALLY FUN TO ATTEND! MOJ KARDI.."
          className="  h-[100px] resize-none rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white"
          maxLength={250}
        ></textarea>
      </div>
      <div className="flex w-full flex-col items-center text-xl">
        <button className="h-14 w-[60%]  rounded-lg bg-prussian-blue-1000 text-white transition-[transform] duration-100 hover:scale-[1.04] ">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactUsForm;
