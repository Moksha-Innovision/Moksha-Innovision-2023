import React, {
  LegacyRef,
  MutableRefObject,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import FaqContainer from "../components/ui/FaqContainer/FaqContainer";
import Image from "next/image";
import { gsap } from "gsap";
import Navbar from "../components/ui/Navbar/Navbar";
type Props = {};

const Faq = (props: Props) => {
  const [owl, setOwl] = useState("owl.svg");

  const handleOwl = () => {
    setOwl("owl-1.svg");
  };

  const containerRef: any = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".owl-big", {
        rotation: 30,
        opacity: 0,
        x: -200,
        duration: 0.5,
        delay: 1,
      });
      gsap.from(".cloud-big", {
        y: -300,
        opacity: 0,
        delay: 1.5,
        ease: "elastic",
        duration: 1.5,
      });

      gsap.from(".faq-container", {
        x: 500,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "expo",
      });

      gsap.from(
        [
          ".borders-1",
          ".borders-2",
          ".borders-3",
          ".borders-4",
          ".cloud-small",
          ".owl-small",
        ],
        {
          scale: 0,
          duration: 1,
          opacity: 0,
          delay: 0,
          stagger: 0.1,
          ease: "expo",
        }
      );
    }, containerRef);

    return () => {
      return ctx.revert();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="w-full bg-saffron-500  relative slideinbottom 2s ease-in-out forward "
        ref={containerRef}
      >
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 left-0 hidden sm:inline-block borders-1"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 right-0 -scale-x-100 hidden sm:inline-block borders-2"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 -scale-y-100  borders-3"
        />
        <Image
          src="borders.svg"
          width={100}
          height={100}
          alt="border"
          className="absolute w-28 lg:w-40 xl:w-44 bottom-0 right-0 -scale-y-100 -scale-x-100 borders-4"
        />
        {/* <Image
          src="borders.svg"
          width={100}
          height={100}
          alt=""
          className="absolute w-36 lg:w-40 xl:w-52 bottom-0 -scale-y-100 "
        /> */}

        <div className="grid grid-cols-12 grid-rows-6 max-w-7xl m-auto h-[93vh] bg-saffron-500 z-10 pt-8 transition ">
          <div className="owl relative -ml-8 -mt-8  col-start-2 col-end-12 sm:col-end-5 md:col-end-6  row-start-1 row-end-7 flex items-center justify-center  w-0 md:w-80 lg:w-96  transition-all duration-300">
            <Image
              src={owl}
              alt=""
              width={500}
              height={500}
              onClick={handleOwl}
              className=" owl-big"
            />
          </div>
          <div className="cloud col-start-9 col-end-12 md:col-start-5 md:col-end-7   items-start md:items-end sm:-mt-4 hidden md:flex row-start-2 md:row-start-2 z-[11]">
            <Image
              src="Cloud.svg"
              alt=""
              width={500}
              height={500}
              className="cloud-big"
            />
          </div>
          <div className="Faqs  z-10 col-span-10  col-start-2 md:col-start-7 lg:col-start-7 col-end-12  row-start-2 faq-container">
            <FaqContainer setOwl={setOwl} />
          </div>
          <div className="row-start-1 row-span-1 col-span-full flex mb-3 sm:hidden">
            <Image
              src={owl}
              alt=""
              width={500}
              height={500}
              onClick={handleOwl}
              className=" relative -ml-6 owl-small"
            />
            <Image
              src="Cloud.svg"
              alt=""
              width={50}
              height={50}
              className="absolute left-[55%] cloud-small"
            />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Faq;
