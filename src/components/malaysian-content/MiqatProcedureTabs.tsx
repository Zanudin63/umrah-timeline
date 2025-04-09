
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MiqatProcedureTabs() {
  return (
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
  );
}
