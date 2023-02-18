import Image from "next/image"
import EventCarosel from "../ui/newEventPage/EventCarosel"

const LandingEvent = () => {
    return (
        <div className=" relative -top-10 bg-LandingEvent z-10 h-[100vh] bg-cover bg-top bg-no-repeat  w-[110vw] pt-[25%]">
            <h1 className="text-4xl lg:text-5xl text-center  mb-7 md:mb-6  drop-shadow-lowGlowtext flex flex-col items-center text-white ">
                <div className="">
                    EVENTS
                </div>
                <Image
                    src="/underline.svg"
                    width={100}
                    height={20}
                    alt={"underlien "}
                    className={`b-2 inline scale-150 w-24`}
                />
            </h1>

            <div className="">
                <EventCarosel></EventCarosel>
            </div>
        </div>
    )
}

export default LandingEvent
/*
 <Image
                width={100}
                height={100}
                src={'/Landing/Mask group.svg'}
                alt={'s'}
            />*/