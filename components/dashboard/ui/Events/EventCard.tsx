import Link from "next/link";

type Props = { name: string; desc: string };

const EventCard = (props: Props) => {
  const { name, desc } = props;

  return (
    <div className="card-container my-6 flex w-full flex-col items-center gap-4 rounded-lg border-2 border-white px-6 py-3 md:px-10 lg:px-20">
      <h1 className="event-name text-3xl font-semibold">{name}</h1>
      <div className="event-details rounded-md bg-gray-200 px-4 py-2 text-sm font-normal text-black md:text-lg">
        {desc}
      </div>
      <Link href="/" className="rounded-md bg-saffron-600 px-3 py-2">
        <button>View Registrations</button>
      </Link>
    </div>
  );
};

export default EventCard;
