import { Koulen } from "@next/font/google";
import Footer from "../components/LandingPage/Footer";
import SponserMain from "../components/Sponser/SponserMain";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Sponsors = () => {
  return (
    <div
      className={`${koulen.className} min-h-[100vh] bg-prussian-blue-1000 bg-event-pattern bg-contain  bg-fixed bg-repeat`}
    >
      <Navbar />
      <SponserMain />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Sponsors;
