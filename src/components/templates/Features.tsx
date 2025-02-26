import { useEffect } from "react";

import FeatureList from "../modules/FeatureList";
import AOS from "aos";

import "aos/dist/aos.css";

const Features: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="features" className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Image with AOS Animation */}
        <div className="md:1/2" data-aos="fade-right">
          <img
            src="/undraw_features-overview_uone.svg"
            alt="Features Overview"
          />
        </div>

        {/* Right Side - Text Content with AOS Animation */}
        <div className="md:w-1/2 space-y-8" data-aos="fade-left">
          <h2 className="text-heading-text text-4xl font-bold leading-tight">
            We Provide Many <br /> Features You Can Use
          </h2>
          <p className="text-primary-text leading-relaxed md:w-2/3">
            You can explore the features that we provide with future and have
            their own functions each feature.
          </p>

          {/* Feature List with Zoom-in Effect */}
          <div data-aos="zoom-in" data-aos-delay="200">
            <FeatureList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
