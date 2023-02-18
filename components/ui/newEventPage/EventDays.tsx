import { useEffect } from "react";
interface Props {
  day: string;
  changeDay: (d: any) => any;
  isactive: boolean;
}

const ACTIVE =
  "border-[3px]  bg-white text-prussian-blue-1000 shadow-lg border-black";
const EventDays = ({ day, changeDay, isactive }: Props) => {
  useEffect(() => {}, []);
  return (
    <div
      className={`${
        isactive ? ACTIVE : ""
      } flex   h-10 cursor-pointer items-center justify-center rounded-lg  px-5 text-center text-2xl  font-semibold transition-[transform] duration-100 hover:scale-105 lg:h-14 lg:text-3xl`}
    >
      {" "}
      <span
        className={`${isactive ? "" : "drop-shadow-lightbold"} tracking-wider`}
        onClick={() => {
          changeDay(day);
        }}
      >
        {" "}
        DAY {day}
      </span>
    </div>
  );
};

export default EventDays;
