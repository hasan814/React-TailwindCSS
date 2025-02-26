import { IoMdCheckmark } from "react-icons/io";
import { IPlanProps } from "../../types";
import { FiGift } from "react-icons/fi";

const PlanCard = ({ name, price, features }: IPlanProps) => (
  <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 flex flex-col items-center hover:border-red-500 transition duration-300 hover:scale-105">
    <FiGift color="green" size={58} className="mb-8" />
    <h3 className="text-2xl font-bold mb-8">{name}</h3>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <IoMdCheckmark color="green" size={20} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <div className="text-center space-y-4">
      <div>{price}</div>
      <button className="border-2 border-primary text-primary px-16 py-2 rounded-full hover:bg-red-600 hover:text-white transition duration-300">
        Select
      </button>
    </div>
  </div>
);

export default PlanCard;
