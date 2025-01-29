import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Operator } from "./OperatorCard";
import { motion } from "framer-motion";

interface OperatorButtonsProps {
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: () => void;
  operator: Operator;
  hideLearnMore?: boolean;
}

export const OperatorButtons = ({
  isSelected,
  isDisabled,
  onSelect,
  operator,
  hideLearnMore = false,
}: OperatorButtonsProps) => {
  const navigate = useNavigate();

  const handleSelectOffer = () => {
    navigate('/address', { 
      state: { 
        selectedOperator: operator 
      } 
    });
  };

  const handleLearnMore = () => {
    const container = document.querySelector('.container');
    if (container) {
      container.classList.add('animate-slide-out-right');
    }
    
    setTimeout(() => {
      navigate('/operator-details', { state: { operator } });
    }, 500);
  };

  return (
    <div className="space-y-2">
      {!isSelected && !isDisabled && (
        <Button
          className="w-full bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity"
          onClick={handleSelectOffer}
        >
          Choisir cette offre
        </Button>
      )}
      {isDisabled && (
        <Button
          className="w-full bg-gray-400 text-white cursor-not-allowed"
          disabled
        >
          Offre épuisée
        </Button>
      )}
      {!hideLearnMore && (
        <Button
          variant="outline"
          className={`w-full hover:bg-gray-50 transition-colors ${isDisabled ? 'cursor-not-allowed' : ''}`}
          onClick={() => !isDisabled && handleLearnMore()}
          disabled={isDisabled}
        >
          En savoir plus
        </Button>
      )}
    </div>
  );
};