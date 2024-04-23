import { TestimonialCard } from "./TestimonialCard";
import logo from "../../../public/logo.jpeg";

export const Testimonials = () => {
  return (
    <section className="p-10 md:p-20 mt-20">
      <div>
        <p className="text-orange-600 font-semibold ">TESTIMONIALS </p>
        <p className="uppercase text-4xl my-3 md:text-6xl font-semibold">
          What our customer says
        </p>
        <p className="text-xl md:text-2xl text-gray-400">
          It is time for a change. Our team will help you plan and implement a
          full system redesign for better usability and scalability.
        </p>
      </div>

      <div className="grid grid-flow-row sm:grid-flow-col gap-5 sm:p-10 mt-12 overflow-hidden  ">
        <TestimonialCard
          image={logo}
          name="Ayush Sharma"
          designation="CEO HacktigerLabs"
          description="Very much delighted to work with the team alawys there to help client and "
        />
        <TestimonialCard
          image={logo}
          name="Ayush Sharma"
          designation="CEO HacktigerLabs"
          description="Very much delighted to work with the team alawys there to help client and "
        />
        <TestimonialCard
          image={logo}
          name="Ayush Sharma"
          designation="CEO HacktigerLabs"
          description="Very much delighted to work with the team alawys there to help client and "
        />
        <TestimonialCard
          image={logo}
          name="Ayush Sharma"
          designation="CEO HacktigerLabs"
          description="Very much delighted to work with the team alawys there to help client and "
        />
      </div>
    </section>
  );
};
