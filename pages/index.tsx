import { Inter, Koulen } from "@next/font/google";
import Head from "next/head";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div
      className={`${"font-koulen"} min-h-[150vh] w-[100vw] overflow-x-hidden  bg-prussian-blue-1000   bg-event-pattern bg-pattern       bg-repeat`}
    >
      <Head>
        <title>Moksha Innovision&apos;23 | Past</title>
        <meta property="og:title" content="" key="title" />
      </Head>
      <Navbar />
      <LandingPage />
    </div>
  );
}
