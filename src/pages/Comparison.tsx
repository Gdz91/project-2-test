import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { UnlockScreen } from "@/components/animations/UnlockScreen";
import AddressForm from "@/components/AddressForm";
import { RemainingOffers } from "@/components/RemainingOffers";
import { ComparisonHeader } from "@/components/comparison/ComparisonHeader";
import { OperatorGrid } from "@/components/comparison/OperatorGrid";
import { Disclaimer } from "@/components/comparison/Disclaimer";
import { operators } from "@/data/operators";

const Comparison = () => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(location.state?.fromDetails ? true : false);
  const [showUnlock, setShowUnlock] = useState(!location.state?.fromDetails);
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);

  const handleUnlockComplete = () => {
    setShowUnlock(false);
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-2 md:py-8">
      <AnimatePresence mode="wait">
        {showUnlock && <UnlockScreen onUnlockComplete={handleUnlockComplete} />}
        
        {showContent && (
          <motion.div 
            key="content"
            className="container mx-auto px-2 md:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ComparisonHeader showContent={showContent} />
            {!selectedOperator && <RemainingOffers />}
            <OperatorGrid 
              operators={operators}
              selectedOperator={selectedOperator}
              setSelectedOperator={setSelectedOperator}
            />
            <Disclaimer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Comparison;