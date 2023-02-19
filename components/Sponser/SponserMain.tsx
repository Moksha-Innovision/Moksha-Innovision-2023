import { Koulen } from "@next/font/google";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import Infiniteslider from "./infiniteslider";
import { SliderSlideSm } from "./SliderSlide";
type Props = {};
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const sponsorImages = ["sponsor 1", "sponsor 2", "sponsor 3", "sponsor 4"];

const SponserMain = (props: Props) => {
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
      <div
        className=" relative flex min-h-screen w-screen pt-[7vh]"
        ref={containerRef}
      >
        {/*<Image
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
                />*/}

        <div
          className={`m-auto hidden h-full w-full max-w-full flex-col gap-8 sm:flex md:gap-16 lg:gap-16`}
        >
          <h1 className=" mb-1 flex   flex-col items-center text-center   text-6xl text-white drop-shadow-lowGlowtext md:mb-2     md:text-7xl lg:mb-3   ">
            Past Sponsors
          </h1>
          <div className="top-row h-40 w-full">
            <Infiniteslider right={false} images={sponsorImages} />
          </div>
          <div className="bottom-row h-40 w-full antialiased">
            <Infiniteslider right={true} images={sponsorImages} />
          </div>
        </div>

        <div className={`mobile mt-20 w-full sm:hidden`}>
          <h1 className=" mb-1 flex   flex-col items-center text-center   text-6xl text-white drop-shadow-lowGlowtext md:mb-2     md:text-7xl lg:mb-3   ">
            Past Sponsors
          </h1>
          <div className="sponsors col-span-2 my-16 grid grid-cols-2 gap-3 px-6 pb-12">
            {sponsorImages.map((sponsor) => {
              return (
                <SliderSlideSm className="top-row" key={sponsor}>
                  {sponsor}
                </SliderSlideSm>
              );
            })}
            {sponsorImages.map((sponsor) => {
              return (
                <SliderSlideSm className="bottom-row " key={sponsor}>
                  {sponsor}
                </SliderSlideSm>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SponserMain;
