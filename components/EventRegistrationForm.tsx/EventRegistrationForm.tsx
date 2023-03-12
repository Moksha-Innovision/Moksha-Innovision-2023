import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  ChakraProvider,
  Divider,
} from "@chakra-ui/react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useState } from "react";
import InlineAlert from "../Alerts/InlineAlert";
import FormInput from "../dashboard/ui/Forms/FormInput";
import RedirectButton from "../ui/RedirectButton";
type Props = {
  questions?: [];
  eventId: string | string[];
  TeamMenber?: number;
  profileData: [];
  setProfileData: any;
  showForm: any;
  setShowForm: any;
  disable: boolean;
  redirect: string;
};
const EventRegistrationForm = (props: Props) => {
  const [alert, setAlert] = useState<any>("none");
  const [isLoading, setIsLoading] = useState<any>(false);
  let user = useUser();
  const supabase = useSupabaseClient();

  const {
    questions,
    TeamMenber,
    profileData,
    setShowForm,
    setProfileData,
    showForm,
    eventId,
    disable,
    redirect,
  } = props;

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const formdata: any = new FormData(e.currentTarget);
    let finalData: any = {
      t_name: formdata.get("t_name"),
      e_id: eventId,
      t_id: user?.id,
    };

    let form_data = {};

    for (const pair of formdata.entries()) {
      if (pair[0] != "t_name") {
        form_data = { ...form_data, [pair[0]]: pair[1] };
      }
    }

    finalData = { ...finalData, form_data: [form_data] };

    const { data, error } = await supabase
      .from("event_registerations")
      .insert([finalData]);

    if (error) {
      if (error.code == "23505") setAlert("specificerror");
      else {
        setAlert("error");
      }

      e.target.reset();
      setIsLoading(false);
      throw error;
    }

    const currentRegEvents = user?.user_metadata.regEvents;
    const newRegEvents = currentRegEvents.push(eventId);

    const { data: otherData, error: otherError } =
      await supabase.auth.updateUser({
        data: { regEvents: [...currentRegEvents, eventId] },
      });

    setIsLoading(false);
    setAlert("success");
    e.target.reset();
  };

  return (
    <>
      {user?.user_metadata?.regEvents?.includes(eventId) && (
        <div className="prompt">
          You have already registered for the event ! Check your dashboard
        </div>
      )}

      {!user?.user_metadata?.regEvents?.includes(eventId) && (
        <div className="mx-auto my-4 w-[95%] overflow-y-scroll  rounded-md bg-yellow-400  bg-opacity-5 px-6 py-5 pb-3  drop-shadow-lowGlow backdrop-blur-sm">
          <h2 className="mb-6 text-center font-koulen text-3xl ">
            Register For This Event
          </h2>
          {(redirect || redirect  !== "NA") ? (
            <RedirectButton
              hasProfileData={profileData.length !== 0}
              externalLink={redirect}
            />
          ) : (
            <>
              <ChakraProvider>
                <Alert
                  status="error"
                  backgroundColor={"red.300"}
                  className="rounded-md"
                >
                  <AlertIcon color={"red.600"} />
                  <AlertTitle className="font-koulen text-lg tracking-wider text-white ">
                    Fill Correct Details !!
                  </AlertTitle>
                  <AlertDescription className="font-koulen text-lg tracking-wide text-white ">
                    Event organizers may contact you !
                  </AlertDescription>
                </Alert>
              </ChakraProvider>
              <form className="w-full" onSubmit={handleFormSubmit}>
                {(TeamMenber || 0) > 1 && (
                  <>
                    <FormInput
                      required
                      label="Team Name"
                      name={"t_name"}
                      id={"t_name"}
                      className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                    />
                    <span className="-mt-2 mb-5 block font-koulen tracking-wider text-blue-300">
                      You will automatically become the leader of the team !{" "}
                    </span>
                    <Divider />
                    <ChakraProvider>
                      <Alert py={0} className="my-3 rounded-md">
                        <AlertIcon />
                        <AlertTitle className="font-koulen text-lg tracking-wider text-black ">
                          Only Fill member details !!
                        </AlertTitle>
                        <AlertDescription className="font-koulen text-lg tracking-wide text-black ">
                          Leader details will be fetched from your profile
                        </AlertDescription>
                      </Alert>
                    </ChakraProvider>
                    {Array.apply(null, Array((TeamMenber || 1) - 1)).map(
                      (i, k) => {
                        return (
                          <div
                            key={k}
                            className="fromgroup my-1 flex flex-wrap gap-4 gap-y-0 rounded-md  p-2 "
                          >
                            <FormInput
                              required={k == 0}
                              label={`Member ${k + 1} Name`}
                              name={`Member ${k} Name`}
                              id={`Member ${k} Name`}
                              className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                            />
                            <FormInput
                              required={k == 0}
                              type="tel"
                              //pattern=" \d{10}"
                              label={`Member ${k + 1} Phone`}
                              name={`Member ${k} Phone`}
                              id={`Member ${k} Phone`}
                              className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                            />
                          </div>
                        );
                      }
                    )}

                    <div className="fromgroup my-1 flex flex-wrap gap-4 gap-y-0 rounded-md  p-2">
                      {/*<FormInput
                  required
                  label="Team Leader Name"
                  name={"Leader Name"}
                  id={"Team Leader Name"}
                  className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                />
                <FormInput
                  required
                  label="Team Leader Phone"
                  name={"Leader Phone"}
                  type={"number"}
                  pattern=" \d{10}"
                  id={"Team Leader Phone"}
                  className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
          />*/}
                    </div>
                  </>
                )}
                {questions?.map((ques, idx) => (
                  <FormInput
                    required
                    label={ques}
                    name={ques}
                    id={ques}
                    key={idx}
                    className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                  />
                ))}

                <Button
                  variant={"none"}
                  display="block"
                  type="submit"
                  isLoading={isLoading}
                  _disabled={{ pointerEvents: "none", opacity: "0.5" }}
                  className="mx-auto block rounded-md  bg-Safety-Orange-500 px-4 py-2 font-semibold uppercase disabled:opacity-60"
                  isDisabled={
                    !user ||
                    user.user_metadata.isAdmin ||
                    profileData.length === 0 ||
                    disable
                  }
                >
                  Register
                </Button>
              </form>
            </>
          )}

          <div className="alertChip">
            <InlineAlert
              success={false}
              className="mt-4 flex items-center justify-center rounded-md text-center font-koulen font-semibold tracking-wider"
            >
              {!user && (
                <div className="">
                  <Link
                    className="underline hover:scale-105"
                    href={"/userlogin"}
                  >
                    Login
                  </Link>
                  &#160;
                </div>
              )}
              {!user
                ? "First To Register for event"
                : user.user_metadata.isAdmin
                ? "Admin Cannot Register For events"
                : profileData.length === 0
                ? `Create a Profile first `
                : ""}
            </InlineAlert>
          </div>
          {alert === "error" && (
            <InlineAlert
              success={alert === "success"}
              className="mt-4 flex items-center justify-center rounded-md text-center font-koulen font-semibold tracking-wider"
            >
              {
                "There Has been and error ! Login first or create your profile first"
              }
            </InlineAlert>
          )}
          {alert === "specificerror" && (
            <InlineAlert
              success={alert === "success"}
              className="mt-4 flex items-center justify-center rounded-md text-center font-koulen font-semibold tracking-wider"
            >
              {
                "You have already registered for this event, View in your dashboard"
              }
            </InlineAlert>
          )}

          {alert === "success" && (
            <InlineAlert
              success={alert === "success"}
              className="mt-4 flex items-center justify-center rounded-md text-center font-koulen font-semibold tracking-wider"
            >
              {"You have registered for this event"}
            </InlineAlert>
          )}
          {user && !user.user_metadata.isAdmin && profileData.length === 0 && (
            <div className="createProfileFormbutton text-right font-koulen ">
              <span>Dont Have a profile? </span>
              <button
                className="rounded-md bg-opacity-50 p-2 text-saffron-500 underline"
                onClick={() => setShowForm("profile")}
              >
                Create Profile{" "}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EventRegistrationForm;
