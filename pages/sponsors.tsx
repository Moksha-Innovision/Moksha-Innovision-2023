type Props = {};
import Navbar from "../components/ui/Navbar/Navbar";
import Image from "next/image";
import Infiniteslider from "../components/ui/InfiniteSlider/infiniteslider";

import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Sponsors = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="bg-prussian-blue-400 h-[calc(100vh_-_6rem)] ">
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-52 left-0 hidden sm:inline-block"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-52 right-0 -scale-x-100 hidden sm:inline-block"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-52 bottom-0 -scale-y-100 "
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-52 bottom-0 right-0 -scale-y-100 -scale-x-100"
        />

        <div
          className={`max-w-full m-auto h-full ${koulen.className} flex flex-col gap-16 pt-20`}
        >
          <h1 className="text-center text-7xl drop-shadow-[4.58px_4.58px_1.53px_rgba(231,7,41,1)] text-white mb-16">
            Past Sponsors
          </h1>
          <div className="w-full animate-slideinbottom">
            <Infiniteslider right={false} />
          </div>
          <div className="w-full animate-slideinbottom">
            <Infiniteslider right={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
