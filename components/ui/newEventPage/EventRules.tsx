import { AiOutlineCheckCircle } from "react-icons/ai";
type Props = {
  rules: string[];
};

const EventRules = (props: Props) => {
  const { rules } = props;

  return (
    <div className='"flex my-4 w-full gap-3 rounded-md bg-yellow-400 bg-opacity-5 py-1  px-2 pb-3 backdrop-blur-sm'>
      <h1 className="px-4  py-2 font-koulen text-2xl sm:text-3xl md:text-4xl">
        Rules and Regulations
      </h1>
      <ul className="desc max-w-3xl px-4 font-montserrat text-base tracking-wide ">
        {rules.map((rule, idx) => {
          return (
            <li key={idx} className="mb-1 flex w-full items-center gap-2">
              <AiOutlineCheckCircle className="text-2xl text-white" />
              <p className="flex w-full rounded-lg  bg-white bg-opacity-5 p-3 pl-3 hover:bg-opacity-10 ">
                <span className="ml-2 ">{rule}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventRules;
