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
        className="relative w-full  bg-prussian-blue-1000  pt-[7vh]"
        ref={containerRef}
      >
        <div className="z-10 m-auto grid h-[93vh] max-w-7xl grid-cols-12 grid-rows-6 bg-prussian-blue-1000 pt-8 transition ">
          <div className="owl relative col-start-2 col-end-12  row-start-1 row-end-7 -ml-8 -mt-8  flex w-0 items-center justify-center sm:col-end-5  md:col-end-6 md:w-80 lg:w-96  ">
            <Image
              src={"peacock.svg"}
              alt=""
              width={500}
              height={500}
              className=" owl-big"
            />
          </div>
          <div className="cloud z-[11] col-start-9 col-end-12 row-start-2   hidden items-start sm:-mt-4 md:col-start-5 md:col-end-7 md:row-start-2 md:flex md:items-end"></div>
          <div className="Faqs  faq-container z-10  col-span-10 col-start-2 col-end-12 row-start-3  md:col-start-7 md:row-start-2 lg:col-start-7">
            <FaqContainer />
          </div>
          <div className="col-span-full row-span-2 row-start-1 mx-auto mb-3 flex sm:hidden">
            <Image
              src={"peacock.svg"}
              alt=""
              width={500}
              height={500}
              className=" owl-small relative"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
