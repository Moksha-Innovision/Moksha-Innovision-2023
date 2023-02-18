import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import CreateEventModal from "../../components/dashboard/ui/Events/CreateEventModal";
import EventColumn from "../../components/dashboard/ui/Events/EventColumn";

type Props = {};
const Events = (props: Props) => {
  const [EventModal, setEventModal] = useState(false);
  const session = useSession();
  const supabase = useSupabaseClient();
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const getEvents = async (id: any) => {};

    const getUser = async () => {
      const { data, error } = await supabase
        .from("soc")
        .select("*")
        .eq("soc_id", session?.user.id);
      if (error) {
        console.log(error);
        return;
      }

      if (data.length == 0) {
        const { data, error } = await supabase
          .from("soc")
          .insert([{ soc_id: session?.user.id, email: session?.user.email }]);
      } else {
        setUserData(data[0]);
      }
      getEvents(session?.user.id);
    };
    if (session?.user.id) getUser();
  }, [session]);

  if (!session)
    return (
      <>
        Please <Link href="/userlogin">Login</Link>First
      </>
    );

  return (
    <Dashboard>
      {EventModal && (
        <div className="modal absolute top-0    grid h-screen sm:w-[calc(100vw_-_150px)]  w-[calc(100vw_-_26px)] bg-[#00000070] place-items-center">
          <CreateEventModal setEventModal={setEventModal} />
        </div>
      )}
      <EventColumn setEventModal={setEventModal} />
    </Dashboard>
  );
};

export default Events;
