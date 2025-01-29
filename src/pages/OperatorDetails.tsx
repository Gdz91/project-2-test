import { useLocation, useNavigate } from "react-router-dom";
import { Operator } from "@/components/operator-card/OperatorCard";
import { OperatorHero } from "@/components/operator-details/OperatorHero";
import { OperatorDescription } from "@/components/operator-details/OperatorDescription";
import { Button } from "@/components/ui/button";
import { OperatorHeader } from "@/components/operator-card/OperatorHeader";
import { OperatorFeatures } from "@/components/operator-card/OperatorFeatures";
import { OperatorPrice } from "@/components/operator-card/OperatorPrice";
import { SoshAlert } from "@/components/operator-card/SoshAlert";
import { OperatorFeature } from "@/components/operator-card/OperatorFeature";
import { useIsMobile } from "@/hooks/use-mobile";

const OperatorDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const operator = location.state?.operator as Operator;
  const isMobile = useIsMobile();

  if (!operator) {
    navigate("/comparison");
    return null;
  }

  const handleSelectOffer = () => {
    navigate('/address', { 
      state: { 
        selectedOperator: operator 
      } 
    });
  };

  const handleBackToOffers = () => {
    navigate('/comparison', { state: { fromDetails: true } });
  };

  const MobileOfferCard = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-30">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img src={operator.logo} alt={operator.name} className="h-8 w-auto" />
          <div>
            <h3 className="font-semibold">{operator.name}</h3>
            <p className="text-2xl font-bold">{operator.price}€<span className="text-sm font-normal text-gray-600">/mois</span></p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <div>{operator.speed}</div>
          <div>{operator.commitment}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          className="flex-1 bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity"
          onClick={handleSelectOffer}
        >
          Choisir cette offre
        </Button>
        <Button
          variant="outline"
          className="flex-1 hover:bg-gray-50 transition-colors"
          onClick={handleBackToOffers}
        >
          Retour aux offres
        </Button>
      </div>
    </div>
  );

  const DesktopOfferCard = () => (
    <div className="w-[320px] sticky top-[160px] z-20">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        <OperatorHeader 
          name={operator.name}
          logo={operator.logo}
          highlight={operator.highlight}
          color={operator.color}
        />
        
        <div className="p-6">
          <div className="space-y-6">
            <div className="h-6">
              {operator.name === "Sosh" && <SoshAlert />}
            </div>
            
            <OperatorPrice price={operator.price} />

            <OperatorFeatures 
              speed={operator.speed}
              commitment={operator.commitment}
              tv={operator.tv}
              phone={operator.phone}
            />

            <div className="border-t pt-4">
              <ul className="space-y-2">
                {operator.features.map((feature, index) => (
                  <OperatorFeature 
                    key={index}
                    feature={feature}
                    index={index}
                  />
                ))}
              </ul>
            </div>

            <div className="space-y-3 mt-6">
              <Button
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:opacity-90 transition-opacity"
                onClick={handleSelectOffer}
              >
                Choisir cette offre
              </Button>
              <Button
                variant="outline"
                className="w-full hover:bg-gray-50 transition-colors"
                onClick={handleBackToOffers}
              >
                Retour aux offres
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {!isMobile && (
        <div className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 py-4">
            <OperatorHero operator={operator} />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <div className={isMobile ? "pt-4" : "pt-[160px]"}>
          <div className={isMobile ? "pb-32" : "flex gap-8"}>
            <div className={`${isMobile ? "w-full" : "flex-1"} h-[calc(100vh-200px)] overflow-y-auto pr-4`}>
              {isMobile && <OperatorHero operator={operator} />}
              <OperatorDescription operator={operator} />
            </div>
            
            {!isMobile && <DesktopOfferCard />}
          </div>
        </div>
      </div>

      {isMobile && <MobileOfferCard />}
    </div>
  );
};

export default OperatorDetails;