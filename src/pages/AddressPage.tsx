import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { OperatorCard } from "@/components/operator-card/OperatorCard";
import AddressForm from "@/components/AddressForm";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Download, Gift, Phone, Tv } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AddressPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedOperator = location.state?.selectedOperator;
  const isMobile = useIsMobile();
  const [addressValidated, setAddressValidated] = useState(false);
  const [showFinalStep, setShowFinalStep] = useState(false);
  const { toast } = useToast();

  if (!selectedOperator) {
    navigate("/comparison");
    return null;
  }

  const handleLearnMore = () => {
    navigate('/operator-details', { state: { operator: selectedOperator } });
  };

  const handleCallbackRequest = () => {
    toast({
      title: "Demande de rappel envoyée",
      description: "Un conseiller va vous recontacter dans les plus brefs délais.",
    });
  };

  const MobileOperatorCard = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 shadow-lg z-30">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={selectedOperator.logo} alt={selectedOperator.name} className="h-6 w-auto" />
          <div>
            <h3 className="font-semibold text-sm">{selectedOperator.name}</h3>
            <p className="text-xl font-bold">{selectedOperator.price}€<span className="text-xs font-normal text-gray-600">/mois</span></p>
          </div>
        </div>
        <div className="text-xs text-gray-600 text-right">
          <div className="flex items-center gap-1 justify-end">
            <Download className="w-3 h-3 text-primary" />
            {selectedOperator.speed}
          </div>
          <div className="flex items-center gap-1 justify-end">
            <Gift className="w-3 h-3 text-primary" />
            {selectedOperator.commitment}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <Tv className={`w-3 h-3 ${selectedOperator.tv ? "text-green-500" : "text-red-500"}`} />
          <span>TV {selectedOperator.tv ? "incluse" : "non incluse"}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-600">
          <Phone className={`w-3 h-3 ${selectedOperator.phone ? "text-green-500" : "text-red-500"}`} />
          <span>Téléphone {selectedOperator.phone ? "inclus" : "non inclus"}</span>
        </div>
      </div>

      <div className="border-t pt-2 mb-2">
        <div className="text-xs text-gray-600 mb-2">
          Une question ? Un conseiller expert {selectedOperator.name} vous rappelle immédiatement !
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleCallbackRequest}
          className="text-xs gap-1.5 w-full"
        >
          <Phone className="w-3 h-3" />
          Être rappelé
        </Button>
      </div>

      {!addressValidated && (
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 text-xs"
            onClick={handleLearnMore}
          >
            En savoir plus
          </Button>
        </div>
      )}
    </div>
  );

  const DesktopOperatorCard = () => (
    <div className="w-[320px] sticky top-[160px] z-20">
      <OperatorCard
        operator={selectedOperator}
        isSelected={true}
        onSelect={() => {}}
        isHovered={false}
        onHover={() => {}}
        isDisabled={false}
        hideLearnMore={addressValidated}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className={isMobile ? "pt-4 pb-[calc(100vh-60vh)]" : "pt-8"}>
          <motion.div 
            className="text-center mb-12 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Les meilleures offres Fibre
            </h1>
            <p className={`text-gray-600 max-w-2xl mx-auto ${isMobile ? "hidden" : ""}`}>
              Nous avons sélectionné et comparé les meilleures offres Internet Fibre pour vous aider à faire le meilleur choix.
            </p>
          </motion.div>

          <div className={`${isMobile ? "w-full" : "flex gap-8"}`}>
            <div className={`${isMobile ? "w-full" : "flex-1"}`}>
              {!addressValidated && (
                <div className="text-center mb-8 space-y-3">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Très bon choix !
                  </h2>
                  <p className="text-lg text-gray-600">
                    Dernières étapes pour profiter de votre offre <span className="font-semibold text-primary">{selectedOperator.name}</span>
                  </p>
                </div>
              )}
              <AddressForm 
                onAddressValidated={() => setAddressValidated(true)} 
                onFinalStep={() => setShowFinalStep(true)}
              />
            </div>
            
            {!showFinalStep && (isMobile ? <MobileOperatorCard /> : <DesktopOperatorCard />)}
          </div>
        </div>
      </div>

      {!isMobile && !showFinalStep && (
        <div className="fixed left-4 bottom-4 max-w-[280px] text-left z-50 bg-white p-4 rounded-lg shadow-lg border border-primary/20">
          <div className="text-base font-medium text-gray-800 mb-3">
            Une question ? Un conseiller expert {selectedOperator.name} vous rappelle immédiatement !
          </div>
          <Button 
            variant="default"
            size="sm" 
            onClick={handleCallbackRequest}
            className="text-sm gap-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
          >
            <Phone className="w-4 h-4" />
            Être rappelé
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddressPage;