import { useEffect } from "react";

import AOS from "aos";

import "aos/dist/aos.css";

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="py-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Left Side (Text Content) */}
      <div className="md:w-1/2 mb-8 md:mb-0 space-y-8" data-aos="fade-right">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-heading-text leading-tight">
          Want anything to be <br className="lg:block hidden" /> easy with
          LasVPN
        </h1>
        <p className="text-primary-text text-lg leading-relaxed max-w-xl">
          Provide a network for all your needs with ease and fun using LasVPN
          discover interesting features from us.
        </p>

        {/* Zoom-in Button */}
        <button
          className="py-4 px-12 text-lg shadow-lg bg-primary text-white 
                     rounded-lg transition font-medium duration-300 
                     hover:shadow cursor-pointer hover:bg-red-600"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Get Started
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="md:w-1/2" data-aos="fade-left" data-aos-delay="200">
        <img
          src="/undraw_dev-productivity_5wps.svg"
          alt="hero.png"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
