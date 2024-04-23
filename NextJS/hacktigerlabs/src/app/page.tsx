import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Service } from "./components/Services";
import { TechStrip } from "./components/TechStrip";
import { Testimonials } from "./components/Testimonials";
import { WhatWeDo } from "./components/WhatWeDo";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Header />
      <TechStrip />
      <WhatWeDo />
      <Service />
      <Testimonials />
      <Footer />
    </div>
  );
}
