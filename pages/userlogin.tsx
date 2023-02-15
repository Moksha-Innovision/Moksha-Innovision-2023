import Image from "next/image";
import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });
import FormInput from "../components/dashboard/ui/Forms/FormInput";
import { useState } from "react";
import Link from "next/link";
import Spinner from "../components/Loaders/Spinner";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import InlineAlert from "../components/Alerts/InlineAlert";

const deafultFormFields = {
  UserEmail: "",
  password: "",
};

const UserLogin = () => {
  const supabase = useSupabaseClient();

  const [formFields, setFormFields] = useState(deafultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const { UserEmail, password } = formFields;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: UserEmail,
        options: {
          emailRedirectTo: "http://localhost:3000/admin/events",
        },
      });

      if (!error) {
        setAlert("success");
      }
    } catch (err) {
      setAlert("error");
    }

    setIsLoading(false);
  };

  return (
    <div className=" overflow-x-hidden relative min-h-[100vh] bg-[#300e2f]  flex justify-center items-center py-10">
      <div className=" fixed w-[100%] overflow-hidden  lg:w-[50%] ">
        <Image
          src={"logbg.svg"}
          className="w-full h-full animate-wheel "
          alt={""}
          width={100}
          height={100}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${koulen.className} z-10 w-[80vh] max-w-[500px] bg-Safety-Orange-100 flex flex-col items-center rounded-2xl py-6 md:px-16 px-12 space-y-2`}
      >
        <div className="">
          <div className=" text-4xl text-center">User Log-In</div>
          <div
            className={`text-center  text-lg  "text-monza-800"
              }`}
          ></div>
        </div>

        <div className="w-full flex flex-col text-xl">
          <FormInput
            label="User Email"
            name="UserEmail"
            className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25 w-full"
            placeholder="user@email.com"
            onChange={handleChange}
            value={UserEmail}
            type="email"
            id="User Email"
            required
          />
          {/* <FormInput
            label="Password"
            name="password"
            type="password"
            className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25 w-full"
            placeholder="..."
            onChange={handleChange}
            value={password}
            id="Password"
            required
          /> */}
        </div>

        <div className="w-full flex flex-col text-2xl items-center">
          <button
            className={`bg-Safety-Orange-500 outline outline-[3px] rounded-lg outline-black mt-3 h-14 w-[100%] duration-100 transition-[transform] hover:scale-[1.04]  text-white`}
          >
            {isLoading ? <Spinner /> : "Login"}
          </button>
        </div>
        <div>
          Login as a Admin Instead?
          <Link href={"/adminlogin" || "/"}>
            <span className="text-Safety-Orange-500  hover:scale-150 drop-shadow-md cursor-pointer">
              Admin Login
            </span>
          </Link>
        </div>
        {alert && (
          <InlineAlert
            success={alert === "success"}
            className="w-full text-center text-white rounded drop-shadow-lg tracking-wider"
          >
            {alert === "success"
              ? `Email Sent to ${UserEmail}`
              : `An Error Occurred , try again Later`}
          </InlineAlert>
        )}
      </form>
    </div>
  );
};

export default UserLogin;
