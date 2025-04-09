
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MiqatRestrictionsTabs() {
  return (
    <Tabs defaultValue="umum" className="w-full mb-4">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="umum">Umum</TabsTrigger>
        <TabsTrigger value="lelaki">Lelaki</TabsTrigger>
        <TabsTrigger value="wanita">Wanita</TabsTrigger>
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
  );
}
