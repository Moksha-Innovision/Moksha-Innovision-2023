import { Koulen } from "@next/font/google";
import Head from "next/head";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/ui/Navbar/Navbar";
import Event from "../components/ui/newEventPage/Event";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const events = () => {
  return (
    <div
      className={`${"font-koulen"} min-h-[100vh] bg-prussian-blue-1000   bg-event-pattern bg-pattern   `}
    >
      <Head>
        <title>Moksha Innovision&apos;23 | Events</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Navbar />
      <Event />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default events;
