
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HotelChecklist, ChecklistItem } from './HotelChecklist';
import { RoadChecklist } from './RoadChecklist';
import { MosqueChecklist } from './MosqueChecklist';

interface TawafPreparationTabsProps {
  checklistItems: ChecklistItem[];
  setChecklistItems: React.Dispatch<React.SetStateAction<ChecklistItem[]>>;
  activeFormat: 'regular' | 'numbered' | 'bullet' | 'heading';
  setActiveFormat: React.Dispatch<React.SetStateAction<'regular' | 'numbered' | 'bullet' | 'heading'>>;
  isCountdownPlaying: boolean;
  handleStartCountdown: () => void;
  addNewItem: () => void;
}

export function TawafPreparationTabs({
  checklistItems,
  setChecklistItems,
  activeFormat,
  setActiveFormat,
  isCountdownPlaying,
  handleStartCountdown,
  addNewItem
}: TawafPreparationTabsProps) {
  return (
    <Tabs defaultValue="di-hotel" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="di-hotel">Di Hotel</TabsTrigger>
        <TabsTrigger value="di-jalan">Di Jalan</TabsTrigger>
        <TabsTrigger value="masuk-masjid">Masuk Masjid</TabsTrigger>
      </TabsList>
      
      <TabsContent value="di-hotel" className="space-y-4 p-3 border rounded-md mt-2">
        <HotelChecklist 
          checklistItems={checklistItems}
          setChecklistItems={setChecklistItems}
          activeFormat={activeFormat}
          setActiveFormat={setActiveFormat}
          isCountdownPlaying={isCountdownPlaying}
          handleStartCountdown={handleStartCountdown}
          addNewItem={addNewItem}
        />
      </TabsContent>
      
      <TabsContent value="di-jalan" className="space-y-4 p-3 border rounded-md mt-2">
        <RoadChecklist />
      </TabsContent>
      
      <TabsContent value="masuk-masjid" className="space-y-4 p-3 border rounded-md mt-2">
        <MosqueChecklist />
      </TabsContent>
    </Tabs>
  );
}
