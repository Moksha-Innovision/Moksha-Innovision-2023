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
          className=" flex h-40 w-full items-center justify-center bg-red-500 text-center text-3xl font-bold hover:text-white"
        >
          User Login{" "}
        </Link>
        <Link
          href={"/adminlogin"}
          className=" flex h-40 w-full items-center justify-center bg-saffron-500 text-3xl font-bold hover:text-white"
        >
          Admin Login{" "}
        </Link>
      </div>
    </>
  );
};

export default Choice;
