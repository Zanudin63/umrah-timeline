
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
                    <CardHeader className="px-2 py-2">
                      <CardTitle className="text-base">Cara Tawaf</CardTitle>
                    </CardHeader>
                    <CardContent className="px-2 py-2">
                      <Tabs defaultValue="123" className="w-full mb-4">
                        <TabsList className="grid w-full grid-cols-5">
                          <TabsTrigger value="123">123</TabsTrigger>
                          <TabsTrigger value="syaratsah">Syarat Sah</TabsTrigger>
                          <TabsTrigger value="membatalkan">Membatalkan</TabsTrigger>
                          <TabsTrigger value="sunat">Sunat</TabsTrigger>
                          <TabsTrigger value="patuhi">Patuhi</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="123" className="mt-2">
                          <div className="bg-muted p-2 rounded-md">
                            <h4 className="font-medium mb-2">Langkah-langkah Tawaf:</h4>
                            <ol className="list-decimal list-inside text-sm mt-2 space-y-1">
                              <li>Mulakan dari Hajarul Aswad (batu hitam)</li>
                              <li>Berjalan 7 pusingan mengelilingi Kaabah arah berlawanan jam</li>
                              <li>Lelaki: Berjalan pantas 3 pusingan pertama, berjalan biasa 4 pusingan terakhir</li>
                              <li>Berdoa sepanjang tawaf</li>
                              <li>Selesai 7 pusingan, lakukan solat 2 rakaat di belakang Maqam Ibrahim</li>
                            </ol>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="syaratsah" className="mt-2">
                          <div className="bg-muted p-2 rounded-md">
                            <h4 className="font-medium mb-2">Syarat Sah Tawaf:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Berniat Tawaf</li>
                              <li>Suci daripada hadas besar dan kecil</li>
                              <li>Menutup aurat</li>
                              <li>Bermula dari Hajar Aswad</li>
                              <li>Kaabah berada di sebelah kiri</li>
                              <li>Berada dalam kawasan Masjidil Haram</li>
                              <li>Cukup 7 pusingan</li>
                              <li>Tawaf berterusan (tanpa henti yang lama)</li>
                            </ul>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="membatalkan" className="mt-2">
                          <div className="bg-muted p-2 rounded-md">
                            <h4 className="font-medium mb-2">Perkara Yang Membatalkan Tawaf:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Terbatal wudhu</li>
                              <li>Tidak cukup 7 pusingan</li>
                              <li>Tidak menutup aurat dengan sempurna</li>
                              <li>Keluar dari kawasan Masjidil Haram</li>
                              <li>Tawaf berlawanan arah (ikut arah jam)</li>
                            </ul>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="sunat" className="mt-2">
                          <div className="bg-muted p-2 rounded-md">
                            <h4 className="font-medium mb-2">Sunat Semasa Tawaf:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Istilam (menyentuh atau mengucup) Hajar Aswad jika mampu</li>
                              <li>Ramal (berlari-lari kecil) pada 3 pusingan pertama bagi lelaki</li>
                              <li>Berdoa sepanjang Tawaf</li>
                              <li>Menyentuh Rukun Yamani</li>
                              <li>Solat 2 rakaat di belakang Maqam Ibrahim selepas Tawaf</li>
                              <li>Minum air Zam-zam selepas Tawaf</li>
                            </ul>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="patuhi" className="mt-2">
                          <div className="bg-muted p-2 rounded-md">
                            <h4 className="font-medium mb-2">Patuhi Semasa Tawaf:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Jangan menolak atau menyakiti jemaah lain</li>
                              <li>Jangan berhenti terlalu lama semasa Tawaf</li>
                              <li>Jaga adab di dalam Masjidil Haram</li>
                              <li>Ikut arahan petugas (mutawif)</li>
                              <li>Sentiasa bersama kumpulan jika dalam rombongan</li>
                              <li>Bawa botol air untuk mengelakkan dehidrasi</li>
                              <li>Tidak meninggikan suara sewaktu berdoa</li>
                            </ul>
                          </div>
                        </TabsContent>
                      </Tabs>
                      
                      <Tabs defaultValue="sekiranya" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="sekiranya">Sekiranya</TabsTrigger>
                          <TabsTrigger value="impak">Impak</TabsTrigger>
                          <TabsTrigger value="maka">Maka</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="sekiranya" className="mt-2">
                          <div className="bg-muted p-2 rounded-md">
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
                          <div className="bg-muted p-2 rounded-md">
                            <h4 className="font-medium mb-2">Impak Terhadap Ibadah:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Terlupa bilangan: <span className="ml-1 underline decoration-2 decoration-red-500 dark:decoration-red-400">Tidak sah Tawaf jika tidak yakin dengan 7 pusingan Tawaf dengan sempurna</span></li>
                              <li>Terbatal wudhu: <span className="ml-1 underline decoration-2 decoration-red-500 dark:decoration-red-400">Pusingan Tawaf semasa batal wudhu itu turut terbatal</span></li>
                              <li>Kita menyentuh Hajarul Aswad atau Kelambu Kaabah: Bermakna kita telah <span className="underline decoration-2 decoration-amber-500 dark:decoration-amber-400">memasuki ruangan Kaabah</span> dan juga <span className="underline decoration-2 decoration-amber-500 dark:decoration-amber-400">melanggar Larangan Ihram dengan menyentuh objek yang sememangnya sentiasa diwangikan</span></li>
                              <li>Terputus ibadat Tawaf disebabkan oleh Solat Fardhu atau apa-apa sebab: <span className="ml-1 underline decoration-2 decoration-green-500 dark:decoration-green-400">Boleh berhenti dan sambung semula Tawaf kemudiannya</span></li>
                              <li>Tidak cukup 7 pusingan: <span className="ml-1 underline decoration-2 decoration-red-500 dark:decoration-red-400">Tawaf tidak sah</span></li>
                            </ul>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="maka" className="mt-2">
                          <div className="bg-muted p-2 rounded-md">
                            <h4 className="font-medium mb-2">Maka Anda Perlu:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Terlupa bilangan: <span className="underline decoration-1 decoration-gray-500 dark:decoration-gray-400">Beritahu Mutawif</span>. Lengkapkan 7 pusingan Tawaf sehingga yakin sempurna.</li>
                              <li>Terbatal wudhu: <span className="underline decoration-1 decoration-gray-500 dark:decoration-gray-400">Beritahu Mutawif</span>, keluar ambil Wudhu semula. Sambung Tawaf dari tempat terbatalnya Wudhu tadi.</li>
                              <li>Menyentuh Hajarul Aswad atau Kelambu Kaabah. <span className="underline decoration-1 decoration-gray-500 dark:decoration-gray-400">Wajib Bayar Dam</span></li>
                              <li>Terputus Tawaf disebabkan oleh solat fardhu: <span className="underline decoration-1 decoration-gray-500 dark:decoration-gray-400">Beritahu Mutawif</span>. Lengkapkanlah Tawaf selepas Solat.</li>
                              <li>Tidak cukup 7 pusingan: Lengkapkan 7 pusingan atau ulang semula tawaf. <span className="underline decoration-1 decoration-gray-500 dark:decoration-gray-400">TIDAK SAH TAWAF selagi tidak sempurna 7 pusingan Tawaf</span> dilarang mengerjakan Sa'i ataupun Tahalul. <span className="underline decoration-1 decoration-gray-500 dark:decoration-gray-400">Beritahu Mutawif segera</span></li>
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
