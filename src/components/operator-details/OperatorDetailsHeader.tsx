import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface OperatorDetailsHeaderProps {
  name: string;
  highlight: string;
  color: string;
  onClose: () => void;
}

export const OperatorDetailsHeader = ({ name, highlight, color, onClose }: OperatorDetailsHeaderProps) => {
  return (
    <motion.div className={`${color} p-8 text-white relative`}>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 text-white hover:bg-white/20"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </Button>
      <h2 className="text-3xl font-bold mb-2">{name}</h2>
      <p className="text-xl opacity-90">{highlight}</p>
    </motion.div>
  );
};