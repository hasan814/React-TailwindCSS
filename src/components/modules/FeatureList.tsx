import { features } from "../../utils/LinkHelper";

import FeatureItem from "./FeatureItem";

const FeatureList = () => {
  return (
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <FeatureItem key={index} text={feature} />
      ))}
    </ul>
  );
};

export default FeatureList;
