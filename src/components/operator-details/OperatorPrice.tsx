interface OperatorPriceProps {
  price: string;
}

export const OperatorPrice = ({ price }: OperatorPriceProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center">
        <span className="text-5xl font-bold text-gray-900">{price}€</span>
        <span className="text-xl text-gray-500">/mois</span>
      </div>
    </div>
  );
};