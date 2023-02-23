import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid h-20  w-full grid-cols-12 bg-prussian-blue-1000  px-10 text-white shadow-soft">
      <div className="col-span-6 h-full py-4 sm:col-span-2">
        <Image
          src={
            "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/footerLogo.svg"
          }
          alt={"asa"}
          height={10}
          quality={1}
          width={10}
          className="h-12 w-full object-contain"
          priority
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
          <li className="transition-all duration-100 hover:underline hover:underline-offset-2">
            <Link href="/developers">DEVELOPERS</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-6 flex h-full items-center justify-around px-10 sm:col-span-2 sm:px-0 ">
        <a
          href="https://www.facebook.com/mokshansut/"
          className="w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
        >
          <FaFacebookF
            height={100}
            width={100}
            className="h-full w-full"
          ></FaFacebookF>
        </a>
        <a
          href="https://www.instagram.com/mokshansut/"
          className="w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
        >
          <FaInstagram
            height={100}
            width={100}
            className="h-full w-full"
          ></FaInstagram>
        </a>
        <a
          href="https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw"
          className="w-[18px] transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
        >
          <FaYoutube
            height={100}
            width={100}
            className="h-full w-full"
          ></FaYoutube>
        </a>
      </div>
      <ul className="-ml-10 flex  h-full w-screen items-center justify-around bg-prussian-blue-1000 pb-2 font-light sm:hidden ">
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
        <li className="transition-all duration-100 hover:underline hover:underline-offset-2">
          <Link href="/developers">DEVELOPERS</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
