import { Koulen } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

interface Prop {
  fsd: {
    bgColor?: string;
    meta: {
      ySpac?: string;
    };
    title: {
      content?: string;
      color?: string;
    };
    subtitle: {
      content?: string;
      color?: string;
    };
    fields: {
      label?: string;
      type?: string;
      placeholder?: string;
      require: boolean;
    }[];
    submit: {
      click?: () => any;
      label?: string;
      color?: string;
    };
    bottomline: {
      label?: string;
      content?: string;
      link?: string;
    };
  };
}

const From = ({ fsd }: Prop) => {
  return (
    <div
      className={`${koulen.className} ${
        fsd.bgColor || "white"
      } text-black shadow-xl  rounded-2xl w-[80vw] max-w-[500px]  flex flex-col items-center py-6 md:px-16 px-12 ${
        fsd.meta.ySpac || "space-y-2"
      }`}
    >
      <div className="">
        <div className=" text-4xl text-center">{fsd.title.content || ""}</div>
        <div
          className={`text-center  text-lg ${
            fsd.subtitle.color || "text-monza-800"
          }`}
        >
          {fsd.subtitle.content}
        </div>
      </div>
      {fsd.fields.map((f, i) => {
        return (
          <div key={i} className="w-full flex flex-col text-xl">
            <label htmlFor="" className="">
              {f.label || "name"} {f.require ? "*" : ""}
            </label>
            <input
              type={`${f.type || "text"}`}
              className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25"
              placeholder={`${f.placeholder}`}
            />
          </div>
        );
      })}

      <div className="w-full flex flex-col text-2xl items-center">
        <button
          className={`${fsd.submit.color} outline outline-[3px] rounded-lg outline-black mt-3 h-14 w-[100%] duration-100 transition-[transform] hover:scale-[1.04]  text-white`}
          onClick={fsd.submit.click}
        >
          {fsd.submit.label}
        </button>
      </div>
      <div className="flex w-[100%] items-center space-x-2">
        <div className="h-[2px] bg-black w-full "></div>
        <span className="">OR</span>
        <div className="h-[2px] bg-black w-full"></div>
      </div>
      <div className="w-full flex flex-col text-xl items-center">
        <button
          className={`bg-white outline outline-[3px] rounded-lg outline-black mt-1 h-10 md:h-12 w-[94%] duration-100 transition-[transform] hover:scale-[1.02] flex justify-center items-center text-black`}
          onClick={fsd.submit.click}
        >
          <Image
            width={45}
            height={45}
            src="google.svg"
            alt={""}
            className="pr-4"
          />
          Continue with Google
        </button>
      </div>
      <div className={``}>
        {fsd.bottomline.content}
        <Link href={fsd.bottomline.link || "/"}>
          {" "}
          <span className="text-Safety-Orange-500 hover:scale-150 drop-shadow-md cursor-pointer">
            {" "}
            {fsd.bottomline.label}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default From;
