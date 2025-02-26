import { plans } from "../../utils/LinkHelper";

import PlanCard from "../modules/PlanProps";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-heading-text mb-4">
          Choose Your Plan
        </h2>
        <p className="text-primary-text">
          Let's choose the package that is the best for you and explore it
          happily and cheerfully.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-8">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            name={plan.name}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
