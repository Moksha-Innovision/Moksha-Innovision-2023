import React from "react";
import JoinUsButton from "./JoinUsButton";
import img1 from "../Assessts/About1.jpg";
import img2 from "../Assessts/about3.jpg";

function AboutUS() {
  return (
    <section className="px-6 md:pl-56 pt-8 md:py-48 flex flex-col md:flex-row space-y-8 md:space-x-36 md:space-y-0">
      <div className="text-center md:text-left">
        <p className="text-4xl md:text-7xl font-bold ">About Us</p>
        <p className="mt-7 text-xl text-justify md:w-[45rem] space-y-5 ">
          Welcome to Universal Consultant, your trusted provider of top-notch
          insurance services in Delhi/NCR. We specialize in offering tailored
          insurance solutions, backed by a dedicated and experienced team
          committed to your peace of mind and financial security. Our success is
          driven by our supportive staff, who ensure exceptional service in
          every interaction. Choose Universal Consultant for your insurance and
          exporter support needs, and experience unparalleled excellence.
        </p>
        <div className="mt-10">
          <JoinUsButton />
        </div>
      </div>
      <div className="mt-16 md:mt-0 bg-emerald-100 md:rounded-br-[10rem] md:w-[30rem] md:h-[30rem] overflow-hidden sm:overflow-visible ">
        <div className="flex justify-center ">
          <img
            className="rounded-lg h-56 w-[25rem] -mt-16 ml-52 mb-40 md:mb-40"
            src={img1}
            alt=""
          />
        </div>
        <div className="flex justify-center md:justify-start">
          <img className="rounded-lg h-56 w-[25rem] -ml-20" src={img2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutUS;
