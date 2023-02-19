import { Koulen } from "@next/font/google";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/ui/Navbar/Navbar";
import Event from "../components/ui/newEventPage/Event";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const events = () => {
  return (
    <div
      className={`${koulen.className} bg-prussian-blue-1000 bg-contain bg-repeat bg-event-pattern min-h-[100vh]`}
    >
      <Navbar />
      <Event />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default events;
