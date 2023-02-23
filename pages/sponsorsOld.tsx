type Props = {};
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import Infiniteslider from "../components/Sponser/infiniteslider";
import Navbar from "../components/ui/Navbar/Navbar";

import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const sponsorImages = ["sponsor 1", "sponsor 2", "sponsor 3", "sponsor 4"];

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
        className="relative flex min-h-screen w-screen bg-blue-900 pt-[7vh]"
        ref={containerRef}
      >
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="borders-1 absolute left-0 hidden w-28 sm:inline-block lg:w-36 xl:w-44"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="borders-2 absolute right-0 hidden w-28 -scale-x-100 sm:inline-block lg:w-40 xl:w-44"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="borders-3 absolute bottom-0 w-28 -scale-y-100 lg:w-40  xl:w-44"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="borders-4 absolute bottom-0 right-0 w-28 -scale-y-100 -scale-x-100 lg:w-40 xl:w-44"
        />

        <div
          className={`m-auto h-full max-w-full ${"font-koulen"} hidden w-full flex-col gap-8 sm:flex md:gap-16 lg:gap-16`}
        >
          <h1 className="mb-auto -mt-12 text-center text-6xl text-white drop-shadow-[4.58px_4.58px_1.53px_rgba(231,7,41,1)] md:text-7xl">
            Past Sponsors
          </h1>
          <div className="top-row h-40 w-full">
            <Infiniteslider right={false} images={sponsorImages} />
          </div>
          <div className="bottom-row h-40 w-full antialiased">
            <Infiniteslider right={true} images={sponsorImages} />
          </div>
        </div>

        <div className={`${"font-koulen"} mobile mt-20 w-full sm:hidden`}>
          <h1 className="text-center text-6xl text-white drop-shadow-[4.58px_4.58px_1.53px_rgba(231,7,41,1)] md:text-7xl ">
            Past Sponsors
          </h1>

          <div className="sponsors col-span-2 my-16 grid grid-cols-2 gap-3 px-6 pb-12">
            {sponsorImages.map((sponsor) => {
              return (
                <div
                  className="top-row flex h-28 w-full items-center  justify-center rounded-lg border-[2px] border-black bg-white text-3xl"
                  key={sponsor}
                >
                  {sponsor}
                </div>
              );
            })}
            {sponsorImages.map((sponsor) => {
              return (
                <div
                  className="bottom-row flex h-28 w-full items-center justify-center rounded-lg border-[2px] border-black bg-white text-3xl"
                  key={sponsor}
                >
                  {sponsor}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
