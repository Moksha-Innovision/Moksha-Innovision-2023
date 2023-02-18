import Image from "next/image";
import LegacyCarosel from "./LegacyCarosel";

const Legacy = () => {
  return (
    <div className=" relative min-h-[60vh] w-[100vw] bg-black bg-legacy bg-cover bg-repeat md:h-[80vh] lg:h-[100vh]">
      <div className="absolute -bottom-[40vh]  left-[10vw] h-[80vh] w-[80vw]">
        <Image
          src={"/Landing/Legecyrot.svg"}
          width={100}
          height={100}
          alt={"cross modal"}
          className="h-full w-full "
        />
      </div>
      <div className="absolute bottom-0">
        <LegacyCarosel />
      </div>
    </div>
  );
};

export default Legacy;
