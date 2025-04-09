
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RitualAccordion } from '@/components/RitualAccordion';
import { TawafTabs } from './TawafTabs';

interface TawafSectionProps {
  section: any;
}

export function TawafSection({ section }: TawafSectionProps) {
  return (
    <div>
      <h2 className="uppercase font-bold text-2xl mb-4" style={{ color: '#cff059' }}>TAWAF UMRAH</h2>
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
              
              {tabSection.id === "during" && <TawafTabs />}
              
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
    </div>
  );
}
