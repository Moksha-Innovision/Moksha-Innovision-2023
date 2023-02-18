import Navbar from "../components/ui/Navbar/Navbar";
import Link from "next/link";
import { useSession } from "@supabase/auth-helpers-react";
type Props = {};

const Choice = (props: Props) => {
  const session = useSession();

  return (
    <>
      <Navbar />
      <div className="grid  h-screen w-screen place-items-center bg-prussian-blue-1000 bg-event-pattern bg-contain">
        <Link
          href={"/userlogin"}
          className=" text-center flex justify-center items-center text-3xl font-bold bg-red-500 w-full h-40 hover:text-white"
        >
          User Login{" "}
        </Link>
        <Link
          href={"/adminlogin"}
          className=" flex justify-center items-center text-3xl font-bold bg-saffron-500 w-full h-40 hover:text-white"
        >
          Admin Login{" "}
        </Link>
      </div>
    </>
  );
};

export default Choice;
