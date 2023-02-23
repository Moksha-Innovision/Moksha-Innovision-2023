import Image from "next/image";
import { useSwiper } from "swiper/react";

const SwiperBtnnxt = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="z-10 h-full w-full rotate-180 opacity-[35%] transition-[opacity,_trasnlate] duration-100 hover:scale-105 hover:cursor-pointer hover:opacity-80 "
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <Image
          src={
            "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/events/arrow.svg"
          }
          alt={"asfa"}
          height={100}
          width={100}
          className="h-[60%] w-[60%]"
        />
      </div>
    </div>
  );
};

const SwiperBtnPre = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="z-10 h-full w-full  opacity-[35%] transition-[opacity,_trasnlate] duration-100 hover:scale-105 hover:cursor-pointer hover:opacity-80 "
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <Image
          src={
            "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/events/arrow.svg"
          }
          alt={"asfa"}
          height={100}
          width={100}
          className="h-[60%] w-[60%]"
        />
      </div>
    </div>
  );
};

const SwiperBtnnxtland = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="z-10 flex h-full w-full rotate-180 scale-[0.8] items-center opacity-[80%]  transition-[opacity,_transform] duration-100 hover:scale-100 hover:cursor-pointer hover:opacity-80 sm:scale-100 md:hover:scale-105"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <Image
          src={
            "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/events/arrow.svg"
          }
          alt={"asfa"}
          height={100}
          width={100}
          className="h-[20%] w-[20%]"
        />
        <div className="rotate-180 text-lg">next</div>
      </div>
    </div>
  );
};

const SwiperBtnPreland = ({ className }: any) => {
  const swiper = useSwiper();
  return (
    <div className={className}>
      <div
        className="z-10 flex h-full  w-full scale-[0.8] items-center opacity-[80%] transition-[opacity,_transform] duration-100 hover:scale-100  hover:cursor-pointer hover:opacity-80  sm:scale-100 md:hover:scale-105"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <Image
          src={
            "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/events/arrow.svg"
          }
          alt={"asfa"}
          height={100}
          width={100}
          className="h-[20%] w-[20%]"
        />
        <div className="text-lg">previous</div>
      </div>
    </div>
  );
};

export { SwiperBtnPre, SwiperBtnnxt, SwiperBtnnxtland, SwiperBtnPreland };
