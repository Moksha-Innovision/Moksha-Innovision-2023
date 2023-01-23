import React, { useState } from "react";
import FaqContainer from "../components/ui/FaqContainer/FaqContainer";
import Image from "next/image";
import Navbar from "../components/ui/Navbar/Navbar";
type Props = {};

const Faq = (props: Props) => {
  const [owl, setOwl] = useState("owl.svg");

  const handleOwl = () => {
    setOwl("owl-1.svg");
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-saffron-500 max-h-[calc(100vh_-_96px)] relativeslideinbottom 2s ease-in-out forward overflow-y-hidden">
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-52 left-0 hidden sm:inline-block"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-52 right-0 -scale-x-100 hidden sm:inline-block"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-52 bottom-0 -scale-y-100 "
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-52 bottom-0 right-0 -scale-y-100 -scale-x-100"
        />
        {/* <Image
          src="borders.svg"
          width={100}
          height={100}
          alt=""
          className="absolute w-36 lg:w-40 xl:w-52 bottom-0 -scale-y-100 "
        /> */}

        <div className="grid grid-cols-12 grid-rows-6 max-w-7xl m-auto max-h-[calc(100vh_-_96px)]  bg-saffron-500 z-10 pt-8 transition ">
          <div className="owl relative -ml-8 -mt-8  col-start-2 col-end-12 sm:col-end-5 md:col-end-6  row-start-1 row-end-7 flex items-center justify-center animate-slideinleft w-0 md:w-80 lg:w-96 overflow-hidden transition-all duration-300">
            <Image
              src={owl}
              alt=""
              width={500}
              height={500}
              onClick={handleOwl}
              className="animate-slideinleft"
            />
          </div>
          <div className="cloud col-start-9 col-end-12 md:col-start-5 md:col-end-7   items-start md:items-end sm:-mt-4 hidden md:flex row-start-2 md:row-start-2 z-[11]">
            <Image src="Cloud.svg" alt="" width={500} height={500} />
          </div>
          <div className="Faqs  z-10 col-span-10  col-start-2 md:col-start-7 lg:col-start-7 col-end-12  row-start-2 animate-slideinbottom">
            <FaqContainer setOwl={setOwl} />
          </div>
          <div className="row-start-1 row-span-1 col-span-full flex mb-3 sm:hidden">
            <Image
              src={owl}
              alt=""
              width={500}
              height={500}
              onClick={handleOwl}
              className="animate-slideinleft relative -ml-6"
            />
            <Image
              src="Cloud.svg"
              alt=""
              width={50}
              height={50}
              className="absolute left-[55%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
