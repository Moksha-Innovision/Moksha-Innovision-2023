import { Koulen } from "@next/font/google";
import footerLogo from "/public/WEBSITE footer_1.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Footer = () => {
  const [bl1, setBl1] = useState(false);
  const [bl2, setBl2] = useState(false);
  const [bl3, setBl3] = useState(false);
  const [bl4, setBl4] = useState(false);

  return (
    <div
      className={`${koulen.className} min-h-20 grid  w-full grid-cols-12 bg-prussian-blue-1000  px-10 text-white shadow-soft`}
    >
      <div className="col-span-12 flex h-full  w-full justify-between  pt-4 md:hidden">
        <Image
          src={footerLogo}
          alt={"asa"}
          height={10}
          quality={1}
          width={10}
          className="h-14 w-fit object-contain font-koulen"
          priority
        />
        <div className="hidden  h-full items-center justify-between space-x-6 font-koulen sm:flex sm:px-0 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/mokshansut/"
            className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
          >
            <FaFacebookF
              height={100}
              width={100}
              className="h-full w-full font-koulen"
            ></FaFacebookF>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/mokshansut/"
            className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
          >
            <FaInstagram
              height={100}
              width={100}
              className="h-full w-full font-koulen"
            ></FaInstagram>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw"
            className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
          >
            <FaYoutube
              height={100}
              width={100}
              className="h-full w-full font-koulen"
            ></FaYoutube>
          </a>
        </div>
      </div>

      <div className="col-span-12 flex w-full items-start justify-around pb-6  pt-4 font-koulen sm:pb-4 ">
        <div className="hidden font-koulen  font-light md:block">
          <Image
            src={footerLogo}
            alt={"asa"}
            height={10}
            quality={1}
            width={10}
            className="h-20 w-fit object-contain font-koulen"
            priority
          />
        </div>
        <div
          className="font-koulen "
          onMouseOver={() => setBl1(true)}
          onMouseLeave={() => setBl1(false)}
        >
          <div className="relative mb-1 ">
            <div
              className={`absolute top-0  h-[2px]  font-koulen font-medium ${
                bl1 ? "right-0 w-full" : " left-0  w-[0.01px]"
              }  bg-white transition-[width] duration-200`}
            ></div>
            Co-ordinators:
            <div
              className={`absolute bottom-0 h-[2px]  font-koulen ${
                bl1 ? "left-0  w-full" : "right-0 w-[0.01px]"
              }  bg-white transition-[width] duration-200`}
            ></div>
          </div>
          <div className="flex max-w-[200px] flex-wrap gap-1">
            <div className="font-koulen text-xs font-medium">
              Daksh Panchal{" "}
            </div>
            <div className="font-koulen text-xs">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="tel:+91 9278003999"
                className="font-sans font-medium"
              >
                +91 9278003999
              </a>
            </div>
            <div className="font-koulen text-xs font-medium">Priyanshi </div>
            <div className="font-koulen text-xs">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="tel:+91 8447382447"
                className="font-sans font-medium"
              >
                +91 8447382447
              </a>
            </div>
            <div className="font-koulen text-xs font-medium">
              Janvi Ahluwalia{" "}
            </div>
            <div className="font-koulen text-xs">
              <a
                target={"_blank"}
                rel="noreferrer"
                href="tel:+91 9990265202"
                className="font-sans font-medium"
              >
                +91 9990265202
              </a>
            </div>
          </div>
        </div>
        <div
          className="font-koulen "
          onMouseOver={() => setBl2(true)}
          onMouseLeave={() => setBl2(false)}
        >
          <div className="relative mb-1 ">
            <div
              className={`absolute top-0  h-[2px]  font-koulen ${
                bl2 ? "right-0 w-full" : " left-0  w-[0.01px]"
              }  bg-white transition-[width] duration-200`}
            ></div>
            Moksha:
            <div
              className={`absolute bottom-0 h-[2px]  font-koulen ${
                bl2 ? "left-0  w-full" : "right-0 w-[0.01px]"
              }  bg-white transition-[width] duration-200`}
            ></div>
          </div>
          <div className="text-xs">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="mailto:Moksha@nsut.ac.in"
              className="tracking-wide"
            >
              moksha@nsut.ac.in
            </a>
          </div>
          <div className="flex h-full items-center justify-between font-koulen sm:hidden  sm:px-0 ">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/mokshansut/"
              className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
            >
              <FaFacebookF
                height={100}
                width={100}
                className="h-full w-full font-koulen"
              ></FaFacebookF>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.instagram.com/mokshansut/"
              className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
            >
              <FaInstagram
                height={100}
                width={100}
                className="h-full w-full font-koulen"
              ></FaInstagram>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw"
              className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
            >
              <FaYoutube
                height={100}
                width={100}
                className="h-full w-full font-koulen"
              ></FaYoutube>
            </a>
          </div>
        </div>
        <div
          className="hidden  font-koulen  font-light sm:block "
          onMouseOver={() => setBl3(true)}
          onMouseLeave={() => setBl3(false)}
        >
          <div className="relative mb-1 ">
            <div
              className={`absolute top-0  h-[2px]  font-koulen ${
                bl3 ? "right-0 w-full" : " left-0  w-[0.01px]"
              }  bg-white transition-[width] duration-200`}
            ></div>
            Links:
            <div
              className={`absolute bottom-0 h-[2px]  font-koulen ${
                bl3 ? "left-0  w-full" : "right-0 w-[0.01px]"
              }  bg-white transition-[width] duration-200`}
            ></div>
          </div>
          <div className="font-koulen text-xs transition-all duration-100 ">
            <Link href="/userlogin">REGISTER</Link>
          </div>
          <div className="text-xs transition-all duration-100 ">
            <Link href="/faq">FAQs</Link>
          </div>
          <div
            className={`font-koulen ${
              bl3
                ? "scale-[1.1] text-yellow-300 drop-shadow-lowGlow"
                : "text-yellow-400"
            } text-xs transition-all duration-100 `}
          >
            {/* <Link href="/developers">DEVELOPERS</Link> */}
          </div>
        </div>
        <div
          className="hidden font-koulen  font-light md:block"
          onMouseOver={() => setBl4(true)}
          onMouseLeave={() => setBl4(false)}
        >
          <div className="relative mb-1 font-koulen">
            <div
              className={`absolute top-0  h-[2px]  font-koulen ${
                bl4 ? "right-0 w-full" : " left-0  w-[0.01px]"
              }  bg-white transition-[width] duration-200`}
            ></div>
            Follow Us:
            <div
              className={`absolute bottom-0 h-[2px]  font-koulen ${
                bl4 ? "left-0  w-full" : "right-0 w-[0.01px]"
              }  bg-white transition-[width] duration-200`}
            ></div>
          </div>
          <div className="hidden  h-full items-center justify-start space-x-5 font-koulen sm:flex sm:px-0 ">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/mokshansut/"
              className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
            >
              <FaFacebookF
                height={100}
                width={100}
                className="h-full w-full font-koulen"
              ></FaFacebookF>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.instagram.com/mokshansut/"
              className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
            >
              <FaInstagram
                height={100}
                width={100}
                className="h-full w-full font-koulen"
              ></FaInstagram>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCBr3CDT0Yn-nZCcypyK-Fhw"
              className="w-[18px] font-koulen transition-all duration-100 hover:scale-[1.08] sm:w-[20px] md:w-[25px]"
            >
              <FaYoutube
                height={100}
                width={100}
                className="h-full w-full font-koulen"
              ></FaYoutube>
            </a>
          </div>
        </div>
      </div>

      <ul className="col-span-12 -ml-10 flex h-full w-screen items-center justify-around bg-prussian-blue-1000 pb-2 font-koulen text-sm font-light sm:hidden">
        <li className="font-koulen transition-all duration-100 hover:underline hover:underline-offset-2">
          <Link href="/userlogin">REGISTER</Link>
        </li>
        <li className="font-koulen transition-all duration-100 hover:underline hover:underline-offset-2">
          <Link href="/contact">CONTACT US</Link>
        </li>

        <li className="font-koulen transition-all duration-100 hover:underline hover:underline-offset-2">
          <Link href="/events">EVENTS</Link>
        </li>
        <li className="font-koulen transition-all duration-100 hover:underline hover:underline-offset-2">
          <Link href="/faq">FAQ &apos; S</Link>
        </li>
        <li className="font-koulen text-yellow-300 transition-all duration-100 hover:underline hover:underline-offset-2">
          {/* <Link href="/developers">DEVELOPERS</Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
