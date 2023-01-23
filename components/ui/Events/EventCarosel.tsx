import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import EventCards from "./EventCards";


interface Props {
  events?: { name: string; img: string }[];
  day: string;
}
const EventCarosel = ({ events, day }: Props) => {
  const nextRef = useRef<any>()
  const prevRef = useRef<any>()
  useEffect(() => {

  })
  const [active, setActive] = useState();
  return (
    <div className="relative w-[94vw] mx-[3vw] overflow-hidden">
      <Image

        src={"blur.svg"}
        alt={"blur"}
        width={100}
        height={100}
        className=" absolute z-10 w-96 h-96 -right-48 lg:-right-44  top-8 "
      />
      <Image
        src={"blur.svg"}
        alt={"blur"}
        width={100}
        height={100}
        className=" absolute z-10 w-96 h-96 lg:-left-44  -left-48 top-8 "
      />

      <div className=" flex justify-center relative ">
        <Swiper
          slidesPerGroup={1}
          slidesPerView="auto"
          spaceBetween={200}
          centeredSlides={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}

          navigation={true}

          lazy={true}
          loop={true}
          loopFillGroupWithBlank={true}
          /*pagination={{
          clickable: true,
        }}*/
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            800: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1424: {
              slidesPerView: 5,
            }
          }}

          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper "
        >
          {events?.map((e, i) => {
            return <SwiperSlide>
              {({ isActive }) => (
                <EventCards event={e} key={i} active={isActive} />
              )}
            </SwiperSlide>;
          })}
        </Swiper>
      </div>

    </div >
  )
  /*<div className="flex justify-center items-center  space-x-16 ">
        
      </div>
       <div className=" flex items-center justify-center">
        {/* 1. }
        <div className="w-[200%]  h-[60vh] overflow-hidden relative">
          {/* 2. }
          <div className="w-[200%] flex items-center h-[60vh] justify-around absolute left-0 animate-carosel gap-20 animate">
            {/* 3 }
            {events?.map((e, i) => {
              return <EventCards event={e} key={i} active={i + 1 == active} />;
            })}
            {events?.map((e, i) => {
              return <EventCards event={e} key={i} active={i + 1 == active} />;
            })}
          </div>
        </div>
      </div>*/;
};
const arrow = () => {
  return (
    <div className=""></div>
  )
}

export default EventCarosel;
