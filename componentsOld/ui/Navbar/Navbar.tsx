import { Koulen } from "@next/font/google";
import { useSession } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import NavLink from "./NavLink";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = {};
const profile = {
  name: "John snow",
};

const ACTIVELINKTYLE = "text-3xl";
const Navbar = (props: Props) => {
  const session = useSession();

  const [nav, setNav] = useState<any>(false);
  const onScroll = useCallback((event: any) => {
    const { scrollY } = window;
    if (scrollY >= 20) setNav(true);
    else setNav(false);
  }, []);
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <div className="relative flex w-full flex-col">
      <div
        className={`navbar fixed z-[21] grid grid-cols-12  ${
          nav && "bg-yellow-900 bg-opacity-20 backdrop-blur-[10px]"
        } w-full  py-1   px-6 `}
      >
        <div
          className={` col-span-2 flex h-full w-12 items-center justify-center py-2 md:hidden `}
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

        <div className="col-span-8 flex justify-center md:col-span-2 md:justify-start">
          <Link href="/" className="  logo w-28 md:w-28">
            <Image width={500} height={500} src="/mokshalogo.svg" alt="" />
          </Link>
        </div>

        <ul
          className={`links hidden w-full items-center justify-around gap-8 md:col-span-8 md:flex md:px-[10%] lg:px-[20%]  ${"font-koulen"} text-white`}
        >
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/sponsors">Sponsors</NavLink>
          <NavLink href="/faq">Faq</NavLink>
          <NavLink href="/contact" underlineclassName="left-3">
            Contact Us
          </NavLink>
          {/*<NavLink href="/about">About Us</NavLink>*/}
        </ul>

        {/* //Profile Button */}

        <div className="profile-btn col-span-2 flex items-center justify-center md:justify-end">
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
              className={`${"font-koulen"}  hidden text-xl text-white sm:block`}
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
        }  fixed  -left-[90vw] top-0 z-20 h-[99vh] w-[60vw]  rounded-br-2xl border-t-0 shadow-2xl transition-[transform] duration-200  md:hidden`}
      >
        <ul
          className={`flex flex-col justify-center ${"font-koulen"} h-full space-y-10 bg-prussian-blue-1000   bg-event-pattern bg-pattern       pl-8 text-white`}
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
          {/*<NavLink href="/about" imgScale={110}>
            About Us
          </NavLink>*/}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
