import {
  ChakraProvider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EventRegistrationForm from "../../components/EventRegistrationForm.tsx/EventRegistrationForm";
import Navbar from "../../components/ui/Navbar/Navbar";
import ConciseDetails from "../../components/ui/newEventPage/ConciseDetails";
import EventDesc from "../../components/ui/newEventPage/EventDesc";
import EventPoc from "../../components/ui/newEventPage/EventPoc";
import EventRules from "../../components/ui/newEventPage/EventRules";
import theme from "../../components/UiTheme";
import UserRegistrationForm from "../../components/UserRegistrationForm/UserRegistrationForm";

type Props = {};

const IndividualEventPage = (props: Props) => {
  const [animationParent] = useAutoAnimate();
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();
  const { event_id } = router.query;
  const [currentEventData, setCurrentEventData] = useState<any>("");
  const [userProfileData, setUserProfileData] = useState<any>([]);
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

    if (user) {
      if (!Array.isArray(userData) && Object.keys(userData).length === 0) {
        getUserProfile();
      } else {
        setUserProfileData(userData);
      }
      console.log(userProfileData);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="parent min-h-screen w-screen bg-prussian-blue-1000 bg-event-pattern bg-pattern pb-4 pt-[7vh] text-white"
        ref={animationParent}
      >
        {/* <pre>
          IndividualEventPage {JSON.stringify(currentEventData, null, 4)}
        </pre> */}

        <div className="m-auto max-w-5xl px-2">
          <div className=" w-[100%] rounded-md border border-solid p-1 ">
            <Image
              src={currentEventData.banner || ""}
              width="200"
              height="200"
              alt="event-poster"
              className="h-full w-full rounded pb-1 "
            />
            <ConciseDetails
              imgSrc={currentEventData.poster}
              eventName={currentEventData.event_name}
              eventTagline={currentEventData.tagline}
              eventTime={currentEventData.time}
              eventDate={currentEventData.date}
              eventVenue={currentEventData.venue}
              eventTeam={currentEventData.team_size}
            />
          </div>

          <div className="mt-5 rounded-md border border-solid py-1 px-2 ">
            <ChakraProvider theme={theme}>
              <Tabs>
                <TabList className="space-x-5 rounded-md bg-yellow-400 bg-opacity-10 px-4 py-1 text-xl shadow-soft backdrop-blur-[2px] ">
                  <Tab className="text-xl">Description</Tab>
                  <Tab>Rules</Tab>
                  <Tab isDisabled={user ? false : true}>Register</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <EventDesc desc={currentEventData.desc} />
                    <EventPoc poc={currentEventData.poc || {}} />
                  </TabPanel>
                  <TabPanel>
                    <EventRules rules={currentEventData.rules || []} />
                  </TabPanel>
                  <TabPanel>
                    {showForm === "event" && (
                      <EventRegistrationForm
                        eventId={event_id || ""}
                        setShowForm={setShowForm}
                        showForm={showForm}
                        questions={currentEventData.form_question}
                        TeamMenber={currentEventData.team_size || 1}
                        profileData={userProfileData}
                        setProfileData={setUserProfileData}
                      />
                    )}
                    {showForm === "profile" && <UserRegistrationForm />}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ChakraProvider>
          </div>
        </div>

        {/* //------------------------------------------------------------------------------------------------------- */}
      </div>
    </>
  );
};

export default IndividualEventPage;
