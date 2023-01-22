import Image from "next/image";

interface Props {
  event: { name: string; img: string };
  active: boolean;
}
const EventCards = ({ event, active }: Props) => {
  return (
    <div className="relative">
      <div
        className={`${
          active ? "w-[400px] h-[400px]" : "w-56 h-56"
        }  bg-white border-black border-[4px] shadow-soft p-2  box-content`}
      >
        <Image
          src={`events/${event.img}`}
          alt={event.img}
          width={100}
          height={100}
          className={`${active ? "w-[400px] h-[400px]" : "w-56 h-56"}`}
        />
      </div>
      <div
        className={`${
          active ? "w-[260px] " : "w-40 -rotate-[15deg]"
        }  absolute bottom-2 -right-10 hover:scale-105 transition-[transform] duration-100`}
      >
        <Image
          src={`events/ticket.svg`}
          alt={event.img}
          width={100}
          height={100}
          className={`${
            active ? "w-[260px]" : "w-40"
          } drop-shadow-lightestbold`}
        />
      </div>
    </div>
  );
};

export default EventCards;
