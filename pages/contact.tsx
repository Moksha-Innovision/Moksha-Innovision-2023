import { Koulen } from "@next/font/google";
import Footer from "../components/LandingPage/Footer";
import ContactUs from "../components/ui/ContactUs/ContactUs";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const contact = () => {
  return (
    <div
      className={`${koulen.className} min-h-[100vh] bg-prussian-blue-1000 bg-event-pattern bg-contain bg-fixed bg-repeat`}
    >
      <Navbar />
      <ContactUs />
      <div className="relative z-[5]">
        <Footer />
      </div>
    </div>
  );
};

export default contact;
