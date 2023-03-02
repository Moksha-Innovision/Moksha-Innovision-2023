import { useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Notadmin from "../components/FallbackPages/notadmin";
import Navbar from "../components/ui/Navbar/Navbar";

type Props = {};

const ComingSoon = (props: Props) => {
  const user = useUser();
  if (user) {
    if (!user.user_metadata.isAdmin) {
      return (
        <>
          <Notadmin type={"not-authorized"} />
        </>
      );
    }
  } else {
    return (
      <>
        <Notadmin type="login" />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Moksha Innovision&apos;23 | Dashboard</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Navbar />
      <div className="grid h-screen w-screen place-items-center bg-prussian-blue-1000   bg-event-pattern bg-pattern      text-7xl text-white drop-shadow-lowGlowtext">
        User Dashboard Coming SOON
      </div>
    </>
  );
};

export default ComingSoon;
