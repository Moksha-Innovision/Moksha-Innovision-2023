"use client";

import DataObjectIcon from "@mui/icons-material/DataObject";
import { motion, useScroll } from "framer-motion";

export const Service = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex p-10 flex-col md:flex-row justify-center items-center md:space-x-48">
      <div className="space-y-2 my-10 h-80 rounded-xl shadow-xl p-10">
        <div>
          <DataObjectIcon className="text-green-500 bg-green-300 rounded-lg h-16 w-auto" />
        </div>
        <div>
          <p className="font-semibold text-xl">Web Development</p>
        </div>
        <div>
          <p className="text-gray-400 md:w-64">
            Building responsive websites for seamless user interaction and brand
            visibility. Elevate your online presence today!{" "}
          </p>
        </div>
        <div>
          <p className="text-blue-500 font-semibold">Contact Us</p>
        </div>
      </div>

      <div className="space-y-2 my-10 h-80 rounded-xl shadow-xl p-10">
        <div>
          <DataObjectIcon className="text-green-500 bg-green-300 rounded-lg h-16 w-auto" />
        </div>
        <div>
          <p className="font-semibold text-xl">App Development</p>
        </div>
        <div>
          <p className="text-gray-400 md:w-64">
            Crafting innovative apps that drive engagement and streamline user
            experiences. Your ideas, our expertise!{" "}
          </p>
        </div>
        <div>
          <p className="text-blue-500 font-semibold">Contact Us</p>
        </div>
      </div>

      <div className="space-y-2 my-10 h-80 rounded-xl shadow-xl p-10">
        <div>
          <DataObjectIcon className="text-green-500 bg-green-300 rounded-lg h-16 w-auto" />
        </div>
        <div>
          <p className="font-semibold text-xl">UI/UX Design</p>
        </div>
        <div>
          <p className="text-gray-400 md:w-64">
            Elevate your brand with our expert UI/UX design service.
            Transforming digital experiences, one design at a time.{" "}
          </p>
        </div>
        <div>
          <p className="text-blue-500 font-semibold">Contact Us</p>
        </div>
      </div>
    </div>
  );
};
