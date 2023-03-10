import {
  useSession,
  useSupabaseClient,
  useUser,
} from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import EventColumn from "../../components/dashboard/ui/Events/EventColumn";
import Notadmin from "../../components/FallbackPages/notadmin";

type Props = {};
const Events = (props: Props) => {
  const [EventModal, setEventModal] = useState(false);
  const [userData, setUserData] = useState<any>("");

  const [events, setEvents] = useState<any>([]);
  const router = useRouter();
  const user = useUser();
  const session = useSession();
  const supabase = useSupabaseClient();

  const getEvent = async () => {
    const { data, error } = await supabase
      .from("socevent")
      .select("*")
      .eq("soc_id", user?.id);
    sessionStorage.setItem("createdEvents", JSON.stringify(data));
    setEvents(data);
  };

  useEffect(() => {
    if (user && user.user_metadata.isAdmin) {
      let createdEvents = JSON.parse(
        sessionStorage.getItem("createdEvents") || "{}"
      );

      if (
        !Array.isArray(createdEvents) &&
        Object.keys(createdEvents).length === 0
      ) {
        getEvent();
      } else {
        setEvents(createdEvents);
      }
    }
  }, [user]);

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

      <EventColumn
        setEventModal={setEventModal}
        events={events}
        getEvents={getEvent}
      />
    </Dashboard>
  );
};

export default Events;
