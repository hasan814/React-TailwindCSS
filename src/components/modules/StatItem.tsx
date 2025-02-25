import { IStatItemProps } from "../../types";

const StatItem = ({ icon: Icon, value, label }: IStatItemProps) => {
  return (
    <div className="flex items-center gap-6 px-12 py-6 md:py-0">
      <div className="p-5 bg-secondary rounded-full">
        <Icon color="red" />
      </div>
      <div>
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default StatItem;
