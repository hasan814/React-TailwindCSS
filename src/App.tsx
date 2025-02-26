import GlobalNetwork from "./components/templates/GlobalNetwork";
import Features from "./components/templates/Features";
import Pricing from "./components/templates/Pricing";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import About from "./components/templates/About";
import Hero from "./components/templates/Hero";

const App = () => {
  return (
    <div className="max-w-[1200px] mx-auto container px-4">
      <Header />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <GlobalNetwork />
      <Footer />
    </div>
  );
};

export default App;
