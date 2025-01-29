import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { OperatorFeature } from "./OperatorFeature";
import { OperatorDetail } from "./OperatorDetail";
import { OperatorHeader } from "./OperatorHeader";
import { OperatorFeatures } from "./OperatorFeatures";
import { OperatorPrice } from "./OperatorPrice";
import { OperatorButtons } from "./OperatorButtons";

interface Feature {
  title: string;
  description: string;
}

export interface Operator {
  name: string;
  logo: string;
  price: string;
  speed: string;
  commitment: string;
  tv: boolean;
  phone: boolean;
  features: Feature[];
  highlight: string;
  color: string;
}

interface OperatorCardProps {
  operator: Operator;
  isSelected: boolean;
  onSelect: () => void;
  isHovered: boolean;
  onHover: (isHovered: boolean) => void;
  isDisabled?: boolean;
  hideLearnMore?: boolean;
}

export const OperatorCard = ({
  operator,
  isSelected,
  onSelect,
  isHovered,
  onHover,
  isDisabled = false,
  hideLearnMore = false,
}: OperatorCardProps) => {
  const [showDetail, setShowDetail] = useState(false);
  const features = operator?.features || [];

  return (
    <>
      <motion.div 
        className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 h-full flex flex-col ${
          isHovered && !isDisabled ? 'transform scale-105' : ''
        } ${isDisabled ? 'opacity-75 cursor-not-allowed' : ''}`}
        onMouseEnter={() => !isDisabled && onHover(true)}
        onMouseLeave={() => !isDisabled && onHover(false)}
        initial={{ opacity: 1, x: 0 }}
        animate={{ opacity: isDisabled ? 0.75 : 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        layout
      >
        <OperatorHeader 
          name={operator.name}
          logo={operator.logo}
          highlight={operator.highlight}
          color={operator.color}
          showAlert={operator.name === "Sosh"}
        />
        
        <motion.div className="p-4 flex flex-col flex-grow" layout>
          <div className="space-y-4 flex-grow">
            <OperatorPrice price={operator.price} />

            <OperatorFeatures 
              speed={operator.speed}
              commitment={operator.commitment}
              tv={operator.tv}
              phone={operator.phone}
            />

            <motion.div className="border-t pt-4" layout>
              <ul className="space-y-2">
                {features.slice(0, 2).map((feature, index) => (
                  <OperatorFeature 
                    key={index}
                    feature={feature}
                    index={index}
                  />
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-4">
            <OperatorButtons 
              isSelected={isSelected}
              isDisabled={isDisabled}
              onSelect={onSelect}
              operator={operator}
              hideLearnMore={hideLearnMore}
            />
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {showDetail && (
          <OperatorDetail
            operator={operator}
            onClose={() => setShowDetail(false)}
            onSelect={onSelect}
          />
        )}
      </AnimatePresence>
    </>
  );
};