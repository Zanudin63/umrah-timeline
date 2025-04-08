
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
                  <Tabs defaultValue="langkahan" className="w-full mt-4">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="langkahan">Audio Langkah-an</TabsTrigger>
                      <TabsTrigger value="rukun">Rukun</TabsTrigger>
                      <TabsTrigger value="membatalkan">Membatalkan</TabsTrigger>
                      <TabsTrigger value="adab">Adab</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="langkahan" className="space-y-4 mt-4">
                      <h3 className="text-lg font-semibold">Audio Panduan Langkah demi Langkah</h3>
                      <p className="text-sm text-muted-foreground">Dengar panduan audio untuk setiap langkah tawaf.</p>
                      
                      <Card className="mt-4">
                        <CardHeader>
                          <CardTitle className="text-base">Sekiranya...</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Tabs defaultValue="lupabacaan">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="lupabacaan">Lupa Bacaan</TabsTrigger>
                              <TabsTrigger value="hilangfokus">Hilang Fokus</TabsTrigger>
                              <TabsTrigger value="tidakdengar">Tidak Dengar</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="lupabacaan" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Terlupa Bacaan</h4>
                                <p className="text-sm">Sekiranya terlupa bacaan semasa tawaf, anda boleh:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Teruskan tawaf tanpa terhenti</li>
                                  <li>Baca apa-apa zikir atau doa yang anda ingat</li>
                                  <li>Fokuskan niat dan khusyuk kepada Allah SWT</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-200">Tiada Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="hilangfokus" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Hilang Fokus</h4>
                                <p className="text-sm">Sekiranya hilang fokus semasa tawaf:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Kembalikan fokus dengan mengingati niat asal</li>
                                  <li>Elakkan berbual perkara duniawi semasa tawaf</li>
                                  <li>Mula membaca zikir/doa dengan lebih khusyuk</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-200">Tiada Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="tidakdengar" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Tidak Dapat Mendengar Audio</h4>
                                <p className="text-sm">Jika tidak dapat mendengar audio panduan:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Ikut pergerakan jemaah lain</li>
                                  <li>Fokus pada penanda visual (Hajar Aswad, Rukun Yamani)</li>
                                  <li>Gunakan teks panduan sebagai rujukan</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-200">Tiada Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="rukun" className="space-y-4 mt-4">
                      <h3 className="text-lg font-semibold">Rukun Tawaf</h3>
                      <p className="text-sm text-muted-foreground">Perkara yang wajib dilakukan untuk kesahan tawaf.</p>
                      
                      <Card className="mt-4">
                        <CardHeader>
                          <CardTitle className="text-base">Sekiranya...</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Tabs defaultValue="tawafkurang">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="tawafkurang">Tawaf Kurang</TabsTrigger>
                              <TabsTrigger value="niattertinggal">Niat Tertinggal</TabsTrigger>
                              <TabsTrigger value="tidakistilam">Tidak Istilam</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="tawafkurang" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Tawaf Kurang daripada 7 Pusingan</h4>
                                <p className="text-sm">Sekiranya tawaf kurang daripada 7 pusingan:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Tawaf tidak sah dan perlu diulang</li>
                                  <li>Kembali dan lengkapkan pusingan yang tertinggal</li>
                                  <li>Jika telah lama berlalu, ulang semula tawaf</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-200">Wajib Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="niattertinggal" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Lupa Berniat Tawaf</h4>
                                <p className="text-sm">Sekiranya tidak berniat ketika memulakan tawaf:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Tawaf tidak sah kerana niat adalah rukun</li>
                                  <li>Perlu ulang semula tawaf dengan niat yang betul</li>
                                  <li>Pastikan berniat sebelum memulakan pusingan pertama</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-200">Wajib Denda Damm Jika Tidak Diulang</Badge>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="tidakistilam" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Tidak Istilam Hajar Aswad</h4>
                                <p className="text-sm">Sekiranya tidak melakukan istilam (menyentuh/mengisyaratkan) ke Hajar Aswad:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Tawaf masih sah kerana istilam adalah sunat</li>
                                  <li>Cukup dengan mengisyaratkan dari jauh jika keadaan terlalu sesak</li>
                                  <li>Tidak perlu ulang tawaf atau membayar denda</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-200">Tiada Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="membatalkan" className="space-y-4 mt-4">
                      <h3 className="text-lg font-semibold">Perkara yang Membatalkan Tawaf</h3>
                      <p className="text-sm text-muted-foreground">Hal-hal yang boleh menyebabkan tawaf tidak sah dan perlu diulang.</p>
                      
                      <Card className="mt-4">
                        <CardHeader>
                          <CardTitle className="text-base">Sekiranya...</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Tabs defaultValue="terbatalwudhu">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="terbatalwudhu">Terbatal Wudhu</TabsTrigger>
                              <TabsTrigger value="salamaalat">Salah Arah/Laluan</TabsTrigger>
                              <TabsTrigger value="putustengah">Putus di Tengah</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="terbatalwudhu" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Wudhu Terbatal Semasa Tawaf</h4>
                                <p className="text-sm">Sekiranya wudhu terbatal semasa melakukan tawaf:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Keluar dari kawasan tawaf dan ambil wudhu semula</li>
                                  <li>Sambung pusingan tawaf dari tempat terakhir terbatal</li>
                                  <li>Jika ragu bilangan pusingan, ambil jumlah yang pasti</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-200">Wajib Denda Damm Jika Tidak Diselesaikan</Badge>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="salamaalat" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Salah Arah atau Laluan Tawaf</h4>
                                <p className="text-sm">Sekiranya tawaf dilakukan dengan arah yang salah (ikut arah jam):</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Tawaf tidak sah dan perlu diulang</li>
                                  <li>Pastikan tawaf dilakukan berlawanan arah jam</li>
                                  <li>Perhatikan pergerakan jemaah lain sebagai panduan</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-200">Wajib Denda Damm Jika Tidak Diulang</Badge>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="putustengah" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Tawaf Terputus di Tengah Jalan</h4>
                                <p className="text-sm">Sekiranya terpaksa berhenti tawaf kerana alasan yang mendesak:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Berhenti untuk solat fardhu: boleh diteruskan selepas itu</li>
                                  <li>Terpaksa keluar kerana kecemasan: boleh sambung kemudian</li>
                                  <li>Terlalu penat dan tidak mampu teruskan: boleh rehat dan sambung</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200">Tiada Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="adab" className="space-y-4 mt-4">
                      <h3 className="text-lg font-semibold">Adab Tawaf</h3>
                      <p className="text-sm text-muted-foreground">Etika dan adab yang perlu dijaga semasa melakukan tawaf.</p>
                      
                      <Card className="mt-4">
                        <CardHeader>
                          <CardTitle className="text-base">Sekiranya...</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <Tabs defaultValue="berbualperkara">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="berbualperkara">Berbual Perkara Duniawi</TabsTrigger>
                              <TabsTrigger value="tidalelaki">Tidak Al-Idtiba' (Lelaki)</TabsTrigger>
                              <TabsTrigger value="tidakkhusyuk">Tidak Khusyuk</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="berbualperkara" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Berbual Perkara Duniawi Semasa Tawaf</h4>
                                <p className="text-sm">Sekiranya bercakap tentang hal-hal duniawi semasa tawaf:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Tawaf tetap sah tetapi mengurangkan pahala</li>
                                  <li>Elakkan percakapan yang tidak perlu</li>
                                  <li>Fokus pada zikir dan doa semasa tawaf</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-200">Tiada Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="tidalelaki" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Tidak Melakukan Al-Idtiba' (Lelaki)</h4>
                                <p className="text-sm">Sekiranya lelaki tidak mendedahkan bahu kanan (idtiba'):</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Tawaf tetap sah kerana idtiba' adalah sunat</li>
                                  <li>Lebih baik melakukan idtiba' untuk mendapat pahala sunat</li>
                                  <li>Tidak perlu mengulangi tawaf atau membayar denda</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-200">Tiada Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="tidakkhusyuk" className="mt-2">
                              <div className="bg-muted p-3 rounded-md">
                                <h4 className="font-medium mb-2">Jika Tidak Khusyuk Semasa Tawaf</h4>
                                <p className="text-sm">Sekiranya tidak dapat fokus dan khusyuk semasa tawaf:</p>
                                <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                  <li>Tawaf tetap sah tetapi mengurangkan makna spiritual</li>
                                  <li>Cuba memperbaiki fokus dengan memikirkan kebesaran Allah</li>
                                  <li>Hadkan rangsangan visual dan fokus pada ibadah</li>
                                </ul>
                                <div className="mt-3">
                                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-200">Tiada Denda Damm</Badge>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
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
