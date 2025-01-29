import { Check } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface OperatorFeatureProps {
  feature: Feature;
  index: number;
}

export const OperatorFeature = ({ feature, index }: OperatorFeatureProps) => {
  return (
    <li className="flex items-start gap-2" key={index}>
      <div className="mt-1 rounded-full bg-green-100 p-1">
        <Check className="h-3 w-3 text-green-600" />
      </div>
      <div>
        <p className="text-sm font-medium">{feature.title}</p>
        <p className="text-xs text-gray-500">{feature.description}</p>
      </div>
    </li>
  );
};