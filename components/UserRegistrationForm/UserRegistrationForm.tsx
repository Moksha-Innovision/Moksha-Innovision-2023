import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  ChakraProvider,
} from "@chakra-ui/react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";
import FormInput from "../dashboard/ui/Forms/FormInput";

type Props = {};

const UserRegistrationForm = (props: Props) => {
  const supabase = useSupabaseClient();
  const user = useUser();

  const defaultFormFields = {
    name: "",
    email: "",
    college: "",
    contact: "",
    degree: "",
    year_of_graduation: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("profiles")
      .insert([{ p_id: user?.id, ...formFields }]);

    sessionStorage.setItem(
      "userProfileData",
      JSON.stringify([{ p_id: user?.id, ...formFields }])
    );

    window.location.reload();
  };

  return (
    <div className="mx-auto my-4 w-[95%] max-w-2xl rounded-md border border-solid bg-transparent px-6 py-5 drop-shadow-lowGlow backdrop-blur-sm">
      <h2 className="mb-6 text-center font-koulen text-3xl ">Create Profile</h2>
      <ChakraProvider>
        <Alert
          status="error"
          backgroundColor={"red.300"}
          className="rounded-md"
        >
          <AlertIcon color={"red.600"} />
          <AlertTitle className="text-white">
            Fill Correct Details !!
          </AlertTitle>
          <AlertDescription className="text-white">
            These details might be verified on Entry
          </AlertDescription>
        </Alert>
      </ChakraProvider>
      <form onSubmit={handleSubmit}>
        <FormInput
          onChange={handleChange}
          required
          label="Name"
          name={"name"}
          type={"text"}
          id={"Name"}
          className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
        />
        <FormInput
          onChange={handleChange}
          required
          label="Email Id"
          name={"email"}
          type={"email"}
          id={"Email Id"}
          className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
        />
        <FormInput
          onChange={handleChange}
          required
          label="College Name"
          name={"college"}
          type={"text"}
          id={"College Name"}
          className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
        />
        <FormInput
          onChange={handleChange}
          required
          label="Contact Phone No."
          name={"contact"}
          type={"number"}
          pattern=" \d{10}"
          id={"Contact Phone No."}
          className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
        />
        <FormInput
          onChange={handleChange}
          required
          label="Graduation Degree"
          name={"degree"}
          type={"text"}
          id={"Graduation Degree"}
          className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
        />
        <FormInput
          onChange={handleChange}
          required
          label="Year of Graduation"
          name={"year_of_graduation"}
          type={"date"}
          pattern=" \d{10}"
          id={"Year of Graduation"}
          className="w-full rounded-md bg-white bg-opacity-30 px-3 py-2 font-koulen tracking-wider text-white"
        />
        <button className="mx-auto block rounded-md bg-Safety-Orange-500 px-4 py-2 font-semibold uppercase disabled:opacity-60">
          Create Profile
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
