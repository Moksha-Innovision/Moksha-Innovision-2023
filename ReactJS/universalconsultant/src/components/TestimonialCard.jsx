import React from "react";

function TestimonialCard({ img, name, designation, description }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 md:space-y-10 shadow-xl bg-slate-50 p-4 rounded-xl my-4 mx-6">
      <img
        className="h-24 w-24 md:h-32 md:w-32 rounded-full p-2"
        src={img}
        alt={name}
      />
      <div className="text-center">
        <p className="text-lg md:text-xl font-semibold">{name}</p>
        <p className="text-sm md:text-base font-medium text-gray-600">
          {designation}
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm md:text-base w-full md:w-80 text-justify mb-4 md:mb-8">
          {description}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
