import { useEffect } from "react";
import { plans } from "../../utils/LinkHelper";

import PlanCard from "../modules/PlanProps";
import AOS from "aos";

import "aos/dist/aos.css";

const Pricing: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      {/* Header with Zoom-in Animation */}
      <div className="text-center mb-16" data-aos="zoom-in">
        <h2 className="text-4xl font-bold text-heading-text mb-4">
          Choose Your Plan
        </h2>
        <p className="text-primary-text">
          Let's choose the package that is the best for you and explore it
          happily and cheerfully.
        </p>
      </div>

      {/* Pricing Cards with Left & Right Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // Alternate animations
          >
            <PlanCard
              name={plan.name}
              price={plan.price}
              features={plan.features}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
