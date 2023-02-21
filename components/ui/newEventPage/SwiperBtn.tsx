import Image from "next/image";
import { useSwiper } from "swiper/react";

const SwiperBtnnxt = ({ className }: any) => {
    const swiper = useSwiper();
    return (
        <div className={className}>
            <div
                className="z-10 h-full w-full hover:scale-105 rotate-180 hover:cursor-pointer opacity-[35%] hover:opacity-80 transition-[opacity,_trasnlate] duration-100 "
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
                className="z-10 h-full w-full  hover:scale-105 hover:cursor-pointer opacity-[35%] hover:opacity-80 transition-[opacity,_trasnlate] duration-100 "
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




export { SwiperBtnPre, SwiperBtnnxt };

