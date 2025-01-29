import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import Tabs from "@/components/Tabs";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

const tabs = [
  { id: "offer", label: "Offre" },
  { id: "info", label: "Information" },
  { id: "validation", label: "Validation" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="min-h-screen wave-bg relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-md mx-auto space-y-8">
          <ProgressBar progress={67} />
          
          <Tabs 
            tabs={tabs} 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />

          <Card className="p-8 bg-white shadow-lg rounded-xl relative">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-4">
                Nous avons trouvé la meilleure offre pour vous
              </h1>
              <p className="text-sm text-gray-600 bg-[#E8F4E9] inline-block px-4 py-2 rounded-full">
                Vous recevrez gratuitement le détail de votre offre par téléphone
              </p>
            </div>

            <ContactForm />

            <p className="text-xs text-gray-500 mt-6 text-center">
              En continuant, vous acceptez nos conditions générales d'utilisation
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;