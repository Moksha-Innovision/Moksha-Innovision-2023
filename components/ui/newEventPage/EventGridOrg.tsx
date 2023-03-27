import { Koulen } from "@next/font/google";
import EventCards from "./EventCards";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

interface Props {
  events?: { name: string; img: string; ticket: string }[];
  setDay?: any;
  day?: string;
  e?: any;
}

const EventGridOrg = ({ e }: Props) => {
  return (
    <>
      <div className="grid w-[100vw] grid-cols-1 gap-14 p-10 sm:grid-cols-2 md:gap-14  lg:grid-cols-3 lg:gap-16 xl:grid-cols-4 ">
        {e.length == 0 && (
          <div className="col-span-4 flex w-full justify-center bg-white text-black">
            No Event Exists
          </div>
        )}
        {e &&
          e?.map((e: any, i: any) => {
            return <EventCards event={e} key={i} />;
          })}
      </div>
    </>
  );
};

export default EventGridOrg;
