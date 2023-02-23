import { Koulen } from "@next/font/google";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InlineAlert from "../components/Alerts/InlineAlert";
import FormInput from "../components/dashboard/ui/Forms/FormInput";
import Spinner from "../components/Loaders/Spinner";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const deafultFormFields = {
  AdminEmail: "",
  password: "",
};

const AdminLogin = () => {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();
  const [formFields, setFormFields] = useState(deafultFormFields);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const { AdminEmail, password } = formFields;
  useEffect(() => {});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: AdminEmail,
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
          className={`${"font-koulen"} bg- z-10 flex w-[80vh] max-w-[500px] flex-col items-center space-y-2 rounded-2xl border-4 border-saffron-500 bg-[rgba(0,0,2,0.0)] py-6 px-12 drop-shadow-glow  backdrop-blur-[8px] md:px-16`}
        >
          <div className="text-white">
            <div className=" text-center text-4xl">Admin Log-In</div>
            <div
              className={`"text-monza-800"  }  text-center
              text-lg`}
            ></div>
          </div>

          <div className="flex w-full flex-col text-xl">
            <FormInput
              label="Admin Email"
              name="AdminEmail"
              labelColor="white"
              className="h-8 w-full rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
              placeholder="Admin@email.com"
              onChange={handleChange}
              value={AdminEmail}
              type="email"
              id="Admin Email"
              required
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              labelColor="white"
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
              {isLoading ? <Spinner /> : "Login"}
            </button>
          </div>
          <div>
            <span className="text-white">Login as a User Instead?</span>
            <Link href={"/userlogin" || "/"}>
              <span className="cursor-pointer tracking-wider  text-Safety-Orange-100 drop-shadow-md hover:scale-150">
                {" User Login"}
              </span>
            </Link>
          </div>

          {alert && (
            <InlineAlert
              success={alert === "success"}
              className="w-full rounded text-center tracking-wider text-white drop-shadow-lg"
            >
              {alert === "success"
                ? `Email Sent to ${AdminEmail}`
                : `An Error Occurred , try again Later`}
            </InlineAlert>
          )}
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
