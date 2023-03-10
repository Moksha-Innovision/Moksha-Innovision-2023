import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineReload,
  AiOutlineWarning,
} from "react-icons/ai";
import ConciseDetails from "../../../ui/newEventPage/ConciseDetails";

type Props = {
  setEventModal: (a: any) => any;
  events: { [key: string]: any }[];
  getEvents: () => {};
};

const EventColumn = (props: Props) => {
  const { setEventModal, getEvents } = props;
  const [isLoading, setisLoading] = useState(false);
  const Events = props.events;

  return (
    <div className="container m-auto min-h-[93vh]  overflow-y-auto px-4 md:px-8 lg:px-14 ">
      <h1 className="mb-6 mt-6 text-center text-5xl font-semibold drop-shadow-glow">
        EVENTS
      </h1>
      <div className="flex w-full items-center gap-6 text-right ">
        <button
          className="ml-auto flex items-center justify-center gap-3 rounded bg-white bg-opacity-30 px-2"
          onClick={() => {
            setisLoading(true);
            const t = setTimeout(() => {
              getEvents();
              setisLoading(false);
            }, 1000);
          }}
        >
          <AiOutlineReload
            className={`${isLoading ? "animate-spin" : ""} text-3xl`}
          />
          <span className="font-koulen text-sm">
            Refresh <br />
            Events
          </span>
        </button>
        <span className="py flex items-center rounded-md bg-saffron-600 py-2 px-3 font-medium">
          <Link href="/admin/newevent" className="">
            <button>Create New Event</button>
          </Link>
        </span>
      </div>

      <div className="flex w-full flex-col gap-6 pt-8">
        {Events.map((event, index) => (
          <div className=" relative my-5" key={index}>
            {!event.approved && (
              <div className="absolute bottom-full left-2  grid h-6 place-content-center rounded-t-md bg-red-500 backdrop:blur-lg">
                <div className="stauts-of-approval  flex items-center gap-2 px-2 py-2 font-koulen text-white">
                  <AiOutlineWarning /> Event Not Yet Approved by Em head
                </div>
              </div>
            )}
            {
              <Link
                href={"/admin/edit/" + event.event_id}
                className="absolute top-1 right-1  z-10 grid  place-content-center rounded-md bg-blue-500 backdrop:blur-lg sm:-top-10"
              >
                <button className="stauts-of-approval  flex items-center gap-2 rounded bg-blue-500 px-2 py-2 font-koulen text-white">
                  <AiOutlineEdit /> Edit Event
                </button>
              </Link>
            }

            <div
              className={`  ${
                !event.approved ? "pointer-events-none " : "pointer-events-auto"
              }`}
            >
              <ConciseDetails
                key={index}
                event_id={event.event_id}
                imgSrc={event.poster}
                eventName={event.event_name}
                eventTagline={event.tagline}
                eventTime={event.time}
                eventDate={event.date}
                eventVenue={event.venue}
                eventTeam={event.team_size}
                eventStatus={event.disable}
                hideReg={true}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventColumn;
