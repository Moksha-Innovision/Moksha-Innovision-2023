import Image from "next/image";
import Navbar from "../components/ui/Navbar/Navbar";
import { Koulen } from "@next/font/google";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useState } from "react";
import InlineAlert from "../components/Alerts/InlineAlert";
import FormInput from "../components/dashboard/ui/Forms/FormInput";
import Spinner from "../components/Loaders/Spinner";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

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
    <>
      <Navbar />
      <div className=" relative flex min-h-[100vh] items-center justify-center  overflow-x-hidden bg-prussian-blue-1000 py-10 px-2 pt-[7vh]">
        <div className=" fixed w-[100%]  lg:w-[50%] ">
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
          className={`${koulen.className} bg- borer-4 drop-shadow-gow z-10 flex w-[80vh] max-w-[500px] flex-col items-center space-y-2 rounded-2xl border-saffron-500 bg-[rgba(0,0,2,0)] py-6 px-12 backdrop-blur-[8px] md:px-16`}
        >
          <div className="text-white">
            <div className=" text-center text-4xl">User Log-In</div>
            <div
              className={`"text-monza-800"  }  text-center
              text-lg`}
            ></div>
          </div>

          <div className="w-full flex flex-col text-xl">
            <FormInput
              disable={isLoading}
              label="User Email"
              name="UserEmail"
              labelColor="white"
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

          <div className="flex w-full flex-col items-center text-2xl">
            <button
              className={`mt-3 h-14 w-[100%] rounded-lg bg-Safety-Orange-500 text-white outline outline-[3px] outline-black transition-[transform] duration-100  hover:scale-[1.04]`}
            >
              {isLoading ? <Spinner /> : "Login"}
            </button>
          </div>
          <div>
            <span className="text-white">Login as a Admin Instead?</span>
            <Link href={"/adminlogin" || "/"}>
              <span className="cursor-pointer tracking-wider  text-Safety-Orange-100 drop-shadow-md hover:scale-150">
                {" Admin Login"}
              </span>
            </Link>
          </div>

          {alert && (
            <InlineAlert
              success={alert === "success"}
              className="w-full rounded text-center tracking-wider text-white drop-shadow-lg"
            >
              {alert === "success"
                ? `Email Sent to ${UserEmail}`
                : `An Error Occurred , try again Later`}
            </InlineAlert>
          )}
        </form>
      </div>
    </>
  );
};

export default UserLogin;
