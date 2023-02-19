import { Koulen } from "@next/font/google";
import SliderSlide from "./SliderSlide";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

type Props = { right: boolean; images: string[] };

const Infiniteslider = (props: Props) => {
  const { right, images } = props;
  return (
    <div className="flex h-full">
      <div className="slider-holder relative h-full w-[200%] overflow-x-hidden">
        <div
          className={`slider absolute right-0 flex h-full w-[200%] items-center justify-around gap-2 ${
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
