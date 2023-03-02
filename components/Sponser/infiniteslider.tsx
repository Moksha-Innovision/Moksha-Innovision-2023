import Image from "next/image";
import Marquee from "react-fast-marquee";
import SliderSlide from "./SliderSlide";

//type Props = { right: boolean; images: string[], ...prp:any };

const Infiniteslider = ({ right, images, ...prp }: any) => {
  return (
    <Marquee
      speed={50}
      gradient={false}
      {...prp}
      style={{ marginBottom: "40px" }}
    >
      {images.map((a: any, i: any) => (
        <SliderSlide
          key={i}
          className={"mr-12 h-36 w-60 p-2 sm:h-40 sm:w-72 md:mr-20"}
        >
          <Image
            src={a}
            width={100}
            height={100}
            alt={"sponser"}
            className={`h-full w-full`}
          />
        </SliderSlide>
      ))}
    </Marquee>
  );
};

export default Infiniteslider;
