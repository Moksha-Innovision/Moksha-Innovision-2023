import Registrationform from "../components/regform/Registrationform";
type Props = {};

const testingpage = (props: Props) => {
  const extraFields = [
    "How are you",
    "What do you do for a living",
    "What are you",
  ];

  return <Registrationform extraFields={extraFields} teamMember={1} />;
};

export default testingpage;
