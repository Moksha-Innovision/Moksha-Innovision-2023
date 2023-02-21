import Image from "next/image";
import { useState } from "react";
interface Props {
  event: { name: string; img: string; ticket: string };
}
const EventCards = ({ event }: Props) => {
  const [glow, setGlow] = useState(false);
  return (
    <div
      className="rounded-xl bg-yellow-400 bg-opacity-10 p-8 backdrop-blur-[3px]  "
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
          } rounded-2xl transition-[box-shadow] duration-75`}
        >
          <Image
            src={`events/${event.img}`}
            alt={event.img}
            width={100}
            height={100}
            className=" h-[100%] w-[100%]"
          ></Image>
        </div>
        {/******************************************************** */}
        <div
          className={`${
            glow ? "drop-shadow-glow" : "drop-shadow-lowGlow"
          } h-100%] flip-card-front flip-card mt-10 flex w-[100%] items-center transition-[box-shadow] duration-75`}
        >
          <div className="flip-card-inner">
            <div className="flip-card-front relative">
              <Image
                src={`events/${event.ticket}`}
                alt={event.img}
                width={100}
                height={100}
                className="h-[100%] w-[100%]"
              />
              <div className="absolute top-0 flex h-[100%] w-[100%] text-[#271300]">
                <div className="w-[40%]"></div>
                <div className="w-[25%]"></div>
                <div className=" flex w-[42%]  flex-col flex-wrap justify-center text-left text-[20px] sm:text-[18px] md:text-[17px] lg:text-[16px] xl:text-[15px]">
                  <p className="">Time: </p>
                  <p className="">Venue:</p>
                </div>
              </div>
            </div>
            <div className="flip-card-back relative">
              <Image
                src={`events/ticketBack.svg`}
                alt={event.img}
                width={100}
                height={100}
                className=" h-[100%] w-[100%] "
              />
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
