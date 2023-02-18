import { Koulen } from "@next/font/google";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FormInput from "../components/dashboard/ui/Forms/FormInput";
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
  const { AdminEmail, password } = formFields;
  useEffect(() => {
    console.log(session);
    if (session) router.push("/admin/events");
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const [isoading, setIsLoading] = useState<any>(false);
  const [alert, setAlert] = useState<any>("");
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
    <div className=" overflow-x-hidden relative min-h-[100vh] bg-prussian-blue-1000  flex justify-center items-center py-10 px-2">
      <div className=" fixed w-[100%]  lg:w-[50%] ">
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
        className={`${koulen.className} z-10 w-[80vh] max-w-[500px] backdrop-blur-[8px] bg-[rgba(0,0,2,0.0)] bg- drop-shadow-glow flex flex-col items-center rounded-2xl py-6 md:px-16 px-12 space-y-2  border-saffron-500 border-4`}
      >
        <div className="text-white">
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
            labelColor="white"
            className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25 w-full"
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
            className="outline outline-[3px] rounded-lg h-8 md:h-10 p-2 focus:bg-white bg-saffron-25 w-full"
            placeholder="..."
            onChange={handleChange}
            value={password}
            id="Password"
            required
          />
        </div>

        <div className="w-full flex flex-col text-2xl items-center">
          <button
            className={`bg-Safety-Orange-500 outline outline-[3px] rounded-lg outline-black mt-3 h-14 w-[100%] duration-100 transition-[transform] hover:scale-[1.04]  text-white`}
          >
            {/*isLoading ? <Spinner /> : "Login"*/}
          </button>
        </div>
        <div>
          <span className="text-white">Login as a User Instead?</span>
          <Link href={"/userlogin" || "/"}>
            <span className="text-Safety-Orange-100 tracking-wider  hover:scale-150 drop-shadow-md cursor-pointer">
              {" User Login"}
            </span>
          </Link>
        </div>

        {/*alert && (
          <InlineAlert
           { success={alert == "success"}}
            className="w-full text-center text-white rounded drop-shadow-lg tracking-wider"
          >
            {/*(alert == "success")
              ? `Email Sent to ${AdminEmail}`
        : `An Error Occurred , try again Later`}
          </InlineAlert>
        )*/}
      </form>
    </div>
  );
};

export default AdminLogin;
