import { motion } from "framer-motion";
import { Operator } from "../operator-card/OperatorCard";
import { OfferOverview } from "./sections/OfferOverview";
import { OfferBenefits } from "./sections/OfferBenefits";
import { TargetAudience } from "./sections/TargetAudience";
import { ProfileCompatibility } from "./sections/ProfileCompatibility";
import { OfferRating } from "./sections/OfferRating";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileAccordion } from "./sections/MobileAccordion";

interface OperatorDescriptionProps {
  operator: Operator;
}

export const OperatorDescription = ({ operator }: OperatorDescriptionProps) => {
  const isMobile = useIsMobile();

  const sections = [
    {
      title: "Descriptif de l'offre",
      preview: "Profitez d'une connexion...",
      component: <OfferOverview operator={operator} />,
    },
    {
      title: "Pourquoi cette offre ?",
      preview: "Des débits ultra-rapides...",
      component: <OfferBenefits />,
    },
    {
      title: "Pour qui ?",
      preview: "Les familles connectées...",
      component: <TargetAudience />,
    },
    {
      title: "Compatibilité avec votre profil",
      preview: <ProfileCompatibility previewMode={true} />,
      component: <ProfileCompatibility previewMode={false} />,
    },
    {
      title: "Notation de l'offre",
      preview: "Une offre très...",
      component: <OfferRating />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="relative overflow-visible z-10"
    >
      <div className="subtle-gradient rounded-xl p-4 md:p-8">
        <h2 className="text-lg md:text-2xl font-semibold text-center mb-4 md:mb-8 text-gray-800 relative z-20">
          L'offre <span className="text-primary">{operator.name}</span> : {operator.highlight}
        </h2>
        
        <div className="flex items-center justify-center mb-4 md:mb-8">
          <motion.img 
            src={operator.logo} 
            alt={`Logo ${operator.name}`}
            className="h-12 md:h-16 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {isMobile ? (
          <MobileAccordion sections={sections} />
        ) : (
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>{section.component}</div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};