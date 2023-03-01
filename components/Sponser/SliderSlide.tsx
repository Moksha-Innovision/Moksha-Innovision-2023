const SliderSlide = ({ children, className }: any) => {
  return (
    <div
      className={`flex h-full  items-center  justify-center  rounded-3xl  bg-yellow-700 bg-opacity-[16%] text-3xl font-bold text-[#BE922F] shadow-2xl drop-shadow-glow  hover:drop-shadow-lowGlowtext  ${className} `}
    >
      {children}
    </div>
  );
};

const SliderSlideSm = ({ children, className }: any) => {
  return (
    <div
      className={`flex h-28 w-full items-center justify-center rounded-lg bg-yellow-700 bg-opacity-[16%] text-3xl text-white shadow-2xl drop-shadow-glow  hover:drop-shadow-lowGlowtext   ${className} `}
    >
      {children}
    </div>
  );
};
export default SliderSlide;
export { SliderSlideSm };
