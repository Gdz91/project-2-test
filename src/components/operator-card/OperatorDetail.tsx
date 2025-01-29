import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Operator } from "./OperatorCard";
import { OperatorFeature } from "./OperatorFeature";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { OperatorDetailsHeader } from "../operator-details/OperatorDetailsHeader";
import { OperatorCharacteristics } from "../operator-details/OperatorCharacteristics";
import { OperatorPrice } from "../operator-details/OperatorPrice";

interface OperatorDetailProps {
  operator: Operator;
  onClose: () => void;
  onSelect: () => void;
}

export const OperatorDetail = ({ operator, onClose, onSelect }: OperatorDetailProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSelectOffer = () => {
    onSelect();
    navigate('/address', { 
      state: { 
        selectedOperator: operator 
      } 
    });
  };

  if (!operator || !operator.features) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        layoutId={`operator-${operator.name}`}
      >
        <OperatorDetailsHeader
          name={operator.name}
          highlight={operator.highlight}
          color={operator.color}
          onClose={onClose}
        />

        <ScrollArea className="h-[calc(90vh-200px)]">
          <div className="p-8 space-y-8">
            <OperatorPrice price={operator.price} />

            <div className="grid grid-cols-2 gap-6">
              <OperatorCharacteristics
                speed={operator.speed}
                commitment={operator.commitment}
                tv={operator.tv}
                phone={operator.phone}
              />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Avantages inclus</h3>
                <ul className="space-y-2">
                  {operator.features.map((feature, index) => (
                    <OperatorFeature 
                      key={index} 
                      feature={feature} 
                      index={index} 
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity"
                onClick={handleSelectOffer}
              >
                Choisir cette offre
              </Button>
            </div>
          </div>
        </ScrollArea>
      </motion.div>
    </motion.div>
  );
};