
import React, { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { umrahStepByStepMS } from '@/data/malaysianContent';
import { SectionContent } from './malaysian-content/SectionContent';
import { useAudio } from './malaysian-content/useAudio';
import { ChecklistItem } from './malaysian-content/HotelChecklist';

interface MalaysianContentProps {
  sectionId: string;
}

export function MalaysianContent({ sectionId }: MalaysianContentProps) {
  const { language } = useLanguage();
  const [activeFormat, setActiveFormat] = useState<'regular' | 'numbered' | 'bullet' | 'heading'>('regular');
  const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
    { 
      id: 'pakaian', 
      label: 'Pakaian', 
      description: 'Pakaian yang sesuai untuk lelaki dan wanita semasa menunaikan ibadah.',
      type: 'regular',
      hasTabs: true
    },
    { 
      id: 'pengenalandiri', 
      label: 'Pengenalan Diri', 
      description: 'Dokumen pengenalan diri dan visa yang diperlukan', 
      type: 'regular',
      hasTabs: true
    },
    { 
      id: 'alatan', 
      label: 'Alatan', 
      description: 'Alatan penting seperti sejadah, ubat-ubatan dan keperluan peribadi', 
      type: 'regular'
    },
    { 
      id: 'wang', 
      label: 'Wang', 
      description: 'Wang yang mencukupi dalam bentuk Riyal dan tambahan untuk kecemasan', 
      type: 'regular'
    },
    { 
      id: 'sediaminda', 
      label: 'SediaMinda', 
      description: 'Bersedia secara mental dan spiritual untuk beribadah', 
      type: 'regular'
    },
    { 
      id: 'larangan', 
      label: 'Larangan', 
      description: 'Memahami larangan semasa dalam ihram dan di tanah suci', 
      type: 'regular'
    },
  ]);

  const { isCountdownPlaying, handleStartCountdown, audioRef } = useAudio(checklistItems);
  
  if (language !== 'ms') return null;
  
  const sections = umrahStepByStepMS.filter(
    section => sectionId === 'all' || section.id.toString() === sectionId
  );

  const addNewItem = () => {
    const newItem: ChecklistItem = {
      id: `item-${Date.now()}`,
      label: 'Item Baru',
      description: 'Keterangan item baru',
      type: activeFormat
    };
    setChecklistItems([...checklistItems, newItem]);
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
            <SectionContent 
              section={section}
              checklistItems={checklistItems}
              setChecklistItems={setChecklistItems}
              activeFormat={activeFormat}
              setActiveFormat={setActiveFormat}
              isCountdownPlaying={isCountdownPlaying}
              handleStartCountdown={handleStartCountdown}
              addNewItem={addNewItem}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
