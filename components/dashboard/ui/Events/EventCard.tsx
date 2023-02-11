import Link from "next/link";

type Props = { name: string; desc: string };

const EventCard = (props: Props) => {
  const { name, desc } = props;

  return (
    <div className="card-container my-6 w-full border-2 rounded-lg border-white px-6 md:px-10 lg:px-20 flex flex-col items-center gap-4 py-3">
      <h1 className="event-name text-3xl font-semibold">{name}</h1>
      <div className="event-details bg-gray-200 font-normal px-4 py-2 rounded-md text-black text-lg">
        {desc}
      </div>
      <Link href="/" className="bg-saffron-600 px-3 py-2 rounded-md">
        <button>View Registrations</button>
      </Link>
    </div>
  );
};

export default EventCard;
