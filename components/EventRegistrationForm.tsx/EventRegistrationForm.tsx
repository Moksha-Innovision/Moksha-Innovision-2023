import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";
import InlineAlert from "../Alerts/InlineAlert";
import FormInput from "../dashboard/ui/Forms/FormInput";
type Props = {
  questions?: [];
  eventId: string | string[];
  TeamMenber?: number;
  profileData: [];
  setProfileData: any;
  showForm: any;
  setShowForm: any;
};
const EventRegistrationForm = (props: Props) => {
  const [alert, setAlert] = useState<any>("success");
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
  } = props;

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata: any = new FormData(e.currentTarget);
    console.log(formdata);
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

    console.log(finalData);

    const { data, error } = await supabase
      .from("event_registerations")
      .insert([finalData]);

    if (error) {
      if (error.code == "23505")
        setAlert("You have already registered to this event");
      else {
        setAlert("Error Occured! try agin later");
      }
    }

    const currentRegEvents = user?.user_metadata.regEvents;
    const newRegEvents = currentRegEvents.push(eventId);

    const { data: otherData, error: otherError } =
      await supabase.auth.updateUser({
        data: { regEvents: [...currentRegEvents, eventId] },
      });

    console.log(data);
  };

  console.log({ user: useUser() });

  return (
    <>
      {user?.user_metadata?.regEvents?.includes(eventId) && (
        <div className="prompt">You have already registered for the event</div>
      )}

      {!user?.user_metadata?.regEvents?.includes(eventId) && (
        <div className="mx-auto my-4 w-[95%] rounded-md  bg-yellow-400 bg-opacity-5  px-6 py-5 pb-3 drop-shadow-lowGlow  backdrop-blur-sm ">
          <h2 className="mb-6 text-center font-koulen text-3xl ">
            Register For This Event
          </h2>
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
                {Array.apply(null, Array((TeamMenber || 1) - 1)).map((i, k) => {
                  return (
                    <div
                      key={k}
                      className="fromgroup my-1 flex flex-wrap gap-4 gap-y-0 rounded-md  p-2 "
                    >
                      <FormInput
                        label={`Member ${k + 1} Name`}
                        name={`Member ${k} Name`}
                        id={`Member ${k} Name`}
                        className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                      />
                      <FormInput
                        type="tel"
                        //pattern=" \d{10}"
                        label={`Member ${k + 1} Phone`}
                        name={`Member ${k} Phone`}
                        id={`Member ${k} Phone`}
                        className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                      />
                    </div>
                  );
                })}

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
                label={ques}
                name={ques}
                id={ques}
                key={idx}
                className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
              />
            ))}

            <button
              className="mx-auto block rounded-md bg-Safety-Orange-500 px-4 py-2 font-semibold uppercase disabled:opacity-60"
              disabled={
                !user || user.user_metadata.isAdmin || profileData.length === 0
              }
            >
              Register
            </button>

            <div className="alertChip">
              <InlineAlert
                success={false}
                className="mt-4 flex items-center justify-center rounded-md text-center font-koulen font-semibold tracking-wider"
              >
                {!user
                  ? "Login First To Register for event"
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

            {user &&
              !user.user_metadata.isAdmin &&
              profileData.length === 0 && (
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
          </form>
        </div>
      )}
    </>
  );
};

export default EventRegistrationForm;
