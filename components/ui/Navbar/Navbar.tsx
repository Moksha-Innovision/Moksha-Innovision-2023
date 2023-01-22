import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = {};

const ACTIVELINKTYLE =
  "text-transparent text-3xl bg-clip-text bg-gradient-to-b from-razzmatazz-800 to-saffron-600";

const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <div className="navbar h-[7vh] flex justify-between items-center border-b-4 border-b-black px-6 ">
      <Link href="/" className="logo w-44">
        <Image width={500} height={500} src="mokshalogo.svg" alt="" />
      </Link>
      <ul className="links md:flex  items-center w-full gap-8 justify-center hidden">
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
        <button className="flex gap-3  h-14 rounded-full border-black border-4 items-center px-2 justify-center">
          <div className="profile-pic rounded-full w-8 h-8 flex items-center">
            <Image width={100} height={100} src="thirteen.svg" alt="" />
          </div>
          <span className={`${koulen.className}  text-xl`}>John O.</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
