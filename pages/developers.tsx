import { Koulen } from "@next/font/google";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import PageLoader from "../components/Loaders/page";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = {};

const developers = (props: Props) => {
  return (
    <div
      className={`h-screen w-screen  bg-black bg-event-pattern bg-contain bg-fixed ${koulen.className}`}
    >
      <div className="m-auto flex h-full max-w-7xl flex-col items-center gap-6 md:flex-row">
        <div className="columns flex h-2/3 w-full flex-col bg-[rgba(0,0,0,0.5)] px-4 text-white drop-shadow-lowGlow">
          <h1 className="name text-center text-3xl lg:text-5xl">
            HARSH KUMAR 🏀
          </h1>
          <Link href="/" className="w-full text-center ">
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              className="mb-5 grid h-28 w-full place-items-center rounded-md border border-gray-300 text-3xl"
              glareColor="red"
              glareEnable
              scale={1.05}
            >
              Instagram
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              className="grid h-28 w-full place-items-center rounded-md border border-gray-300 text-3xl"
              glareColor="blue"
              glareEnable
              scale={1.05}
            >
              Instagram
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              className="grid h-28 w-full place-items-center rounded-md border border-gray-300 text-3xl"
              glareColor="green"
              glareEnable
              scale={1.05}
            >
              Instagram
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              className="grid h-28 w-full place-items-center rounded-md border border-gray-300 text-3xl "
              glareColor="yellow"
              glareEnable
              scale={1.05}
            >
              Instagram
            </Tilt>
          </Link>
        </div>
        <div className="columns flex h-2/3 w-full flex-col bg-[rgba(0,0,0,0.5)] px-4 text-white drop-shadow-lowGlow">
          <h1 className="name text-center text-3xl lg:text-5xl">
            HARSH KUMAR 🏀
          </h1>
          <Link href="/" className="w-full text-center ">
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              className=" grid h-28 w-full place-items-center rounded-md border border-gray-300 text-3xl"
              glareColor="red"
              glareEnable
              scale={1.05}
            >
              Instagram
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              className="grid h-28 w-full place-items-center rounded-md border border-gray-300 text-3xl"
              glareColor="purple"
              glareEnable
              scale={1.05}
            >
              Instagram
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              className="grid h-28 w-full place-items-center rounded-md border border-gray-300 text-3xl"
              glareColor="white"
              glareEnable
              scale={1.05}
            >
              Instagram
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={2}
              tiltMaxAngleY={2}
              className="grid h-28 w-full place-items-center rounded-md border border-gray-300 text-3xl "
              glareColor="yellow"
              glareEnable
              scale={1.05}
            >
              Instagram
            </Tilt>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default developers;
