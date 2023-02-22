import React from "react";
import LandingPageCards from "./LandingPageCards";

type Props = {};

const LandingPageCardContainer = (props: Props) => {
  return (
    <div className="right w:1/3 h-[50vh] grow overflow-y-hidden to-prussian-blue-1000 md:h-screen">
      <LandingPageCards />
      {/* <LandingPageCards /> */}
    </div>
  );
};

export default LandingPageCardContainer;
