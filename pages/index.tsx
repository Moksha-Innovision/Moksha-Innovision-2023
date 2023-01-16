import { Inter } from "@next/font/google";
import Navbar from "../components/ui/Navbar/Navbar";
import FAQs from "./FAQs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <FAQs />
    </div>
  );
}
