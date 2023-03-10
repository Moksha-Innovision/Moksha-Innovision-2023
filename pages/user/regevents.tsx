import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import Dashboard from "../../components/dashboard/ui/Dashboard";
import RegEventColumn from "../../components/dashboard/ui/userDashboard/regEventColumn";

type Props = {};

const RegEvents = (props: Props) => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [regEvents, setRegEvents] = useState<any>([]);
  const [userProfileData, setUserProfileData] = useState<any>([]);

  const getUserProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("p_id", user?.id);
    sessionStorage.setItem("userProfileData", JSON.stringify(data));
    setUserProfileData(data);
  };

  const getRegEvents = async () => {
    const { data, error } = await supabase
      .from("event_registerations")
      .select("socevent(*)")
      .eq("t_id", user?.id);
    sessionStorage.setItem("regEvents", JSON.stringify(data));
    setRegEvents(data);
  };

  useEffect(() => {
    let userData = JSON.parse(
      sessionStorage.getItem("userProfileData") || "{}"
    );

    let regEvents = JSON.parse(sessionStorage.getItem("regEvents") || "{}");

    if (user) {
      if (!Array.isArray(userData) && Object.keys(userData).length === 0) {
        getUserProfile();
      } else {
        setUserProfileData(userData);
      }

      if (!Array.isArray(regEvents) && Object.keys(regEvents).length === 0) {
        getRegEvents();
      } else {
        setRegEvents(regEvents);
      }
    }
  }, []);

  return (
    <Dashboard>
      {
        <RegEventColumn
          profile={userProfileData}
          events={regEvents}
          getEvents={getRegEvents}
        />
      }
    </Dashboard>
  );
};

export default RegEvents;
