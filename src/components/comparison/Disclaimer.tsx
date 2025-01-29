import { motion } from "framer-motion";

export const Disclaimer = () => {
  return (
    <motion.div 
      className="text-center text-gray-600 max-w-2xl mx-auto text-xs md:text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p>
        * Les prix et caractéristiques des offres sont donnés à titre indicatif et peuvent varier selon votre localisation et les promotions en cours.
      </p>
    </motion.div>
  );
};