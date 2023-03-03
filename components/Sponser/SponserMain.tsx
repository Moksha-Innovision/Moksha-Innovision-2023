import Image from "next/image";

import Infiniteslider from "./infiniteslider";
import { SliderSlideSm } from "./SliderSlide";
type Props = {};

//const sponsorImages = ["sponsor 1", "sponsor 2", "sponsor 3", "sponsor 4"];
const sponsorImages = [
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/aakash.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/BaskinRobbins.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/bingo.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/careerlauncher.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/codingblocks.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/indianoil.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/indigo.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/lakme.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/Maybelline.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/pizzahut.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/radisson.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/royalenfield.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/sbi.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/smaash.svg",
  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/thehindu.svg",
];

const SponserMain = (props: Props) => {
  return (
    <>
      <div className=" relative flex min-h-screen w-screen pt-[7vh]">
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
          className={`m-auto mt-[8vh] hidden h-full min-h-[650px] w-full max-w-full flex-col gap-8 sm:flex md:gap-16 lg:gap-16`}
        >
          <h1 className=" mb-1 mt-5 flex   flex-col items-center text-center   text-6xl text-white drop-shadow-lowGlowtext md:mb-2     md:text-7xl lg:mb-3   ">
            Past Sponsors
          </h1>
          <div className="top-row h-40 w-full">
            <Infiniteslider
              direction={"right"}
              right={false}
              images={sponsorImages}
            />
          </div>
          <div className="bottom-row h-40 w-full antialiased">
            <Infiniteslider right={true} images={sponsorImages} />
          </div>
        </div>

        <div className={`mobile mt-20 w-full sm:hidden`}>
          <h1 className=" mb-1 flex   flex-col items-center text-center   text-6xl text-white drop-shadow-lowGlowtext md:mb-2     md:text-7xl lg:mb-3   ">
            Past Sponsors
          </h1>

          <div className="sponsors col-span-2 my-16 grid  grid-cols-2 gap-3 px-6 pb-12">
            {sponsorImages.slice(0, 8).map((a: any, i: any) => (
              <SliderSlideSm key={i} className={"top-row  mr-12 p-2 md:mr-20 "}>
                <Image
                  src={a}
                  width={100}
                  height={100}
                  alt={"sponser"}
                  className={`h-full w-full`}
                  quality={1}
                />
              </SliderSlideSm>
            ))}
            {sponsorImages.slice(8, 14).map((a: any, i: any) => (
              <SliderSlideSm
                key={i}
                className={"bottom-row mr-12  p-2 md:mr-20"}
              >
                <Image
                  src={a}
                  width={100}
                  height={100}
                  alt={"sponser"}
                  className={`h-full w-full`}
                  quality={1}
                />
              </SliderSlideSm>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SponserMain;
