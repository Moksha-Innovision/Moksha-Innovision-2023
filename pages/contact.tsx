import Footer from "../components/LandingPage/Footer";
import ContactUs from "../components/ui/ContactUs/ContactUs";
import Navbar from "../components/ui/Navbar/Navbar";

const contact = () => {
  return (
    <div className="">
      <Navbar />
      <ContactUs />
      <div className="relative z-[5]">
        <Footer />
      </div>
    </div>
  );
};

export default contact;
