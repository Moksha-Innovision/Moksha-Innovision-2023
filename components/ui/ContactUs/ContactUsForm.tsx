import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const ContactUsForm = () => {
  return (
    <div
      className={`${koulen.className} text-black shadow-xl bg-transparent border-yellow-500 border-4 rounded-2xl w-[80vw] max-w-[550px]  flex flex-col items-center py-6 md:px-24 px-12 space-y-5 backdrop-blur-[2px]`}
    >
      <div className="">
        <div className=" text-[26px] text-center leading-7 text-white">
          DROP US A MESSAGE
        </div>
        <div className="text-center text-yellow-500 text-md">
          we’d love to hear from you!
        </div>
      </div>
      <div className="w-full flex flex-col text-xl">
        <label htmlFor="" className="text-white">
          YOUR NAME*
        </label>
        <input
          type="text"
          className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25"
          placeholder="JAMES CHUCH"
        />
      </div>
      <div className="w-full flex flex-col text-xl">
        <label htmlFor="" className="text-white">
          email Address*
        </label>
        <input
          type="text"
          className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25"
          placeholder="JAMES CHUCH"
        />
      </div>
      <div className="w-full flex flex-col text-xl">
        <label htmlFor="" className="text-white">
          Contact Number{" "}
          <span className="text-lg text-gray-500">(optional)</span>
        </label>
        <input
          type="text"
          className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25"
          placeholder="JAMES CHUCH"
        />
      </div>
      <div className="w-full flex flex-col text-xl">
        <label htmlFor="" className="text-white">
          YOUR MESSAGE*
        </label>
        <textarea
          name=""
          id=""
          placeholder="MOKSHA WAS REALLY FUN TO ATTEND! MOJ KARDI.."
          className="  focus:bg-white bg-saffron-25 outline outline-[3px] p-2 rounded-lg h-[100px] resize-none"
          maxLength={250}
        ></textarea>
      </div>
      <div className="w-full flex flex-col text-xl items-center">
        <button className="bg-prussian-blue-1000 h-14  w-[60%] duration-100 transition-[transform] hover:scale-[1.04] rounded-lg text-white ">
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
};

export default ContactUsForm;
