import { Koulen } from "@next/font/google";
import FaqMain from "../components/Faq/FaqMain";
import Navbar from "../components/ui/Navbar/Navbar";
const koulen = Koulen({ weight: "400", subsets: ["latin"] });


const Faq = () => {
    return (
        <div className={`${koulen.className} bg-prussian-blue-1000 bg-contain bg-repeat bg-event-pattern min-h-[100vh]`} >
            <Navbar />
            <FaqMain />
        </div>
    );
};

export default Faq;
