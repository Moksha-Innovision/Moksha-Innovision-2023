import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Koulen } from "@next/font/google";
import { useEffect, useState } from "react";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = {};
const profile = {
  name: "John snow",
};
const ACTIVELINKTYLE =
  "text-transparent text-3xl bg-clip-text bg-gradient-to-b from-razzmatazz-800 to-saffron-600";

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);
  const router = useRouter();
  return (
    <div className="flex w-full flex-col relative">
      <div className="navbar h-[7vh] flex justify-between items-center border-b-4 border-b-black px-6 ">
        <div
          className={`h-14 py-2 w-14 md:hidden`}
          onClick={() => setShow(!show)}
        >
          <Image src={"hamburger.svg"} alt="" width={100} height={100} />
        </div>
        <Link href="/" className="logo md:w-44 w-52">
          <Image width={500} height={500} src="mokshalogo.svg" alt="" />
        </Link>
        <ul
          className={`links hidden md:flex  items-center w-full gap-8 justify-center `}
        >
          <Link
            href="/events"
            className={`link ${koulen.className} uppercase  ${
              router.asPath === "/events" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            Events
          </Link>
          <Link
            href="/sponsors"
            className={`link ${koulen.className} uppercase  ${
              router.asPath === "/sponsors" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            Sponsors
          </Link>
          <Link
            href="/faq"
            className={`link ${koulen.className} uppercase   ${
              router.asPath === "/faq" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            FAQ&apos;s
          </Link>
          <Link
            href="/contact"
            className={`link ${koulen.className} uppercase  ${
              router.asPath === "/contact" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className={`link ${koulen.className} uppercase  ${
              router.asPath === "/about" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            About us
          </Link>
        </ul>
        <div className="profile-btn flex ">
          <button className="flex gap-3  h-14 rounded-full border-black border-4 items-center justify-center lg:px-10 p-2">
            <div className="profile-pic rounded-full w-10 h-8 flex items-center">
              <Image
                width={100}
                height={100}
                src="thirteen.svg"
                alt=""
                className="w-10"
              />
            </div>
            <span className={`${koulen.className}  text-xl hidden lg:block`}>
              {profile.name.split(" ")[0].slice(0, 8)}
            </span>
          </button>
        </div>
      </div>
      {/*Ham menu */}
      <div
        className={` ${
          show ? "translate-x-[90vw]" : "translate-x-0"
        } md:hidden transition-[transform] duration-200 -left-[90vw] absolute -bottom-[90vh] w-[90vw] border-4 border-t-0 rounded-br-2xl shadow-2xl border-black  z-30 bg-white h-[90vh]`}
      >
        <ul className={`flex flex-col p-20 space-y-10 `}>
          <Link
            href="/events"
            className={`link ${koulen.className} uppercase  ${
              router.asPath === "/events" ? ACTIVELINKTYLE : "text-2xl"
            }`}
          >
            Events
          </Link>
          <Link
            href="/sponsors"
            className={`link ${koulen.className} uppercase  ${
              router.asPath === "/sponsors" ? ACTIVELINKTYLE : "text-2xl"
            }`}
          >
            Sponsors
          </Link>
          <Link
            href="/faq"
            className={`link ${koulen.className} uppercase   ${
              router.asPath === "/faq"
                ? ACTIVELINKTYLE + " font-bold"
                : "text-2xl"
            }`}
          >
            FAQ&apos;s
          </Link>
          <Link
            href="/contact"
            className={`link ${koulen.className} uppercase  ${
              router.asPath === "/contact" ? ACTIVELINKTYLE : "text-2xl"
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className={`link ${koulen.className} uppercase  ${
              router.asPath === "/about" ? ACTIVELINKTYLE : "text-2xl"
            }`}
          >
            About us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
