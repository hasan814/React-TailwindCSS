import { FaLocationDot } from "react-icons/fa6";
import { IoServerSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import Features from "./components/templates/Features";
import Pricing from "./components/templates/Pricing";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import About from "./components/templates/About";
import Hero from "./components/templates/Hero";
import Statistics from "./components/templates/Statistics";

const App = () => {
  return (
    <div className="max-w-[1200px] mx-auto container px-4">
      <Header />
      <Hero />
      <Statistics />
      <Features />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
