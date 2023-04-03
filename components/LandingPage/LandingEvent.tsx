import Image from "next/image";
import LandingSponsers from "./LandingSponsers";

const LandingEvent = () => {
  return (
    <div className=" relative   h-fit pt-[200px]  md:pt-[250px] lg:pt-[300px]">
      <div className="absolute  -top-2 h-[100vh] w-full bg-LandingEvent  bg-cover bg-[center_top] bg-no-repeat   lg:-top-6"></div>
      <h1 className="md:mb-22 mb-20 flex  flex-col items-center  text-center text-4xl text-white drop-shadow-lowGlowtext lg:text-5xl ">
        <div className="">past Sponsers</div>
        <Image
          src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/underline.svg"
          width={100}
          height={20}
          alt={"underlien "}
          className={`b-2  inline w-24 scale-150`}
        />
      </h1>

      <div className="relative mx-[2vw] min-h-[20vh] w-[100vw] overflow-hidden">
        <LandingSponsers />
      </div>
    </div>
  );
};

export default LandingEvent;
/*

        <LandingSponsers />
 <Image
                width={100}
                height={100}
                src={'/Landing/Mask group.svg'}
                alt={'s'}
            />*/
