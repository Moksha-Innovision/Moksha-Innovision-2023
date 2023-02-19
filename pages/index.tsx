import { Inter, Koulen } from "@next/font/google";
import LandingPage from "../components/LandingPage/LandingPage";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div
      className={`${koulen.className} min-h-[150vh] w-[100vw] overflow-x-hidden  bg-prussian-blue-1000 bg-event-pattern bg-contain bg-repeat `}
    >
      <Navbar />
      <LandingPage />
    </div>
  );
}
