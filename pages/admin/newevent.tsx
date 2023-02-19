import { useSession, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
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
      <div className="container m-auto max-h-screen w-full overflow-y-auto px-4 md:px-8  lg:px-14">
        <h1 className="mb-6 mt-8 text-center text-5xl font-semibold drop-shadow-glow">
          Create New Event
        </h1>
        <CreateEventModal setEventModal={() => {}} />
      </div>
    </Dashboard>
  );
};

export default Newevent;
