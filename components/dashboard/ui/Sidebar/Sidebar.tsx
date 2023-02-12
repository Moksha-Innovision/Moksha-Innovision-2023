import SidebarChip from "./SidebarChip";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type Props = {};

const SidebarChips = [
  {
    name: "All Registrations",
    href: "/admin/registrations",
    iconSrc: "/activity.svg",
  },
  {
    name: "Events",
    href: "/admin/events",
    iconSrc: "/Events.svg",
  },
  {
    name: "Scoreboard",
    href: "/admin/scoreboard",
    iconSrc: "/Scoreboard.svg",
  },
  {
    name: "Create Event",
    href: "/admin/newevent",
    iconSrc: "/Registration.svg",
  },
];

const Sidebar = (props: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    // <div className="flex  bg-event-pattern bg-contain  bg-prussian-blue-1000 w-full h-screen ">

    <div
      className={` group w-64 sm:w-28 fixed left-0 z-10 bg-[rgba(255,255,255,.1)] rounded p-3 shadow-lg h-screen sm:hover:w-64 cursor-pointer  hover:bg-prussian-blue-1000  sm:translate-x-0 ${
        sidebarOpen
          ? "translate-x-0 bg-prussian-blue-1000"
          : "-translate-x-full"
      }`}
    >
      <span
        className="sm:hidden clickme absolute top-0 flex flex-col justify-center items-center  h-screen bg-transparent  text-white left-full"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="font-bold text-lg bg-saffron-600 rounded-r-lg py-4">
          {sidebarOpen ? "Close" : "Expand"}
        </span>
      </span>

      <div className="flex items-center flex-col space-y-4 p-2 mb-5 mokshaLogo mt-5">
        <Link
          href="/admin/registrations"
          className="mb-8 sm:group-hover:w-auto w-auto"
        >
          <Image
            src="/MokshaAdmin.svg"
            width={150}
            height={150}
            alt={"moksha admin logo"}
            className="w-full"
          />
        </Link>
        <div className="w-36 sm:w-24 sm:group-hover:w-36">
          <Image
            className="w-full rounded-full  "
            src={"/profilecircle.svg"}
            alt="James Bhatta"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col  items-center">
          <h4 className="font-semibold  text-white capitalize font-poppins tracking-wide sm:text-base group-hover:w-auto sm:group-hover:text-2xl">
            {"Soc Name"}
          </h4>
          <span className="text-sm tracking-wide flex items-center space-x-1">
            <span className="text-white scale sm:text-xs sm:group-hover:text-sm">
              {"Soc@eamil.com"}
            </span>
          </span>
        </div>
      </div>
      <ul className="space-y-2 text-md  mt-10">
        {SidebarChips.map((chip) => (
          <li key={chip.href}>
            <SidebarChip {...chip} setSidebarOpen={setSidebarOpen} />
          </li>
        ))}
      </ul>
    </div>
    // </div>
  );
};

export default Sidebar;
