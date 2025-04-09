
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TawafScenarioTabs() {
  return (
    <Tabs defaultValue="regular" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="regular">Biasa</TabsTrigger>
        <TabsTrigger value="crowded">Terlalu Ramai</TabsTrigger>
        <TabsTrigger value="special">Keperluan Khas</TabsTrigger>
      </TabsList>
      
      <TabsContent value="regular" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Keadaan Biasa:</h4>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Mulakan dari Hajar al-Aswad dengan menghadap Kaabah</li>
            <li>Jika boleh, sentuh dan cium Hajar al-Aswad</li>
            <li>Jika tidak boleh, isyaratkan dengan tangan dan ucapkan takbir</li>
            <li>Berjalan mengelilingi Kaabah sebanyak 7 kali dalam arah lawan jam</li>
            <li>Lelaki: Lakukan ramal (berjalan pantas) untuk 3 pusingan pertama</li>
            <li>Berdoa sepanjang tawaf, terutama antara Rukun Yamani dan Hajar al-Aswad</li>
          </ul>
        </div>
      </TabsContent>
      
      <TabsContent value="crowded" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Ketika Terlalu Ramai:</h4>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Mulakan di mana sahaja yang berdekatan dengan Hajar al-Aswad</li>
            <li>Cukup dengan isyarat tangan dari jauh ke arah Hajar al-Aswad</li>
            <li>Jangan bertolak untuk mendekati Hajar al-Aswad atau Kaabah</li>
            <li>Ikut aliran orang ramai dengan tertib</li>
            <li>Jika terlalu sesak, lelaki boleh meninggalkan ramal</li>
            <li>Jaga barang peribadi, terutama telefon dan dompet</li>
          </ul>
        </div>
      </TabsContent>
      
      <TabsContent value="special" className="mt-2">
        <div className="bg-muted p-2 rounded-md">
          <h4 className="font-medium mb-2">Untuk Keperluan Khas:</h4>
          <ul className="list-disc list-inside text-sm mt-2 space-y-1">
            <li>Warga emas: Gunakan kerusi roda jika perlu</li>
            <li>OKU: Boleh dibantu oleh pembantu atau ahli keluarga</li>
            <li>Tawaf boleh dilakukan di mana-mana tingkat Masjidil Haram</li>
            <li>Kerusi roda boleh disewa di Masjidil Haram</li>
            <li>Jika terlalu lemah, boleh digendong atau Tawaf dibuat oleh wakil</li>
            <li>Pastikan pengiringan tawaf untuk OKU sentiasa berhati-hati</li>
          </ul>
        </div>
      </TabsContent>
    </Tabs>
  );
}
