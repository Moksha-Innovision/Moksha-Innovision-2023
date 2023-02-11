import EventCard from "./EventCard";
import Link from "next/link";

type Props = { setEventModal: (a: any) => any };

const EventColumn = (props: Props) => {
  const { setEventModal } = props;

  const Events = [
    {
      name: "Event One",
      desc: "This event is very noc Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate praesentium minima architecto magnam pariatur saepe vitae cumque in repudiandae? Doloremque voluptates adipisci praesentium eum quasi ipsum quod dignissimos iure officia.",
    },
    {
      name: "Event One",
      desc: "This event is very noc Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate praesentium minima architecto magnam pariatur saepe vitae cumque in repudiandae? Doloremque voluptates adipisci praesentium eum quasi ipsum quod dignissimos iure officia.",
    },
    {
      name: "Event One",
      desc: "This event is very noc Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate praesentium minima architecto magnam pariatur saepe vitae cumque in repudiandae? Doloremque voluptates adipisci praesentium eum quasi ipsum quod dignissimos iure officia.",
    },
    {
      name: "Event One",
      desc: "This event is very noc Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate praesentium minima architecto magnam pariatur saepe vitae cumque in repudiandae? Doloremque voluptates adipisci praesentium eum quasi ipsum quod dignissimos iure officia.",
    },
  ];

  return (
    <div className="container px-4 md:px-8 lg:px-14 overflow-y-auto max-h-screen m-auto ">
      <h1 className="text-5xl font-semibold drop-shadow-glow text-center mb-6 mt-6">
        EVENTS
      </h1>
      <div className="w-full text-right">
        <span className="bg-saffron-600 px-3 py-2 rounded-md font-medium">
          <button onClick={() => setEventModal(true)}>Create New Event</button>
        </span>
      </div>
      <div className="flex flex-col gap-6 w-full ">
        {Events.map((event, index) => (
          <EventCard {...event} key={index} />
        ))}
      </div>
    </div>
  );
};

export default EventColumn;
