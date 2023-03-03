import { Koulen } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

import Tilt from "react-parallax-tilt";
import DevTile from "../components/ui/Devs/DevTile";
type Props = {};

const developers = (props: Props) => {
  return (
    <div
      className={`min-h-screen w-screen  bg-black    bg-event-pattern bg-pattern      px-[5vw] py-[5vh] md:h-screen  ${"font-koulen"}`}
    >
      <Head>
        <title>Moksha Innovision&apos;23 | Developers</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Tilt
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        perspective={1500}
        glareEnable={true}
        glareMaxOpacity={0.05}
        glarePosition="all"
        glareColor="gold"
        className="grid  h-full w-full place-items-center rounded-3xl   "
      >
        <div className="relative h-full w-full  rounded-xl bg-yellow-100 bg-opacity-10 backdrop-blur-[4px] ">
          <Link href="/">
            <div className=" absolute z-20 mt-8 ml-7 cursor-pointer">
              <Image
                width={80}
                height={80}
                className="absolute top-0 block md:hidden"
                src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/mokshalogo.svg"
                alt=""
              />
              <Image
                src={
                  "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/footerLogo.svg"
                }
                alt={"asa"}
                height={20}
                quality={1}
                width={20}
                className="invisible  h-10 w-full md:visible "
                priority
              />
            </div>
          </Link>
          <h1 className="mb-7 flex flex-col  items-center text-center   text-4xl text-white drop-shadow-lowGlowtext md:mb-6 lg:text-5xl ">
            <div className="my-10">DEVELOPERS</div>
          </h1>
          <div className="grid w-full grid-cols-2 text-white drop-shadow-glow ">
            <DevTile
              url={[
                "https://www.linkedin.com/in/harshkumarnsut/",
                "https://www.instagram.com/_itsharshithere_/",
                "https://github.com/DeveHk",
              ]}
              name="HARSH KUMAR"
            />
            <DevTile
              url={[
                "https://www.linkedin.com/in/anitjha/",
                "https://www.instagram.com/anitjhaaa/",
                "https://github.com/AnitKrJha",
              ]}
              name="ANIT JHA"
            />
            <DevTile
              url={[
                "",
                "https://www.instagram.com/ayushtenguria/",
                "https://github.com/ayushtenguria",
              ]}
              name="Ayush Tenguria"
            />
            <DevTile
              url={[
                "https://www.linkedin.com/in/devesh-agarwal-1b1800203/",
                "https://www.instagram.com/deveshagarwal1729/",
                "https://github.com/Coder-Devesh-Agarwal",
              ]}
              name="DEVESH AGARWAL"
            />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default developers;
{
  /*<div className="m-auto flex h-full max-w-7xl flex-col items-center gap-6 md:flex-row">
        <div className="columns flex h-2/3 w-full flex-col bg-[rgba(0,0,0,0.5)] px-4 text-white drop-shadow-lowGlow">
          <h1 className="name text-center text-3xl lg:text-5xl">
            HARSH KUMAR 🏀
          </h1>
          <DevTile name="Inatagram"></DevTile>
          <DevTile name="Inatagram"></DevTile>
        </div>
        <div className="columns flex h-2/3 w-full flex-col bg-[rgba(0,0,0,0.5)] px-4 text-white drop-shadow-lowGlow">
          <h1 className="name text-center text-3xl lg:text-5xl">
            HARSH KUMAR 🏀
          </h1>
          <Link href="/" className="w-full text-center ">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.05}
              glarePosition="all"
              glareColor="gold"
              className="grid h-28   w-full cursor-pointer place-items-center rounded-3xl bg-yellow-100  bg-opacity-10 shadow-soft backdrop-blur-[10px]  "
            >
              Instagr
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.05}
              glarePosition="all"
              glareColor="gold"
              className="grid h-28   w-full cursor-pointer place-items-center rounded-3xl bg-yellow-100  bg-opacity-10 shadow-soft backdrop-blur-[10px]  "
            >
              Instagr
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.05}
              glarePosition="all"
              glareColor="gold"
              className="grid h-28   w-full cursor-pointer place-items-center rounded-3xl bg-yellow-100  bg-opacity-10 shadow-soft backdrop-blur-[10px]  "
            >
              Instagr
            </Tilt>
          </Link>
          <Link href="/" className="w-full text-center">
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              perspective={1500}
              glareEnable={true}
              glareMaxOpacity={0.05}
              glarePosition="all"
              glareColor="gold"
              className="grid h-28   w-full cursor-pointer place-items-center rounded-3xl bg-yellow-100  bg-opacity-10 shadow-soft backdrop-blur-[10px]  "
            >
              Instagr
            </Tilt>
          </Link>
        </div>
  </div>*/
}
