import { Inter, Koulen } from "@next/font/google";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div
      className={`${koulen.className} bg-event-pattern bg-repeat bg-contain  bg-prussian-blue-1000 min-h-[150vh] overflow-x-hidden w-[100vw]`}
    >
      <Navbar />
      <LandingPage />
    </div>
  );
}
