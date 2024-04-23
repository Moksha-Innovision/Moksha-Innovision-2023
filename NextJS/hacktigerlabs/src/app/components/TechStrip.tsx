import figma from "../../../public/Figma.webp";
import flutter from "../../../public/flutter.svg";
import unreal from "../../../public/Unreal_Engine-Logo.wine.svg";
import react from "../../../public/React.svg";
import javascript from "../../../public/js.webp";
import next from "../../../public/next.svg";
import Image from "next/image";

export const TechStrip = () => {
  return (
    <div className="flex flex-row justify-around px-4 bg-blue-100">
      <div className="flex justify-around">
        <Image className="h-10 mx-4 my-4 w-auto md:h-36 md:mx-20 md:my-10 " src={react} alt="React" />
        <Image className="h-10 mx-4 my-4 w-auto md:h-36 md:mx-20 md:my-10 " src={javascript} alt="React"  />
        <Image className="h-10 mx-4 my-4 w-auto md:h-36 md:mx-20 md:my-10 " src={flutter} alt="React"  />
        <Image className="h-10 mx-4 my-4 w-auto md:h-36 md:mx-20 md:my-10 " src={unreal} alt="React"  />
        <Image className="h-10 mx-4 my-4 w-auto md:h-36 md:mx-20 md:my-10 " src={figma} alt="React"  />
      </div>
    </div>
  );
};
