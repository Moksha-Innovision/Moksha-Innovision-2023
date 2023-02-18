// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay } from "swiper";
import LandingSponserSlide from "./LandingSponserSlide";

const LandingSponsers = () => {
  return (
    <div className="relative -top-10 pt-[15%]">
      <h1 className="mb-7 flex flex-col  items-center text-center   text-4xl text-white drop-shadow-lowGlowtext md:mb-6 lg:text-5xl ">
        <div className="">SPONSORS</div>
        <Image
          src="/underline.svg"
          width={100}
          height={20}
          alt={"underlien "}
          className={`b-2 inline w-24 scale-150`}
        />
      </h1>
      <div className="swiper-box mx-auto my-5  h-[200px]  w-[100%] overflow-hidden rounded-md p-5 ring-offset-4 ">
        <Swiper
          spaceBetween={30}
          slidesPerGroup={1}
          slidesPerView="auto"
          speed={2000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          /*pagination={{
                      clickable: true,
                    }}*/
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((p: any, i) => {
            return (
              <SwiperSlide>
                <div className="flex justify-center">
                  <LandingSponserSlide />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default LandingSponsers;
