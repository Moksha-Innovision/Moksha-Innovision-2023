import Image from "next/image";
import { useEffect, useState } from "react";

const LegacyCards = ({ id, active, artist }: any) => {
  //console.log(id, active);
  const [pos, setPos] = useState(0);
  useEffect(() => {
    if (active == id) setPos(0);
    else if ((9 + active - 1) % 9 == id) setPos(-1);
    else if ((9 + active + 1) % 9 == id) setPos(1);
    else if ((9 + active - 2) % 9 == id) setPos(-2);
    else if ((9 + active + 2) % 9 == id) setPos(2);
    else setPos(10);
  });
  return (
    <div
      className={`
        ${pos == 0 && ""}
        ${pos == 1 && ""}
        ${pos == 2 && ""}
        ${pos == -1 && ""}
        ${pos == 2 && ""}
        w-[100%] min-h-[400px] md:h-[600px]  lg:h-[700px] relative  flex flex-col `}
    >
      <div
        className={`h-[50%]  rounded-lg  w-[100%]  z-10   transition-all text-white flex flex-col justify-end pb-8 items-center
        ${(pos == 0 && "absolute top-[10%] scale-110 opacity-100") || "scale-75"
          }
        ${pos == -1 && "absolute top-[35%] -rotate-[30deg] opacity-70"}
        ${pos == 1 && "absolute top-[35%] rotate-[30deg] opacity-70"}
        ${pos == 2 && "opacity-80 absolute -bottom-[20%] rotate-[40deg] "}
        ${pos == -2 && "opacity-80 absolute -bottom-[20%]  -rotate-[40deg]"}
        ${pos == 10 && "opacity-0 absolute -bottom-[40%]"}

           `}
      >
        <div className="w-[100%] absolute top-0 h-[100%] ">
          <Image
            src={`/Landing/${artist.img}`}
            width={100}
            height={100}
            alt={"asad"}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="relative text-center bottom-5 sm:bottom-0">
          <div className="z-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-7 md:leading-none tracking-[10px]">
            {artist.name}
          </div>
          <div className="z-10 text-xs  sm:text-2xl md:text-3xl lg:text-4xl">
            {artist.event}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyCards;
