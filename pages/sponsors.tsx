import Head from "next/head";
import Footer from "../components/LandingPage/Footer";
import SponserMain from "../components/Sponser/SponserMain";
import Navbar from "../components/ui/Navbar/Navbar";

const Sponsors = () => {
  return (
    <div
      className={`${"font-koulen"} min-h-[100vh] bg-prussian-blue-1000   bg-event-pattern bg-pattern       bg-repeat`}
    >
      <Head>
        <title>Moksha Innovision&apos;23 | Sponser</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Navbar />
      <SponserMain />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Sponsors;
