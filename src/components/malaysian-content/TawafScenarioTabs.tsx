
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TawafScenarioTabs() {
  return (
    <Tabs defaultValue="normal" className="w-full mt-4">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="normal">Normal</TabsTrigger>
        <TabsTrigger value="ramai">Ramai</TabsTrigger>
        <TabsTrigger value="uzur">Uzur</TabsTrigger>
      </TabsList>
      
      <TabsContent value="normal" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Keadaan Normal:</h4>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Mulakan dari Hajarul Aswad dengan berdoa dan menghadap Kaabah</li>
            <li>Lelaki: Berjalan pantas (ramal) untuk 3 pusingan pertama</li>
            <li>Sentuh Rukun Yamani jika boleh, jika tidak boleh, teruskan tawaf</li>
            <li>Selesai 7 pusingan, lakukan solat 2 rakaat di belakang Maqam Ibrahim</li>
          </ul>
        </div>
      </TabsContent>
      
      <TabsContent value="ramai" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Keadaan Terlalu Ramai:</h4>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Pilih waktu yang kurang ramai (selepas subuh atau lewat malam)</li>
            <li>Jangan memaksa diri untuk mencium atau menyentuh Hajarul Aswad</li>
            <li>Berjalan dengan kelajuan yang selamat, tidak perlu ramal jika berbahaya</li>
            <li>Solat 2 rakaat di mana-mana bahagian masjid jika tidak boleh ke Maqam Ibrahim</li>
            <li>Pastikan keselamatan diri dan orang lain lebih diutamakan</li>
          </ul>
        </div>
      </TabsContent>
      
      <TabsContent value="uzur" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Keadaan Uzur:</h4>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Boleh menggunakan kerusi roda yang disediakan</li>
            <li>Boleh ditolak oleh pembantu atau ahli keluarga</li>
            <li>Boleh ditanggung jika tidak mampu berjalan sama sekali</li>
            <li>Pastikan berniat dengan jelas dan mengikuti tawaf dengan penuh perhatian</li>
            <li>Semua kemudahan untuk OKU disediakan oleh pihak pengurusan Masjidil Haram</li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
