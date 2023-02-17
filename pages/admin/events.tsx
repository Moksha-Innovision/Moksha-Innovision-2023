import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
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
    const getEvents = async (id: any) => {

    }
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
          .from('soc')
          .insert([
            { soc_id: session?.user.id, email: session?.user.email },
          ])
      }
      else {
        setUserData(data[0])
      }
      getEvents(session?.user.id)
    };
    if (session?.user.id)
      getUser();
  }, [session]);
  return (
    <Dashboard>
      {EventModal && (
        <div className="modal absolute top-0    w-full max-w-screen-2xl h-screen bg-[rgba(0,0,34,0.8)] grid place-items-center">
          <CreateEventModal setEventModal={setEventModal} />
        </div>
      )}
      <EventColumn setEventModal={setEventModal} />
    </Dashboard>
  );
};

export default Events;