import Image from "next/image";
import SliderSlide from "./SliderSlide";

const SponseBlock = ({ children, className, title, images }: any) => {
  return (
    <div
      className={`h-full w-full  flex-col  items-center  justify-center ${className} `}
    >
      <h1 className=" mb-1 mt-4 flex   flex-col items-center text-center   text-4xl text-white  md:mb-2   md:text-6xl lg:mb-3 ">
        {title}
      </h1>
      <div className="flex w-full justify-center">
        <div className="sponsors col-span-2 my-8 flex w-full flex-wrap justify-center gap-5 px-6 pb-10 md:gap-8 md:pb-14 lg:gap-12">
          {images.map((a: any, i: any) => (
            <SliderSlide key={i} className={"h-36 w-60 p-2 sm:h-40 sm:w-72"}>
              <Image
                src={a}
                width={100}
                height={100}
                alt={"sponser"}
                className={`h-full w-full`}
              />
            </SliderSlide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponseBlock;
