import Image from "next/image";
import { HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import { AiOutlineTeam, AiOutlineCalendar } from "react-icons/ai";

const ConciseDetails = (props: any) => {
  const { imgSrc, eventName, eventTagline } = props;

  return (
    <div className="flex w-full gap-3 rounded-md border border-solid py-1 px-2 backdrop-blur-sm">
      <div className="image h-[150px] w-[150px] md:h-[200px] md:w-[200px]">
        <Image
          src={imgSrc}
          width="200"
          height="200"
          alt="event-poster"
          className="h-full rounded"
        />
      </div>
      <div className="names flex flex-col ">
        <h1 className="py-2 font-koulen text-2xl md:text-4xl">{eventName}</h1>
        <p className="font-grey-100 font-montserrat text-sm md:text-base">
          {eventTagline}
        </p>
        <div className="info-chips mt-auto mb-2 flex flex-wrap gap-2">
          <div className="chip flex items-center gap-2">
            <HiOutlineLocationMarker className="text-base" />{" "}
            <span className="text-xs sm:text-sm">{props.eventVenue}</span>
          </div>
          <div className="chip flex items-center gap-2">
            <HiOutlineClock className="text-base" />{" "}
            <span className="text-xs sm:text-sm">{props.eventTime}</span>
          </div>
          <div className="chip flex items-center gap-2">
            <AiOutlineCalendar className="text-base" />{" "}
            <span className="text-xs sm:text-sm">{props.eventDate}</span>
          </div>
        </div>
      </div>

      {!props.hide && (
        <div className="buttons ml-auto flex flex-col items-center justify-center gap-3">
          <button className="rounded bg-saffron-600 px-2 py-1 font-koulen sm:text-lg md:text-xl">
            Register
          </button>
          <span className="text-xs sm:text-sm">Team Size</span>
          <div className="chip flex items-center gap-2">
            <AiOutlineTeam className="text-base" />{" "}
            <span className="text-xs sm:text-sm">{props.eventTeam}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConciseDetails;
