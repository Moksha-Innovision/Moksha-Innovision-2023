import { Koulen } from "@next/font/google";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const images = ["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4"];

type Props = { right: boolean };

const Infiniteslider = (props: Props) => {
  const { right } = props;
  return (
    <div className="flex h-full">
      <div className="slider-holder w-[200%] overflow-x-hidden h-full relative">
        <div
          className={`slider w-[200%] flex items-center justify-around absolute right-0 gap-2 h-full ${
            right ? "animate-infinitescrollright" : "animate-infinitescrollleft"
          }`}
        >
          {images.map((i) => {
            return (
              <div
                className={`flex justify-center items-center w-[20rem] h-full bg-white rounded-md text-3xl font-bold border-black border-[3px] ${koulen.className} `}
                key={i}
              >
                {i}
              </div>
            );
          })}

          {images.map((i) => {
            return (
              <div
                className={`flex justify-center items-center w-[20rem] h-full bg-white rounded-md text-3xl font-bold border-black border-[3px] ${koulen.className}`}
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
