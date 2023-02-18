import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
      name: string;
      placeholder?: string;
      require: boolean;
    }[];
    defaultValues: {
      SocEmail?: string;
      password?: string;
    };
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
  const handleSubmit = () => {};

  const [formFields, setFormFields] = useState({
    SocEmail: "",
    password: "",
  });

  const { SocEmail, password } = formFields;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <form
      className={` ${
        fsd.bgColor || "white"
      } flex w-[80vw]  max-w-[500px] flex-col items-center  rounded-2xl py-6 px-12 text-black shadow-xl md:px-16 ${
        fsd.meta.ySpac || "space-y-2"
      }`}
      onSubmit={handleSubmit}
    >
      <div className="">
        <div className=" text-center text-4xl">{fsd.title.content || ""}</div>
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
          <div key={i} className="flex w-full flex-col text-xl">
            <label htmlFor="" className="">
              {f.label || "name"} {f.require ? "*" : ""}
            </label>
            <input
              type={`${f.type || "text"}`}
              className="h-8 rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
              placeholder={`${f.placeholder}`}
              onChange={handleChange}
              name={f.name}
            />
          </div>
        );
      })}

      <div className="flex w-[100%] items-center space-x-2">
        <div className="h-[2px] w-full bg-black "></div>
        <span className="">OR</span>
        <div className="h-[2px] w-full bg-black"></div>
      </div>
      <div className="flex w-full flex-col items-center text-xl">
        <button
          className={`mt-1 flex h-10 w-[94%] items-center justify-center rounded-lg bg-white text-black outline outline-[3px] outline-black transition-[transform] duration-100 hover:scale-[1.02] md:h-12`}
          onClick={fsd.submit.click}
        >
          <Image
            width={45}
            height={45}
            src="google.svg"
            alt={""}
            className="pr-4"
          />
        </button>
      </div>
      <div className={``}>
        {fsd.bottomline.content}
        <Link href={fsd.bottomline.link || "/"}>
          {" "}
          <span className="cursor-pointer text-Safety-Orange-500 drop-shadow-md hover:scale-150">
            {" "}
            {fsd.bottomline.label}
          </span>
        </Link>
      </div>
    </form>
  );
};

export default From;
