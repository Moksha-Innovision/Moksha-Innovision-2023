import Image from "next/image";
import LegacyCarosel from "./LegacyCarosel";
import  {Parallax}  from "react-scroll-parallax";


const Legacy = () => {




  return (
    <div
      draggable={false}
      className=" relative min-h-[60vh] w-[100vw] bg-black  bg-cover  bg-repeat md:h-[80vh] lg:h-[100vh]"
    >
      <Parallax speed={0} className='absolute top-0 object-cover h-full w-full contrast-100'>

        <video autoPlay loop muted className="absolute top-0 object-cover h-full w-full contrast-100"
        >
          <source src="/output(compress-video-online.com).webm" type="video/webm"></source>
        </video>
      <div className=" bg-gradient-to-t from-[rgba(2,3,4,0.5)] via-[rgba(1,2,4,0.3)]  to-[rgba(0,0,0)] backdrop-blur-sm absolute top-0 object-cover h-full w-full pointer-events-none">
      </div>
      </Parallax>

     
      <div className="absolute -bottom-[40vh] flex w-full justify-center lg:-bottom-[46vh]">
        <div className="h-[80vh] min-h-[500px] w-[80vw] min-w-[500px] animate-wheel lg:min-h-[700px]   lg:min-w-[700px]">
          <Image
            src={
              "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/Legecyrot.svg"
            }
            width={100}
            height={100}
            alt={"cross modal"}
            className="h-full w-full opacity-60"
            quality={1}
          />
        </div>
      </div>

     
      <div className="absolute bottom-0">
        <LegacyCarosel />
      </div>
      
    </div>
  );
};

export default Legacy;
