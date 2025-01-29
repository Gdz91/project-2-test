import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FinalStepProps {
  operatorName: string;
  operatorLogo: string;
}

export const FinalStep = ({ operatorName, operatorLogo }: FinalStepProps) => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const handleScheduleCall = () => {
    toast({
      title: "Demande envoyée",
      description: "Un conseiller va vous recontacter pour planifier un rendez-vous.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md mx-auto p-6 space-y-6"
    >
      <div className="text-center space-y-4">
        <p className="text-xl">
          Votre offre {operatorName} est{" "}
          <span className="font-bold underline decoration-primary decoration-2">
            réservée
          </span>{" "}
          pour vous pendant encore{" "}
          <span className="font-bold text-primary">
            {minutes}:{seconds.toString().padStart(2, "0")}
          </span>{" "}
          minutes !
        </p>

        <div className="flex justify-center py-4">
          <img 
            src={operatorLogo} 
            alt={`Logo ${operatorName}`} 
            className="h-24 w-auto object-contain"
          />
        </div>
        
        <p className="text-gray-600">
          Un conseiller expert {operatorName} va vous recontacter par téléphone pour{" "}
          <span className="font-semibold text-primary">vérifier votre offre</span> et{" "}
          <span className="font-semibold text-primary">répondre aux éventuelles questions</span>. 
          Cette étape permettra de{" "}
          <span className="font-semibold text-primary">valider votre offre</span> !
        </p>
        
        <p className="text-sm text-yellow-600 bg-yellow-50 p-2 rounded-lg border border-yellow-100">
          🔔 Ne ratez pas l'appel pour ne pas perdre l'offre !
        </p>

        <div className="border-t pt-6">
          <p className="text-gray-600 mb-4">
            Vous n'êtes pas disponible ? <span className="font-semibold">Pas d'inquiétudes</span>, 
            nous pouvons{" "}
            <span className="text-primary font-semibold">
              programmer un rendez-vous téléphonique
            </span>
          </p>
          <Button 
            onClick={handleScheduleCall}
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 gap-2 py-6"
          >
            <Calendar className="w-5 h-5" />
            Prendre un rendez-vous
          </Button>
        </div>

        <div className="mt-8 border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Récapitulatif de votre offre</h3>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg space-y-4 text-left shadow-sm">
            <div className="text-center mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                19,99€
              </span>
              <span className="text-gray-600 ml-2">/mois</span>
            </div>
            <p className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span>Débit jusqu'à <span className="font-semibold text-primary">1 Gb/s</span></span>
            </p>
            <p className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span>TV incluse avec <span className="font-semibold text-primary">+150 chaînes</span></span>
            </p>
            <p className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span>Appels illimités vers les fixes et mobiles</span>
            </p>
            <p className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" />
              <span>Installation et activation <span className="font-semibold text-primary">offertes</span></span>
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-sm text-gray-600">
          <p className="bg-green-50 p-3 rounded-lg border border-green-100">
            ✨ Cette offre vous est <span className="font-semibold">réservée</span> et sera{" "}
            <span className="font-semibold">validée définitivement</span> lors de l'appel téléphonique,{" "}
            avec votre accord.
          </p>
          <p className="italic">
            L'appel téléphonique est totalement gratuit et sans engagement de votre part.
          </p>
        </div>
      </div>
    </motion.div>
  );
};