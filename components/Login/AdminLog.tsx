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
        className={`${koulen.className} z-10 w-[80vh] max-w-[500px] bg-Safety-Orange-100 flex flex-col items-center rounded-2xl py-6 md:px-16 px-12 space-y-2`}
      >
        <div className="">
          <div className=" text-4xl text-center">Admin Log-In</div>
          <div
            className={`text-center  text-lg  "text-monza-800"
              }`}
          ></div>
        </div>

        <div className="w-full flex flex-col text-xl">
          <FormInput
            label="Admin Email"
            name="AdminEmail"
            className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25 w-full"
            placeholder="admin@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="Admin Email"
            required
          />
        </div>
        <div className="w-full flex flex-col text-2xl items-center">
          <button
            type="submit"
            className={`bg-Safety-Orange-500 outline outline-[3px] rounded-lg outline-black mt-3 h-14 w-[100%] duration-100 transition-[transform] hover:scale-[1.04]  text-white`}
            disabled={isLoading}
            onSubmit={handleLogin}
          >
            {isLoading ? <Spinner /> : "Login"}
          </button>
        </div>

        <div>
          Not an Admin?
          <Link href={"/userlogin" || "/"}>
            <span className="text-Safety-Orange-500 hover:scale-150 drop-shadow-md cursor-pointer">
              User Login
            </span>
          </Link>
        </div>

        {alert && (
          <InlineAlert
            success={alert === "success"}
            className="w-full text-center text-white rounded drop-shadow-lg tracking-wider"
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
