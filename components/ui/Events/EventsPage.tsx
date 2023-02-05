import { Koulen } from "@next/font/google";
import Image from "next/image";

import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

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
      className={`${koulen.className} text-white h-[93vh] bg-[#f44142] justify-center items-center flex  overflow-x-hidden relative`}

  const containerRef: any = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(
        [
          ".borders-1",
          ".borders-2",
          ".borders-3",
          ".borders-4",
          ".cloud-small",
          ".owl-small",
        ],
        {
          scale: 0,
          duration: 1,
          opacity: 0,
          delay: 0,
          stagger: 0.2,
          ease: "expo",
        }
      );

      gsap.from(".event-carousel", {
        opacity: 0,
        y: 150,
        ease: "power4",
        delay: 1.5,
      });
      gsap.from(".event-days", {
        opacity: 0,
        x: -550,
        duration: 1,
        ease: "power4",
        delay: 1,
      });
    }, containerRef);

    return () => {
      return ctx.revert();
    };
  }, []);
  return (
    <div
      className={`${koulen.className} text-white h-[93vh] bg-[#f44142] justify-center items-center flex  overflow-x-hidden relative`}
      ref={containerRef}

    >
      <div className="z-10">
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 left-0 top-0 borders-1"

        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"

          className="absolute w-28 lg:w-40 xl:w-44 right-0 -scale-x-100 top-0"

        />
        <Image
          src="border-event-contact.svg"
          width={100}
          height={100}
          alt="border"

          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 left-0 -scale-y-100  borders-3"

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
        <h1 className="text-4xl lg:text-5xl text-center  mb-7 md:mb-6  drop-shadow-bold  ">
          EVENTS
        </h1>

        <div className="flex space-x-1 h-full event-days">

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

        <div className="mt-20 event-carousel">

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
