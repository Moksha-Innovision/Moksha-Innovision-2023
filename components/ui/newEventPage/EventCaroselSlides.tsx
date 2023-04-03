import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  slide?: {
    title: string;
    description: string;
    poster: string;
    regLink: string;
    banner: string;
  };
}
const EventCaroselSlides = ({ slide }: any) => {
  const [cont, setCont] = useState(false);
  return (
    <div className={`min-h-30vh  relative bg-white `}>
      <div className=" flex justify-center sm:h-[150%] sm:w-[150%] lg:h-[100%] lg:w-[100%]">
        {/*{`https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/events/${slide?.poster}`}
         */}

        <div className="hidden h-full w-full sm:block">
          <Image
            src={slide.banner || ""}
            width="1700"
            height="600"
            alt="event-poster"
            className="h-[100%] w-[100%] object-cover "
          />
        </div>
        <div className="sm:hidden">
          <Image
            src={slide.poster || ""}
            width="1700"
            height="600"
            alt="event-poster"
            className="h-[100%] w-[100%] object-cover "
          />
        </div>
      </div>
      <div className="md:pl-26 absolute top-0 flex h-[100%] w-[100%] flex-col justify-end bg-[#12123470] pb-10 pl-20 text-white ">
        <div className="w-[70%] md:w-[50%] lg:w-[40%]">
          <div className="mb-1 text-3xl tracking-wide sm:text-4xl md:text-5xl">
            {slide?.event_name}
          </div>
          <div className="text-xs font-light tracking-wide sm:text-sm">
            {!cont ? `${slide?.desc.slice(0, 150)}...` : slide?.desc}{" "}
            <span
              className="text-xs underline"
              onClick={() => {
                setCont(!cont);
              }}
            >
              {!cont ? "more" : "less"}
            </span>
          </div>
          <button
            className="mt-3 w-fit rounded-md bg-white px-5 py-1 
                    text-lg tracking-wide text-prussian-blue-1000 shadow-soft transition-[filter,transform] hover:scale-[1.01] hover:cursor-pointer hover:drop-shadow-lowGlowtext disabled:pointer-events-none disabled:cursor-default disabled:opacity-50 md:text-xl"
          >
            <Link
              href={{ pathname: `/events/${slide?.event_id}` }}
              className="flip-card-head rounded-xl bg-yellow-400 bg-opacity-10 p-8  "
            >
              Register Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCaroselSlides;
