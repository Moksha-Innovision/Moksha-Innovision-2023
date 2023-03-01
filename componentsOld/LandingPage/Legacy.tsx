import Image from "next/image";
import LegacyCarosel from "./LegacyCarosel";

const Legacy = () => {
  return (
    <div className=" bcy relative min-h-[540px] w-[100vw] bg-black bg-cover bg-repeat md:h-[85vh]  md:min-h-[680px] lg:h-[100vh] lg:min-h-[750px]">
      <div className="absolute -bottom-[40vh] flex w-full justify-center lg:-bottom-[46vh]">
        <div className="h-[80vh] min-h-[500px] w-[80vw] min-w-[500px] animate-wheel lg:min-h-[700px]   lg:min-w-[700px]">
          <Image
            src={"/Landing/Legecyrot.svg"}
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
