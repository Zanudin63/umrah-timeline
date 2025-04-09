
import React from 'react';
import { ChecklistItem } from './HotelChecklist';
import { TawafPreparationTabs } from './TawafPreparationTabs';
import { TawafSection } from './TawafSection';
import { MiqatSection } from './MiqatSection';
import { DefaultSectionContent } from './DefaultSectionContent';

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
    return <TawafSection section={section} />;
  }
  
  if (section.title === "Miqat, Niat dan Ihram") {
    return <MiqatSection section={section} />;
  }
  
  return <DefaultSectionContent section={section} />;
}
