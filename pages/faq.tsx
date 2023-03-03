import { Koulen } from "@next/font/google";
import Head from "next/head";
import FaqMain from "../components/Faq/FaqMain";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const Faq = () => {
  return (
    <div
      className={`${"font-koulen"} min-h-[100vh] bg-prussian-blue-1000   bg-event-pattern bg-pattern       bg-repeat`}
    >
      <Head>
        <title>Moksha Innovision&apos;23 | FAQ &apos;s</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Navbar />
      <FaqMain />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
