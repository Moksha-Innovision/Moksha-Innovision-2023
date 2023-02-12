import Image from "next/image";
import From from "../components/ui/Login/From";
const fsd = {
  bgColor: "bg-Safety-Orange-100",
  meta: {
    ySpac: "space-y-8",
  },
  title: {
    content: "Log-in",
    color: undefined,
  },
  subtitle: {
    content: undefined,
    color: "text-white",
  },
  fields: [
    {
      label: "Moksha-ID",
      type: "text",
      placeholder: "JAMES",
      require: true,
    },

    {
      label: "Password ",
      type: "password",
      placeholder: "....",
      require: true,
    },
  ],
  submit: {
    click: () => {},
    label: "Log in",
    color: "bg-Safety-Orange-500",
  },
  bottomline: {
    label: "Sign Up",
    content: "Create a New account   ",
    link: "/signup",
  },
};

const login = () => {
  const handleSubmit = () => {
    alert("subl");
  };

  return (
    <div className=" overflow-x-hidden relative min-h-[100vh] bg-[#300e2f]  flex justify-center items-center py-10">
      <div className=" fixed w-[100%] overflow-hidden  lg:w-[50%] ">
        <Image
          src={"logbg.svg"}
          className="w-full h-full animate-wheel "
          alt={""}
          width={100}
          height={100}
        />
      </div>
      <form className="z-10" onSubmit={handleSubmit}>
        <From fsd={fsd} />
      </form>
    </div>
  );
};

export default login;
