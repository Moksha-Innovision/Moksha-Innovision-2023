import { Koulen } from "@next/font/google";
import { GrClose } from "react-icons/gr";
import Tilt from "react-parallax-tilt";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = {};

const LandingPageCards = ({ setPop }: any) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-white text-5xl ">
      <GrClose
        onClick={() => {
          setPop("");
        }}
      />
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
