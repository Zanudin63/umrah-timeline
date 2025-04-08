
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RitualAccordion } from '@/components/RitualAccordion';
import { TawafPreparationTabs } from './TawafPreparationTabs';
import { ChecklistItem } from './HotelChecklist';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

                {tabSection.id === "during" && (
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-base">Cara Tawaf</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="sekiranya" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="sekiranya">Sekiranya</TabsTrigger>
                          <TabsTrigger value="impak">Impak</TabsTrigger>
                          <TabsTrigger value="maka">Maka</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="sekiranya" className="mt-2">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium mb-2">Sekiranya Anda:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Terlupa bilangan pusingan tawaf</li>
                              <li>Terbatal wudhu ketika tawaf</li>
                              <li>Kita menyentuh Hajarul Aswad atau Kelambu Kaabah</li>
                              <li>Terputus tawaf kerana solat fardhu</li>
                              <li>Tawaf tidak cukup 7 pusingan</li>
                            </ul>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="impak" className="mt-2">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium mb-2">Impak Terhadap Ibadah:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Terlupa bilangan: <Badge className="ml-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Ambil jumlah yang pasti</Badge></li>
                              <li>Terbatal wudhu: <Badge className="ml-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Wajib berwudhu semula</Badge></li>
                              <li>Kita menyentuh Hajarul Aswad atau Kelambu Kaabah: <Badge className="ml-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Masih sah (sunat sahaja)</Badge></li>
                              <li>Terputus solat fardhu: <Badge className="ml-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Boleh sambung selepas</Badge></li>
                              <li>Tidak cukup 7 pusingan: <Badge className="ml-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Tawaf tidak sah</Badge></li>
                            </ul>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="maka" className="mt-2">
                          <div className="bg-muted p-3 rounded-md">
                            <h4 className="font-medium mb-2">Maka Anda Perlu:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Terlupa bilangan: Ambil jumlah yang pasti atau paling minimum. <Badge className="ml-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">Tiada Damm</Badge></li>
                              <li>Terbatal wudhu: Keluar ambil wudhu semula, sambung dari tempat terakhir. <Badge className="ml-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Wajib Damm jika tidak</Badge></li>
                              <li>Kita menyentuh Hajarul Aswad atau Kelambu Kaabah yang sememangnya diwangikan. <Badge className="ml-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Wajib Bayar Dam</Badge></li>
                              <li>Terputus solat fardhu: Sambung tawaf selepas solat. <Badge className="ml-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Tiada Damm</Badge></li>
                              <li>Tidak cukup 7 pusingan: Lengkapkan 7 pusingan atau ulang semula tawaf. <Badge className="ml-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Wajib Damm jika tidak</Badge></li>
                            </ul>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
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
