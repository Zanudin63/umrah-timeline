
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TawafScenarioTabs } from "./TawafScenarioTabs";

export function TawafTabs() {
  return (
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
        
        <TawafScenarioTabs />
      </CardContent>
    </Card>
  );
}
