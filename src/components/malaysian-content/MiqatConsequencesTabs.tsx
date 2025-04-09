
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MiqatConsequencesTabs() {
  return (
    <Tabs defaultValue="jika" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="jika">JIKA</TabsTrigger>
        <TabsTrigger value="kecuali">kecuali</TabsTrigger>
        <TabsTrigger value="dam">Dam</TabsTrigger>
      </TabsList>
      
      <TabsContent value="jika" className="mt-2">
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
      
      <TabsContent value="kecuali" className="mt-2">
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
      
      <TabsContent value="dam" className="mt-2">
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
    </Tabs>
  );
}
