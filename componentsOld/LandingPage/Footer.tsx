import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid h-fit  w-full grid-cols-12 bg-prussian-blue-1000  px-10 text-white shadow-soft">
      <div className="col-span-6 py-4  sm:col-span-2">
        <Image
          src={"/Landing/footerLogo.svg"}
          alt={"asa"}
          height={100}
          width={100}
          className="h-full w-full"
        />
      </div>
      <div className="col-span-0 hidden px-10 sm:col-span-8 sm:block md:px-20 lg:px-32 xl:px-40">
        <ul className="flex h-full w-full items-center justify-around font-light ">
          <li className="transition-all duration-100 hover:underline hover:underline-offset-2">
            <Link href="/userlogin">REGISTER</Link>
          </li>
          <li className="transition-all duration-100 hover:underline hover:underline-offset-2">
            <Link href="/contact">CONTACT US</Link>
          </li>

          <li className="transition-all duration-100 hover:underline hover:underline-offset-2">
            <Link href="/events">EVENTS</Link>
          </li>
          <li className="transition-all duration-100 hover:underline hover:underline-offset-2">
            <Link href="/faq">FAQ &apos; S</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-6 flex h-full items-center justify-around px-10 sm:col-span-2 sm:px-0 ">
        <a
          href=""
          className="w-[30px] transition-all duration-100 hover:scale-[1.08] sm:w-[25px] md:w-[32px]"
        >
          <FaFacebookF
            height={100}
            width={100}
            className="h-full w-full"
          ></FaFacebookF>
        </a>
        <a
          href=""
          className="w-[30px] transition-all duration-100 hover:scale-[1.08] sm:w-[25px] md:w-[32px]"
        >
          <FaTwitter
            height={100}
            width={100}
            className="h-full w-full"
          ></FaTwitter>
        </a>
        <a
          href=""
          className="w-[30px] transition-all duration-100 hover:scale-[1.08] sm:w-[25px] md:w-[32px]"
        >
          <FaInstagram
            height={100}
            width={100}
            className="h-full w-full"
          ></FaInstagram>
        </a>
      </div>
    </div>
  );
};

export default Footer;
