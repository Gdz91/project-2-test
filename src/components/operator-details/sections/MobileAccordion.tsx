import { AccordionContent, AccordionItem, AccordionTrigger, Accordion } from "@/components/ui/accordion";
import { ReactNode } from "react";

interface Section {
  title: string;
  preview: string | ReactNode;
  component: ReactNode;
}

interface MobileAccordionProps {
  sections: Section[];
}

export const MobileAccordion = ({ sections }: MobileAccordionProps) => {
  const getPreviewText = (preview: string | ReactNode) => {
    if (typeof preview === 'string') {
      return preview.split(' ').slice(0, 3).join(' ') + '...';
    }
    return preview;
  };

  return (
    <Accordion type="single" collapsible className="space-y-2">
      {sections.map((section, index) => (
        <AccordionItem 
          key={index} 
          value={`section-${index}`} 
          className="border-b border-gray-200 last:border-b-0"
        >
          <AccordionTrigger className="text-base font-semibold hover:no-underline py-2">
            {section.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-sm pb-2">
              {section.component}
            </div>
          </AccordionContent>
          <div className="text-xs text-gray-600 px-4 pb-2 hidden data-[state=closed]:block">
            {getPreviewText(section.preview)}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};