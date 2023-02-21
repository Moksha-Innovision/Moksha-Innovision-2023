import Tilt from "react-parallax-tilt";
import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = {};

const LandingPageCards = (props: Props) => {
  return (
    <Tilt
      perspective={2000}
      glareEnable={true}
      glareMaxOpacity={0.45}
      glareColor="blue"
      glarePosition="all"
      scale={1.02}
      className="h-full bg-[rgba(0,0,0,0.5)]  md:h-screen "
    >
      <div className="flex h-full w-full animate-slideinleft flex-col items-center justify-center text-5xl md:animate-slideinbottom">
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
    </Tilt>
  );
};

export default LandingPageCards;
