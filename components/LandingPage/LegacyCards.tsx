import Image from "next/image";
import { useEffect, useState } from "react";

const LegacyCards = ({ id, active, artist }: any) => {
  const [pos, setPos] = useState(0);
  useEffect(() => {
    if (active == id) setPos(0);
    else if ((10 + active - 1) % 10 == id) setPos(-1);
    else if ((10 + active + 1) % 10 == id) setPos(1);
    else if ((10 + active - 2) % 10 == id) setPos(-2);
    else if ((10 + active + 2) % 10 == id) setPos(2);
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
        relative flex min-h-[400px]  w-[100%] flex-col  md:h-[600px] lg:h-[700px] `}
    >
      <div
        className={`z-10  flex  h-[50%]  w-[100%]   flex-col items-center justify-end rounded-lg pb-8 text-white transition-[transform,_bottom,_top,_opacity] duration-[400ms]
        ${
          (pos == 0 && "absolute bottom-[38%] scale-110 opacity-100") ||
          "scale-75"
        }
        ${pos == -1 && "absolute bottom-[15%] -rotate-[30deg] opacity-70"}
        ${pos == 1 && "absolute bottom-[15%] rotate-[30deg] opacity-70"}
        ${pos == 2 && "absolute -bottom-[20%] rotate-[40deg] opacity-80 "}
        ${pos == -2 && "absolute -bottom-[20%] -rotate-[40deg]  opacity-80"}
        ${pos == 10 && "absolute -bottom-[140%] opacity-0"}

           `}
      >
        <div className="absolute top-0 h-[100%] w-[100%] ">
          <Image
            src={`https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/events/carosel/${artist.img}`}
            width={100}
            height={100}
            alt={"asad"}
            quality={1}
            priority
            className="h-[100%] w-[100%]"
          />
        </div>
        <div className="relative bottom-5 text-center sm:bottom-0">
          <div className="z-10 text-xl leading-7 tracking-[2px]  sm:text-3xl md:text-5xl md:leading-none lg:text-6xl">
            {artist.name}
          </div>
          <div className="sm:text-1xl z-10  text-xs md:text-2xl lg:text-3xl">
            {artist.event}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacyCards;
