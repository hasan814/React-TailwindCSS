import { FaLocationDot, FaUser } from "react-icons/fa6";
import { IoServerSharp } from "react-icons/io5";

import StatItem from "../modules/StatItem";

const Statistics = () => {
  const stats = [
    { icon: FaUser, value: "90+", label: "Users" },
    { icon: FaLocationDot, value: "30+", label: "Locations" },
    { icon: IoServerSharp, value: "50+", label: "Servers" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex flex-col md:flex-row justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
