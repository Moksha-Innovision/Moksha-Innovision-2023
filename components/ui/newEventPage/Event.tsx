import { Koulen } from "@next/font/google";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import EventCarosel from "./EventCarosel";
import EventDays from "./EventDays";
import EventGrid from "./EventGrid";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const days = ["0", "I", "II", "III"];

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

const processData = (data: any) => [
  {
    day: "0",
    events:
      data?.filter((e: any) => {
        if (e.date == "2023-04-05" && e.approved) return e;
      }) || [],
  },
  {
    day: "I",
    events:
      data?.filter((e: any) => {
        if (e.date == "2023-04-06" && e.approved) return e;
      }) || [],
  },
  {
    day: "II",
    events:
      data?.filter((e: any) => {
        if (e.date == "2023-04-07" && e.approved) return e;
      }) || [],
  },
  {
    day: "III",
    events:
      data?.filter((e: any) => {
        if (e.date == "2023-04-08" && e.approved) return e;
      }) || [],
  },
];

const Event = () => {
  const [eventss, setEventss] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [eData, setEData] = useState<any>("");
  const getEvent = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.from("socevent").select("*");

    sessionStorage.setItem("eData", JSON.stringify(data));
    const processedData = processData(data);

    setEData(processedData);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!sessionStorage.getItem("eData")) getEvent();
    else {
      const rawData = JSON.parse(sessionStorage.getItem("eData") || "");
      const processedData = processData(rawData);
      setEData(processedData);
    }
  }, []);

  const [day, setDay] = useState("I");
  return (
    <div
      className={` relative  flex items-center justify-center  overflow-x-hidden text-white`}
    >
      <div className="relative mt-[7vh] mb-4 flex w-full flex-col   items-center pt-10  md:mt-14">
        <h1 className=" relative mb-7 block w-full text-center  text-4xl drop-shadow-lowGlowtext  md:mb-6  lg:text-5xl">
          EVENTS{" "}
        </h1>
        <div className="">
          <EventCarosel></EventCarosel>
        </div>
        <div>
          <div className="ml-auto flex w-screen justify-end pr-4">
            <button
              className="mt-5 flex items-center  gap-3 rounded bg-white bg-opacity-20 px-2 py-1"
              onClick={getEvent}
            >
              <AiOutlineReload
                className={`${isLoading ? "animate-spin text-3xl" : ""}`}
              />{" "}
              <span>Get Recent Events</span>
            </button>
          </div>
        </div>
        <div className="mt-3 flex h-full space-x-1">
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
          {eData && (
            <EventGrid
              setDay={setDay}
              events={events.filter((e) => e.day == day).at(0)?.events}
              e={eData.filter((e: any) => e.day == day).at(0)?.events}
              day={day}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
