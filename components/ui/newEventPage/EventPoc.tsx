import React from "react";
import { AiOutlineCheckCircle, AiOutlinePhone } from "react-icons/ai";

type Props = {
  poc: {};
};

const EventPoc = (props: Props) => {
  const { poc } = props;
  return (
    <div className='"flex my-4 w-full gap-3 rounded-md border border-solid py-1 px-2 backdrop-blur-sm'>
      <h1 className="px-4  py-2 font-koulen text-2xl sm:text-3xl md:text-4xl">
        Event POCs
      </h1>
      <ul className="desc max-w-3xl px-4 font-montserrat text-base tracking-wide ">
        {Object.keys(poc).map((p,idx) => {
          return (
            <li key={idx} className="mb-1 flex w-full items-center gap-2">
              <AiOutlinePhone className="text-2xl text-white" />
              <p className="flex w-full rounded-lg  bg-white bg-opacity-10 p-3 pl-3 hover:bg-opacity-5 ">
                <span className="ml-2 ">{poc[p as keyof typeof poc]} -</span>
                <span className="ml-2 font-semibold">{p}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventPoc;
