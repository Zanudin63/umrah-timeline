
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RitualAccordion } from '@/components/RitualAccordion';
import { TawafPreparationTabs } from './TawafPreparationTabs';
import { ChecklistItem } from './HotelChecklist';

interface SectionContentProps {
  section: any;
  checklistItems: ChecklistItem[];
  setChecklistItems: React.Dispatch<React.SetStateAction<ChecklistItem[]>>;
  activeFormat: 'regular' | 'numbered' | 'bullet' | 'heading';
  setActiveFormat: React.Dispatch<React.SetStateAction<'regular' | 'numbered' | 'bullet' | 'heading'>>;
  isCountdownPlaying: boolean;
  handleStartCountdown: () => void;
  addNewItem: () => void;
}

export function SectionContent({
  section,
  checklistItems,
  setChecklistItems,
  activeFormat,
  setActiveFormat,
  isCountdownPlaying,
  handleStartCountdown,
  addNewItem
}: SectionContentProps) {
  if (section.title === "Tawaf Umrah") {
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
                
                {tabSection.id === "before" && (
                  <TawafPreparationTabs 
                    checklistItems={checklistItems}
                    setChecklistItems={setChecklistItems}
                    activeFormat={activeFormat}
                    setActiveFormat={setActiveFormat}
                    isCountdownPlaying={isCountdownPlaying}
                    handleStartCountdown={handleStartCountdown}
                    addNewItem={addNewItem}
                  />
                )}
                
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
}
