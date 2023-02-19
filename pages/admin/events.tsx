import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import Notadmin from "../../components/FallbackPages/notadmin";
import CreateEventModal from "../../components/dashboard/ui/Events/CreateEventModal";
import EventColumn from "../../components/dashboard/ui/Events/EventColumn";

type Props = {};
const Events = (props: Props) => {
  const [EventModal, setEventModal] = useState(false);
  const session = useSession();
  const supabase = useSupabaseClient();
  const [userData, setUserData] = useState<any>("");
  const [events, setEvents] = useState<any>([]);
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    const getEvent = async () => {
      const { data, error } = await supabase
        .from("socevent")
        .select("*")
        .eq("soc_id", user?.id);
      setEvents(data);
    };

    if (user && user.user_metadata.isAdmin) {
      getEvent();
    }
  }, []);

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
      {EventModal && (
        <div className="modal absolute top-0    grid h-screen w-full  max-w-screen-2xl place-items-center backdrop-blur-md">
          <CreateEventModal setEventModal={setEventModal} />
        </div>
      )}
      <EventColumn setEventModal={setEventModal} events={events} />
    </Dashboard>
  );
};

export default Events;
