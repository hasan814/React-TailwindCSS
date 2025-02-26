import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { IoServerSharp } from "react-icons/io5";
import { Stat } from "../../types";
import StatItem from "../modules/StatItem";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats: Stat[] = [
    { icon: FaUser, value: "90+", label: "Users" },
    { icon: FaLocationDot, value: "30+", label: "Locations" },
    { icon: IoServerSharp, value: "50+", label: "Servers" },
  ];

  return (
    <div
      id="about"
      className="bg-white rounded-xl shadow-lg p-8"
      data-aos="fade-up"
    >
      <div className="flex flex-col md:flex-row justify-around items-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {stats.map((stat, index) => (
          <div key={index} data-aos="zoom-in" data-aos-delay={index * 200}>
            <StatItem icon={stat.icon} value={stat.value} label={stat.label} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
