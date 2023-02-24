// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
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
const EventCarosel = () => {
  return (
    <div className="relative mx-[2vw] min-h-[20vh] w-[100vw] overflow-hidden">
      <Swiper
        centeredSlides={true}
        loopFillGroupWithBlank={true}
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div className=" absolute top-0 z-10 flex h-full   items-center justify-between px-[2%] ">
          <SwiperBtnPre className={"w-[50px]"} />
        </div>
        <div className=" absolute top-0 right-0 z-10 flex h-full   items-center justify-between px-[2%] ">
          <SwiperBtnnxt className={"w-[50px]"} />
        </div>
        {slides.map((slide, i) => {
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

export default EventCarosel;
