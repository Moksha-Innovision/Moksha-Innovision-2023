import { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
const DevTile = ({ url, name }: any) => {
  const [bl, setBl] = useState(false);
  return (
    <div
      className="col-span-2 m-5 flex h-[150px] flex-col items-center justify-center  rounded-xl bg-yellow-700 bg-opacity-10 text-2xl md:col-span-1
    "
      onMouseOver={() => setBl(true)}
      onMouseLeave={() => setBl(false)}
    >
      <div className="relative">
        <div
          className={`absolute  top-0  h-[4px] ${
            bl ? "right-0 w-full" : " left-0  w-[0.01px]"
          }  bg-white transition-[width] duration-200`}
        ></div>
        <div className="mt-1">{name}</div>
        <div
          className={`bottom-0-0 absolute  h-[4px] ${
            bl ? "left-0  w-full" : "right-0 w-[0.01px]"
          }  bg-white transition-[width] duration-200`}
        ></div>
      </div>

      <div
        className={`flex space-x-3 transition-[padding-top,_padding-bottom] duration-200 ${
          bl ? " py-3" : " py-2"
        }`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={url[0]}
          className=" hover:scale-110"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={url[1]}
          className=" hover:scale-110"
        >
          <AiOutlineInstagram />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={url[2]}
          className=" hover:scale-110"
        >
          <AiOutlineGithub />
        </a>
      </div>
    </div>
  );
};

export default DevTile;
{
  /**
     * <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        perspective={1500}
        glareEnable={true}
        glareMaxOpacity={0.05}
        glarePosition="all"
        glareColor="gold"
        className="grid h-28   w-full cursor-pointer place-items-center rounded-3xl bg-yellow-100  bg-opacity-10 shadow-soft backdrop-blur-[10px]  "
      >
        {name}
      </Tilt>
     */
}
