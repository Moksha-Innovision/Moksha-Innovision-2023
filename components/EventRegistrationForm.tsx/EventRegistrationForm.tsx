import { useUser } from "@supabase/auth-helpers-react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import InlineAlert from "../Alerts/InlineAlert";
import FormInput from "../dashboard/ui/Forms/FormInput";
import UserRegistrationForm from "../UserRegistrationForm/UserRegistrationForm";
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
  const user = useUser();
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

    let finalData: any = {
      t_name: formdata.get("t_name"),
      e_id: eventId,
      t_id: [user?.id],
    };

    let form_data = {};

    for (const pair of formdata.entries()) {
      if (pair[0] != "t_name") form_data = { ...form_data, [pair[0]]: pair[1] };
    }

    finalData = { ...finalData, form_data: [form_data] };
    console.log(finalData);

    const { data, error } = await supabase
      .from("event_registerations")
      .insert([finalData]);

    console.log({ data, error });
  };

  return (
    <>
      <div className="mx-auto my-4 w-[95%] max-w-2xl rounded-md border border-solid bg-black bg-opacity-0 px-6 py-5 drop-shadow-lowGlow backdrop-blur-sm ">
        <h2 className="mb-6 text-center font-koulen text-3xl ">
          Register For This Event
        </h2>
        <form className="w-full" onSubmit={handleFormSubmit}>
          {TeamMenber && (
            <>
              <FormInput
                required
                label="Team Name"
                name={"t_name"}
                id={"t_name"}
                className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
              />
              <div className="fromgroup my-1 flex flex-wrap gap-4 gap-y-0 rounded-md bg-white bg-opacity-5 p-2">
                <FormInput
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
                />
              </div>
              <div className="fromgroup my-1 flex flex-wrap gap-4 gap-y-0 rounded-md bg-white bg-opacity-5 p-2 ">
                <FormInput
                  required
                  label="Member 1 Name "
                  name={"Member 1 Name"}
                  id={"Member 1 Name"}
                  className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                />
                <FormInput
                  required
                  label="Member 1 Phone"
                  name={"Member 1 Phone"}
                  type="number"
                  pattern=" \d{10}"
                  id={"Member 1 Phone"}
                  className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                />
              </div>
              <div className="fromgroup my-1 flex flex-wrap gap-4 gap-y-0 rounded-md bg-white bg-opacity-5 p-2 ">
                <FormInput
                  label="Member 2 Name "
                  name={"Member 2 Name"}
                  id={"Member 2 Name"}
                  className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                />
                <FormInput
                  type="tel"
                  pattern=" \d{10}"
                  label="Member 2 Phone "
                  name={"Member 2 Phone"}
                  id={"Member 2 Phone"}
                  className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                />
              </div>
              <div className="fromgroup my-1 flex flex-wrap gap-4 gap-y-0 rounded-md bg-white bg-opacity-5 p-2 ">
                <FormInput
                  label="Member 3 Name "
                  name={"Member 3 Name"}
                  id={"Member 3 Name"}
                  className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                />
                <FormInput
                  type="tel"
                  pattern=" \d{10}"
                  label="Member 3 Phone "
                  name={"Member 3 Phone"}
                  id={"Member 3 Phone"}
                  className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
                />
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
              !user || user.user_metadata.inAdmin || profileData.length === 0
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
        </form>
      </div>
    </>
  );
};

export default EventRegistrationForm;
