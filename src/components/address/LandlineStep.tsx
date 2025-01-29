import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface LandlineStepProps {
  onResponse: (usesLandline: boolean) => void;
}

export const LandlineStep = ({ onResponse }: LandlineStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md mx-auto p-6"
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-900">Une dernière chose...</h2>
      <p className="text-gray-600 mb-6">Utilisez-vous la ligne fixe incluse dans votre abonnement Fibre ?</p>
      
      <div className="space-y-3">
        <Button 
          onClick={() => onResponse(true)}
          className="w-full bg-primary hover:bg-primary/90"
        >
          Oui
        </Button>
        <Button 
          onClick={() => onResponse(false)}
          variant="outline"
          className="w-full"
        >
          Non
        </Button>
      </div>
    </motion.div>
  );
};