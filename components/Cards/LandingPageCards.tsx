import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });
import Tilt from "react-parallax-tilt";

import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const LandingPageCards = ({ setPop }: any) => {
  return (
    <div className="popup  flex h-full w-full flex-col items-center justify-center bg-contain  p-10 text-5xl md:h-full ">
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1500}
        glareEnable={true}
        glareMaxOpacity={0.05}
        glarePosition="all"
        glareColor="gold"
        className="grid  h-full w-full cursor-pointer place-items-center rounded-3xl bg-yellow-700 bg-opacity-10 shadow-soft backdrop-blur-[8px]  "
      >
        <div className="relative flex h-full max-h-[70vh] w-full flex-col items-center  text-white  md:max-h-[100vh]">
          <AiOutlineClose
            className="fixed right-3 top-3 opacity-40 transition-[opacity] duration-150 hover:opacity-100"
            onClick={() => {
              setPop("");
            }}
          />
          <div className="flex  flex-col items-center justify-center pt-10 text-center text-4xl md:text-3xl lg:text-5xl ">
            ABOUT US
            <Image
              src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests//underline.svg"
              width={100}
              height={20}
              alt={"underlien "}
              className={`w-full`}
            />
          </div>
          <div className="sfsdf lg: my-8 mx-10   space-y-1  overflow-y-scroll text-sm md:h-[55%] lg:h-[70%]">
            <p className="">
              Mokhsha-Innovision is filled with social, cultural, and tech
              events thus incorporating every possible aspect of holistic
              development and letting the talent of every child shine through.
            </p>
            <p className="">
              Social events have always been popular including solo/duet
              singling, &lsquo;AVALANCHE&lsquo;- the battle of bands,
              &lsquo;ROGUE&lsquo;- the fashion parade, dramatics events like -
              &lsquo;SOCH&lsquo; and &lsquo;PARWAZ&lsquo;, Moksha&lsquo;s got
              talent, and numerous events for dancing including street dancing,
              choreography, western dancing, and group dancing.
            </p>
            <p className="">
              There are also entrepreneurial events, technological events
              including coding contests and hackathons, and cultural events
              organized by various societies of the college as well as anyone
              who has the will to organize a successful event.
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default LandingPageCards;
