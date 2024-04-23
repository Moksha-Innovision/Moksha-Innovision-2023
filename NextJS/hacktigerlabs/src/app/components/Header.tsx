import Image from "next/image";
import headerImage from "../../../public/header.svg";
import { ContactButton } from "./ContactUsButton";

export const Header = () => {
  return (
    <div className="flex md:flex-row flex-col justify-around md:px-80 items-center">
      <div className="md:w-96 p-4">
        <p className="md:text-4xl text-2xl font-semibold">
          Crafting success, one line of code and innovative solution at a time.
        </p>
        <div className="my-5">
          <ContactButton />
        </div>
      </div>
      <div className="md:p-28">
        <Image src={headerImage} alt="headerImage" />
      </div>
    </div>
  );
};
