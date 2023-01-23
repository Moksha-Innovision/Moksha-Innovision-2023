import Image from "next/image";
import From from "../components/ui/Login/From";
const fsd = {
  bgColor: "bg-Safety-Orange-100",
  meta: {
    ySpac: "space-y-2",
  },
  title: {
    content: "Sign Up",
    color: undefined,
  },
  subtitle: {
    content: "Please fill in this form to create an account!",
    color: "text-white",
  },
  fields: [
    {
      label: "full name",
      type: "text",
      placeholder: "JAMES",
      require: true,
    },
    {
      label: "Mobile No.",
      type: "text",
      placeholder: "JAMES",
      require: true,
    },
    {
      label: "Email-ID",
      type: "email",
      placeholder: "JAMES@213.com",
      require: true,
    },
    {
      label: "College Name",
      type: "text",
      placeholder: "NSUT",
      require: true,
    },
    {
      label: "Gender",
      type: "string",
      placeholder: "Male",
      require: true,
    },
    {
      label: "Date of birth",
      type: "date",
      placeholder: "DD/MM/YY",
      require: false,
    },
    {
      label: "Password ",
      type: "password",
      placeholder: "....",
      require: true,
    },
    {
      label: "Confirm Password ",
      type: "password",
      placeholder: "....",
      require: true,
    },
  ],
  submit: {
    click: () => {},
    label: "Sign up",
    color: "bg-Safety-Orange-500",
  },
  bottomline: {
    label: "Log In",
    content: "Already have a account? ",
    link: "/login",
  },
};

const signup = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden relative min-h-[100vh] bg-[#300e2f]  flex justify-center items-center py-10">
      <div className=" absolute w-[100%]  md:w-[100%] xl:w-[70%] ">
        <Image
          src={"logbg.svg"}
          className="w-full h-full animate-wheel "
          alt={""}
          width={100}
          height={100}
        />
      </div>
      <div className="z-10">
        <From fsd={fsd} />
      </div>
    </div>
  );
};

export default signup;
