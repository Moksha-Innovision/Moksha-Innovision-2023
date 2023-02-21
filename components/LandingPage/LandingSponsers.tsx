// Import Swiper React components
import Marquee from "react-fast-marquee";
import SliderSlide from "../Sponser/SliderSlide";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";

const LandingSponsers = () => {
  //const spons = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const spons = [
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/aakash.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/BaskinRobbins.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/bingo.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/careerlauncher.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/codingblocks.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/indianoil.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/indigo.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/lakme.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/Maybelline.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/pizzahut.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/radisson.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/royalenfield.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/sbi.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/smaash.svg",
    "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/PastSponsers/thehindu.svg",
  ];

  // return (
  //   <div className="z-10 h-full  min-h-[10vh]">
  //     <h1 className="mb-7 flex flex-col  items-center text-center   text-4xl text-white drop-shadow-lowGlowtext md:mb-6 lg:text-5xl ">
  //       <div className="">SPONSORS</div>
  //       <Image
  //         src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/underline.svg"
  //         width={100}
  //         height={20}
  //         alt={"underlien "}
  //         className={`b-2 inline w-24 scale-150`}
  //       />
  //     </h1>
  //     <div className="swiper-box mx-auto my-5  h-[200px]   w-[150%] overflow-hidden rounded-md ring-offset-4 ">
  //       <Swiper
  //         spaceBetween={30}
  //         slidesPerGroup={1}
  //         slidesPerView="auto"
  //         speed={2000}
  //         autoplay={{
  //           delay: 0,
  //           disableOnInteraction: false,
  //         }}
  //         loop={true}
  //         loopFillGroupWithBlank={true}
  //         /*pagination={{
  //                     clickable: true,
  //                   }}*/
  //         breakpoints={{
  //           0: {
  //             slidesPerView: 3,
  //             spaceBetween: 30,
  //           },
  //           640: {
  //             slidesPerView: 5,
  //             spaceBetween: 30,
  //           },
  //           768: {
  //             slidesPerView: 6,
  //             spaceBetween: 40,
  //           },
  //           1024: {
  //             slidesPerView: 7,
  //             spaceBetween: 50,
  //           },
  //         }}
  //         modules={[Autoplay]}
  //         className="mySwiper"
  //       >
  //         {spons.map((p: any, i) => {
  //           return (
  //             <SwiperSlide key={i}>
  //               <div className="flex h-40 items-center justify-center">
  //                 {/*<LandingSponserSlide />*/}
  //                 {
  //                   <SliderSlide key={i} className="h-32 ">
  //                     Sponser {i}
  //                   </SliderSlide>
  //                 }
  //               </div>
  //             </SwiperSlide>
  //           );
  //         })}
  //       </Swiper>
  //     </div>
  //   </div>
  // );

  return (
    <>
      <h1 className="mb-7 flex flex-col  items-center text-center   text-4xl text-white drop-shadow-lowGlowtext md:mb-6 lg:text-5xl ">
        <div className="">SPONSORS</div>
        <Image
          src="https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/underline.svg"
          width={100}
          height={20}
          alt={"underlien "}
          className={`b-2 inline w-24 scale-150`}
        />
      </h1>
      <Marquee speed={50} gradient={false} style={{ marginBottom: "40px" }}>
        {spons.map((a, i) => (
          <SliderSlide
            key={i}
            className={"mr-12 h-36 w-60 p-2 sm:h-40 sm:w-72 md:mr-20"}
          >
            <Image
              src={a}
              width={100}
              height={100}
              alt={"sponser"}
              className={`h-full w-full`}
            />
          </SliderSlide>
        ))}
      </Marquee>
    </>
  );
};

export default LandingSponsers;
