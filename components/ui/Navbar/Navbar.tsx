import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "@supabase/auth-helpers-react";
import { Koulen } from "@next/font/google";
import { useEffect, useState } from "react";
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
          className={`links hidden md:flex  items-center w-full gap-8 justify-center text-white`}
        >
          <Link
            href="/events"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/events" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            Events
            {router.asPath === "/events" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-150 w-24"
              />
            )}
          </Link>
          <Link
            href="/sponsors"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/sponsors" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            sponsors
            {router.asPath === "/sponsors" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-125 w-24"
              />
            )}
          </Link>
          <Link
            href="/faq"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/faq" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            f.a.q
            {router.asPath === "/faq" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-[200%] w-24"
              />
            )}
          </Link>
          <Link
            href="/contact"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/contact" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            contact us
            {router.asPath === "/contact" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-125 w-24 left-3"
              />
            )}
          </Link>
          <Link
            href="/about"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/about" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            about us
            {router.asPath === "/about" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-125 w-24"
              />
            )}
          </Link>
        </ul>
        <div className="profile-btn flex ">
          <button
            className="flex gap-3  h-[45px] rounded-full items-center justify-center lg:px-10 p-2"
            onClick={() => {
              session
                ? router.push("/admin/events")
                : router.push("/templogin");
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
          className={`flex flex-col justify-center pl-8 space-y-10 text-white bg-prussian-blue-1000 bg-event-pattern bg-contain h-full`}
        >
          <Link
            href="/events"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/events" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            Events
            {router.asPath === "/events" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-110 w-24 -left-3"
              />
            )}
          </Link>
          <Link
            href="/sponsors"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/sponsors" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            sponsors
            {router.asPath === "/sponsors" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-110 w-24 left-1"
              />
            )}
          </Link>
          <Link
            href="/faq"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/faq" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            f.a.q
            {router.asPath === "/faq" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-[0.8] -left-6 w-24"
              />
            )}
          </Link>
          <Link
            href="/contact"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/contact" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            contact us
            {router.asPath === "/contact" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-110 w-24 left-4"
              />
            )}
          </Link>
          <Link
            href="/about"
            className={`link relative ${koulen.className} uppercase  ${
              router.asPath === "/about" ? ACTIVELINKTYLE : "text-xl"
            }`}
          >
            about us
            {router.asPath === "/about" && (
              <Image
                src="/underline.svg"
                width={100}
                height={20}
                alt={"underlien "}
                className="absolute b-2 scale-110 w-24"
              />
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
