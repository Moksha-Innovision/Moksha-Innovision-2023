import { Koulen } from "@next/font/google";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import {
  AiOutlineLeft,
  AiOutlineReload,
  AiOutlineSearch,
} from "react-icons/ai";
import EventCarosel from "./EventCarosel";
import EventDays from "./EventDays";
import EventGrid from "./EventGrid";
import EventGridOrg from "./EventGridOrg";
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
const processDataApproved = (data: any) =>
  data?.filter((e: any) => {
    if (e.approved) return e;
  });
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
  const [semode, setSemode] = useState(false);
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();
  const [eData, setEData] = useState<any>("");
  const srch = useRef<any>("");
  const [data, setData] = useState<any>("");
  const [rData, setRData] = useState<any>("");

  const [cData, setCData] = useState<any>("");
  const getEvent = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("socevent")
      .select("*")
      .eq("approved", true);

    sessionStorage.setItem("eData", JSON.stringify(data));
    const processedData = processData(data);
    const appeve = processDataApproved(data);
    setData(appeve);
    setEData(processedData);
    setIsLoading(false);
  };
  const getSpecial = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("socevent")
      .select("*")
      .eq("approved", true)
      .eq("special", true);
    setCData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getSpecial();
    if (!sessionStorage.getItem("eData")) getEvent();
    else {
      const rawData = JSON.parse(sessionStorage.getItem("eData") || "");
      const processedData = processData(rawData);
      const appeve = processDataApproved(rawData);
      setData(appeve);
      setEData(processedData);
    }
  }, []);
  const handleSrch = (e: any) => {
    {
      const dat = data.filter((ev: any) =>
        ev.event_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setRData(dat);
    }
  };

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
          {cData && <EventCarosel data={cData}></EventCarosel>}
        </div>

        <div className="flex w-screen flex-col items-center px-4 sm:flex-row sm:justify-between">
          <div className="mt-5 flex w-fit items-center  gap-3 ">
            <button
              onClick={() => {
                setRData("");
                srch.current.value = "";
                setSemode(false);
              }}
              className={`${
                semode ? " block " : " hidden "
              } flex items-center rounded-2xl bg-white bg-opacity-20 p-2 text-2xl`}
            >
              <AiOutlineLeft className="" />
              <span className="text-sm">back</span>
            </button>
            <div className=" flex w-fit items-center  gap-3 rounded bg-white bg-opacity-20 py-1 px-1 ">
              <input
                ref={srch}
                type="text"
                onChange={handleSrch}
                placeholder="Search Event"
                onFocus={() => {
                  setSemode(true);
                }}
                className=" box-border  rounded bg-transparent px-1  py-1 "
              />
              {/*focus:border-2 focus:border-prussian-blue-50 focus:outline-0*/}
              <AiOutlineSearch
                className={`${semode ? " text-3xl" : "text-2xl"}`}
              ></AiOutlineSearch>
            </div>
          </div>

          <button
            className="mt-5 flex  w-fit items-center gap-3 rounded bg-white bg-opacity-20 px-2 py-2"
            onClick={getEvent}
          >
            <AiOutlineReload
              className={`${isLoading ? "animate-spin text-3xl" : "text-2xl"}`}
            />{" "}
            <span>Get Recent Events</span>
          </button>
        </div>

        <div
          className={`${
            !semode ? " block " : " hidden "
          } mt-3 flex h-full space-x-1`}
        >
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
        <div className="mt-2 min-h-[100vh]">
          <div className={`${semode ? " block " : " hidden "}`}>
            {rData ? (
              <EventGridOrg setDay={setDay} e={rData} day={day} />
            ) : (
              <div className="w-screen p-10">
                <div className="col-span-4 flex w-full justify-center bg-white text-black">
                  SEARCH AN EVENT BY NAME
                </div>
              </div>
            )}
          </div>

          <div className={`${!semode ? " block " : " hidden "}`}>
            {eData && (
              <EventGrid
                setDay={setDay}
                e={eData.filter((e: any) => e.day == day).at(0)?.events}
                day={day}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
