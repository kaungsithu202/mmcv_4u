import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ReactNode } from "react";
interface Props {
  title: string;
  children: ReactNode;
}

const CustomAccordion = ({ title, children }: Props) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="bg-white rounded-xl  px-6 py-4">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
