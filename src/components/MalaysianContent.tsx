
import React, { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { RitualAccordion } from '@/components/RitualAccordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown, Speaker, Clock } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface MalaysianContentProps {
  sectionId: string;
}

export function MalaysianContent({ sectionId }: MalaysianContentProps) {
  const { language } = useLanguage();
  const [isCountdownPlaying, setIsCountdownPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Show component for Malaysian language
  if (language !== 'ms') return null;
  
  const sections = umrahStepByStepMS.filter(
    section => sectionId === 'all' || section.id.toString() === sectionId
  );

  const handleStartCountdown = () => {
    if (isCountdownPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      setIsCountdownPlaying(false);
    } else {
      // This would be implemented with actual audio in a production app
      // For now, we'll simulate with speech synthesis
      if ('speechSynthesis' in window) {
        const items = ['Pakaian', 'Pengenalan', 'Alatan', 'Wang', 'SediaMinda', 'Larangan'];
        const utterance = new SpeechSynthesisUtterance(items.join(', '));
        utterance.lang = 'ms-MY';
        speechSynthesis.speak(utterance);
      }
      setIsCountdownPlaying(true);
      
      // Auto stop after 10 seconds
      setTimeout(() => {
        setIsCountdownPlaying(false);
      }, 10000);
    }
  };

  const renderHotelChecklist = () => {
    const items = [
      { id: 'pakaian', label: 'Pakaian' },
      { id: 'pengenalan', label: 'Pengenalan' },
      { id: 'alatan', label: 'Alatan' },
      { id: 'wang', label: 'Wang' },
      { id: 'sediaminda', label: 'SediaMinda' },
      { id: 'larangan', label: 'Larangan' },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Button 
            variant={isCountdownPlaying ? "destructive" : "outline"} 
            size="sm" 
            onClick={handleStartCountdown}
            className="flex items-center space-x-1"
          >
            {isCountdownPlaying ? <Clock className="h-4 w-4" /> : <Speaker className="h-4 w-4" />}
            <span>{isCountdownPlaying ? "Berhenti Audio" : "Main Audio"}</span>
          </Button>
        </div>
        
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox id={item.id} />
              <label
                htmlFor={item.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderRoadChecklist = () => {
    const items = [
      { id: 'info-hotel', label: 'Info Hotel' },
      { id: 'mercu-tanda', label: 'Mercu Tanda' },
      { id: 'tandas', label: 'Tandas' },
    ];

    return (
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox id={item.id} />
            <label
              htmlFor={item.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    );
  };

  const renderMosqueChecklist = () => {
    const items = [
      { id: 'nombor-pintu', label: 'Nombor Pintu' },
      { id: 'rak-selipar', label: 'Rak Selipar' },
      { id: 'doa', label: 'Doa' },
    ];

    return (
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox id={item.id} />
            <label
              htmlFor={item.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    );
  };

  const renderTawafPreparationTabs = () => {
    return (
      <Tabs defaultValue="di-hotel" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="di-hotel">Di Hotel</TabsTrigger>
          <TabsTrigger value="di-jalan">Di Jalan</TabsTrigger>
          <TabsTrigger value="masuk-masjid">Masuk Masjid</TabsTrigger>
        </TabsList>
        
        <TabsContent value="di-hotel" className="space-y-4 p-3 border rounded-md mt-2">
          {renderHotelChecklist()}
        </TabsContent>
        
        <TabsContent value="di-jalan" className="space-y-4 p-3 border rounded-md mt-2">
          {renderRoadChecklist()}
        </TabsContent>
        
        <TabsContent value="masuk-masjid" className="space-y-4 p-3 border rounded-md mt-2">
          {renderMosqueChecklist()}
        </TabsContent>
      </Tabs>
    );
  };

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
                
                {/* Add the nested tabs for the "before" tab */}
                {tabSection.id === "before" && renderTawafPreparationTabs()}
                
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
