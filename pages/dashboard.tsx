import { Inter } from "@next/font/google";
import Sidebar from "../components/dashboard/ui/Sidebar/Sidebar";
const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
  return (
    <>
      <Sidebar />
    </>
  );
}
