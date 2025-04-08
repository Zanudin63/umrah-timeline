
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { ContentLock } from '@/components/ContentLock';
import { ExceptionIcon } from '@/components/ExceptionIcon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { AlertCircle, HelpCircle, ChevronDown } from 'lucide-react';

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
    mistakes?: Array<{
      action: string;
      ruling: string;
      correction: string;
    }>;
    whatIfs?: Array<{
      scenario: string;
      ruling: string;
      solution: string;
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
                <li key={item.id} className="flex flex-col items-start">
                  <div className="flex w-full items-start">
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
                  </div>
                  
                  <div className="mt-2 w-full space-y-2">
                    {/* Kesilapan Lazim */}
                    {item.mistakes && item.mistakes.length > 0 && (
                      <Collapsible className="w-full">
                        <div className="flex items-center gap-2 border rounded-md px-3 py-1.5 bg-red-50 dark:bg-red-900/10">
                          <AlertCircle className="h-4 w-4 text-red-500" />
                          <h4 className="text-sm font-medium flex-1">Kesilapan Lazim</h4>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
                              <ChevronDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="pt-2">
                          <Tabs defaultValue="buat" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="buat">Buat</TabsTrigger>
                              <TabsTrigger value="hukumnya">Hukumnya</TabsTrigger>
                              <TabsTrigger value="perlulah">Perlulah</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="buat" className="p-2 border rounded-md mt-2">
                              <ul className="space-y-1">
                                {item.mistakes.map((mistake, index) => (
                                  <li key={index} className="text-sm">{mistake.action}</li>
                                ))}
                              </ul>
                            </TabsContent>
                            
                            <TabsContent value="hukumnya" className="p-2 border rounded-md mt-2">
                              <ul className="space-y-1">
                                {item.mistakes.map((mistake, index) => (
                                  <li key={index} className="text-sm">{mistake.ruling}</li>
                                ))}
                              </ul>
                            </TabsContent>
                            
                            <TabsContent value="perlulah" className="p-2 border rounded-md mt-2">
                              <ul className="space-y-1">
                                {item.mistakes.map((mistake, index) => (
                                  <li key={index} className="text-sm">{mistake.correction}</li>
                                ))}
                              </ul>
                            </TabsContent>
                          </Tabs>
                        </CollapsibleContent>
                      </Collapsible>
                    )}
                    
                    {/* Sekiranya */}
                    {item.whatIfs && item.whatIfs.length > 0 && (
                      <Collapsible className="w-full">
                        <div className="flex items-center gap-2 border rounded-md px-3 py-1.5 bg-blue-50 dark:bg-blue-900/10">
                          <HelpCircle className="h-4 w-4 text-blue-500" />
                          <h4 className="text-sm font-medium flex-1">Sekiranya</h4>
                          <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="sm" className="p-0 h-6 w-6">
                              <ChevronDown className="h-4 w-4" />
                              <span className="sr-only">Toggle</span>
                            </Button>
                          </CollapsibleTrigger>
                        </div>
                        <CollapsibleContent className="pt-2">
                          <Tabs defaultValue="buat" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="buat">Buat</TabsTrigger>
                              <TabsTrigger value="hukumnya">Hukumnya</TabsTrigger>
                              <TabsTrigger value="perlulah">Perlulah</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="buat" className="p-2 border rounded-md mt-2">
                              <ul className="space-y-1">
                                {item.whatIfs.map((whatIf, index) => (
                                  <li key={index} className="text-sm">{whatIf.scenario}</li>
                                ))}
                              </ul>
                            </TabsContent>
                            
                            <TabsContent value="hukumnya" className="p-2 border rounded-md mt-2">
                              <ul className="space-y-1">
                                {item.whatIfs.map((whatIf, index) => (
                                  <li key={index} className="text-sm">{whatIf.ruling}</li>
                                ))}
                              </ul>
                            </TabsContent>
                            
                            <TabsContent value="perlulah" className="p-2 border rounded-md mt-2">
                              <ul className="space-y-1">
                                {item.whatIfs.map((whatIf, index) => (
                                  <li key={index} className="text-sm">{whatIf.solution}</li>
                                ))}
                              </ul>
                            </TabsContent>
                          </Tabs>
                        </CollapsibleContent>
                      </Collapsible>
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
