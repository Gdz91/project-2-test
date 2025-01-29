interface OperatorCharacteristicsProps {
  speed: string;
  commitment: string;
  tv: boolean;
  phone: boolean;
}

export const OperatorCharacteristics = ({ speed, commitment, tv, phone }: OperatorCharacteristicsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Caractéristiques</h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <span className="font-medium">Vitesse :</span> {speed}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-medium">Engagement :</span> {commitment}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-medium">TV :</span> {tv ? "Incluse" : "Non incluse"}
        </li>
        <li className="flex items-center gap-2">
          <span className="font-medium">Téléphone :</span> {phone ? "Inclus" : "Non inclus"}
        </li>
      </ul>
    </div>
  );
};