import { Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface UnlockScreenProps {
  onUnlockComplete: () => void;
}

export const UnlockScreen = ({ onUnlockComplete }: UnlockScreenProps) => {
  const [showSecondText, setShowSecondText] = useState(false);

  const handleTextTransition = () => {
    setShowSecondText(true);
    setTimeout(onUnlockComplete, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/90 to-indigo-600/90 z-50"
    >
      <AnimatePresence mode="wait">
        {!showSecondText ? (
          <motion.div
            key="first-text"
            className="text-center text-white mb-8 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold mb-4">Bienvenue sur Club Fibre</h1>
            <p className="text-lg md:text-xl opacity-80">Découvrez nos offres exclusives</p>
          </motion.div>
        ) : (
          <motion.div
            key="second-text"
            className="text-center text-white mb-8 px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-2xl md:text-5xl font-bold">
              Vous avez débloqué les offres exclusives Club Fibre
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        animate={{ 
          rotate: [0, 0, -10, 10, -10, 10, 0, 0],
          scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
          y: [0, 0, 0, 0, 0, 0, 0, 20],
          opacity: [1, 1, 1, 1, 1, 1, 1, 0]
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1],
          onComplete: handleTextTransition
        }}
      >
        <Lock className="w-16 md:w-24 h-16 md:h-24 text-white transform origin-top" />
      </motion.div>
    </motion.div>
  );
};