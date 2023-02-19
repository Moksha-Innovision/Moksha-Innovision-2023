import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-fit w-full  bg-prussian-blue-1000 shadow-soft px-10  text-white grid grid-cols-12">
      <div className="col-span-6 sm:col-span-2  py-4">
        <Image
          src={"/Landing/footerLogo.svg"}
          alt={"asa"}
          height={100}
          width={100}
          className="w-full h-full"
        />
      </div>
      <div className="col-span-0 hidden sm:block sm:col-span-8 px-10 md:px-20 lg:px-32 xl:px-40">
        <ul className="w-full flex justify-around items-center h-full font-light ">
          <li className="hover:underline-offset-2 hover:underline transition-all duration-100">
            <Link href="/userlogin">REGISTER</Link>
          </li>
          <li className="hover:underline-offset-2 hover:underline transition-all duration-100">
            <Link href="/contact">CONTACT US</Link>
          </li>
          <li className="hover:underline-offset-2 hover:underline transition-all duration-100">
            <Link href="/events">EVENTS</Link>
          </li>

        </ul>
      </div>
      <div className="col-span-6 px-10 sm:px-0 sm:col-span-2 flex h-full justify-around items-center ">
        <a
          href=""
          className="w-[30px] sm:w-[25px] md:w-[32px] hover:scale-[1.08] transition-all duration-100"
        >
          <FaFacebookF
            height={100}
            width={100}
            className="w-full h-full"
          ></FaFacebookF>
        </a>
        <a
          href=""
          className="w-[30px] sm:w-[25px] md:w-[32px] hover:scale-[1.08] transition-all duration-100"
        >
          <FaTwitter
            height={100}
            width={100}
            className="w-full h-full"
          ></FaTwitter>
        </a>
        <a
          href=""
          className="w-[30px] sm:w-[25px] md:w-[32px] hover:scale-[1.08] transition-all duration-100"
        >
          <FaInstagram
            height={100}
            width={100}
            className="w-full h-full"
          ></FaInstagram>
        </a>
      </div>
    </div>
  );
};

export default Footer;
