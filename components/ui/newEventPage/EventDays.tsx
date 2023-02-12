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
      } px-5   h-10 lg:h-14 font-semibold rounded-lg cursor-pointer  text-2xl lg:text-3xl text-center  flex justify-center items-center hover:scale-105 transition-[transform] duration-100`}
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
