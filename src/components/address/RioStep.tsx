import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { UseFormReturn } from "react-hook-form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface RioStepProps {
  form: UseFormReturn<{
    rio: string;
  }>;
  onSubmit: (values: any) => void;
  onSkip: () => void;
}

export const RioStep = ({ form, onSubmit, onSkip }: RioStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md mx-auto p-6"
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-900">Dernière question !</h2>
      <p className="text-gray-600 mb-6">
        Renseignez votre RIO pour faciliter les démarches et profitez de vos avantages exclusifs
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="rio"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900">RIO</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="ABCD1234EFGH" 
                    maxLength={12} 
                    {...field} 
                    className="text-gray-900 uppercase" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-3">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Valider mon RIO
            </Button>
            <Button 
              type="button" 
              variant="outline"
              onClick={onSkip}
              className="w-full"
            >
              Je n'ai pas de RIO
            </Button>
          </div>
        </form>
      </Form>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="w-full mt-4">
            Comment obtenir mon RIO ?
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Comment obtenir votre RIO ?</DialogTitle>
            <DialogDescription className="pt-4">
              <ol className="list-decimal pl-4 space-y-2">
                <li>Appelez le 3179 (appel et service gratuits)</li>
                <li>Patientez quelques secondes</li>
                <li>Votre RIO vous sera communiqué par SMS et vocalement</li>
                <li>Notez les 12 caractères de votre RIO</li>
              </ol>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};
