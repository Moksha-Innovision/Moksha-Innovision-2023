import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import CreateEventModal from "../../components/dashboard/ui/Events/CreateEventModal";
import EventColumn from "../../components/dashboard/ui/Events/EventColumn";

type Props = {};
const Events = (props: Props) => {
  const [EventModal, setEventModal] = useState(false);
  const session = useSession();
  const supabase = useSupabaseClient();
  const [userData, setUserData] = useState<any>("");
  const [events, setEvents] = useState<any>("");
  const router = useRouter();
  useEffect(() => {
    /*if (!session) {
      router.push("/userlogin");
    }*/

    const getEvents = async (id: any) => {
      const { data, error } = await supabase
        .from("socevent")
        .select("*")
        .eq("soc_id", session?.user.id);
      if (data) {
        console.log(data);
        setEvents(data);
      }
      if (error) console.log(error);
    };
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
        setUserData({
          email: session?.user.email,
          name: "MOKSHA",
          soc_id: session?.user.id,
          type: null,
        });
      } else {
        setUserData(data[0]);
      }
      getEvents(session?.user.id);
      console.log(userData);
    };
    if (session?.user.id) getUser();
  }, [session]);
  return (
    <Dashboard>
      {EventModal && (
        <div className="modal absolute top-0    grid h-screen w-full max-w-screen-2xl place-items-center bg-[rgba(0,0,34,0.8)]">
          <CreateEventModal setEventModal={setEventModal} />
        </div>
      )}
      <EventColumn setEventModal={setEventModal} events={[]} />
    </Dashboard>
  );
};

export default Events;
