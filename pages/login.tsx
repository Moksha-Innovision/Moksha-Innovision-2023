import Image from "next/image";
import { useEffect } from "react";
import From from "../components/ui/Login/From";
const fsd = {
  bgColor: "bg-Safety-Orange-100",
  meta: {
    ySpac: "space-y-10",
  },
  title: {
    content: "Log-in",
    color: undefined,
  },
  subtitle: {
    content: undefined,
    color: "text-white",
  },
  fields: [
    {
      label: "Moksha-ID",
      type: "text",
      placeholder: "JAMES",
      require: true,
    },

    {
      label: "Password ",
      type: "password",
      placeholder: "....",
      require: true,
    },
  ],
  submit: {
    click: () => {},
    label: "Log in",
    color: "bg-Safety-Orange-500",
  },
  bottomline: {
    label: "Sign Up",
    content: "Create a New account   ",
    link: "/signup",
  },
};

const login = () => {
  useEffect(() => {}, []);
  return (
    <div className="w-[100vw] overflow-x-hidden relative min-h-[100vh] bg-[#300e2f]  flex justify-center items-center">
      <div className=" absolute w-[120%] md:w-[100%] xl:w-[70%] ">
        <Image
          src={"logbg.svg"}
          className="w-full h-full animate-wheel "
          alt={""}
          width={100}
          height={100}
        />
      </div>
      <div className="z-10">
        <From fsd={fsd} />
      </div>
    </div>
  );
};

export default login;
