import { Koulen } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FormInput from "../components/dashboard/ui/Forms/FormInput";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const deafultFormFields = {
  SocEmail: "",
  password: "",
};

const SocLogin = () => {
  const [formFields, setFormFields] = useState(deafultFormFields);
  const { SocEmail, password } = formFields;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <div className=" relative flex min-h-[100vh] items-center  justify-center overflow-x-hidden bg-[#300e2f] py-10">
      <Head>
        <title>Moksha Innovision&apos;23 | Login</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <div className=" fixed w-[100%] overflow-hidden  lg:w-[50%] ">
        <Image
          src={"logbg.svg"}
          className="h-full w-full animate-wheel "
          alt={""}
          width={100}
          height={100}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${"font-koulen"} z-10 flex w-[80vh] max-w-[500px] flex-col items-center space-y-2 rounded-2xl bg-Safety-Orange-100 py-6 px-12 md:px-16 `}
      >
        <div className="">
          <div className=" text-center text-4xl">Log-In</div>
          <div
            className={`"text-monza-800"  }  text-center
              text-lg`}
          ></div>
        </div>

        <div className="flex w-full flex-col text-xl">
          <FormInput
            label="Society Email"
            name="SocEmail"
            className="h-8 w-full rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
            placeholder="soc@email.com"
            onChange={handleChange}
            value={SocEmail}
            type="email"
            id="Society Email"
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            className="h-8 w-full rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
            placeholder="..."
            onChange={handleChange}
            value={password}
            id="Password"
            required
          />
        </div>

        <div className="flex w-full flex-col items-center text-2xl">
          <button
            className={`mt-3 h-14 w-[100%] rounded-lg bg-Safety-Orange-500 text-white outline outline-[3px] outline-black transition-[transform] duration-100  hover:scale-[1.04]`}
          >
            Login As Admin
          </button>
        </div>
        <div>
          Not a Society?
          <Link href={"/userlogin" || "/"}>
            <span className="cursor-pointer text-Safety-Orange-500 drop-shadow-md hover:scale-150">
              User Login
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SocLogin;
