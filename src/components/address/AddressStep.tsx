import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";

interface AddressStepProps {
  form: UseFormReturn<any>;
  onSubmit: (values: any) => void;
}

export const AddressStep = ({ form, onSubmit }: AddressStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md mx-auto p-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Votre adresse</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900">Adresse</FormLabel>
                <FormControl>
                  <Input placeholder="123 rue de la Paix" {...field} className="text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900">Ville</FormLabel>
                <FormControl>
                  <Input placeholder="Paris" {...field} className="text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900">Code postal</FormLabel>
                <FormControl>
                  <Input placeholder="75000" maxLength={5} {...field} className="text-gray-900" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            Valider mon adresse
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};
