import { useSession } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import CreateEventModal from "../../components/dashboard/ui/Events/CreateEventModal";
type Props = {};

const Newevent = (props: Props) => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    /*if (!session) {
      router.push("/userlogin");
    }*/
  }, [session]);
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
