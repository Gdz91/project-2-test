import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { AddressStep } from "./address/AddressStep";
import { NameStep } from "./address/NameStep";
import { LandlineStep } from "./address/LandlineStep";
import { RioStep } from "./address/RioStep";
import { FinalStep } from "./address/FinalStep";
import { useLocation } from "react-router-dom";

const addressSchema = z.object({
  street: z.string().min(1, "L'adresse est requise"),
  city: z.string().min(1, "La ville est requise"),
  zipCode: z.string().min(5, "Le code postal doit contenir 5 chiffres").max(5),
});

const nameSchema = z.object({
  title: z.enum(["M.", "Mme", "Autre"], {
    required_error: "Veuillez sélectionner une civilité",
  }),
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
});

const rioSchema = z.object({
  rio: z.string().min(12, "Le RIO doit contenir 12 caractères").max(12),
});

type AddressFormData = z.infer<typeof addressSchema>;
type NameFormData = z.infer<typeof nameSchema>;
type RioFormData = z.infer<typeof rioSchema>;

const AddressForm = ({ onAddressValidated, onFinalStep }: { onAddressValidated: () => void; onFinalStep: () => void; }) => {
  const [showNameForm, setShowNameForm] = useState(false);
  const [showLandlineQuestion, setShowLandlineQuestion] = useState(false);
  const [showRioForm, setShowRioForm] = useState(false);
  const [showFinalStep, setShowFinalStep] = useState(false);
  const location = useLocation();
  const selectedOperator = location.state?.selectedOperator;

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      street: "",
      city: "",
      zipCode: "",
    },
    mode: "onBlur",
  });

  const nameForm = useForm<NameFormData>({
    resolver: zodResolver(nameSchema),
    defaultValues: {
      title: "M.",
      firstName: "",
      lastName: "",
    },
    mode: "onBlur",
  });

  const rioForm = useForm<RioFormData>({
    resolver: zodResolver(rioSchema),
    defaultValues: {
      rio: "",
    },
    mode: "onBlur",
  });

  const onSubmitAddress = (values: AddressFormData) => {
    console.log("Address values:", values);
    setShowNameForm(true);
    onAddressValidated();
  };

  const onSubmitName = (values: NameFormData) => {
    console.log("Name values:", values);
    setShowLandlineQuestion(true);
  };

  const handleLandlineResponse = (usesLandline: boolean) => {
    console.log("Uses landline:", usesLandline);
    if (usesLandline) {
      setShowRioForm(true);
    } else {
      console.log("All form data without RIO:", {
        address: addressForm.getValues(),
        name: nameForm.getValues(),
        rio: null,
      });
      setShowFinalStep(true);
      onFinalStep();
    }
  };

  const onSubmitRio = (values: RioFormData) => {
    console.log("Rio value:", values);
    console.log("All form data:", {
      address: addressForm.getValues(),
      name: nameForm.getValues(),
      rio: values,
    });
    setShowFinalStep(true);
    onFinalStep();
  };

  const handleNoRio = () => {
    console.log("All form data without RIO:", {
      address: addressForm.getValues(),
      name: nameForm.getValues(),
      rio: null,
    });
    setShowFinalStep(true);
    onFinalStep();
  };

  return (
    <div className="relative">
      <div className="space-y-8">
        {!showNameForm && !showLandlineQuestion && !showRioForm && !showFinalStep && (
          <AddressStep 
            form={addressForm as any} 
            onSubmit={onSubmitAddress} 
          />
        )}

        {showNameForm && !showLandlineQuestion && !showRioForm && !showFinalStep && (
          <NameStep 
            form={nameForm as any} 
            onSubmit={onSubmitName} 
          />
        )}

        {showLandlineQuestion && !showRioForm && !showFinalStep && (
          <LandlineStep onResponse={handleLandlineResponse} />
        )}

        {showRioForm && !showFinalStep && (
          <RioStep 
            form={rioForm as any} 
            onSubmit={onSubmitRio} 
            onSkip={handleNoRio} 
          />
        )}

        {showFinalStep && selectedOperator && (
          <FinalStep 
            operatorName={selectedOperator.name} 
            operatorLogo={selectedOperator.logo}
          />
        )}
      </div>
    </div>
  );
};

export default AddressForm;