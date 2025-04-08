
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ContentLock } from '@/components/ContentLock';
import { ExceptionIcon } from '@/components/ExceptionIcon';

interface RitualSection {
  id: string;
  title: string;
  type: 'movement' | 'recital' | 'mind' | 'adab';
  content: {
    id: string;
    text: string;
    exceptions?: Array<{
      type: 'female' | 'handicapped' | 'sick' | 'video' | 'nas' | 'daimulhadas' | 'jahil' | 'taksengaja' | 'info';
      description?: string;
    }>;
  }[];
}

interface RitualAccordionProps {
  section: RitualSection;
}

export function RitualAccordion({ section }: RitualAccordionProps) {
  const typeIcons = {
    movement: '🔄',
    recital: '🗣️',
    mind: '🧠',
    adab: '🤲',
  };

  return (
    <Card className="mb-4 overflow-hidden">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={section.id} className="border-0">
          <div className="flex items-center px-4 py-2 bg-secondary/20">
            <AccordionTrigger className="flex-1 hover:no-underline py-0">
              <div className="flex items-center space-x-2 text-left">
                <span className="text-lg">{typeIcons[section.type]}</span>
                <span className="font-medium">{section.title}</span>
              </div>
            </AccordionTrigger>
            <ContentLock id={`section-${section.id}`} />
          </div>
          
          <AccordionContent className="pt-2 px-4 pb-3">
            <ul className="space-y-2 list-disc pl-5">
              {section.content.map((item) => (
                <li key={item.id} className="flex items-start">
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span>{item.text}</span>
                      <ContentLock id={`item-${item.id}`} />
                    </div>
                    
                    {item.exceptions && item.exceptions.length > 0 && (
                      <div className="flex flex-wrap mt-1 gap-1">
                        {item.exceptions.map((exception, index) => (
                          <ExceptionIcon 
                            key={index} 
                            type={exception.type} 
                            tooltipText={exception.description} 
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
