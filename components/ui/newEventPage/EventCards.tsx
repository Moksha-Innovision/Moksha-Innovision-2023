import Image from "next/image";
import { useState } from "react";
interface Props {
  event: { name: string; img: string; ticket: string };
}
const EventCards = ({ event }: Props) => {
  const [glow, setGlow] = useState(false);
  return (
    <div
      className="rounded-xl bg-white bg-opacity-10 p-8  "
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
        <div
          className={`${
            glow ? "drop-shadow-glow" : "drop-shadow-lowGlow"
          } h-100%] mt-10 flex w-[100%] items-center transition-[box-shadow] duration-75`}
        >
          <Image
            src={`events/${event.ticket}`}
            alt={event.img}
            width={100}
            height={100}
            className=" h-[100%] w-[100%] "
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
