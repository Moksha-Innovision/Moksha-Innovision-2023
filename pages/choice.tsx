import { useSession } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/ui/Navbar/Navbar";
type Props = {};

const Choice = (props: Props) => {
  const session = useSession();

  return (
    <>
      <Head>
        <title>Moksha Innovision&apos;23 | Login</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Navbar />
      <div className="grid  h-screen w-screen place-items-center bg-prussian-blue-1000   bg-event-pattern bg-pattern      ">
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
