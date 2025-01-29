import { Download, Gift, Phone, Tv } from "lucide-react";
import { motion } from "framer-motion";

interface OperatorFeaturesProps {
  speed: string;
  commitment: string;
  tv: boolean;
  phone: boolean;
}

export const OperatorFeatures = ({ speed, commitment, tv, phone }: OperatorFeaturesProps) => {
  return (
    <div className="space-y-4">
      {[
        { icon: <Download className="text-primary w-5 h-5" />, text: speed },
        { icon: <Gift className="text-primary w-5 h-5" />, text: commitment },
        { icon: <Tv className={tv ? "text-green-500" : "text-red-500"} />, text: "TV incluse" },
        { icon: <Phone className={phone ? "text-green-500" : "text-red-500"} />, text: "Téléphone inclus" }
      ].map((item, i) => (
        <motion.div 
          key={i}
          className="flex items-center gap-3"
          whileHover={{ x: 5 }}
          layout
        >
          {item.icon}
          <span className="text-gray-700">{item.text}</span>
        </motion.div>
      ))}
    </div>
  );
};