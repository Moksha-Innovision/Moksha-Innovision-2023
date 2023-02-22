import LandingPageCards from "./LandingPageCards";

type Props = {};

const LandingPageCardContainer = ({ pop, setPop }: any) => {
  return (
    <div
      className={`${
        pop === "about" ? "hidden" : ""
      } right w:1/3 animate- h-[50vh] grow overflow-y-hidden to-prussian-blue-1000 md:h-screen`}
    >
      <LandingPageCards setPop={setPop} />
      {/* <LandingPageCards /> */}
    </div>
  );
};

export default LandingPageCardContainer;
