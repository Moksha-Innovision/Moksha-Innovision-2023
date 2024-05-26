import AboutUS from "./components/AboutUS";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Header />
      <AboutUS />
      <Service />
      <Testimonials />
      {/* <Team /> */}
      <ContactUs />
      <Footer />
      {/* <PopupButton /> */}
    </div>
  );
}

export default App;
