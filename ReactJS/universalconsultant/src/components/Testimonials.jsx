import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import customerData from "../Data/CustomerData.json";

function Testimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="px-4 md:px-40">
      <div className="flex flex-col space-y-5 md:space-y-7 justify-center items-center mb-10 md:mb-20">
        <p className="text-3xl md:text-5xl font-bold">What Customers Say</p>
        <p className="text-sm md:w-[30rem] text-center text-gray-400 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum ante vel turpis fermentum.
        </p>
      </div>

      <div className="mx-auto">
        <Slider {...settings}>
          {customerData.map((customer, index) => {
            return (
              <div key={index} className="outline-none focus:outline-none">
                <TestimonialCard
                  img={customer.imageName}
                  name={customer.name}
                  designation={customer.designation}
                  description={customer.description}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonials;
