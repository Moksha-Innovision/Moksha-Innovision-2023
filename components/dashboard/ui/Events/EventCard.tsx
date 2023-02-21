import Image from "next/image";
import Link from "next/link";

interface event {
  date: string
  desc: string
  event_id: string
  event_name: string
  form_question: string[]
  instagram: string
  poc: any
  poster: string
  prize_pool: number
  rules: any
  soc_id: string
  tagline: string
  team_size: number
  time: string
  venue: string
};
const EventCard = ({ event }: any) => {
  console.log(event)

  return (
    <div className={`card-container my-6 flex w-full flex-col items-center gap-4 rounded-lg border-2 relative border-white px-6 py-3 md:px-10 lg:px-20 overflow-hidden`}>
      <Image
        src={event.poster}
        width={150}
        height={150}
        alt={"moksha admin logo"}
        className="w-full -top-10 z-0 absolute "
      />
      <div className="h-full w-full absolute top-0 bg-prussian-blue-1000 bg-opacity-40  backdrop-blur-[3px]"></div>

      <h1 className="event-name text-3xl font-semibold z-[1]">{event.event_name}</h1>
      <div className="event-details rounded-md bg-gray-200 z-[1] px-4 py-2 text-sm font-normal text-black md:text-lg ">
        {event.desc}
      </div>
      <Link href="/" className="rounded-md z-[1] bg-saffron-600 px-3 py-2">
        <button>View Registrations</button>
      </Link>
    </div>
  );
};

export default EventCard;
