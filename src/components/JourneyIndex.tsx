
import React from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clipboard, Heart, Plane, Book, MapPin, FileText, Building } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface IndexSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  items: {
    id: number;
    title: string;
  }[];
}

interface JourneyIndexProps {
  sections: IndexSection[];
  activeSectionId: string | null;
  activeItemId: number | null;
  onNavigate: (sectionId: string, itemId: number) => void;
}

const JourneyIndex: React.FC<JourneyIndexProps> = ({
  sections,
  activeSectionId,
  activeItemId,
  onNavigate
}) => {
  return (
    <div className="w-full rounded-md border p-4 shadow-sm dark:border-gray-700">
      <h2 className="mb-4 text-lg font-semibold">Journey Index</h2>
      <ScrollArea className="h-[400px] pr-4">
        <Accordion type="multiple" defaultValue={sections.map(s => s.id)} className="w-full">
          {sections.map((section) => (
            <AccordionItem key={section.id} value={section.id} className="border-b">
              <AccordionTrigger className="py-2">
                <div className="flex items-center">
                  <div className={`mr-2 flex h-6 w-6 items-center justify-center rounded-full ${section.color}`}>
                    {section.icon}
                  </div>
                  <span>{section.title}</span>
                  {activeSectionId === section.id && (
                    <Badge variant="outline" className="ml-2 bg-primary/10">Active</Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="ml-8 flex flex-col space-y-1 py-1">
                  {section.items.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      size="sm"
                      className={`justify-start px-2 py-1 text-left ${
                        activeSectionId === section.id && activeItemId === item.id
                          ? "bg-primary/10 font-medium"
                          : ""
                      }`}
                      onClick={() => onNavigate(section.id, item.id)}
                    >
                      {item.title}
                    </Button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollArea>
    </div>
  );
};

export default JourneyIndex;
