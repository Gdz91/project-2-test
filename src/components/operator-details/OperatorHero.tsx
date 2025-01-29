import { motion } from "framer-motion";
import { Operator } from "../operator-card/OperatorCard";

interface OperatorHeroProps {
  operator: Operator;
}

export const OperatorHero = ({ operator }: OperatorHeroProps) => {
  return (
    <motion.div 
      className="text-center mb-12 space-y-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Les meilleures offres Fibre
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto hidden md:block">
        Nous avons sélectionné et comparé les meilleures offres Internet Fibre pour vous aider à faire le meilleur choix.
      </p>
    </motion.div>
  );
};