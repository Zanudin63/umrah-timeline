
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RitualAccordion } from '@/components/RitualAccordion';
import { MiqatPreparationTabs } from './MiqatPreparationTabs';
import { MiqatProcedureTabs } from './MiqatProcedureTabs';
import { MiqatRestrictionsTabs } from './MiqatRestrictionsTabs';
import { MiqatConsequencesTabs } from './MiqatConsequencesTabs';

interface MiqatSectionProps {
  section: any;
}

export function MiqatSection({ section }: MiqatSectionProps) {
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
                <MiqatPreparationTabs />
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
                <MiqatProcedureTabs />
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
                <MiqatRestrictionsTabs />
                <MiqatConsequencesTabs />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
