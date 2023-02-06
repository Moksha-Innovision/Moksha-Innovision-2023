type Props = {};
import Navbar from "../components/ui/Navbar/Navbar";
import Image from "next/image";
import gsap from "gsap";
import Infiniteslider from "../components/ui/InfiniteSlider/infiniteslider";
import { useRef, useLayoutEffect } from "react";

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
        className="bg-prussian-blue-400 relative min-h-[93vh] flex w-screen"
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
          className={`max-w-full m-auto h-full ${koulen.className} w-full flex-col gap-8 md:gap-16 lg:gap-16 hidden sm:flex`}
        >
          <h1 className="text-center text-6xl md:text-7xl drop-shadow-[4.58px_4.58px_1.53px_rgba(231,7,41,1)] mb-auto text-white -mt-12">
            Past Sponsors
          </h1>
          <div className="w-full top-row h-40">
            <Infiniteslider right={false} images={sponsorImages} />
          </div>
          <div className="w-full bottom-row antialiased h-40">
            <Infiniteslider right={true} images={sponsorImages} />
          </div>
        </div>

        <div className={`${koulen.className} w-full mobile mt-20 sm:hidden`}>
          <h1 className="text-center text-6xl md:text-7xl drop-shadow-[4.58px_4.58px_1.53px_rgba(231,7,41,1)] text-white ">
            Past Sponsors
          </h1>

          <div className="sponsors grid col-span-2 grid-cols-2 gap-3 px-6 my-16 pb-12">
            {sponsorImages.map((sponsor) => {
              return (
                <div className="flex w-full justify-center items-center h-28  top-row text-3xl bg-white rounded-lg border-[2px] border-black">
                  {sponsor}
                </div>
              );
            })}
            {sponsorImages.map((sponsor) => {
              return (
                <div className="flex w-full justify-center items-center h-28 text-3xl bottom-row bg-white rounded-lg border-[2px] border-black">
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
