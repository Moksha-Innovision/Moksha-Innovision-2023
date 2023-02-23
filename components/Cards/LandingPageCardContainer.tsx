import LandingPageCards from "./LandingPageCards";

import "swiper/css";
import "swiper/css/pagination";

type Props = {};

const LandingPageCardContainer = ({ pop, setPop }: any) => {
  return (
    <div
      className={`${
        pop === "about" ? "hidden" : ""
      } right w:1/3  relative h-[78vh] w-full  grow overflow-y-hidden to-prussian-blue-1000 md:h-screen md:w-[40vw]`}
    >
      <LandingPageCards setPop={setPop} />
      {/* <LandingPageCards /> */}
    </div>
  );
};

export default LandingPageCardContainer;
