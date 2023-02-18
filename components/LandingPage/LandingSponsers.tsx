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
            <h1 className="text-4xl lg:text-5xl text-center  mb-7 md:mb-6   drop-shadow-lowGlowtext flex flex-col items-center text-white ">
                <div className="">
                    SPONSORS
                </div>
                <Image
                    src="/underline.svg"
                    width={100}
                    height={20}
                    alt={"underlien "}
                    className={`b-2 inline scale-150 w-24`}
                />
            </h1>
            <div className="w-[100%] h-[200px] mx-auto  ring-offset-4  p-5 my-5 rounded-md overflow-hidden swiper-box ">

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
                        }
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                            (p: any, i) => {
                                return (
                                    <SwiperSlide>
                                        <div className="flex justify-center">
                                            <LandingSponserSlide />
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        )
                    }


                </Swiper>
            </div>
        </div>
    )
}

export default LandingSponsers

