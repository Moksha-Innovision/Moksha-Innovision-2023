import { Koulen } from "@next/font/google";
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
            return (
              <div
                className={`flex h-full w-[20rem] items-center justify-center rounded-md border-[3px] border-black bg-white text-3xl font-bold ${koulen.className} `}
                key={i}
              >
                {i}
              </div>
            );
          })}

          {images.map((i) => {
            return (
              <div
                className={`flex h-full w-[20rem] items-center justify-center rounded-md border-[3px] border-black bg-white text-3xl font-bold ${koulen.className}`}
                key={i}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Infiniteslider;
