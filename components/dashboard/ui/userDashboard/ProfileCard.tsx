import React from "react";
import Avatar from "/public/avatar2.svg";
import Tilt from "react-parallax-tilt";
import { AiFillPhone, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
type Props = {
  profileData: any;
};

const ProfileCard = (props: Props) => {
  const { profileData } = props;

  return (
    <Tilt
      glareEnable
      glareColor="rgba(200,200,200,0.2)"
      glarePosition="all"
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className=" mx-auto my-32 flex h-auto max-w-4xl flex-wrap items-center rounded bg-opacity-5   shadow-xl outline drop-shadow-lowGlow backdrop-blur-[2px]  lg:my-0 "
    >
      {/* <pre>{JSON.stringify(profileData, null, 4)}</pre> */}
      <div className="mx-6 w-full rounded-lg  shadow-2xl lg:mx-0 lg:w-3/5 lg:rounded-l-lg lg:rounded-r-none">
        <div className="p-4 text-center md:p-12 lg:text-left">
          <div className="mx-auto -mt-16 block h-48 w-48 rounded-full bg-cover bg-center shadow-xl lg:hidden">
            <Image src={Avatar} alt={"avatar"} />
          </div>

          <h1 className="pt-8 text-3xl font-bold text-white lg:pt-0">
            {profileData.name}
          </h1>
          <div className="border-white-500 mx-auto w-4/5 border-b-2 pt-3 opacity-25 lg:mx-0"></div>
          <p className="flex items-center justify-center gap-3 pt-4 text-base font-bold lg:justify-start">
            <AiOutlineMail className="text-4xl" />
            {profileData.email}
          </p>
          <p className="flex items-center justify-center gap-3  pt-2  lg:justify-start lg:text-sm">
            <FaGraduationCap className="text-4xl" />

            <span>{profileData.college}</span>
          </p>
          <p className="flex items-center justify-center gap-3  pt-2  lg:justify-start lg:text-sm">
            <AiOutlinePhone className="text-2xl" />

            <span>{profileData.contact}</span>
          </p>

          <Link href={"/user/regevents"} className="block pt-12 pb-8">
            <button className="rounded-full bg-saffron-600 py-2 px-4 font-bold text-white hover:bg-blue-800 hover:text-white">
              Registered Events
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <Image src={Avatar} alt={"avatar"} />
      </div>
    </Tilt>
  );
};

export default ProfileCard;
