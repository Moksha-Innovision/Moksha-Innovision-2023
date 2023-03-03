import { Koulen } from "@next/font/google";
import Head from "next/head";
import Footer from "../components/LandingPage/Footer";
import ContactUs from "../components/ui/ContactUs/ContactUs";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const contact = () => {
  return (
    <div
      className={`${"font-koulen"} min-h-[100vh] bg-prussian-blue-1000   bg-event-pattern bg-pattern      bg-repeat`}
    >
      <Head>
        <title>Moksha Innovision&apos;23 | Contact</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Navbar />
      <ContactUs />
      <div className="relative z-[5]">
        <Footer />
      </div>
    </div>
  );
};

export default contact;
