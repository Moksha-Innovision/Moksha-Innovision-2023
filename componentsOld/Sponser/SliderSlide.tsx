const SliderSlide = ({ children, className }: any) => {
  return (
    <div
      className={`flex h-full w-[20rem] items-center  justify-center  rounded-md  bg-yellow-700 bg-opacity-20 text-3xl font-bold text-white shadow-2xl drop-shadow-glow backdrop-blur-[2px] hover:drop-shadow-lowGlowtext  ${className} `}
    >
      {children}
    </div>
  );
};

const SliderSlideSm = ({ children, className }: any) => {
  return (
    <div
      className={`flex h-28 w-full items-center justify-center rounded-lg bg-yellow-700 bg-opacity-20 text-3xl text-white shadow-2xl drop-shadow-glow backdrop-blur-[2px] hover:drop-shadow-lowGlowtext   ${className} `}
    >
      {children}
    </div>
  );
};
export default SliderSlide;
export { SliderSlideSm };
