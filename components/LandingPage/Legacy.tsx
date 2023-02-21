import Image from "next/image";
import LegacyCarosel from "./LegacyCarosel";

const Legacy = () => {
  return (
    <div draggable={false} className=" relative min-h-[60vh] w-[100vw] bg-black bg-legacy bg-cover  bg-repeat md:h-[80vh] lg:h-[100vh]">
      <div className="absolute -bottom-[40vh] flex w-full justify-center lg:-bottom-[46vh]">
        <div className="h-[80vh] min-h-[500px] w-[80vw] min-w-[500px] animate-wheel lg:min-h-[700px]   lg:min-w-[700px]">
          <Image
            src={
              "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/Legecyrot.svg"
            }
            width={100}
            height={100}
            alt={"cross modal"}
            className="h-full w-full "
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
