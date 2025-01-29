import { Progress } from "@/components/ui/progress";
import { useOfferCounter } from "@/hooks/useOfferCounter";

export const RemainingOffers = () => {
  const count = useOfferCounter();
  const maxOffers = 100;
  const progressValue = (count / maxOffers) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mb-2 md:mb-4">
      <div className="bg-white rounded-lg p-2 md:p-3 shadow-sm">
        <div className="text-center mb-1">
          <span className="text-lg md:text-xl font-bold text-primary">{count}</span>
          <span className="text-xs md:text-sm text-gray-600 ml-2">offres disponibles</span>
        </div>
        
        <div className="relative pt-2">
          <Progress 
            value={progressValue} 
            className="h-2"
          />
          <div 
            className="absolute top-0 left-0 text-xs text-gray-500 transform -translate-x-1/2"
            style={{ left: `${progressValue}%` }}
          >
            {count}
          </div>
        </div>
      </div>
    </div>
  );
};