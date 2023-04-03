// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { useEffect } from "react";
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination } from "swiper";
import EventCaroselSlides from "./EventCaroselSlides";
import { SwiperBtnnxt, SwiperBtnPre } from "./SwiperBtn";
const slides = [
  {
    title: "SILENT DJ",
    description:
      "Silent DJ is a unique party concept where guests wear wireless headphones to listen to music,creating a silent atmosphere",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Silent DJ is a unique party concept where guests wear wireless headphones to listen to music,creating a silent atmosphere",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Silent DJ is a unique party concept where guests wear wireless headphones to listen to music,creating a silent atmosphere",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Silent DJ is a unique party concept where guests wear wireless headphones to listen to music,creating a silent atmosphere",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Silent DJ is a unique party concept where guests wear wireless headphones to listen to music,creating a silent atmosphere",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Silent DJ is a unique party concept where guests wear wireless headphones to listen to music,creating a silent atmosphere",
    poster: "caroselSlide.svg",
    regLink: "",
  },
];
const EventCarosel = ({ data }: any) => {
  useEffect(() => {
    console.log("data got:", data);
  }, []);
  return (
    <div className="relative mx-[2vw] min-h-[20vh] w-[100vw] overflow-hidden">
      <Swiper
        centeredSlides={true}
        loopFillGroupWithBlank={true}
        effect={"fade"}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, EffectFade, Autoplay, Pagination, Keyboard]}
        className="mySwiper"
      >
        <div className=" absolute top-0 z-10 flex h-full   items-center justify-between px-[2%] ">
          <SwiperBtnPre className={"w-[50px]"} />
        </div>
        <div className=" absolute top-0 right-0 z-10 flex h-full   items-center justify-between px-[2%] ">
          <SwiperBtnnxt className={"w-[50px]"} />
        </div>
        {data &&
          data.map((slide: any, i: any) => {
            return (
              <SwiperSlide key={i}>
                <EventCaroselSlides slide={slide}></EventCaroselSlides>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};
/**
 *       <Swiper
        centeredSlides={true}
        loopFillGroupWithBlank={true}
        effect={"fade"}
       
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        modules={[
          EffectFade,
          Navigation,
          Autoplay,
          Pagination,
          Mousewheel,
          Keyboard,
        ]}
        className="mySwiper"
      >
        <div className=" absolute top-0 z-10 flex h-full   items-center justify-between px-[2%] ">
          <SwiperBtnPre className={"w-[50px]"} />
        </div>
        <div className=" absolute top-0 right-0 z-10 flex h-full   items-center justify-between px-[2%] ">
          <SwiperBtnnxt className={"w-[50px]"} />
        </div>
        {data.map((slide: any, i: any) => {
          return (
            <SwiperSlide key={i}>
              <EventCaroselSlides slide={slide}></EventCaroselSlides>
            </SwiperSlide>
          );
        })}
      </Swiper>
 */
export default EventCarosel;
