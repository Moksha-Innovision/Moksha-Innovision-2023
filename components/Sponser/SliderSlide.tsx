const SliderSlide = ({ children, className }: any) => {
  return (
    <div
      className={`flex justify-center items-center w-[20rem]  h-full  backdrop-blur-[2px]  rounded-md text-3xl font-bold text-white drop-shadow-glow hover:drop-shadow-lowGlowtext shadow-2xl bg-yellow-700 bg-opacity-20  ${className} `}
    >
      {children}
    </div>
  );
};

const SliderSlideSm = ({ children, className }: any) => {
  return (
    <div
      className={`flex w-full justify-center items-center h-28 text-3xl backdrop-blur-[2px] text-white drop-shadow-glow hover:drop-shadow-lowGlowtext shadow-2xl bg-yellow-700 bg-opacity-20 rounded-lg   ${className} `}
    >
      {children}
    </div>
  );
};
export default SliderSlide;
export { SliderSlideSm };
