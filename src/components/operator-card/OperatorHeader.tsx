import { motion } from "framer-motion";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface OperatorHeaderProps {
  name: string;
  logo: string;
  highlight: string;
  color: string;
  showAlert?: boolean;
}

export const OperatorHeader = ({ name, logo, highlight, color, showAlert }: OperatorHeaderProps) => {
  return (
    <div className={`${color} p-3 relative rounded-t-xl`}>
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h3 className="text-white text-xl font-semibold">{name}</h3>
          <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full">
            {highlight}
          </span>
        </div>
        <div className="flex flex-col items-end gap-2">
          <motion.div 
            className="bg-white rounded-lg p-1.5 w-12 h-12 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src={logo} 
              alt={`Logo ${name}`} 
              className="w-full h-full object-contain"
            />
          </motion.div>
          {showAlert && (
            <Alert className="border-none bg-red-500/90 py-1 px-2 rounded-md shadow-lg">
              <AlertDescription className="text-[11px] text-white font-bold">
                Dernières offres !
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};