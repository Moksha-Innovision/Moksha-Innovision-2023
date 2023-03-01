import Image from "next/image";
import { useState } from "react";
interface Props {
  event: {
    date: string;
    desc: string;
    event_id: string;
    event_name: string;
    form_question: string[];
    instagram: string;
    poc: any;
    poster: string;
    prize_pool: number;
    rules: string[];
    soc_id: string;
    tagline: string;
    team_size: number;
    time: string;
    venue: string;
  };
}
const EventCards = ({ event }: Props) => {
  const [glow, setGlow] = useState(false);
  return (
    <div
      className="flip-card-head rounded-xl bg-yellow-400 bg-opacity-10 p-8  "
      onMouseOver={() => {
        setGlow(true);
      }}
      onMouseLeave={() => {
        setGlow(false);
      }}
    >
      <div className="flex flex-col items-center bg-transparent">
        <div
          className={`${
            glow ? "drop-shadow-glow" : "drop-shadow-lowGlow"
          } rounded-2xl transition-[filter] duration-150`}
        >
          <Image
            src={`${event.poster}`}
            alt={event.event_name}
            width={100}
            height={100}
            className=" h-[100%] w-[100%] rounded-xl"
          ></Image>
        </div>
        {/************************"https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/event-posters/faa091fe-7472-440b-b0bb-a34d1e6f31c9poster""https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/event-posters/61ad23fe-fc84-4516-ac0e-d0beeeab335fposter"*******"https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/event-posters/97257e65-a025-4361-9ee8-fa0b4b36e54fposter"
         ************************* */}
        <div
          className={`${
            glow ? "drop-shadow-glow" : "drop-shadow-lowGlow"
          } h-100%] flip-card-front flip-card mt-10 flex w-[100%] items-center transition-[filter] duration-150`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front relative">
              <Image
                src={`https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/events/ticket1.svg`}
                alt={event.event_name}
                width={100}
                height={100}
                quality={1}
                className=" h-[100%] w-[100%]"
              ></Image>
              <div className="absolute top-0 flex h-[100%] w-[100%]  text-[#271300]">
                <div className="w-[40%]"></div>
                <div className="w-[25%]"></div>
                <div className=" text flex  w-[42%] flex-col flex-wrap justify-center overflow-hidden break-all pr-[5px] text-left text-[15px] sm:text-[12px] md:text-[15px] lg:text-[8px] xl:text-[12px]">
                  <p className="text-[100%]">Time: {event.time} </p>
                  <p className="">Venue:Moksha{/*event.venue*/}</p>
                </div>
              </div>
            </div>
            <div className="flip-card-back relative">
              <Image
                src={`https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/events/ticketBack.svg`}
                alt={event.event_name}
                width={100}
                height={100}
                quality={1}
                className=" h-[100%] w-[100%] "
              ></Image>
              <div className="absolute top-0 flex h-[100%] w-[100%] text-[#271300]">
                <div className="w-[10%]"></div>

                <div className=" flex w-[42%]  flex-col flex-wrap justify-center text-left text-[20px] sm:text-[18px] md:text-[17px] lg:text-[16px] xl:text-[15px]">
                  <p className="">COMING SOON....</p>
                </div>
                <div className="w-[10%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/*<div
          className={`${glow ? "drop-shadow-glow" : "drop-shadow-lowGlow"
            } h-100%] mt-10 flex w-[100%] flip-card-front items-center transition-[box-shadow] duration-75`}
        >
          <Image
            src={`events/${event.ticket}`}
            alt={event.img}
            width={100}
            height={100}
            className=" h-[100%] w-[100%] "
          ></Image>
        </div>*/}
      </div>
    </div>
  );
};

export default EventCards;
