import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FormInput from "../dashboard/ui/Forms/FormInput";
import Spinner from "../Loaders/Spinner";
import Navbar from "../ui/Navbar/Navbar";

type Props = {
  type: string;
};

const SECRET_PASS_KEY = "miavgfihiwbasbtd";

const Notadmin = (props: Props) => {
  const supabase = useSupabaseClient();
  const [isLoading, setIsLoading] = useState(false);
  const [claimsAdmin, setClaimsAdmin] = useState(false);
  const [passKey, setPassKey] = useState("");

  const handleChange = (e: any) => {
    setPassKey(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.updateUser({
        data: { isAdmin: true },
      });
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col-reverse items-center justify-center gap-16 overflow-x-hidden bg-black   bg-event-pattern bg-pattern       px-4 py-24 text-white md:gap-28 md:py-20 md:px-44 lg:flex-row lg:px-24 lg:py-24">
        <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-2">
          <div className="relative">
            <div className="absolute">
              <div className="">
                <h1 className="my-2 text-3xl font-bold text-white lg:text-5xl xl:text-6xl">
                  Hello
                </h1>
                <p className="my-2  ">
                  Sorry about that! Please visit our homepage to get where you
                  need to go.
                </p>
                <Link href="/">
                  <button className="md my-2 rounded border bg-saffron-600 py-4 px-8 text-center text-white hover:bg-saffron-700 focus:outline-none focus:ring-2 focus:ring-saffron-700 focus:ring-opacity-50 sm:w-full lg:w-auto">
                    Take me to homepage!
                  </button>
                </Link>
                {props.type !== "login" && (
                  <button
                    onClick={() => {
                      setClaimsAdmin(!claimsAdmin);
                    }}
                    className="md my-2 ml-2 rounded border bg-transparent py-4 px-8 text-center text-white hover:bg-saffron-700 focus:outline-none focus:ring-2 focus:ring-saffron-700 focus:ring-opacity-50 sm:w-full lg:w-auto"
                  >
                    But I am an ADMIN ?
                  </button>
                )}
                {claimsAdmin && (
                  <form onSubmit={handleSubmit}>
                    <FormInput
                      label="Enter Your Secret Key"
                      value={passKey}
                      onChange={handleChange}
                    />

                    <button
                      disabled={passKey !== SECRET_PASS_KEY}
                      className="md my-2 rounded border bg-saffron-600 py-4 px-8 text-center text-white hover:bg-saffron-700 focus:outline-none focus:ring-2 focus:ring-saffron-700 focus:ring-opacity-50 disabled:pointer-events-none disabled:opacity-30 sm:w-full lg:w-auto"
                    >
                      {isLoading ? <Spinner /> : "Verify"}
                    </button>
                  </form>
                )}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <Image
            src="/logbg.svg"
            width={400}
            height={400}
            className="animate-wheel"
            alt={""}
          />
        </div>
      </div>
    </>
  );
};

export default Notadmin;
