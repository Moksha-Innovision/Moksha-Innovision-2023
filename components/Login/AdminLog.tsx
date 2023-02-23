import { Koulen } from "@next/font/google";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InlineAlert from "../Alerts/InlineAlert";
import FormInput from "../dashboard/ui/Forms/FormInput";
import Spinner from "../Loaders/Spinner";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const deafultFormFields = {
  AdminEmail: "",
  password: "",
};

const AdminLog = () => {
  const supabase = useSupabaseClient();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");
  //const [password, setPassword] = useState('')
  /*const handleLogin = async (e: any) => {
        setIsLoading(true);
        e.preventDefault();
        try {
            const { data, error } =/*await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })
                await supabase.auth.signInWithPassword({ email, password })
            if (!error && !data) alert('Check your email for the login link!')
            if (error) console.log('Error returned:', error.message)
            if (data) console.log("reiceved", data)
        } catch (error: any) {
            console.log('Error thrown:', error.message)
            alert(error.error_description || error)
        }
        setIsLoading(false);
    }*/
  const handleLogin = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
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
    <div className=" relative flex min-h-[100vh] items-center  justify-center overflow-x-hidden bg-[#300e2f] py-10">
      <div className=" fixed w-[100%] overflow-hidden  lg:w-[50%] ">
        <Image
          src={
            "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/logbg.svg"
          }
          className="h-full w-full animate-wheel "
          alt={""}
          width={100}
          height={100}
        />
      </div>
      <form
        className={`${"font-koulen"} z-10 flex w-[80vh] max-w-[500px] flex-col items-center space-y-2 rounded-2xl bg-Safety-Orange-100 py-6 px-12 md:px-16`}
      >
        <div className="">
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
            className="h-8 w-full rounded-lg bg-saffron-25 p-2 outline outline-[3px] focus:bg-white md:h-10"
            placeholder="admin@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="Admin Email"
            required
          />
        </div>
        <div className="flex w-full flex-col items-center text-2xl">
          <button
            type="submit"
            className={`mt-3 h-14 w-[100%] rounded-lg bg-Safety-Orange-500 text-white outline outline-[3px] outline-black transition-[transform] duration-100  hover:scale-[1.04]`}
            disabled={isLoading}
            onSubmit={handleLogin}
          >
            {isLoading ? <Spinner /> : "Login"}
          </button>
        </div>

        <div>
          Not an Admin?
          <Link href={"/userlogin" || "/"}>
            <span className="cursor-pointer text-Safety-Orange-500 drop-shadow-md hover:scale-150">
              User Login
            </span>
          </Link>
        </div>

        {alert && (
          <InlineAlert
            success={alert === "success"}
            className="w-full rounded text-center tracking-wider text-white drop-shadow-lg"
          >
            {alert === "success"
              ? `Email Sent to ${email}`
              : `An Error Occurred , try again Later`}
          </InlineAlert>
        )}
      </form>
    </div>
  );
};

export default AdminLog;
