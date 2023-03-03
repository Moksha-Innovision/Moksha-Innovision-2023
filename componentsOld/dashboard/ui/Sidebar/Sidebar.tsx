import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SidebarChip from "./SidebarChip";
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
    // <div className="flex    bg-event-pattern bg-pattern        bg-prussian-blue-1000 w-full h-screen ">

    <div
      className={` group fixed left-0 z-10 h-screen w-64 cursor-pointer rounded rounded-r-[20px] bg-[#130d4185] shadow-lg  shadow-[rgba(255,255,255,0.2)] backdrop-blur-sm transition-all  duration-300 hover:backdrop-blur-sm  sm:w-28 sm:translate-x-0  sm:bg-[rgba(255,255,255,0.1)]  sm:hover:w-64 ${
        sidebarOpen
          ? "translate-x-0 bg-prussian-blue-1000"
          : "-translate-x-full"
      }`}
    >
      <span
        className="clickme absolute top-0 left-full flex h-screen flex-col items-center  justify-center bg-transparent  text-white sm:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="rounded-r-lg bg-saffron-600 py-4 text-lg font-bold">
          {sidebarOpen ? "Close" : "Expand"}
        </span>
      </span>

      <div className="mokshaLogo mb-5 mt-5 flex flex-col items-center space-y-4 p-2">
        <Link
          href="/admin/registrations"
          className="mb-8 w-auto sm:group-hover:w-auto"
        >
          <Image
            src="/MokshaAdmin.svg"
            width={150}
            height={150}
            alt={"moksha admin logo"}
            className="w-full"
          />
        </Link>
        <div className="w-36 transition-all duration-500 sm:w-24 sm:group-hover:w-36">
          <Image
            className="w-full rounded-full  "
            src={"/profilecircle.svg"}
            alt="James Bhatta"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col  items-center">
          <h4 className="font-poppins  font-semibold capitalize tracking-wide text-white transition-all duration-300 group-hover:w-auto sm:text-base sm:group-hover:text-2xl">
            {"Soc Name"}
          </h4>
          <span className="flex items-center space-x-1 text-sm tracking-wide">
            <span className="scale text-white sm:text-xs sm:group-hover:text-sm">
              {"Soc@eamil.com"}
            </span>
          </span>
        </div>
      </div>
      <ul className="text-md mt-10  space-y-2">
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
