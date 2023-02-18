import Image from "next/image";
import { useRef } from "react";
import FaqContainer from "../components/Faq/FaqContainer";
import Navbar from "../components/ui/Navbar/Navbar";
type Props = {};

const Faq = (props: Props) => {
  const containerRef: any = useRef();

  return (
    <>
      <Navbar />
      <div
        className="w-full bg-prussian-blue-1000  relative  pt-[7vh]"
        ref={containerRef}
      >
        <div className="grid grid-cols-12 grid-rows-6 max-w-7xl m-auto h-[93vh] bg-prussian-blue-1000 z-10 pt-8 transition ">
          <div className="owl relative -ml-8 -mt-8  col-start-2 col-end-12 sm:col-end-5 md:col-end-6  row-start-1 row-end-7 flex items-center justify-center  w-0 md:w-80 lg:w-96  ">
            <Image
              src={"peacock.svg"}
              alt=""
              width={500}
              height={500}
              className=" owl-big"
            />
          </div>
          <div className="cloud col-start-9 col-end-12 md:col-start-5 md:col-end-7   items-start md:items-end sm:-mt-4 hidden md:flex row-start-2 md:row-start-2 z-[11]"></div>
          <div className="Faqs  z-10 col-span-10  col-start-2 md:col-start-7 lg:col-start-7 col-end-12  row-start-3 md:row-start-2 faq-container">
            <FaqContainer />
          </div>
          <div className="row-start-1 row-span-2 col-span-full flex mb-3 mx-auto sm:hidden">
            <Image
              src={"peacock.svg"}
              alt=""
              width={500}
              height={500}
              className=" relative owl-small"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
