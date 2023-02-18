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
const slides = [
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    poster: "caroselSlide.svg",
    regLink: "",
  },
  {
    title: "SILENT DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
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
