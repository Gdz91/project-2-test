import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";

export const SoshAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 15
            }
          }}
          exit={{ opacity: 0, y: 10 }}
          className="mt-1"
        >
          <Alert className="border-red-400 bg-red-50 py-0.5">
            <AlertDescription className="text-[11px] text-red-600 font-medium text-center">
              Dernières offres !
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  );
};