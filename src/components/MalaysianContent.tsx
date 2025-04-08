
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { RitualAccordion } from '@/components/RitualAccordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { umrahStepByStepMS } from '@/data/malaysianContent';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface MalaysianContentProps {
  sectionId: string;
}

export function MalaysianContent({ sectionId }: MalaysianContentProps) {
  const { language } = useLanguage();
  
  // Show component for Malaysian language
  if (language !== 'ms') return null;
  
  const sections = umrahStepByStepMS.filter(
    section => sectionId === 'all' || section.id.toString() === sectionId
  );

  const renderSectionContent = (section: any) => {
    // Check if this is the Tawaf Umrah section that needs tabs
    if (section.title === "Tawaf Umrah") {
      return (
        <Tabs defaultValue="before" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="before">Sebelum</TabsTrigger>
            <TabsTrigger value="during">Cara Tawaf</TabsTrigger>
            <TabsTrigger value="after">Selepas</TabsTrigger>
          </TabsList>
          
          {section.tabSections?.map((tabSection: any) => (
            <TabsContent key={tabSection.id} value={tabSection.id} className="space-y-4">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-4">{tabSection.details}</p>
                
                {tabSection.ritualSections?.map((ritualSection: any) => (
                  <RitualAccordion 
                    key={ritualSection.id} 
                    section={ritualSection as any} 
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      );
    }
    
    // For regular sections without tabs
    return (
      <>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-4">{section.details}</p>
          
          {section.ritualSections?.map((ritualSection: any) => (
            <RitualAccordion 
              key={ritualSection.id} 
              section={ritualSection as any} 
            />
          ))}
          
          {section.officialResourceLink && (
            <div className="mt-4 pt-3 border-t text-xs text-muted-foreground">
              <a 
                href={section.officialResourceLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Pautan Rasmi
              </a>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <Card key={section.id} className="overflow-hidden">
          <CardHeader className="bg-primary/10">
            <CardTitle>{section.title}</CardTitle>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            {renderSectionContent(section)}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
