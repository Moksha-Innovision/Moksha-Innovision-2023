import { Koulen } from "@next/font/google";
import SliderSlide from "./SliderSlide";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = { right: boolean; images: string[] };

const Infiniteslider = (props: Props) => {
  const { right, images } = props;
  return (
    <div className="flex h-full">
      <div className="slider-holder w-[200%] overflow-x-hidden h-full relative">
        <div
          className={`slider w-[200%] flex items-center justify-around absolute right-0 gap-2 h-full ${
            right ? "animate-infinitescrollright" : "animate-infinitescrollleft"
          }`}
        >
          {images.map((i) => {
            return <SliderSlide key={i}>{i}</SliderSlide>;
          })}

          {images.map((i) => {
            return <SliderSlide key={i}>{i}</SliderSlide>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Infiniteslider;
