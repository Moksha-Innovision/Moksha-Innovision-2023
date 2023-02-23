import { useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useEffect } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import Notadmin from "../../components/FallbackPages/notadmin";

type Props = {};

const Scroreboard = (props: Props) => {
  const user = useUser();
  useEffect(() => {}, []);

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
    <Dashboard>
      <Head>
        <title>Moksha Innovision&apos;23 | Dashboard</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      Scroreboard
    </Dashboard>
  );
};

export default Scroreboard;
