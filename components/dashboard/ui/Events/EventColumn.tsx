import Link from "next/link";
import ConciseDetails from "../../../ui/newEventPage/ConciseDetails";

type Props = {
  setEventModal: (a: any) => any;
  events: { [key: string]: any }[];
};

const EventColumn = (props: Props) => {
  const { setEventModal } = props;

  const Events = props.events;

  return (
    <div className="container m-auto h-[93vh]  overflow-y-auto px-4 md:px-8 lg:px-14 ">
      <h1 className="mb-6 mt-6 text-center text-5xl font-semibold drop-shadow-glow">
        EVENTS
      </h1>
      <div className="w-full text-right">
        <span className="rounded-md bg-saffron-600 px-3 py-2 font-medium">
          <Link href="/admin/newevent">
            <button>Create New Event</button>
          </Link>
        </span>
      </div>

      <div className="flex w-full flex-col gap-6 pt-8">
        {Events.map((event, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default EventColumn;
