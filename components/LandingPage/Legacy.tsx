import Image from "next/image";
import LegacyCarosel from "./LegacyCarosel";

const Legacy = () => {
  return (
    <div className=" bg-legacy bg-repeat bg-cover bg-black w-[100vw] relative min-h-[60vh] md:h-[80vh] lg:h-[100vh]">
      <div className="w-[80vw] h-[80vh]  absolute -bottom-[40vh] left-[10vw]">
        <Image
          src={"/Landing/Legecyrot.svg"}
          width={100}
          height={100}
          alt={"cross modal"}
          className="w-full h-full "
        />
      </div>
      <div className="absolute bottom-0">
        <LegacyCarosel />
      </div>
    </div>
  );
};

export default Legacy;
