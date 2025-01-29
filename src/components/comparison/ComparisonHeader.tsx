import { motion } from "framer-motion";

interface ComparisonHeaderProps {
  showContent: boolean;
}

export const ComparisonHeader = ({ showContent }: ComparisonHeaderProps) => {
  return (
    <motion.div 
      className="text-center mb-4 md:mb-8 space-y-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
        Les meilleures offres Fibre
      </h1>
      <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
        Nous avons sélectionné et comparé les meilleures offres Internet Fibre pour vous aider à faire le meilleur choix.
      </p>
    </motion.div>
  );
};