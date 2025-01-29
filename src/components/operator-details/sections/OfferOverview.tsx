import { motion } from "framer-motion";
import { Operator } from "../../operator-card/OperatorCard";

interface OfferOverviewProps {
  operator: Operator;
}

export const OfferOverview = ({ operator }: OfferOverviewProps) => {
  return (
    <div className="relative z-10">
      <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-3xl">
        Profitez d'une connexion internet ultra-rapide avec notre offre Fibre optimisée. 
        Cette solution complète vous permet de bénéficier d'une expérience en ligne 
        exceptionnelle, que ce soit pour le streaming, le gaming ou le télétravail. 
        Avec des débits optimaux et une stabilité garantie, vous pouvez naviguer, 
        télécharger et partager en toute sérénité.
      </p>
    </div>
  );
};