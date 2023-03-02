import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import LegacyCarosel from "./LegacyCarosel";

const Legacy = () => {
  return (
    <div
      draggable={false}
      className=" relative min-h-[60vh] w-[100vw] bg-black  bg-cover  bg-repeat md:h-[80vh] lg:h-[100vh]"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 h-full w-full object-cover contrast-100"
      >
        <source
          src="/output(compress-video-online.com).webm"
          type="video/webm"
        ></source>
      </video>
      <div className=" pointer-events-none absolute top-0  h-full w-full bg-gradient-to-t from-[rgba(2,3,4,0.5)] via-[rgba(1,2,4,0.3)] to-[rgba(0,0,0)] object-cover "></div>

      <div className="absolute -bottom-[40vh] flex w-full justify-center lg:-bottom-[46vh]">
        <div className="h-[80vh] min-h-[500px] w-[80vw] min-w-[500px] animate-wheel lg:min-h-[700px]   lg:min-w-[700px]">
          <Image
            src={"/Landing/Legecyrot2.svg"}
            width={100}
            height={100}
            alt={"cross modal"}
            className="h-full w-full"
            quality={1}
          />
        </div>
      </div>

      <div className="absolute bottom-0">
        <LegacyCarosel />
      </div>
    </div>
  );
};

export default Legacy;
