import { useSession, useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import ParticipantTable from "../../components/dashboard/ui/Table/ParticipantTable";
import Notadmin from "../../components/FallbackPages/notadmin";
type Props = {};

const Registrations = (props: Props) => {
  const session = useSession();
  const router = useRouter();

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
    <>
      {/* <Navbar/> */}
      <Dashboard>
        <Head>
          <title>Moksha Innovision&apos;23 | Dashboard</title>
          <meta property="og:title" content="" key="title" />
        </Head>
        <div className="container m-auto max-h-screen w-[350px] px-2 sm:w-[500px] md:w-full md:px-4 lg:px-4 ">
          <h1 className="mb-8 mt-6 text-center text-3xl font-semibold drop-shadow-glow md:text-5xl">
            Participants
          </h1>
          <ParticipantTable />
        </div>
      </Dashboard>
    </>
  );
};

export default Registrations;
