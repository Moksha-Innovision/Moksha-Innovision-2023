import { Koulen } from "@next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import EventCarosel from "./EventCarosel";
import EventDays from "./EventDays";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const days = ["I", "II", "III"];
const events = [
  {
    day: "I",
    events: [
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "1",
        img: "orientation.svg",
      },
      {
        name: "2",
        img: "orientation.svg",
      },
      {
        name: "3",
        img: "orientation.svg",
      },
      {
        name: "4",
        img: "orientation.svg",
      },
      {
        name: "5",
        img: "orientation.svg",
      },
      {
        name: "6",
        img: "orientation.svg",
      },
    ],
  },
  {
    day: "II",
    events: [
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
    ],
  },
  {
    day: "III",
    events: [
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
      {
        name: "Orientaion",
        img: "orientation.svg",
      },
    ],
  },
];
const EventsPage = () => {
  const [day, setDay] = useState("I");
  useEffect(() => {}, []);
  return (
    <div
      className={`${koulen.className} text-white h-[93vh] bg-[#f44142] justify-center flex  overflow-x-hidden `}
    >
      <div className="z-10">
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 left-0 "
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 right-0 -scale-x-100 "
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 left-0 -scale-y-100 "
        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 right-0 -scale-y-100 -scale-x-100"
        />
      </div>
      <div className="mt-6 md:mt-4 flex flex-col relative   w-full items-center  mb-4">
        <h1 className="text-4xl lg:text-5xl text-center  mb-6  drop-shadow-bold  ">
          EVENTS
        </h1>
        <div className="flex space-x-1">
          {days.map((d, i) => {
            return (
              <EventDays
                day={d}
                key={i}
                isactive={day == d}
                changeDay={setDay}
              />
            );
          })}
        </div>
        <div className="mt-20">
          <EventCarosel
            events={events.filter((e) => e.day == day).at(0)?.events}
            day={day}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
