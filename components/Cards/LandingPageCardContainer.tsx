import React from "react";
import LandingPageCards from "./LandingPageCards";

type Props = {};

const LandingPageCardContainer = (props: Props) => {
  return (
    <div className="right w:1/3 h-[50vh] grow overflow-y-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-prussian-blue-600 to-prussian-blue-1000 md:h-full">
      <LandingPageCards />
      {/* <LandingPageCards /> */}
    </div>
  );
};

export default LandingPageCardContainer;
