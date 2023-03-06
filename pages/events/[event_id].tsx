import { useRouter } from "next/router";
import EventRegistrationForm from "../../components/EventRegistrationForm.tsx/EventRegistrationForm";
import UserRegistrationForm from "../../components/UserRegistrationForm/UserRegistrationForm";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import FormInput from "../../components/dashboard/ui/Forms/FormInput";
import Navbar from "../../components/ui/Navbar/Navbar";

type Props = {};

const IndividualEventPage = (props: Props) => {
  const [animationParent] = useAutoAnimate();
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();
  const { event_id } = router.query;
  const [currentEventData, setCurrentEventData] = useState<any>("");
  const [userProfileData, setUserProfileData] = useState<any>("");
  const [showForm, setShowForm] = useState("event");

  const getEvent = async () => {
    const { data, error } = await supabase.from("socevent").select("*");
    sessionStorage.setItem("eData", JSON.stringify(data));
    setCurrentEventData(data?.filter((e) => e.event_id === event_id).at(0));
  };

  const getUserProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("p_id", user?.id);
    console.log(data, error);
    sessionStorage.setItem("userProfileData", JSON.stringify(data));
    setUserProfileData(data);
  };

  useEffect(() => {
    let eventData = JSON.parse(sessionStorage.getItem("eData") || "{}");
    let userData = JSON.parse(
      sessionStorage.getItem("userProfileData") || "{}"
    );
    console.log(userData);

    if (!Array.isArray(eventData) && Object.keys(eventData).length === 0) {
      getEvent();
    } else {
      setCurrentEventData(
        eventData?.filter((e: any) => e.event_id === event_id).at(0)
      );
    }

    if (!Array.isArray(userData) && Object.keys(userData).length === 0) {
      getUserProfile();
    } else {
      setUserProfileData(userData);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="parent min-h-screen w-screen bg-prussian-blue-1000 bg-event-pattern bg-pattern pb-4 pt-[7vh] text-white"
        ref={animationParent}
      >
        <pre>
          IndividualEventPage {JSON.stringify(currentEventData, null, 4)}
        </pre>

        {/* //------------------------------------------------------------------------------------------------------- */}

        {showForm === "event" && (
          <EventRegistrationForm
            eventId={event_id || ""}
            setShowForm={setShowForm}
            showForm={showForm}
            questions={currentEventData.form_question}
            TeamMenber={currentEventData.team_size}
            profileData={userProfileData}
            setProfileData={setUserProfileData}
          />
        )}
        {showForm === "profile" && <UserRegistrationForm />}
      </div>
    </>
  );
};

export default IndividualEventPage;
