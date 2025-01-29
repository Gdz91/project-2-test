import { motion } from "framer-motion";

interface FractalTransitionProps {
  onComplete: () => void;
}

export const FractalTransition = ({ onComplete }: FractalTransitionProps) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-30"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: {
          scale: 0,
          opacity: 0,
        },
        animate: {
          scale: [0, 1.5, 2, 2.5, 3],
          opacity: [0, 1, 1, 1, 0],
          transition: {
            duration: 1.5,
            ease: "easeInOut",
            onComplete,
          }
        },
        exit: {
          scale: 3,
          opacity: 0,
          transition: {
            duration: 0.5,
          }
        }
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg animate-spin" 
             style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-md animate-spin" 
             style={{ animationDuration: '2s' }} />
        <div className="absolute inset-0 w-64 h-64 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full animate-spin" 
             style={{ animationDuration: '1s' }} />
      </div>
    </motion.div>
  );
};