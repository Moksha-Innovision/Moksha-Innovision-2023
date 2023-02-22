import LandingPageCards from "./LandingPageCards";

type Props = {};

const LandingPageCardContainer = ({ pop, setPop }: any) => {
  return (
    <div
      className={`${
        pop === "about" ? "hidden" : ""
      } right w:1/3 animate- relative min-h-[50vh] w-full  grow overflow-y-hidden to-prussian-blue-1000 md:h-screen md:w-[40vw]`}
    >
      <LandingPageCards setPop={setPop} />
      {/* <LandingPageCards /> */}
    </div>
  );
};

export default LandingPageCardContainer;
