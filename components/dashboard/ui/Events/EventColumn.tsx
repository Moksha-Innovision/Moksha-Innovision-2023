import EventCard from "./EventCard";
import Link from "next/link";

type Props = {
  setEventModal: (a: any) => any;
  events: { [key: string]: any }[];
};

const EventColumn = (props: Props) => {
  const { setEventModal } = props;

  const Events = props.events;

  return (
    <div className="container m-auto max-h-screen overflow-y-auto px-4 md:px-8 lg:px-14 ">
      <h1 className="mb-6 mt-6 text-center text-5xl font-semibold drop-shadow-glow">
        EVENTS
      </h1>
      <div className="w-full text-right">
        <span className="rounded-md bg-saffron-600 px-3 py-2 font-medium">
          <button onClick={() => setEventModal(true)}>Create New Event</button>
        </span>
      </div>
      <div className="flex w-full flex-col gap-6 ">
        {Events.map((event, index) => (
          <EventCard name={event.event_name} desc={event.desc} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EventColumn;
