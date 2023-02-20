import Image from "next/image";
import LegacyCarosel from "./LegacyCarosel";

const Legacy = () => {
  return (
    <div className=" bg-legacy bg-repeat bg-cover bg-black w-[100vw] relative min-h-[60vh] md:h-[80vh] lg:h-[100vh]">
      <div className="absolute -bottom-[40vh] lg:-bottom-[46vh] justify-center flex w-full">
        <div className="w-[80vw] h-[80vh] lg:min-h-[700px] lg:min-w-[700px] min-h-[500px] min-w-[500px]   animate-wheel">
          <Image
            src={
              "https://odlfyjrswlruygfdauic.supabase.co/storage/v1/object/public/project-assests/Landing/Legecyrot.svg"
            }
            width={100}
            height={100}
            alt={"cross modal"}
            className="h-full w-full "
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
