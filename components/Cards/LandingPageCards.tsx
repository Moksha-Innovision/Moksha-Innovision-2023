import { Koulen } from "@next/font/google";
import Tilt from "react-parallax-tilt";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });
// Import Swiper styles
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  SwiperBtnnxtland,
  SwiperBtnPreland,
} from "../ui/newEventPage/SwiperBtn";

type Props = {};

const LandingPageCards = ({ setPop }: any) => {
  return (
    <div className="popup  flex h-full  w-full flex-col items-center justify-center    p-10 text-5xl md:h-full ">
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1500}
        glareEnable={true}
        glareMaxOpacity={0.05}
        glarePosition="all"
        glareColor="gold"
        className="grid  h-full w-full cursor-pointer place-items-center rounded-3xl bg-yellow-700 bg-opacity-10 text-white shadow-soft  backdrop-blur-[8px]"
      >
        <AiOutlineClose
          className="fixed right-3 top-3 z-[2] opacity-40 transition-[opacity] duration-150 hover:opacity-100"
          onClick={() => {
            setPop("");
          }}
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-full w-[80vw] md:w-[25vw] lg:w-[28vw]"
        >
          <div className=" absolute bottom-4 z-[1] flex   w-full items-center justify-between px-[2%] ">
            <SwiperBtnPreland className={"w-[50px]"} />
            <SwiperBtnnxtland className={"w-[50px]"} />
          </div>
          <SwiperSlide className=" ">
            <div className="relative  flex h-full max-h-[70vh] w-full flex-col  items-center pb-4  text-white md:max-h-[100vh]">
              <div className="   flex flex-col items-center justify-center pt-10 text-center text-4xl md:text-3xl lg:text-5xl">
                ABOUT US
                <Image
                  src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests//underline.svg"
                  width={100}
                  height={20}
                  alt={"underlien "}
                  className={`w-full`}
                />
              </div>
              <div className="sfsdf lg: my-8 mx-10     space-y-1 overflow-y-scroll  text-[17px] leading-[21px] md:h-[60%] lg:h-[70%]">
                <p className="">
                  Moksha, the annual cultural festival of Netaji Subhas
                  University of Technology &#91;NSUT&#93;, &#91;formerly NSIT,
                  University of Delhi&#93;, was inaugurated in 2003. It is
                  organised in the month of March and is a three-day national
                  cultural extravaganza held at NSUT.
                </p>

                <p className="pt-2">
                  &nbsp;Moksha involves participation from colleges from all
                  over India, making it one of the largest college festivals of
                  North India. In it&apos;s previous iterations, Moksha has
                  witnessed a grand participation and a huge footfall in
                  multifarious events and competitions.
                </p>
                <p className="pt-2">
                  Moksha observes an average footfall of over 70,000 students
                  over the span of 3 days. The event has been graced by the
                  likes of KK, Divine, Ritviz, Nucleya, Bohemia, Shaan, Edward
                  Maya, Kailash Kher, Mohit Chauhan, Akcent, The Indian Ocean,
                  Salim&#8209;Sulaiman, Monali Thakur, Sunburn Campus,
                  Tomorrowland&apos;s DJ&apos;s and many more exotic artists &
                  Comedians.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className="relative flex h-full max-h-[70vh] w-full flex-col items-center pb-5  text-white  md:max-h-[100vh] ">
              <div className="flex   flex-col items-center justify-center pt-10 text-center text-4xl md:text-3xl lg:text-5xl ">
                About Us
                <Image
                  src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests//underline.svg"
                  width={100}
                  height={20}
                  alt={"underlien "}
                  className={`w-full`}
                />
              </div>
              <div className="sfsdf lg: mx-10 mb-6 flex    flex-col justify-around space-y-1 overflow-y-scroll pt-2  text-[17px] leading-[21px] md:h-[60%] lg:h-[70%]">
                <div className="">
                  <div className="flex   flex-col items-center justify-center pt-2 text-center text-3xl md:text-3xl lg:text-5xl">
                    <div className="text-4xl md:text-3xl lg:text-5xl">
                      100 +
                    </div>
                    <div className="">Events</div>
                  </div>
                  <p className="">
                    Though every event of ours comes off in flying colours, but
                    if it would&apos;ve meant literally, we would have been the
                    most beautiful and colourful painting of all time.
                  </p>
                </div>
                <div className="">
                  <div className="flex   flex-col items-center justify-center pt-5 text-center text-3xl md:text-3xl lg:text-5xl">
                    <div className="text-4xl md:text-3xl lg:text-5xl">50K+</div>
                    <div className="">Footfall</div>
                  </div>
                  <p className="">
                    Though every event of ours comes off in flying colours, but
                    if it would&apos;ve meant literally, we would have been the
                    most beautiful and colourful painting of all time.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className="relative flex h-full max-h-[70vh] w-full flex-col items-center pb-4  text-white  md:max-h-[100vh] ">
              <div className="flex   flex-col items-center justify-center pt-10 text-center text-4xl md:text-3xl lg:text-5xl ">
                About Us
                <Image
                  src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests//underline.svg"
                  width={100}
                  height={20}
                  alt={"underlien "}
                  className={`w-full`}
                />
              </div>
              <div className="sfsdf lg:  mx-10 mb-6  flex flex-col justify-around space-y-1 overflow-y-scroll  pt-2 text-[17px] leading-[21px] md:h-[60%] lg:h-[70%]">
                <div className="">
                  <div className="flex   flex-col items-center justify-center pt-2 text-center text-3xl md:text-3xl lg:text-5xl">
                    <div className="text-4xl md:text-3xl lg:text-5xl">
                      100 +
                    </div>
                    <div className="">Colleges</div>
                  </div>
                  <p className="">
                    Though every participating college unleashes the spirit of
                    an animal in our events, but if it would&apos;ve meant
                    literally, we would have been the biggest zoo.
                  </p>
                </div>
                <div className="">
                  <div className="flex   flex-col items-center justify-center pt-5 text-center text-3xl md:text-3xl lg:text-5xl">
                    <div className="text-4xl md:text-3xl lg:text-5xl">30+</div>
                    <div className="">Sponsors</div>
                  </div>
                  <p className="">
                    Though every sponsor of ours is a current or future unicorn
                    itself, but if it would&apos;ve meant literally, we would
                    have been the most heavenly fairytale.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Tilt>
    </div>
  );
};
{
  /*
  <div className="popup  flex h-full w-full flex-col items-center justify-center    p-10 text-5xl md:h-full ">
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1500}
        glareEnable={true}
        glareMaxOpacity={0.05}
        glarePosition="all"
        glareColor="gold"
        className="grid  h-full w-full cursor-pointer place-items-center rounded-3xl bg-yellow-700 bg-opacity-10 shadow-soft backdrop-blur-[8px]  "
      >
        <div className="relative flex h-full max-h-[70vh] w-full flex-col items-center  text-white  md:max-h-[100vh]">
          <AiOutlineClose
            className="fixed right-3 top-3 opacity-40 transition-[opacity] duration-150 hover:opacity-100"
            onClick={() => {
              setPop("");
            }}
          />
          <div className="flex   flex-col items-center justify-center pt-10 text-center text-4xl md:text-3xl lg:text-5xl ">
            ABOUT US
            <Image
              src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests//underline.svg"
              width={100}
              height={20}
              alt={"underlien "}
              className={`w-full`}
            />
          </div>
          <div className="sfsdf lg: my-8 mx-10    space-y-1 overflow-y-scroll  text-[17px] leading-[21px] md:h-[60%] lg:h-[70%]">
            <p className="">
              Moksha, the annual cultural festival of Netaji Subhas University
              of Technology &#91;NSUT&#93;, &#91;formerly NSIT, University of
              Delhi&#93;, was inaugurated in 2003. It is organised in the month
              of March and is a three-day national cultural extravaganza held at
              NSUT.
            </p>

            <p className="pt-2">
              &nbsp;Moksha involves participation from colleges from all over
              India, making it one of the largest college festivals of North
              India. In it&apos;s previous iterations, Moksha has witnessed a
              grand participation and a huge footfall in multifarious events and
              competitions.
            </p>
            <p className="pt-2">
              Moksha observes an average footfall of over 70,000 students over
              the span of 3 days. The event has been graced by the likes of KK,
              Divine, Ritviz, Nucleya, Bohemia, Shaan, Edward Maya, Kailash
              Kher, Mohit Chauhan, Akcent, The Indian Ocean,
              Salim&#8209;Sulaiman, Monali Thakur, Sunburn Campus,
              Tomorrowland&apos;s DJ&apos;s and many more exotic artists &
              Comedians.
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  */
}
export default LandingPageCards;
