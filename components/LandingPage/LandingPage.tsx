import Footer from "./Footer";
import LandingContactUS from "./LandingContactUS";
import LandingEvent from "./LandingEvent";
import { Parallax } from "react-scroll-parallax";
import LandingSponsers from "./LandingSponsers";
import Legacy from "./Legacy";

const LandingPage = () => {
  return (
    <div className=" flex flex-col">
      <Legacy />
      <Parallax translateY={[-10, 20]} className="z-10">
        <div className="flex h-[600px] w-full items-start  justify-center lg:h-[650px]">
          <LandingEvent />
        </div>
      </Parallax>
      <div className=" relative z-10 mt-[30%] h-fit">
        <LandingSponsers />
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
};
//className="relative -top-60 sm:-top-20 md:-top-60 lg:-top-28 xl:-top-16 z-10 pt-[15%]"
export default LandingPage;
