import { motion } from "framer-motion";

export const TargetAudience = () => {
  return (
    <div className="relative z-10">
      <ul className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-lg">
        <li className="flex items-start">
          <span className="mr-3">👨‍👩‍👧‍👦</span>
          <span>Les familles connectées qui ont besoin d'une connexion stable pour tous leurs appareils</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3">🎮</span>
          <span>Les gamers à la recherche de performances optimales et d'une latence minimale</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3">💼</span>
          <span>Les télétravailleurs nécessitant une connexion fiable pour leurs visioconférences</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3">📺</span>
          <span>Les amateurs de streaming qui souhaitent profiter de leurs contenus en haute qualité</span>
        </li>
      </ul>
    </div>
  );
};