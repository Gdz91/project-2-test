import { motion } from "framer-motion";

interface OperatorPriceProps {
  price: string;
}

export const OperatorPrice = ({ price }: OperatorPriceProps) => {
  return (
    <motion.div 
      className="text-center"
      whileHover={{ scale: 1.1 }}
      layout
    >
      <span className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
        {price}€
      </span>
      <span className="text-gray-500 ml-2">/mois</span>
    </motion.div>
  );
};