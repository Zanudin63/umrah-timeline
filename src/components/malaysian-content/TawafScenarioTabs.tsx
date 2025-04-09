
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TawafScenarioTabs() {
  return (
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
  );
}
