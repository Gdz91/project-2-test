import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface RatingCriteriaProps {
  label: string;
  rating: number;
}

const RatingCriteria = ({ label, rating }: RatingCriteriaProps) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <Star
          key={i}
          className="w-6 h-6 text-primary fill-primary"
        />
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className="relative w-6 h-6">
          <Star className="absolute w-6 h-6 text-primary" />
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="w-6 h-6 text-primary fill-primary" />
          </div>
        </div>
      );
    } else {
      stars.push(
        <Star
          key={i}
          className="w-6 h-6 text-primary"
        />
      );
    }
  }

  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-gray-700 font-medium">{label}</span>
      <div className="flex gap-1">
        {stars}
      </div>
    </div>
  );
};

export const OfferRating = () => {
  const ratings = [
    { label: "Prix", rating: 4.5 },
    { label: "Qualité du réseau", rating: 5 },
    { label: "Contenu de l'offre", rating: 4 },
    { label: "Service client", rating: 4.5 },
    { label: "Rapport qualité/prix", rating: 4.5 }
  ];

  const globalRating = Number((ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length).toFixed(1));

  return (
    <div className="relative z-10">
      <div className="subtle-gradient rounded-xl p-6">
        <div className="space-y-3">
          {ratings.map((criteria, index) => (
            <RatingCriteria
              key={index}
              label={criteria.label}
              rating={criteria.rating}
            />
          ))}
          
          <div className="pt-4 mt-4 border-t border-gray-200">
            <RatingCriteria
              label="Note globale"
              rating={globalRating}
            />
          </div>

          <div className="pt-4 mt-2">
            <p className="text-sm text-gray-600 leading-relaxed">
              Une offre très équilibrée qui se démarque par son excellent rapport qualité/prix et sa qualité de réseau irréprochable. Le service client réactif et le contenu complet de l'offre en font un choix particulièrement pertinent pour les utilisateurs exigeants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
