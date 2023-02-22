// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { useState } from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import LegacyCards from "./LegacyCards";
import { SwiperButtonNxt, SwiperButtonPre } from "./SwiperButton";

const artists = [
  {
    name: "KK",
    event: "fahrenheit",
    img: "KK 1.svg",
  },
  {
    name: "WCMT",
    event: "Bandnight",
    img: "loststories_11zon 1.svg",
  },
  {
    name: "Salim–Sulaiman",
    event: "PRONITE-MOKSHA",
    img: "ls2_11zon 1.svg",
  },
  {
    name: "Sunburn",
    event: "LOAST",
    img: "roy_11zon 1.svg",
  },
  {
    name: "Biswa",
    event: "HUMOUR FEST",
    img: "biswa.svg",
  },
  {
    name: "KK",
    event: "fahrenheit",
    img: "KK 1.svg",
  },
  {
    name: "WCMT",
    event: "Bandnight",
    img: "loststories_11zon 1.svg",
  },
  {
    name: "Salim–Sulaiman",
    event: "PRONITE-MOKSHA",
    img: "ls2_11zon 1.svg",
  },
  {
    name: "Sunburn",
    event: "LOAST",
    img: "roy_11zon 1.svg",
  },
  {
    name: "Biswa",
    event: "HUMOUR FEST",
    img: "biswa.svg",
  },
];

const LegacyCarosel = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className=" w-[100vw] ">
      <Swiper
        //slidesPerView={5}
        loop={true}
        slidesPerView="auto"
        centeredSlides
        speed={400}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Navigation, A11y]}
        className="mySwiper"
      >
        <div className=" absolute top-[30%] z-10 flex w-full  justify-center ">
          <SwiperButtonPre className={"w-[50px]"} />
          <div className="w-[150px] md:w-[200px] lg:w-[250px]"></div>
          <SwiperButtonNxt className={"w-[50px]"} />
        </div>
        {artists.map((A: any, i) => {
          return (
            <SwiperSlide key={i} className=" flex justify-center ">
              {({ isActive }) => {
                isActive && setActive(i);
                //console.log(active);
                return <LegacyCards artist={A} id={i} active={active} />;
              }}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LegacyCarosel;
