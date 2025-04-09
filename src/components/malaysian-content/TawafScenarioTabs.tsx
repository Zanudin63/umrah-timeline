
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TawafScenarioTabs() {
  return (
    <Tabs defaultValue="biasa" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="biasa">Biasa</TabsTrigger>
        <TabsTrigger value="ramai">Sangat Ramai</TabsTrigger>
        <TabsTrigger value="kes-khas">Kes Khas</TabsTrigger>
      </TabsList>
      
      <TabsContent value="biasa" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Keadaan Biasa:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Mulakan dari Hajar Aswad, dengan membuat isyarat atau mencium jika boleh</li>
            <li>Buat tawaf 7 pusingan dengan melintasi Hajar Aswad setiap kali</li>
            <li>Lelaki: Berjalan laju (ramal) untuk 3 pusingan pertama, berjalan biasa selebihnya</li>
            <li>Berdoa semasa tawaf dan sentuh Rukun Yamani jika boleh</li>
          </ul>
        </div>
      </TabsContent>
      
      <TabsContent value="ramai" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Ketika Sangat Ramai:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Buat isyarat dari jauh ke arah Hajar Aswad tanpa berhenti</li>
            <li>Jangan mendesak atau menolak jemaah lain untuk mencium Hajar Aswad</li>
            <li>Jika sukar melakukan ramal, cukup berjalan biasa</li>
            <li>Ambil laluan yang ada, walaupun lebih jauh dari Kaabah</li>
            <li>Berhati-hati dengan kanak-kanak dan warga emas</li>
          </ul>
        </div>
      </TabsContent>
      
      <TabsContent value="kes-khas" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Kes Khas:</h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Jika perlu ke tandas/berwudhu: Keluar dari tawaf, kemudian sambung di tempat terakhir</li>
            <li>Kerusi roda/orang sakit: Boleh ditawafkan oleh pembantu</li>
            <li>Semasa solat jamaah: Berhenti tawaf dan sertai solat, kemudian sambung di tempat terakhir</li>
            <li>Jika anda ragu berapa pusingan telah dibuat: Ambil bilangan yang paling sedikit</li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
