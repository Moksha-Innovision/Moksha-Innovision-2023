import Image from "next/image";
interface Props {
  event: { name: string; img: string };
  active: boolean;
}
const EventCards = ({ event, active }: Props) => {
  return (
    <div className="w-[560px]  h-[560px] flex flex-col justify-center items-center">
      <div
        className={`${
          active ? "z-20" : "scale-75"
        } w-[550px]  h-[550px] mr-80 transition-[transform] duration-300  flex flex-col justify-center items-center relative    box-content`}
      >
        <div
          className={`${
            active ? "" : ""
          }  bg-white  w-[400px] h-[400px]  border-black border-[4px] shadow-soft p-2  box-content`}
        >
          <Image
            src={`events/${event.img}`}
            alt={event.img}
            width={100}
            height={100}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div
          className={`${
            active ? " " : "-rotate-[15deg]"
          }  relative bottom-24 w-[260px] -right-32 transition-[transform] duration-300`}
        >
          <Image
            src={`events/ticket.svg`}
            alt={event.img}
            width={100}
            height={100}
            className={`
              } drop-shadow-lightestbold w-[260px]`}
          />
        </div>
      </div>
    </div>
  );
  /*<div className={`${active ? "w-[500px] h-[500px]" : "w-56 h-56"} relative  bg-slate-400  box-content`}>
          <div
            className={`${active ? "w-[400px] h-[400px]" : "w-56 h-56"
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
            className={`${active ? "w-[260px] " : "w-40 -rotate-[15deg]"
              }  relative bottom-24 -right-32 hover:scale-105 transition-[transform] duration-100`}
          >
            <Image
              src={`events/ticket.svg`}
              alt={event.img}
              width={100}
              height={100}
              className={`${active ? "w-[260px]" : "w-40"
                } drop-shadow-lightestbold`}
            />
          </div>
        </div>*/
};

export default EventCards;
