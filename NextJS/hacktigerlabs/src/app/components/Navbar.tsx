import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { ContactButton } from "./ContactUsButton";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  return (
    <div className="z-20 overflow-hidden md:fixed w-full">
      <nav className="hidden md:flex md:flex-row flex-col bg-gray-800 text-white   mx-20 my-5 rounded-s-full rounded-ee-full shadow-lg px-4 py-4 rounded-br-2xl rounded-bl-2xl border-b-2 items-center justify-around ">
        <div className="flex justify-center items-center space-x-2">
          <Image className="rounded-full" src={logo} alt="logo" height={50} />
          <p className="font-semibold text-xl">HackTiger Labs</p>
        </div>
        <div className="flex flex-row">
          <ul className="flex flex-row justify-around space-x-5">
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <ContactButton />
        </div>
      </nav>
      <nav className="sm:hidden py-3 px-3 rounded-bl-xl rounded-br-xl shadow-xl">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center space-x-2">
            <Image className="rounded-full" src={logo} alt="logo" height={30} />
            <p className="font-semibold">HackTiger Labs</p>
          </div>
          <div>
            <MenuIcon />
          </div>
        </div>
      </nav>
    </div>
  );
};
