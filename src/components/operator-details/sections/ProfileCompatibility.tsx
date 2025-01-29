import { motion } from "framer-motion";
import ProgressBar from "../../ProgressBar";

interface ProfileCompatibilityProps {
  previewMode?: boolean;
}

export const ProfileCompatibility = ({ previewMode = false }: ProfileCompatibilityProps) => {
  const compatibilityScore = 80;

  if (previewMode) {
    return (
      <div className="space-y-2">
        <div className="flex items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Compatible à {compatibilityScore}%
          </span>
        </div>
        <ProgressBar progress={compatibilityScore} />
      </div>
    );
  }

  return (
    <div className="relative z-10">
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Compatible à {compatibilityScore}%
            </span>
          </div>
          <ProgressBar progress={compatibilityScore} />
        </div>

        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">
            Cette offre correspond particulièrement bien à votre profil d'utilisation. Le débit proposé est parfaitement adapté à une utilisation intensive d'Internet, notamment pour le streaming et les jeux en ligne.
          </p>
          <p className="leading-relaxed">
            L'excellent rapport qualité-prix correspond à vos besoins identifiés. Néanmoins, nous vous conseillons de vérifier la couverture dans votre zone et de prendre en compte l'engagement sur 12 mois avant de vous décider.
          </p>
        </div>
      </div>
    </div>
  );
};