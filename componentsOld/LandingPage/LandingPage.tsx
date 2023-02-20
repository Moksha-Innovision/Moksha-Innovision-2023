import Footer from "./Footer";
import LandingContactUS from "./LandingContactUS";
import LandingEvent from "./LandingEvent";
import LandingSponsers from "./LandingSponsers";
import Legacy from "./Legacy";

const LandingPage = () => {
  return (
    <div className=" flex flex-col">
      <Legacy />
      <div className="flex h-[600px] items-start  justify-center lg:h-[650px]">
        <LandingEvent />
      </div>
      <div className=" relative z-10 mt-[30%] h-fit">
        <LandingSponsers />
      </div>
      <div>
        <LandingContactUS />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
//className="relative -top-60 sm:-top-20 md:-top-60 lg:-top-28 xl:-top-16 z-10 pt-[15%]"
export default LandingPage;
