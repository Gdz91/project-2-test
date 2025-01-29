import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { OperatorCard, Operator } from "@/components/operator-card/OperatorCard";
import AddressForm from "@/components/AddressForm";
import { useIsMobile } from "@/hooks/use-mobile";

interface OperatorGridProps {
  operators: Operator[];
  selectedOperator: string | null;
  setSelectedOperator: (name: string | null) => void;
}

export const OperatorGrid = ({ operators, selectedOperator, setSelectedOperator }: OperatorGridProps) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [addressValidated, setAddressValidated] = useState(false);
  const [showFinalStep, setShowFinalStep] = useState(false);
  const isMobile = useIsMobile();

  const sortedOperators = [...operators].sort((a, b) => {
    if (isMobile) {
      if (a.name === "Free") return 1;
      if (b.name === "Free") return -1;
    }
    return 0;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 mb-4 md:mb-8">
      <AnimatePresence mode="wait">
        {!selectedOperator ? (
          sortedOperators.map((operator) => (
            <motion.div
              key={operator.name}
              className="w-full"
              initial={{ opacity: 1, x: 0 }}
              exit={{ 
                opacity: 0, 
                x: -100,
                transition: { 
                  duration: 0.3,
                  delay: 0.1 * operators.indexOf(operator)
                }
              }}
            >
              <OperatorCard
                operator={operator}
                isSelected={selectedOperator === operator.name}
                onSelect={() => operator.name !== "Free" && setSelectedOperator(operator.name)}
                isHovered={hoveredCard === operator.name}
                onHover={(isHovered) => setHoveredCard(isHovered ? operator.name : null)}
                isDisabled={operator.name === "Free"}
              />
            </motion.div>
          ))
        ) : (
          <>
            <motion.div
              key="selected-operator"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-1"
            >
              <OperatorCard
                operator={operators.find(op => op.name === selectedOperator)!}
                isSelected={true}
                onSelect={() => {}}
                isHovered={false}
                onHover={() => {}}
                isDisabled={false}
                hideLearnMore={addressValidated}
              />
            </motion.div>
            <motion.div 
              key="address-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-4 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-center mb-8 space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Très bon choix !
                  </h2>
                  <p className="text-lg text-gray-600">
                    Dernières étapes pour profiter de votre offre <span className="font-semibold text-primary">{selectedOperator}</span>
                  </p>
                </div>
                <AddressForm 
                  onAddressValidated={() => setAddressValidated(true)} 
                  onFinalStep={() => setShowFinalStep(true)}
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};