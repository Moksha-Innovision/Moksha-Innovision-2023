import Image from "next/image";

interface Props {
  slide?: {
    title: string;
    description: string;
    poster: string;
    regLink: string;
  };
}
const EventCaroselSlides = ({ slide }: Props) => {
  return (
    <div className="bg-white min-h-30vh">
      <div className="md:w-[100%] md:h-[100%] w-[200%] h-[200%]">
        <Image
          src={`events/${slide?.poster}`}
          alt={"blur"}
          width={100}
          height={100}
          className=" w-[100%] h-[100%] "
        />
      </div>
      <div className="absolute h-[100%] w-[100%] flex flex-col justify-end pb-10 pl-20 md:pl-26 bg-[#12123470] top-0 text-white ">
        <div className="lg:w-[40%] md:w-[50%] w-[70%]">
          <div className="text-4xl md:text-5xl mb-1 tracking-wide">
            {slide?.title}
          </div>
          <div className="text-sm font-thin ">{slide?.description}</div>
          <div
            className="text-prussian-blue-1000 rounded-md tracking-wide hover:cursor-pointer hover:scale-[1.01] hover:drop-shadow-lowGlowtext 
                    transition-[filter,transform] shadow-soft mt-3 text-lg md:text-xl bg-white w-fit px-5 py-1 "
          >
            {slide?.regLink}Register Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCaroselSlides;
