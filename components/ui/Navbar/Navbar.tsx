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
    <div className="flex w-full flex-col relative">
      <div className="navbar h-[7vh] absolute top-0 z-10 w-full flex justify-between items-center  px-6 ">
        <div
          className={`h-12 py-2 w-12 md:hidden `}
          onClick={() => setShow(!show)}
        >
          <Image
            src={"/hamburger.svg"}
            alt=""
            width={100}
            height={100}
            className="outline outline-white outline-2 outline-offset-4 rounded-[1px] antialiased"
          />
        </div>
        <Link href="/" className="logo md:w-28 w-28">
          <Image width={500} height={500} src="/mokshalogo.svg" alt="" />
        </Link>
        <ul
          className={`links hidden md:flex  items-center w-full gap-8 justify-center ${koulen.className} text-white`}
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
            className="flex gap-3  h-[45px] rounded-full items-center justify-center lg:px-10 p-2"
            onClick={() => {
              session
                ? router.push("/admin/events")
                : router.push("/userlogin");
            }}
          >
            <div className="profile-pic rounded-full w-10 h-6 flex items-center justify-center">
              <Image
                width={100}
                height={100}
                src="/thirteen.svg"
                alt=""
                className="w-8"
              />
            </div>
            <span
              className={`${koulen.className}  text-xl text-white hidden sm:block`}
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
        } md:hidden transition-[transform] duration-200 -left-[90vw] absolute top-[7vh] w-[60vw]  border-t-0 rounded-br-2xl shadow-2xl  z-30  h-[90vh]`}
      >
        <ul
          className={`flex flex-col justify-center ${koulen.className} pl-8 space-y-10 text-white bg-prussian-blue-1000 bg-event-pattern bg-contain h-full`}
        >
          <NavLink href="/events" imgScale={110} underlineclassName="-left-3">
            Events
          </NavLink>
          <NavLink href="/sponsors" imgScale={110}>
            Sponsors
          </NavLink>
          <NavLink href="/faq" imgScale={95} underlineclassName="-left-4">
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
