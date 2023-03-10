import { useSession, useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import CreateEventModal from "../../components/dashboard/ui/Events/CreateEventModal";
import Notadmin from "../../components/FallbackPages/notadmin";
type Props = {};

const Newevent = (props: Props) => {
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
    <Dashboard>
      <Head>
        <title>Moksha Innovision&apos;23 | Dashboard</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <div className="container m-auto w-full  overflow-y-auto px-4 md:px-8  lg:px-14">
        <h1 className="mb-6 mt-8 text-center text-5xl font-semibold drop-shadow-glow">
          Create New Event
        </h1>
        <CreateEventModal mode="create" setEventModal={() => {}} />
      </div>
    </Dashboard>
  );
};

export default Newevent;
