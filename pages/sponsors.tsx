import { Koulen } from "@next/font/google";
import SponserMain from "../components/Sponser/SponserMain";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Sponsors = () => {
  return (
    <div
      className={`${koulen.className} bg-prussian-blue-1000 bg-contain bg-repeat bg-event-pattern min-h-[100vh]`}
    >
      <Navbar />
      <SponserMain />
    </div>
  );
};

export default Sponsors;
