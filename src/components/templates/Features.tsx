import FeatureList from "../modules/FeatureList";

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:1/2">
          <img
            src="/undraw_features-overview_uone.svg"
            alt="Features Overview"
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-heading-text text-4xl font-bold leading-tight">
            We Provide Many <br /> Features You Can Use
          </h2>
          <p className="text-primary-text leading-relaxed md:w-2/3">
            You can explore the features that we provide with future and have
            their own functions each feature.
          </p>
          <FeatureList />
        </div>
      </div>
    </section>
  );
};

export default Features;
