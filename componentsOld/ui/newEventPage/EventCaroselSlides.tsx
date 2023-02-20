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
    <div className="min-h-30vh relative bg-white ">
      <div className=" h-[200%] w-[200%] md:h-[150%] md:w-[150%] lg:h-[100%] lg:w-[100%]">
        <Image
          src={`events/${slide?.poster}`}
          alt={"blur"}
          width={100}
          height={100}
          className=" h-[100%] w-[100%] "
        />
      </div>
      <div className="md:pl-26 absolute top-0 flex h-[100%] w-[100%] flex-col justify-end bg-[#12123470] pb-10 pl-20 text-white ">
        <div className="w-[70%] md:w-[50%] lg:w-[40%]">
          <div className="mb-1 text-3xl tracking-wide sm:text-4xl md:text-5xl">
            {slide?.title}
          </div>
          <div className="text-xs font-light sm:text-sm ">
            {slide?.description}
          </div>
          <div
            className="mt-3 w-fit rounded-md bg-white px-5 py-1 
                    text-lg tracking-wide text-prussian-blue-1000 shadow-soft transition-[filter,transform] hover:scale-[1.01] hover:cursor-pointer hover:drop-shadow-lowGlowtext md:text-xl "
          >
            {slide?.regLink}Register Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCaroselSlides;
