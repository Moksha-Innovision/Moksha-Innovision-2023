import { Koulen } from "@next/font/google";
import { useSession } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = {};
const profile = {
  name: "John snow",
};

const ACTIVELINKTYLE = "text-3xl";

const Navbar = (props: Props) => {
  const session = useSession();

  const [show, setShow] = useState(false);
  useEffect(() => {}, []);
  const router = useRouter();
  return (
    <div className="relative flex w-full flex-col">
      <div className="navbar fixed top-0 z-10 flex h-[7vh] w-full items-center justify-between  px-6 ">
        <div
          className={`h-12 w-12 py-2 md:hidden `}
          onClick={() => setShow(!show)}
        >
          <Image
            src={"/hamburger.svg"}
            alt=""
            width={100}
            height={100}
            className="rounded-[1px] antialiased outline outline-2 outline-offset-4 outline-white"
          />
        </div>
        <Link href="/" className="logo w-28 md:w-28">
          <Image width={500} height={500} src="/mokshalogo.svg" alt="" />
        </Link>
        <ul
          className={`links hidden w-full  items-center justify-center gap-8 md:flex ${koulen.className} text-white`}
        >
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/sponsors">Sponsors</NavLink>
          <NavLink href="/faq">Faq</NavLink>
          <NavLink href="/contact" underlineclassName="left-3">
            Contact Us
          </NavLink>
          <NavLink href="/about">About Us</NavLink>
        </ul>

        {/* //Profile Button */}

        <div className="profile-btn flex ">
          <button
            className="flex h-[45px]  items-center justify-center gap-3 rounded-full p-2 lg:px-10"
            onClick={() => {
              session
                ? router.push("/admin/events")
                : router.push("/userlogin");
            }}
          >
            <div className="profile-pic flex h-6 w-10 items-center justify-center rounded-full">
              <Image
                width={100}
                height={100}
                src="/thirteen.svg"
                alt=""
                className="w-8"
              />
            </div>
            <span
              className={`${koulen.className}  hidden text-xl text-white sm:block`}
            >
              {profile.name.split(" ")[0].slice(0, 8)}
            </span>
          </button>
        </div>
      </div>

      {/*Ham menu */}
      <div
        className={` ${
          show ? "translate-x-[90vw] shadow-2xl shadow-black " : "translate-x-0"
        } absolute -left-[90vw] top-[7vh] z-30 h-[90vh] w-[60vw] rounded-br-2xl  border-t-0 shadow-2xl transition-[transform]  duration-200  md:hidden`}
      >
        <ul
          className={`flex flex-col justify-center ${koulen.className} h-full space-y-10 bg-prussian-blue-1000 bg-event-pattern bg-contain pl-8 text-white`}
        >
          <NavLink href="/events" imgScale={110} underlineclassName="-left-3">
            Events
          </NavLink>
          <NavLink href="/sponsors" imgScale={110}>
            Sponsors
          </NavLink>
          <NavLink href="/faq" imgScale={110} underlineclassName="-left-4">
            Faq
          </NavLink>
          <NavLink href="/contact" underlineclassName="left-3" imgScale={125}>
            Contact Us
          </NavLink>
          <NavLink href="/about" imgScale={110}>
            About Us
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
