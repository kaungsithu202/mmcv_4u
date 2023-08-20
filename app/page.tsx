import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PersonalDetails from "@/components/ui/appComponents/PersonalDetails";
import PersonalDetailsInfo from "@/components/ui/appComponents/PersonalDetailsInfo";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto">
      <div className="grid grid-cols-5">
        <p>DashBoard</p>
        <div className="col-span-2 grid gap-3">
          <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl drop-shadow-md">
            <p className="text-2xl font-bold">KST CV</p>
            <button className="bg-slate-700 text-white rounded-full px-6 py-2">
              Download
            </button>
          </div>
          {/* <PersonalDetails /> */}
          <PersonalDetailsInfo />
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl  px-6 py-4"
              >
                <AccordionTrigger>Education</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl  px-6 py-4"
              >
                <AccordionTrigger>Education</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="bg-white rounded-xl  px-6 py-4"
              >
                <AccordionTrigger>Education</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <p className="col-span-2">c</p>
      </div>
    </div>
  );
}
