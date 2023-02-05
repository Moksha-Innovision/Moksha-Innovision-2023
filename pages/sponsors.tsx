type Props = {};
import Navbar from "../components/ui/Navbar/Navbar";
import Image from "next/image";
import gsap from "gsap";
import Infiniteslider from "../components/ui/InfiniteSlider/infiniteslider";
import { useRef, useLayoutEffect } from "react";

import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Sponsors = (props: Props) => {
  const containerRef: any = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(
        [
          ".borders-1",
          ".borders-2",
          ".borders-3",
          ".borders-4",
          ".cloud-small",
          ".owl-small",
        ],
        {
          scale: 0,
          duration: 1,
          opacity: 0,
          delay: 0,
          stagger: 0.2,
          ease: "expo",
        }
      );

      gsap.from(".top-row", {
        opacity: 0,
        y: -150,
        ease: "power4",
        duration: 0.5,
        delay: 1.3,
      });
      gsap.from(".bottom-row", {
        opacity: 0,
        y: 150,
        ease: "power4",
        duration: 0.5,
        delay: 1,
      });
    }, containerRef);

    return () => {
      return ctx.revert();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="bg-prussian-blue-400 h-[calc(100vh_-_7vh)] "
        ref={containerRef}
      >
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-36 xl:w-44 left-0 hidden sm:inline-block borders-1"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 right-0 -scale-x-100 hidden sm:inline-block borders-2"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 -scale-y-100  borders-3"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 right-0 -scale-y-100 -scale-x-100 borders-4"
        />

        <div
          className={`max-w-full m-auto h-full ${koulen.className} flex flex-col gap-8 md:gap-16 lg:gap-16 pt-12 md:pt-20`}
        >
          <h1 className="text-center text-6xl md:text-7xl drop-shadow-[4.58px_4.58px_1.53px_rgba(231,7,41,1)] text-white mb-16">
            Past Sponsors
          </h1>
          <div className="w-full top-row h-40">
            <Infiniteslider right={false} />
          </div>
          <div className="w-full bottom-row antialiased h-40">
            <Infiniteslider right={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
