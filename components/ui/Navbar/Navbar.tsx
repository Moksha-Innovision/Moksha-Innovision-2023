import { Koulen } from "@next/font/google";
import { useSession } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import NavLink from "./NavLink";
import hamburger from "/public/hamburger.svg";
import logo from "/public/mokshalogo.svg";
import profilePic from "/public/thirteen.svg";
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
        } flex  h-[50px] w-full items-center py-1 px-6 md:h-[58px]`}
      >
        <div
          className={`col-span-2 flex   w-12 items-center justify-center  py-2 md:hidden `}
          onClick={() => setShow(!show)}
        >
          <Image
            src={hamburger}
            alt=""
            width={100}
            height={100}
            className="rounded-[1px] antialiased outline outline-2 outline-offset-4 outline-white"
            priority
          />
        </div>

        <div className="col-span-8 flex justify-center  md:col-span-2 md:justify-start">
          <Link href="/" className="  logo w-28 md:w-28">
            <Image
              className="ml-5 "
              width={100}
              height={100}
              src={logo}
              alt=""
            />
          </Link>
        </div>

        <ul
          className={`links hidden w-full items-center justify-around gap-8 md:col-span-9 md:flex  md:px-[5%] lg:col-span-8 lg:px-[10%] xl:px-[20%]  ${"font-koulen"} text-white`}
        >
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/sponsors">Sponsors</NavLink>
          <NavLink href="/faq">Faq</NavLink>
          <NavLink href="/contact" underlineclassName="">
            Contact
          </NavLink>
          <NavLink href="/legacy">Our past</NavLink>
          {/*<NavLink href="/about">About Us</NavLink>*/}
        </ul>

        {/* //Profile Button */}

        <div className="profile-btn col-span-2 flex items-center  justify-end   md:col-span-1 lg:col-span-2">
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
                src={profilePic}
                alt=""
                className="w-8"
              />
            </div>
            {/*            <span
              className={`${'font-koulen'}  hidden text-xl text-white sm:block`}
            >
              {profile.name.split(" ")[0].slice(0, 8)}
          </span>*/}
          </button>
        </div>
      </div>

      {/*Ham menu */}
      <div
        className={` ${
          show
            ? "origin-top translate-x-[35vw] rotate-[0]  shadow-black "
            : "translate-x-0 rotate-[90deg]"
        }  fixed -left-[35vw] top-0 z-20 h-[100vh] w-[35vw] origin-top    transition-[transform] duration-500  md:hidden`}
      >
        {/*
          <div
        className={` ${
          show
            ? "origin-top translate-x-[35vw] rotate-[0]  shadow-black "
            : "translate-x-0"
        }  fixed -left-[35vw] top-0 z-20 h-[99vh] w-[35vw] origin-top rotate-[90deg]   transition-[transform] duration-1000  md:hidden`}
      >
          */}
        <ul
          className={`flex flex-col justify-center shadow-2xl ${"font-koulen"} h-full w-[50vw]  space-y-10 rounded-br-[50%] rounded-tr-[50%] bg-prussian-blue-950 bg-opacity-20    pl-8 text-white backdrop-blur-[20px]`}
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
          <NavLink href="/legacy" underlineclassName="left-3" imgScale={125}>
            Our past
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
