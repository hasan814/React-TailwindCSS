import { IoMdCheckmark } from "react-icons/io";

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-3">
    <div className="bg-green-600 w-fit p-1 rounded-full">
      <IoMdCheckmark color="white" />
    </div>
    <span>{text}</span>
  </li>
);

export default FeatureItem;
