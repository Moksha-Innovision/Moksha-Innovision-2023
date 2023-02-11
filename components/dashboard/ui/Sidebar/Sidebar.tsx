import SidebarChip from "./SidebarChip";
import Image from "next/image";
import Link from "next/link";
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
  return (
    // <div className="flex  bg-event-pattern bg-contain  bg-prussian-blue-1000 w-full h-screen ">

    <div className=" group basis-24 bg-[rgba(255,255,255,.1)] rounded p-3 shadow-lg h-screen hover:basis-64 cursor-pointer hidden sm:block ">
      <div className="flex items-center flex-col space-y-4 p-2 mb-5 mokshaLogo mt-5">
        <Link
          href="/admin/registrations"
          className="mb-8 group-hover:w-auto w-24"
        >
          <Image
            src="/MokshaAdmin.svg"
            width={150}
            height={150}
            alt={"moksha admin logo"}
            className="w-full"
          />
        </Link>
        <div className="w-24 group-hover:w-36">
          <Image
            className="w-full rounded-full  "
            src={"/profilecircle.svg"}
            alt="James Bhatta"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-col  items-center">
          <h4 className="font-semibold  text-white capitalize font-poppins tracking-wide text-base group-hover:w-auto group-hover:text-2xl">
            {"Soc Name"}
          </h4>
          <span className="text-sm tracking-wide flex items-center space-x-1">
            <span className="text-white scale text-xs group-hover:text-sm">
              {"Soc@eamil.com"}
            </span>
          </span>
        </div>
      </div>
      <ul className="space-y-2 text-md  mt-10">
        {SidebarChips.map((chip) => (
          <li key={chip.href}>
            <SidebarChip {...chip} />
          </li>
        ))}
      </ul>
    </div>
    // </div>
  );
};

export default Sidebar;
