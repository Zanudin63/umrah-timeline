
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
                          <TabsTrigger value="syaratsah">SAH</TabsTrigger>
                          <TabsTrigger value="membatalkan">BATAL</TabsTrigger>
                          <TabsTrigger value="sunat">SUNAT</TabsTrigger>
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
                              <li>Berdoa antara Rukun Yamani: <span className="text-[#f2e941] block mt-1 mb-1">رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ</span><span className="text-xs italic block">Rabbana atina fid-dunya hasanah, wa fil-akhirati hasanah, wa qina 'adhaban-nar</span><span className="text-xs block">Ya Allah! Berilah kami kebaikan di dunia dan kebaikan di akhirat dan peliharalah kami dari azab neraka</span></li>
                              <li>Doa di Hajarul Aswad: <span className="text-[#f2e941] block mt-1 mb-1">بِسْمِ اللهِ اللهُ أَكْبَرُ، اللَّهُمَّ إِيمَانًا بِكَ وَتَصْدِيقًا بِكِتَابِكَ وَوَفَاءً بِعَهْدِكَ وَاتِّبَاعًا لِسُنَّةِ نَبِيِّكَ مُحَمَّدٍ</span><span className="text-xs italic block">Bismillahi Allahu Akbar, Allahumma imanan bika, wa tasdiqan bikitabika, wa wafa'an bi'ahdika, wattiba'an lisunnati nabiyyika Muhammad</span><span className="text-xs block">Dengan nama Allah, Allah Maha Besar. Ya Allah, dengan beriman kepada-Mu, membenarkan kitab-Mu, memenuhi janji-Mu dan mengikuti sunnah Nabi-Mu Muhammad</span></li>
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
                              <li>Terlupa bilangan: <span className="ml-1 text-[#f2e941]">Tidak sah Tawaf jika tidak yakin dengan 7 pusingan Tawaf dengan sempurna</span></li>
                              <li>Terbatal wudhu: <span className="ml-1 text-[#f2e941]">Pusingan Tawaf semasa batal wudhu itu turut terbatal</span></li>
                              <li>Kita menyentuh Hajarul Aswad atau Kelambu Kaabah: Bermakna kita telah <span className="text-[#f2e941]">memasuki ruangan Kaabah</span> dan juga <span className="text-[#f2e941]">melanggar Larangan Ihram dengan menyentuh objek yang sememangnya sentiasa diwangikan</span></li>
                              <li>Terputus ibadat Tawaf disebabkan oleh Solat Fardhu atau apa-apa sebab: <span className="ml-1 text-[#f2e941]">Boleh berhenti dan sambung semula Tawaf kemudiannya</span></li>
                              <li>Tidak cukup 7 pusingan: <span className="ml-1 text-[#f2e941]">Tawaf tidak sah</span></li>
                            </ul>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="maka" className="mt-2">
                          <div className="bg-muted p-2 rounded-md">
                            <h4 className="font-medium mb-2">Maka Anda Perlu:</h4>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Terlupa bilangan: <span className="text-[#f2e941]">Beritahu Mutawif</span>. Lengkapkan 7 pusingan Tawaf sehingga yakin sempurna.</li>
                              <li>Terbatal wudhu: <span className="text-[#f2e941]">Beritahu Mutawif</span>, keluar ambil Wudhu semula. Sambung Tawaf dari tempat terbatalnya Wudhu tadi.</li>
                              <li>Menyentuh Hajarul Aswad atau Kelambu Kaabah. <span className="text-[#f2e941]">Wajib Bayar Dam</span></li>
                              <li>Terputus Tawaf disebabkan oleh solat fardhu: <span className="text-[#f2e941]">Beritahu Mutawif</span>. Lengkapkanlah Tawaf selepas Solat.</li>
                              <li>Tidak cukup 7 pusingan: Lengkapkan 7 pusingan atau ulang semula tawaf. <span className="text-[#f2e941]">TIDAK SAH TAWAF selagi tidak sempurna 7 pusingan Tawaf</span> dilarang mengerjakan Sa'i ataupun Tahalul. <span className="text-[#f2e941]">Beritahu Mutawif segera</span></li>
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
  
  // Adding similar structure for Miqat, Niat dan Ihram section
  if (section.title === "Miqat, Niat dan Ihram") {
    return (
      <div>
        <h2 className="uppercase font-bold text-2xl mb-4" style={{ color: '#cff059' }}>MIQAT, NIAT DAN IHRAM</h2>
        <Tabs defaultValue="persiapan" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="persiapan">Persiapan</TabsTrigger>
            <TabsTrigger value="prosedur">Prosedur</TabsTrigger>
            <TabsTrigger value="larangan">Larangan</TabsTrigger>
          </TabsList>
          
          <TabsContent value="persiapan" className="space-y-4">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-4">Persiapan sebelum memasuki keadaan Ihram.</p>
              
              <Card className="mt-4">
                <CardHeader className="px-2 py-2">
                  <CardTitle className="text-base">Persiapan Ihram</CardTitle>
                </CardHeader>
                <CardContent className="px-2 py-2">
                  <Tabs defaultValue="lelaki" className="w-full mb-4">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="lelaki">Lelaki</TabsTrigger>
                      <TabsTrigger value="wanita">Wanita</TabsTrigger>
                      <TabsTrigger value="semua">Umum</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="lelaki" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Persiapan Lelaki:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Memotong kuku</li>
                          <li>Menghilangkan bulu yang tidak diingini</li>
                          <li>Melakukan ghusl (penyucian ritual seluruh badan)</li>
                          <li>Memakai wangian (sebelum Ihram sahaja)</li>
                          <li>Memakai dua helai kain putih tidak berjahit</li>
                          <li>Satu kain dibalut di pinggang (izar)</li>
                          <li>Satu kain disampirkan di bahu (rida)</li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="wanita" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Persiapan Wanita:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Melakukan ghusl (penyucian ritual seluruh badan)</li>
                          <li>Memakai pakaian sederhana, lebih baik berwarna putih</li>
                          <li>Pakaian harus menutupi seluruh badan kecuali muka dan tangan</li>
                          <li>Mengelakkan sebarang perhiasan</li>
                          <li>Memakai wangian (sebelum Ihram sahaja)</li>
                          <li>Boleh memakai pakaian berjahit</li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="semua" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Persiapan Umum:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Mandi sunat Ihram (wajib bagi yang berhadas besar)</li>
                          <li>Memastikan barang-barang keperluan seperti dompet, telefon, dan ubat-ubatan disimpan dengan selamat</li>
                          <li>Memastikan tiket, pasport dan dokumen lain disimpan dengan selamat</li>
                          <li>Membawa air zam-zam atau air mineral</li>
                          <li>Memastikan niat Ihram diingati</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="prosedur" className="space-y-4">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-4">Prosedur dan langkah-langkah memasuki keadaan Ihram.</p>
              
              <Card className="mt-4">
                <CardHeader className="px-2 py-2">
                  <CardTitle className="text-base">Langkah-langkah Ihram</CardTitle>
                </CardHeader>
                <CardContent className="px-2 py-2">
                  <Tabs defaultValue="miqat" className="w-full mb-4">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="miqat">Miqat</TabsTrigger>
                      <TabsTrigger value="niat">Niat</TabsTrigger>
                      <TabsTrigger value="talbiyah">Talbiyah</TabsTrigger>
                      <TabsTrigger value="solat">Solat Sunat</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="miqat" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Miqat (Titik Sempadan):</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Dhul Hulaifah (Abyar Ali) - untuk penduduk Madinah</li>
                          <li>Juhfah - untuk penduduk Syria, Mesir, dan Afrika Utara</li>
                          <li>Qarn al-Manazil - untuk penduduk Najd dan Taif</li>
                          <li>Dhat Irq - untuk penduduk Iraq</li>
                          <li>Yalamlam - untuk penduduk Yaman</li>
                          <li>Untuk penerbangan ke Jeddah: berniat Ihram sebelum melepasi miqat udara</li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="niat" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Niat Ihram:</h4>
                        <div className="my-2">
                          <span className="text-[#f2e941] block mt-1 mb-1">لَبَّيْكَ اللَّهُمَّ عُمْرَة</span>
                          <span className="text-xs italic block">Labbaika Allahumma 'Umrah</span>
                          <span className="text-xs block">Aku memenuhi panggilan-Mu, Ya Allah, untuk Umrah</span>
                        </div>
                        <p className="text-sm">Sebaik sahaja berniat, anda telah memasuki keadaan Ihram dan semua larangan Ihram mula berkuatkuasa.</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="talbiyah" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Talbiyah:</h4>
                        <div className="my-2">
                          <span className="text-[#f2e941] block mt-1 mb-1">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ</span>
                          <span className="text-xs italic block">Labbaik Allahumma labbaik, labbaik la sharika laka labbaik, innal hamda wan ni'mata laka wal mulk, la sharika lak</span>
                          <span className="text-xs block">Aku memenuhi panggilan-Mu Ya Allah, aku memenuhi panggilan-Mu. Aku memenuhi panggilan-Mu, tiada sekutu bagi-Mu, aku memenuhi panggilan-Mu. Sesungguhnya segala puji, nikmat dan kerajaan adalah milik-Mu. Tiada sekutu bagi-Mu.</span>
                        </div>
                        <p className="text-sm">Disunatkan untuk sentiasa membaca Talbiyah dengan suara yang kuat (lelaki) atau perlahan (wanita) sepanjang perjalanan ke Makkah.</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="solat" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Solat Sunat Ihram:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Sebelum berniat Ihram, disunatkan menunaikan solat sunat Ihram sebanyak 2 rakaat</li>
                          <li>Rakaat pertama: Surah Al-Fatihah dan Surah Al-Kafirun</li>
                          <li>Rakaat kedua: Surah Al-Fatihah dan Surah Al-Ikhlas</li>
                          <li>Setelah solat, barulah berniat Ihram dan membaca Talbiyah</li>
                          <li>Jika berada dalam waktu yang dilarang untuk solat, boleh berniat Ihram tanpa solat sunat</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="larangan" className="space-y-4">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-4">Larangan-larangan semasa dalam keadaan Ihram.</p>
              
              <Card className="mt-4">
                <CardHeader className="px-2 py-2">
                  <CardTitle className="text-base">Larangan Ihram</CardTitle>
                </CardHeader>
                <CardContent className="px-2 py-2">
                  <Tabs defaultValue="umum" className="w-full mb-4">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="umum">Umum</TabsTrigger>
                      <TabsTrigger value="lelaki">Khusus Lelaki</TabsTrigger>
                      <TabsTrigger value="wanita">Khusus Wanita</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="umum" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Larangan Umum:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Memakai wangian atau menyentuh benda yang wangi</li>
                          <li>Memotong kuku, rambut atau bulu badan</li>
                          <li>Memburu atau membunuh haiwan darat</li>
                          <li>Melakukan akad nikah</li>
                          <li>Berhubungan intim dengan pasangan</li>
                          <li>Bertengkar, berbuat maksiat atau berdebat</li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="lelaki" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Larangan Khusus Lelaki:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Memakai pakaian berjahit yang meliputi anggota badan</li>
                          <li>Menutup kepala secara langsung (topi, serban, dsb)</li>
                          <li>Memakai sarung tangan</li>
                          <li>Memakai kasut yang menutupi mata kaki</li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="wanita" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Larangan Khusus Wanita:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Memakai sarung tangan</li>
                          <li>Menutup muka dengan penutup yang menyentuh muka (niqab)</li>
                          <li>Nota: Wanita boleh memakai pakaian berjahit dan menutup kepala</li>
                          <li>Wanita boleh menutupi muka dari pandangan lelaki ajnabi dengan menurunkan tudung tanpa menyentuh muka</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <Tabs defaultValue="jika-melanggar" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="jika-melanggar">Jika Melanggar</TabsTrigger>
                      <TabsTrigger value="bayaran-dam">Bayaran Dam</TabsTrigger>
                      <TabsTrigger value="pengecualian">Pengecualian</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="jika-melanggar" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Jika Melanggar Larangan:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Segera berhenti melakukan pelanggaran</li>
                          <li>Bertaubat dan beristighfar</li>
                          <li>Membayar Dam (denda) mengikut jenis pelanggaran</li>
                          <li>Teruskan ibadah Umrah</li>
                          <li>Jika tidak pasti, rujuk Mutawif atau ulama</li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="bayaran-dam" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Bayaran Dam:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Memotong rambut: <span className="text-[#f2e941]">Berpuasa 3 hari atau memberi makan 6 orang miskin atau menyembelih seekor kambing</span></li>
                          <li>Memakai wangian/pakaian berjahit (lelaki): <span className="text-[#f2e941]">Menyembelih seekor kambing</span></li>
                          <li>Memotong kuku: <span className="text-[#f2e941]">Memberi makan seorang miskin untuk setiap kuku</span></li>
                          <li>Pelanggaran berat (hubungan suami isteri): <span className="text-[#f2e941]">Menyembelih seekor unta/lembu atau 7 ekor kambing</span></li>
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="pengecualian" className="mt-2">
                      <div className="bg-muted p-2 rounded-md">
                        <h4 className="font-medium mb-2">Pengecualian dan Keringanan:</h4>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                          <li>Memakai jam tangan, cincin, cermin mata, alat bantu pendengaran</li>
                          <li>Memakai tali pinggang bukan jahitan untuk menyimpan wang/telefon</li>
                          <li>Memakai payung untuk berteduh dari panas</li>
                          <li>Memakai kasut perubatan jika perlu</li>
                          <li>Membasuh badan dan rambut tanpa sengaja menyebabkan rambut gugur</li>
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
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
