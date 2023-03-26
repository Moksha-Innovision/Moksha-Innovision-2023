import { Button } from "@chakra-ui/react";
import { Koulen } from "@next/font/google";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import EventCards from "./EventCards";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

interface Props {
  events?: { name: string; img: string; ticket: string }[];
  setDay: any;
  day: string;
  e: any;
}

const EventGrid = ({ events, day, e, setDay }: Props) => {
  const handleDayChange = (prev: boolean) => {
    if (day === "0") {
      setDay("I");
      return;
    } else if (day === "I" && !prev) {
      setDay("II");
      return;
    } else if (day === "I") {
      setDay("0");
      return;
    } else if (day === "II" && !prev) {
      setDay("III");
      return;
    } else if (day === "II") {
      setDay("I");
      return;
    } else if (day === "III" && !prev) {
      setDay("III");
      return;
    } else if (day === "III") {
      setDay("II");
      return;
    }
  };

  return (
    <>
      <div className="grid w-[100vw] grid-cols-1 gap-14 p-10 sm:grid-cols-2 md:gap-14  lg:grid-cols-3 lg:gap-16 xl:grid-cols-4 ">
        {e.length == 0 && (
          <div className="col-span-4 flex w-full justify-center bg-white text-black">
            NO EVENT ADDED FOR DAY {day}
          </div>
        )}

        {e?.map((e: any, i: any) => {
          return <EventCards event={e} key={i} />;
        })}
      </div>
      <div className="mx-auto flex w-screen items-center justify-center gap-5 disabled:bg-opacity-25">
        <Button
          _disabled={{ opacity: 0.5 }}
          isDisabled={day === "0"}
          leftIcon={<FaArrowLeft />}
          className="col-span-4 flex basis-24 justify-center rounded  bg-saffron-600 py-2 px-2 text-white "
          onClick={() => {
            handleDayChange(true);
          }}
        >
          Prev Day Events
        </Button>
        <Button
          _disabled={{ opacity: 0.5 }}
          isDisabled={day === "III"}
          className="bg-whit col-span-4 flex basis-24 justify-center rounded bg-saffron-600 py-2 px-2 text-white "
          onClick={() => {
            handleDayChange(false);
          }}
          rightIcon={<FaArrowRight />}
        >
          Next Day Events
        </Button>
      </div>
    </>
  );
};

export default EventGrid;
