import { Koulen } from "@next/font/google";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import EventCarosel from "./EventCarosel";
import EventDays from "./EventDays";
import EventGrid from "./EventGrid";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const days = ["I", "II", "III"];
const events = [
  {
    day: "I",
    events: [
      {
        name: "Orientaion",
        img: "eventcard1.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "1",
        img: "eventcard1.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "2",
        img: "eventcard1.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "3",
        img: "eventcard1.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "4",
        img: "eventcard1.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "5",
        img: "eventcard1.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "6",
        img: "eventcard1.svg",
        ticket: "ticket1.svg",
      },
    ],
  },
  {
    day: "II",
    events: [
      {
        name: "Orientaion",
        img: "eventcard2.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard2.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard2.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard2.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard2.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard2.svg",
        ticket: "ticket1.svg",
      },
    ],
  },
  {
    day: "III",
    events: [
      {
        name: "Orientaion",
        img: "eventcard3.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard3.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard3.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard3.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard3.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard3.svg",
        ticket: "ticket1.svg",
      },
      {
        name: "Orientaion",
        img: "eventcard3.svg",
        ticket: "ticket1.svg",
      },
    ],
  },
];

const Event = () => {
  const supabase = useSupabaseClient();
  useEffect(() => {
    const getEvents = async () => {
      const { data, error } = await supabase
        .from("socevent")
        .select("event_name");
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);
    };
    getEvents();
  }, []);

  const [day, setDay] = useState("I");
  return (
    <div
      className={` relative  flex items-center justify-center  overflow-x-hidden text-white`}
    >
      <div className="relative mt-[7vh] mb-4 flex w-full flex-col   items-center pt-10  md:mt-14">
        <h1 className="mb-7 text-center text-4xl  drop-shadow-lowGlowtext md:mb-6  lg:text-5xl  ">
          EVENTS
        </h1>
        <div className="">
          <EventCarosel></EventCarosel>
        </div>
        <div className="mt-10 flex h-full space-x-1">
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
        <div className="mt-2">
          <EventGrid
            events={events.filter((e) => e.day == day).at(0)?.events}
            day={day}
          />
        </div>
      </div>
      zz
    </div>
  );
};

export default Event;
