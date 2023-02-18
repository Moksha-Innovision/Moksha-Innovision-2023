import Navbar from "../components/ui/Navbar/Navbar";

type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen grid place-items-center text-white bg-prussian-blue-1000 bg-event-pattern bg-contain text-7xl drop-shadow-lowGlowtext">
        User Dashboard Coming SOON
      </div>
    </>
  );
};

export default ComingSoon;
