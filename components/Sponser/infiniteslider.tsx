import { Koulen } from "@next/font/google";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import SliderSlide from "./SliderSlide";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

//type Props = { right: boolean; images: string[], ...prp:any };

const Infiniteslider = ({ right, images, ...prp }: any) => {

  return (
    <Marquee speed={50} gradient={false} {...prp} style={{ marginBottom: "40px" }}>
      {images.map((a: any, i: any) => (
        <SliderSlide key={i} className={"mr-12 md:mr-20 p-2 h-36 w-60 sm:h-40 sm:w-72"}>
          <Image
            src={a}
            width={100}
            height={100}
            alt={"sponser"}
            className={`w-full h-full`}
          />
        </SliderSlide>
      ))}
    </Marquee>
  );
};

export default Infiniteslider;
