
import React, { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { RitualAccordion } from '@/components/RitualAccordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown, Speaker, Clock, List, ListChecks, ListOrdered, AlignLeft } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { umrahStepByStepMS } from '@/data/malaysianContent';
import { Separator } from '@/components/ui/separator';

interface MalaysianContentProps {
  sectionId: string;
}

// Types for different item formats
type ChecklistItem = {
  id: string;
  label: string;
  description: string;
  type: 'regular' | 'numbered' | 'bullet' | 'heading';
  checked?: boolean;
  hasTabs?: boolean;
};

export function MalaysianContent({ sectionId }: MalaysianContentProps) {
  const { language } = useLanguage();
  const [isCountdownPlaying, setIsCountdownPlaying] = useState(false);
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
        const items = checklistItems.map(item => item.label);
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

  const handleFormatChange = (format: 'regular' | 'numbered' | 'bullet' | 'heading') => {
    setActiveFormat(format);
  };

  const addNewItem = () => {
    const newItem: ChecklistItem = {
      id: `item-${Date.now()}`,
      label: 'Item Baru',
      description: 'Keterangan item baru',
      type: activeFormat
    };
    setChecklistItems([...checklistItems, newItem]);
  };

  const toggleItemType = (id: string, newType: 'regular' | 'numbered' | 'bullet' | 'heading') => {
    setChecklistItems(
      checklistItems.map(item => 
        item.id === id ? { ...item, type: newType } : item
      )
    );
  };

  const toggleItemChecked = (id: string) => {
    setChecklistItems(
      checklistItems.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const renderPakaianTabs = () => {
    return (
      <Tabs defaultValue="lelaki" className="w-full mt-2">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="lelaki">Lelaki</TabsTrigger>
          <TabsTrigger value="wanita">Wanita</TabsTrigger>
          <TabsTrigger value="oku">OKU</TabsTrigger>
          <TabsTrigger value="hadas">Hadas</TabsTrigger>
        </TabsList>
        
        <TabsContent value="lelaki" className="p-2 text-sm">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Pakailah 2 kain ihram dengan kemas agar tidak mendedahkan Aurat di antara pusat dan lutut, walaupun ketika melangkah kaki.</li>
            <li>Pakailah talipinggang jika perlu.</li>
            <li>Pakailah selipar yang patuh-ihram.</li>
          </ol>
        </TabsContent>
        
        <TabsContent value="wanita" className="p-2 text-sm">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Pastikan Pakaian menututup Aurat dengan sempurna tanpa menututp muka</li>
            <li>Pakailah tali yg menahan pangkal lengan baju daripada menggelongsor ke bawah jika tangan di angkat</li>
            <li>Pakai setokin yg cukup tebal lagi tidak mudah tanggal sekalipun dipijak orang</li>
            <li>Dilarang memakai sunglass yang terlalu besar</li>
            <li>Pastikan tiada seutas rambut sekalipun yang terlepas keluar</li>
          </ol>
        </TabsContent>
        
        <TabsContent value="oku" className="p-2 text-sm">
          <p>Panduan pakaian khusus untuk Orang Kurang Upaya (OKU) semasa menunaikan ibadah.</p>
        </TabsContent>
        
        <TabsContent value="hadas" className="p-2 text-sm">
          <p className="mb-2">30 minit sebelum turun ke MasjidilHaram, selepas mensucikan najis haid atau tahi atau kencing, pakailah pampers untuk mengelakkan pencemaran najis di lantai masjid nanti.</p>
        </TabsContent>
      </Tabs>
    );
  };

  const renderPengenalanDiriTabs = () => {
    return (
      <Tabs defaultValue="identiti" className="w-full mt-2">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="identiti">Identiti</TabsTrigger>
          <TabsTrigger value="sekiranya">Sekiranya</TabsTrigger>
          <TabsTrigger value="nota">Nota</TabsTrigger>
        </TabsList>
        
        <TabsContent value="identiti" className="p-2 text-sm">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Salinan Passport termasuk Salinan Visa.</li>
            <li>Lanyard Kad Jemaah.</li>
            <li>Beg Travel</li>
            <li>Kad Hotel.</li>
          </ol>
        </TabsContent>
        
        <TabsContent value="sekiranya" className="p-2 text-sm">
          <p>Panduan tambahan sekiranya dokumen hilang atau terdapat masalah dengan pengenalan diri.</p>
        </TabsContent>
        
        <TabsContent value="nota" className="p-2 text-sm">
          <p className="mb-2">Catatan penting berkaitan pengenalan diri semasa menunaikan ibadah.</p>
        </TabsContent>
      </Tabs>
    );
  };

  const renderHotelChecklist = () => {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
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

          <div className="flex items-center space-x-1">
            <Button 
              variant={activeFormat === 'regular' ? "default" : "outline"} 
              size="sm" 
              onClick={() => handleFormatChange('regular')}
              className="h-8 w-8 p-0"
            >
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant={activeFormat === 'numbered' ? "default" : "outline"} 
              size="sm" 
              onClick={() => handleFormatChange('numbered')}
              className="h-8 w-8 p-0"
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
            <Button 
              variant={activeFormat === 'bullet' ? "default" : "outline"} 
              size="sm" 
              onClick={() => handleFormatChange('bullet')}
              className="h-8 w-8 p-0"
            >
              <List className="h-4 w-4" />
            </Button>
            <Button 
              variant={activeFormat === 'heading' ? "default" : "outline"} 
              size="sm" 
              onClick={() => handleFormatChange('heading')}
              className="h-8 w-8 p-0 font-bold"
            >
              H
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={addNewItem}
              className="ml-2"
            >
              + Tambah
            </Button>
          </div>
        </div>
        
        <div className="space-y-2">
          {checklistItems.map((item) => {
            if (item.type === 'heading') {
              return (
                <div key={item.id} className="mt-4 mb-2">
                  <h3 className="text-lg font-bold">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {item.hasTabs && item.id === 'pakaian' && renderPakaianTabs()}
                  {item.hasTabs && item.id === 'pengenalandiri' && renderPengenalanDiriTabs()}
                  <Separator className="mt-2" />
                </div>
              );
            }
            
            if (item.type === 'numbered') {
              return (
                <div key={item.id} className="flex items-start space-x-2 mb-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs">
                    {checklistItems.findIndex(i => i.id === item.id) + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={item.id} 
                        checked={item.checked} 
                        onCheckedChange={() => toggleItemChecked(item.id)}
                      />
                      <label
                        htmlFor={item.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item.label}
                      </label>
                      <div className="flex ml-auto space-x-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 w-6 p-0"
                          onClick={() => toggleItemType(item.id, 'regular')}
                        >
                          <AlignLeft className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 w-6 p-0"
                          onClick={() => toggleItemType(item.id, 'bullet')}
                        >
                          <List className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="ml-6 text-xs text-muted-foreground mt-1">
                      {item.description}
                      {item.hasTabs && item.id === 'pakaian' && renderPakaianTabs()}
                      {item.hasTabs && item.id === 'pengenalandiri' && renderPengenalanDiriTabs()}
                    </div>
                  </div>
                </div>
              );
            }
            
            if (item.type === 'bullet') {
              return (
                <div key={item.id} className="flex items-start space-x-2 mb-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={item.id} 
                        checked={item.checked} 
                        onCheckedChange={() => toggleItemChecked(item.id)}
                      />
                      <label
                        htmlFor={item.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item.label}
                      </label>
                      <div className="flex ml-auto space-x-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 w-6 p-0"
                          onClick={() => toggleItemType(item.id, 'regular')}
                        >
                          <AlignLeft className="h-3 w-3" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-6 w-6 p-0"
                          onClick={() => toggleItemType(item.id, 'numbered')}
                        >
                          <ListOrdered className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="ml-6 text-xs text-muted-foreground mt-1">
                      {item.description}
                      {item.hasTabs && item.id === 'pakaian' && renderPakaianTabs()}
                      {item.hasTabs && item.id === 'pengenalandiri' && renderPengenalanDiriTabs()}
                    </div>
                  </div>
                </div>
              );
            }
            
            return (
              <div key={item.id} className="flex flex-col space-y-1 mb-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id={item.id} 
                    checked={item.checked} 
                    onCheckedChange={() => toggleItemChecked(item.id)}
                  />
                  <label
                    htmlFor={item.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {item.label}
                  </label>
                  <div className="flex ml-auto space-x-1">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0"
                      onClick={() => toggleItemType(item.id, 'numbered')}
                    >
                      <ListOrdered className="h-3 w-3" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0"
                      onClick={() => toggleItemType(item.id, 'bullet')}
                    >
                      <List className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
                <div className="ml-6 text-xs text-muted-foreground">
                  {item.description}
                </div>
                {item.hasTabs && item.id === 'pakaian' && renderPakaianTabs()}
                {item.hasTabs && item.id === 'pengenalandiri' && renderPengenalanDiriTabs()}
              </div>
            );
          })}
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
