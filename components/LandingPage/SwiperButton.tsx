import Image from "next/image";
import { useSwiper } from "swiper/react";

const SwiperButtonNxt = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="z-10 h-full w-full hover:scale-105 hover:cursor-pointer "
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <Image
          src={
            "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/arrownxt.svg"
          }
          alt={"asfa"}
          height={100}
          width={100}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};
const SwiperButtonPre = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="z-10 h-full w-full rotate-180 hover:scale-105 hover:cursor-pointer"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <Image
          src={
            "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/arrownxt.svg"
          }
          alt={"asfa"}
          height={100}
          width={100}
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export { SwiperButtonNxt, SwiperButtonPre };
