import { motion } from "framer-motion";

export const OfferBenefits = () => {
  return (
    <div className="relative z-10">
      <ul className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-lg">
        <li className="flex items-start">
          <span className="mr-3">✓</span>
          <span>Des débits ultra-rapides adaptés à tous vos besoins numériques</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3">✓</span>
          <span>Une installation professionnelle incluse et garantie</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3">✓</span>
          <span>Un service client disponible 7j/7 pour vous accompagner</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3">✓</span>
          <span>Des équipements dernière génération pour une connexion optimale</span>
        </li>
      </ul>
    </div>
  );
};