import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
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
  const user = useUser();
  const supabase = useSupabaseClient();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // <div className="flex    bg-event-pattern bg-pattern        bg-prussian-blue-1000 w-full h-screen ">

    <div
      className={` group fixed  left-0 z-10 h-screen w-64 cursor-pointer rounded rounded-r-[20px] bg-[#130d4185] shadow-lg  shadow-[rgba(255,255,255,0.2)] backdrop-blur-sm transition-all duration-300  hover:backdrop-blur-sm sm:w-28  sm:translate-x-0 sm:overflow-y-auto  sm:bg-[rgba(255,255,255,0.1)]  sm:hover:w-64 ${
        sidebarOpen
          ? "translate-x-0 bg-prussian-blue-1000"
          : "-translate-x-full"
      } `}
    >
      <span
        className={`${
          sidebarOpen ? "-right-7 " : "left-full"
        } clickme fixed top-0   flex h-screen flex-col items-center  justify-center bg-transparent  text-white  sm:hidden`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="rounded-r-lg bg-saffron-600  py-4 text-lg font-bold">
          {sidebarOpen ? "Close" : "Expand"}
        </span>
      </span>

      <div className="mokshaLogo mb-5 mt-5 flex flex-col items-center space-y-4 p-2">
        <Link href="/" className="mb-8 w-auto sm:group-hover:w-auto">
          <Image
            src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/MokshaAdmin.svg"
            width={150}
            height={150}
            alt={"moksha admin logo"}
            className="w-full"
          />
        </Link>
        <div className="w-36 transition-all duration-500 sm:w-24 sm:group-hover:w-36">
          <Image
            className="w-full rounded-full  "
            src={
              "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/profilecircle.svg"
            }
            alt="James Bhatta"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col  items-center">
          <h4 className="font-poppins  font-semibold capitalize tracking-wide text-white transition-all duration-300 group-hover:w-auto sm:text-base sm:group-hover:text-2xl">
            {user?.email?.slice(0, 7) + ".."}
          </h4>
          <span className="flex items-center space-x-1 text-sm tracking-wide">
            <span className="scale text-white sm:text-xs sm:group-hover:text-sm">
              {user?.email?.slice(0, 12) + "..."}
            </span>
          </span>
        </div>
      </div>
      {user && (
        <div className="w-full text-center">
          <Link href={"/userlogin"}>
            <span
              className="rounded-md bg-saffron-600 p-2 font-bold text-white hover:scale-105"
              onClick={() => {
                async () => {
                  const { error } = await supabase.auth.signOut();
                };
              }}
            >
              Logout
            </span>
          </Link>
        </div>
      )}
      <ul className="text-md mt-10 mb-4 space-y-2 overflow-y-scroll">
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
