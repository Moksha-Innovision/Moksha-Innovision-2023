import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineCalendar, AiOutlineTeam } from "react-icons/ai";
import { HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";

const ConciseDetails = (props: any) => {
  const supabase = useSupabaseClient();
  const { imgSrc, eventName, eventTagline } = props;
  const [status, setStatus] = useState(props.eventStatus);
  const disEvent = async () => {
    const { data, error } = await supabase
      .from("socevent")
      .update({ disable: !status })
      .eq("event_id", props.event_id);
    console.log(data);
    if (error) console.log(error);
    setStatus(!status);
  };
  return (
    <div
      className={`flex w-full  items-center gap-3 sm:flex-row ${
        props.hideReg ? "flex-col" : ""
      } ${
        props.hideReg
          ? "rounded-md border border-solid backdrop-blur-sm"
          : " rounded-md bg-yellow-400 bg-opacity-10 shadow-soft backdrop-blur-[2px]"
      }  py-1 px-2 `}
    >
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
        <div
          className={`buttons ml flex ${
            !props.hideReg ? "" : "w-full"
          }  flex-col-reverse items-center justify-around gap-2 sm:ml-auto sm:w-auto md:flex-row md:gap-10  `}
        >
          <div className="flex flex-col items-center justify-center gap-3 ">
            {!props.hideReg && (
              <button
                className={`rounded ${
                  props.disable ? "bg-red-600 " : "bg-green-600"
                }  rounded px-2 py-1 font-koulen sm:text-lg md:text-xl`}
              >
                <span className="font-light tracking-wider">
                  {props.disable
                    ? "Registrations Closed"
                    : " Registrations Open"}
                </span>
              </button>
            )}
            {props.hideReg && (
              <Link
                href={{ pathname: `/admin/registrations/${props.event_id}` }}
                className="w-full"
              >
                <button className="rounded bg-saffron-600 px-2 py-1 font-koulen sm:text-lg md:text-xl">
                  Participants
                </button>
              </Link>
            )}
            <span className="text-xs sm:text-sm">Team Size</span>
            <div className="chip flex items-center gap-2">
              <AiOutlineTeam className="text-base" />{" "}
              <span className="text-xs sm:text-sm">{props.eventTeam}</span>
            </div>
          </div>
          {props.hideReg && (
            <div className="flex w-full min-w-[90px] items-center justify-center gap-3 sm:flex-col">
              <Link
                href={{ pathname: `/events/${props.event_id}` }}
                className="w-full"
              >
                <button className="w-full rounded bg-saffron-600 px-2 py-1 font-koulen sm:text-lg md:text-xl">
                  Preview
                </button>
              </Link>

              {/*<Link
                href={{ pathname: `/events/${props.event_id}` }}
                className="w-full"
              >
                <button className="w-full rounded bg-saffron-600 px-2 py-1 font-koulen sm:text-lg md:text-xl">
                  Update
                </button>
              </Link>
              <Link
                href={{ pathname: `/events/${props.event_id}` }}
                className="w-full"
                ></Link>*/}

              <button
                className="relative mt-5 w-full rounded-b bg-saffron-600 px-2 py-1 font-koulen sm:text-lg md:text-xl"
                onClick={disEvent}
              >
                {status ? "Enable Reg" : "Disable Reg"}
                <span
                  className={` absolute bottom-full left-0 w-full rounded-t-md py-0.5 px-1 text-xs  font-thin tracking-widest ${
                    status ? "bg-red-600 " : "bg-green-600"
                  }`}
                >
                  {status ? "Reg Disabled" : "Reg Enabled"}
                </span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConciseDetails;
