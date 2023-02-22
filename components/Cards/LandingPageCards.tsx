import Tilt from "react-parallax-tilt";
import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = {};

const LandingPageCards = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-5xl ">
      <Tilt
        perspective={1500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        glarePosition="all"
        glareColor="white"
        tiltReverse
        scale={1.02}
        className="  grid h-full w-full cursor-pointer place-items-center bg-[rgba(0,0,0,0.1)]"
      >
        <h1 className={`${koulen.className} text-center text-white`}>
          Welcome to Moksha 2022 <br />
          💖
        </h1>
      </Tilt>
    </div>
  );
};

export default LandingPageCards;
