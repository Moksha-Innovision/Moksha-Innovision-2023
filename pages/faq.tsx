import { Koulen } from "@next/font/google";
import FaqMain from "../components/Faq/FaqMain";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Faq = () => {
  return (
    <div
      className={`${koulen.className} min-h-[100vh] bg-prussian-blue-1000 bg-event-pattern bg-contain bg-fixed bg-fixed bg-repeat`}
    >
      <Navbar />
      <FaqMain />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
