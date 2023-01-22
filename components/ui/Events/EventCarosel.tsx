import Image from "next/image";
import { useState } from "react";
import EventCards from "./EventCards";
interface Props {
  events?: { name: string; img: string }[];
  day: string;
}
const EventCarosel = ({ events, day }: Props) => {
  const [active, setActive] = useState(4);
  return (
    <div className="relative w-[94vw] mx-[3vw] overflow-hidden">
      <Image
        src={"blur.svg"}
        alt={"blur"}
        width={100}
        height={100}
        className=" absolute z-20 w-96 h-96 -right-48 top-8 "
      />
      <Image
        src={"blur.svg"}
        alt={"blur"}
        width={100}
        height={100}
        className=" absolute z-20 w-96 h-96 -left-48 top-8 "
      />

      <div className="flex justify-center items-center  space-x-16 ">
        {events?.map((e, i) => {
          return <EventCards event={e} key={i} active={i + 1 == active} />;
        })}
      </div>
    </div>
  );
};

export default EventCarosel;
