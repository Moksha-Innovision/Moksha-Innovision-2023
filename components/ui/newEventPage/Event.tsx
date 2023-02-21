import { Koulen } from "@next/font/google";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
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
  const [eventss, setEventss] = useState<any>([]);
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [eData, setEData] = useState<any>("");
  const getEvent = async () => {
    const { data, error } = await supabase.from("socevent").select("*");
    setEData([
      {
        day: "I",
        events:
          data?.filter((e) => {
            if (e.date == "2023-03-23") return e;
          }) || [],
      },
      {
        day: "II",
        events:
          data?.filter((e) => {
            if (e.date == "2023-03-24") return e;
          }) || [],
      },
      {
        day: "III",
        events:
          data?.filter((e) => {
            if (e.date == "2023-03-25") return e;
          }) || [],
      },
    ]);
    //setEventss(data);
    console.log(eData);
  };

  useEffect(() => {
    if (eData == "") getEvent();
    console.log(eData);
  }, [eData]);

  /*if (user) {
    if (!user.user_metadata.isAdmin) {
      return (
        <>
          <Notadmin type={"not-authorized"} />
        </>
      );
    }
  } else {
    return (
      <>
        <Notadmin type="login" />
      </>
    );
  }*/

  useEffect(() => {}, []);

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
          {eData && (
            <EventGrid
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
