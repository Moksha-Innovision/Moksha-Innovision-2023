import { useState } from "react";
import FormInput from "../dashboard/ui/Forms/FormInput";

type Props = {
  extraFields: string[];
  teamMember: number;
};

const Registrationform = (props: Props) => {
  const { extraFields, teamMember } = props;

  // ['a','b','c']  => {a:'',b:'',c:''}

  // const temp={}

  // for(let i:any in extraFields){
  //     temp[i]='er'
  // }

  let key = "fsdf";

  const defaultFormFields = {
    t_name: "",
    leader_name: "",
    email: "",
    ...extraFields,
  };

  console.log(defaultFormFields);

  const handleSubmit = () => {};
  const [teamMembers, setTeamMembers] = useState(1);
  const handleChange = () => {};
  const handleUpload = () => {};

  return (
    <div className="relative m-auto flex max-h-[700px] min-w-[350px] max-w-xl flex-col rounded-lg bg-white p-4 px-6 shadow-md md:min-w-[500px]">
      <h1 className="text-center text-4xl font-semibold text-black ">
        {"Event Registration"}
      </h1>
      <form action="" className="mt-2 overflow-y-auto" onSubmit={handleSubmit}>
        {teamMember > 1 ? (
          <FormInput
            label="Team Name"
            type="text"
            id="Team Name"
            name="t_name"
          />
        ) : (
          <FormInput label="Name" type="text" id="Name" name="t_name" />
        )}

        <FormInput label="Phone Number" type="tel" id="Phone Number" />
        <FormInput label="Email" type="email" id="Email" />

        {teamMember > 1 && (
          <FormInput
            label="No of Team members"
            id="No of Team members"
            value={teamMembers}
            onChange={(e) => setTeamMembers(e.target.value)}
            max={teamMember}
            min={1}
          />
        )}

        {extraFields.map((ef, i) => (
          <FormInput label={ef + "?"} type="text" key={i} />
        ))}
      </form>
    </div>
  );
};

export default Registrationform;
