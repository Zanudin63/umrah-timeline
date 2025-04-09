
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MiqatPreparationTabs() {
  return (
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
  );
}
