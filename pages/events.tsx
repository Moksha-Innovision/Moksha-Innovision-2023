import { Koulen } from "@next/font/google";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/ui/Navbar/Navbar";
import Event from "../components/ui/newEventPage/Event";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const events = () => {
  return (
    <div
      className={`${koulen.className} min-h-[100vh] bg-prussian-blue-1000 bg-event-pattern bg-contain  bg-fixed bg-repeat`}
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
