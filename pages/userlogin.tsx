import { Koulen } from "@next/font/google";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import InlineAlert from "../components/Alerts/InlineAlert";
import FormInput from "../components/dashboard/ui/Forms/FormInput";
import Spinner from "../components/Loaders/Spinner";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const deafultFormFields = {
  UserEmail: "",
  password: "",
};
const SECRET_PASS_KEY = "iamadmin";
const UserLogin = () => {
  const supabase = useSupabaseClient();
  const [claimsAdmin, setClaimsAdmin] = useState(false);
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
          emailRedirectTo: `${window.location.origin}`,

          data: {
            isAdmin: claimsAdmin && password === SECRET_PASS_KEY,
          },
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
      <Head>
        <title>Moksha Innovision&apos;23 | Login</title>
        <meta property="og:title" content="" key="title" />
      </Head>
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
          className={`${"font-koulen"} bg- borer-4 drop-shadow-gow z-10 flex w-[80vh] max-w-[500px] flex-col items-center space-y-2 rounded-2xl border-saffron-500 bg-[rgba(0,0,2,0)] py-6 px-12 backdrop-blur-[8px] md:px-16`}
        >
          <div className="text-white">
            <div className=" text-center text-4xl">
              {claimsAdmin ? "Admin Log-In" : "User Log-In"}
            </div>
            <div
              className={`"text-monza-800"  }  text-center
              text-lg`}
            ></div>
          </div>

          <div className="flex w-full flex-col text-xl">
            <FormInput
              disable={isLoading}
              label="User Email"
              name="UserEmail"
              labelColor="white"
              className=" h-10 w-full rounded-lg bg-saffron-25 p-2 shadow-md focus:bg-white focus:outline-none md:h-10"
              placeholder="user@email.com"
              onChange={handleChange}
              value={UserEmail}
              type="email"
              id="User Email"
              required
            />

            {claimsAdmin && (
              <FormInput
                label="Enter Your Secret Admin Key"
                name="password"
                labelColor="white"
                type="password"
                className={`$ h-8 w-full rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10`}
                placeholder="XXXX-XXXX-XXXX"
                onChange={handleChange}
                value={password}
                id="Password"
                required
              />
            )}
          </div>

          <div className="flex w-full flex-col items-center text-2xl">
            <button
              disabled={password !== SECRET_PASS_KEY && claimsAdmin}
              className={`mt-3  h-14  w-[100%] rounded-lg bg-Safety-Orange-500 text-white shadow-md transition-[transform] duration-100  hover:scale-[1.04] disabled:pointer-events-none disabled:opacity-40`}
            >
              {isLoading ? (
                <Spinner />
              ) : claimsAdmin ? (
                "Login"
              ) : (
                "Coming Soon..."
              )}
            </button>
            {/*<button
              disabled={password !== SECRET_PASS_KEY && claimsAdmin}
              className={`mt-3  h-14  w-[100%] rounded-lg bg-Safety-Orange-500 text-white shadow-md transition-[transform] duration-100  hover:scale-[1.04] disabled:pointer-events-none disabled:opacity-40`}
            >
              {isLoading ? <Spinner /> : "Login"}
              </button>*/}
          </div>
          <div>
            <span className="text-white">
              Magic Link will be sent to your Email
            </span>
          </div>
          <div>
            <span
              className="pb-8 text-saffron-500 hover:cursor-pointer hover:underline"
              onClick={() => setClaimsAdmin(!claimsAdmin)}
            >
              {claimsAdmin ? "Not an Admin ?" : "Login as admin instead?"}
            </span>
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
/*<div>
          <span className="text-white">Login as a Admin Instead?</span>
          <Link href={"/adminlogin" || "/"}>
            <span className="text-Safety-Orange-100 tracking-wider  hover:scale-150 drop-shadow-md cursor-pointer">
              {" Admin Login"}
            </span>
          </Link>
        </div> */
