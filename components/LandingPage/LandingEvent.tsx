import Image from "next/image";
import EventCarosel from "../ui/newEventPage/EventCarosel";

const LandingEvent = () => {
  return (
    <div className=" relative   h-fit pt-[200px]  md:pt-[250px] lg:pt-[300px]">
      <div className="absolute  -top-8 h-[100vh]  w-full bg-LandingEvent bg-cover bg-[center_top]  bg-no-repeat"></div>
      <h1 className="mb-7 flex flex-col  items-center text-center  text-4xl text-white drop-shadow-lowGlowtext md:mb-6 lg:text-5xl ">
        <div className="">EVENTS</div>
        <Image
          src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/underline.svg"
          width={100}
          height={20}
          alt={"underlien "}
          className={`b-2  inline w-24 scale-150`}
        />
      </h1>

      <div className="">
        <EventCarosel></EventCarosel>
      </div>
    </div>
  );
};

export default LandingEvent;
/*
 <Image
                width={100}
                height={100}
                src={'/Landing/Mask group.svg'}
                alt={'s'}
            />*/
