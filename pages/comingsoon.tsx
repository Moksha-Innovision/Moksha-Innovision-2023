import Navbar from "../components/ui/Navbar/Navbar";

type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="grid h-screen w-screen place-items-center bg-prussian-blue-1000 bg-event-pattern bg-contain text-7xl text-white drop-shadow-lowGlowtext">
        User Dashboard Coming SOON
      </div>
    </>
  );
};

export default ComingSoon;
