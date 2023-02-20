import { Koulen } from "@next/font/google";
import Marquee from "react-fast-marquee";
import SliderSlide from "../Sponser/SliderSlide";

const koulen = Koulen({ weight: "400", subsets: ["latin"] });
type Props = { right: boolean };

const Landinginfiniteslider = () => {
  const sponsorImages = ["sponsor 1", "sponsor 2", "sponsor 3", "sponsor 4"];
  return (
    <div className="swiper-box mx-auto my-5  h-[200px]   w-[150%] overflow-hidden rounded-md ring-offset-4 ">
      <Marquee>
        {sponsorImages.map((p: any, i) => {
          return (
            <div key={i} className="flex h-40 items-center justify-center">
              {/*<LandingSponserSlide />*/}
              {
                <SliderSlide key={i} className="h-32 ">
                  Sponser {i}
                </SliderSlide>
              }
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Landinginfiniteslider;
