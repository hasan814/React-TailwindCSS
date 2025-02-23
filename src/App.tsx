import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import About from "./components/templates/About";
import Features from "./components/templates/Features";
import Hero from "./components/templates/Hero";
import Pricing from "./components/templates/Pricing";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
