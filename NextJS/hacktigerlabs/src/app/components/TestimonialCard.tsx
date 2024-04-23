import Image from "next/image";
import logo from "../../../public/logo.jpeg";

export const TestimonialCard = (Props: any) => {
  return (
    <div className="sm:w-96">
      <div className="flex flex-col sm:flex-row space-y-2 justify-center space-x-5 sm:items-center  p-5 rounded-2xl shadow-lg ">
        <div className="p-4 sm:p-0">
          <Image
            className="rounded-full h-16 w-auto"
            src={Props.image}
            alt="logo"
          />
        </div>
        <div className="w-64 space-y-2">
          <p className="text-xl font-semibold">{Props.name}</p>
          <p className="text-gray-400">{Props.designation}</p>
          <p className=" text-clip">{Props.description}</p>
        </div>
      </div>
    </div>
  );
};
