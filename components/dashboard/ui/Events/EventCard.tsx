import Image from "next/image";
import Link from "next/link";

interface event {
  date: string;
  desc: string;
  event_id: string;
  event_name: string;
  form_question: string[];
  instagram: string;
  poc: any;
  poster: string;
  prize_pool: number;
  rules: any;
  soc_id: string;
  tagline: string;
  team_size: number;
  time: string;
  venue: string;
}
const EventCard = ({ event }: any) => {
  console.log(event);

  return (
    <div
      className={`card-container relative my-6 flex w-full flex-col items-center gap-4 overflow-hidden rounded-lg border-2 border-white px-6 py-3 md:px-10 lg:px-20`}
    >
      <Image
        src={event.poster}
        width={150}
        height={150}
        alt={"moksha admin logo"}
        className="absolute -top-10 z-0 w-full "
      />
      <div className="absolute top-0 h-full w-full bg-prussian-blue-1000 bg-opacity-40  backdrop-blur-[3px]"></div>

      <h1 className="event-name z-[1] text-3xl font-semibold">
        {event.event_name}
      </h1>
      <div className="event-details z-[1] rounded-md bg-gray-200 px-4 py-2 text-sm font-normal text-black md:text-lg ">
        {event.desc}
      </div>
      <Link href="/" className="z-[1] rounded-md bg-saffron-600 px-3 py-2">
        <button>View Registrations</button>
      </Link>
    </div>
  );
};

export default EventCard;
