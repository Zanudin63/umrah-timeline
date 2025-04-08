
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { AlignLeft, List, ListOrdered, Clock, Speaker } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type ChecklistItem = {
  id: string;
  label: string;
  description: string;
  type: 'regular' | 'numbered' | 'bullet' | 'heading';
  checked?: boolean;
  hasTabs?: boolean;
};

interface HotelChecklistProps {
  checklistItems: ChecklistItem[];
  setChecklistItems: React.Dispatch<React.SetStateAction<ChecklistItem[]>>;
  activeFormat: 'regular' | 'numbered' | 'bullet' | 'heading';
  setActiveFormat: React.Dispatch<React.SetStateAction<'regular' | 'numbered' | 'bullet' | 'heading'>>;
  isCountdownPlaying: boolean;
  handleStartCountdown: () => void;
  addNewItem: () => void;
}

export function HotelChecklist({
  checklistItems,
  setChecklistItems,
  activeFormat,
  setActiveFormat,
  isCountdownPlaying,
  handleStartCountdown,
  addNewItem
}: HotelChecklistProps) {
  const handleFormatChange = (format: 'regular' | 'numbered' | 'bullet' | 'heading') => {
    setActiveFormat(format);
  };

  const toggleItemType = (id: string, newType: 'regular' | 'numbered' | 'bullet' | 'heading') => {
    setChecklistItems(
      checklistItems.map(item => 
        item.id === id ? { ...item, type: newType } : item
      )
    );
  };

  const toggleItemChecked = (id: string) => {
    setChecklistItems(
      checklistItems.map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Button 
            variant={isCountdownPlaying ? "destructive" : "outline"} 
            size="sm" 
            onClick={handleStartCountdown}
            className="flex items-center space-x-1"
          >
            {isCountdownPlaying ? <Clock className="h-4 w-4" /> : <Speaker className="h-4 w-4" />}
            <span>{isCountdownPlaying ? "Berhenti Audio" : "Main Audio"}</span>
          </Button>
        </div>

        <div className="flex items-center space-x-1">
          <Button 
            variant={activeFormat === 'regular' ? "default" : "outline"} 
            size="sm" 
            onClick={() => handleFormatChange('regular')}
            className="h-8 w-8 p-0"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant={activeFormat === 'numbered' ? "default" : "outline"} 
            size="sm" 
            onClick={() => handleFormatChange('numbered')}
            className="h-8 w-8 p-0"
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button 
            variant={activeFormat === 'bullet' ? "default" : "outline"} 
            size="sm" 
            onClick={() => handleFormatChange('bullet')}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button 
            variant={activeFormat === 'heading' ? "default" : "outline"} 
            size="sm" 
            onClick={() => handleFormatChange('heading')}
            className="h-8 w-8 p-0 font-bold"
          >
            H
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={addNewItem}
            className="ml-2"
          >
            + Tambah
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        {checklistItems.map((item) => {
          if (item.type === 'heading') {
            return (
              <div key={item.id} className="mt-4 mb-2">
                <h3 className="text-lg font-bold">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {item.hasTabs && item.id === 'pakaian' && <PakaianTabs />}
                {item.hasTabs && item.id === 'pengenalandiri' && <PengenalanDiriTabs />}
                <Separator className="mt-2" />
              </div>
            );
          }
          
          if (item.type === 'numbered') {
            return (
              <div key={item.id} className="flex items-start space-x-2 mb-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs">
                  {checklistItems.findIndex(i => i.id === item.id) + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={item.id} 
                      checked={item.checked} 
                      onCheckedChange={() => toggleItemChecked(item.id)}
                    />
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                    <div className="flex ml-auto space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={() => toggleItemType(item.id, 'regular')}
                      >
                        <AlignLeft className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={() => toggleItemType(item.id, 'bullet')}
                      >
                        <List className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="ml-6 text-xs text-muted-foreground mt-1">
                    {item.description}
                    {item.hasTabs && item.id === 'pakaian' && <PakaianTabs />}
                    {item.hasTabs && item.id === 'pengenalandiri' && <PengenalanDiriTabs />}
                  </div>
                </div>
              </div>
            );
          }
          
          if (item.type === 'bullet') {
            return (
              <div key={item.id} className="flex items-start space-x-2 mb-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id={item.id} 
                      checked={item.checked} 
                      onCheckedChange={() => toggleItemChecked(item.id)}
                    />
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {item.label}
                    </label>
                    <div className="flex ml-auto space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={() => toggleItemType(item.id, 'regular')}
                      >
                        <AlignLeft className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-6 w-6 p-0"
                        onClick={() => toggleItemType(item.id, 'numbered')}
                      >
                        <ListOrdered className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="ml-6 text-xs text-muted-foreground mt-1">
                    {item.description}
                    {item.hasTabs && item.id === 'pakaian' && <PakaianTabs />}
                    {item.hasTabs && item.id === 'pengenalandiri' && <PengenalanDiriTabs />}
                  </div>
                </div>
              </div>
            );
          }
          
          return (
            <div key={item.id} className="flex flex-col space-y-1 mb-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id={item.id} 
                  checked={item.checked} 
                  onCheckedChange={() => toggleItemChecked(item.id)}
                />
                <label
                  htmlFor={item.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.label}
                </label>
                <div className="flex ml-auto space-x-1">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0"
                    onClick={() => toggleItemType(item.id, 'numbered')}
                  >
                    <ListOrdered className="h-3 w-3" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0"
                    onClick={() => toggleItemType(item.id, 'bullet')}
                  >
                    <List className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <div className="ml-6 text-xs text-muted-foreground">
                {item.description}
              </div>
              {item.hasTabs && item.id === 'pakaian' && <PakaianTabs />}
              {item.hasTabs && item.id === 'pengenalandiri' && <PengenalanDiriTabs />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PakaianTabs() {
  return (
    <Tabs defaultValue="lelaki" className="w-full mt-2">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="lelaki">Lelaki</TabsTrigger>
        <TabsTrigger value="wanita">Wanita</TabsTrigger>
        <TabsTrigger value="oku">OKU</TabsTrigger>
        <TabsTrigger value="hadas">Hadas</TabsTrigger>
      </TabsList>
      
      <TabsContent value="lelaki" className="p-2 text-sm">
        <ol className="list-decimal pl-5 space-y-1">
          <li>Pakailah 2 kain ihram dengan kemas agar tidak mendedahkan Aurat di antara pusat dan lutut, walaupun ketika melangkah kaki.</li>
          <li>Pakailah talipinggang jika perlu.</li>
          <li>Pakailah selipar yang patuh-ihram.</li>
        </ol>
      </TabsContent>
      
      <TabsContent value="wanita" className="p-2 text-sm">
        <ol className="list-decimal pl-5 space-y-1">
          <li>Pastikan Pakaian menututp Aurat dengan sempurna tanpa menututp muka</li>
          <li>Pakailah tali yg menahan pangkal lengan baju daripada menggelongsor ke bawah jika tangan di angkat</li>
          <li>Pakai setokin yg cukup tebal lagi tidak mudah tanggal sekalipun dipijak orang</li>
          <li>Dilarang memakai sunglass yang terlalu besar</li>
          <li>Pastikan tiada seutas rambut sekalipun yang terlepas keluar</li>
        </ol>
      </TabsContent>
      
      <TabsContent value="oku" className="p-2 text-sm">
        <p>Panduan pakaian khusus untuk Orang Kurang Upaya (OKU) semasa menunaikan ibadah.</p>
      </TabsContent>
      
      <TabsContent value="hadas" className="p-2 text-sm">
        <p className="mb-2">Untuk pesakit-pesakit Najis Berkekalan (Da-imul Hadas) lelaki dan perempuan</p>
        <p className="mb-2">(1) 30 minit sebelum turun ke MasjidilHaram, selepas mensucikan najis haid atau tahi atau kencing, pakailah pampers untuk mengelakkan pencemaran najis di lantai masjid nanti.</p>
        <p className="mb-2">(2) Bawalah beberapa helai pampers yang baru sebagai gantian. <a href="https://shopee.com.my" className="text-orange-500 text-xs hover:underline">Shopee</a></p>
      </TabsContent>
    </Tabs>
  );
}

function PengenalanDiriTabs() {
  return (
    <Tabs defaultValue="identiti" className="w-full mt-2">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="identiti">Identiti</TabsTrigger>
        <TabsTrigger value="sekiranya">Sekiranya</TabsTrigger>
        <TabsTrigger value="nota">Nota</TabsTrigger>
      </TabsList>
      
      <TabsContent value="identiti" className="p-2 text-sm">
        <ol className="list-decimal pl-5 space-y-1">
          <li>Salinan Passport termasuk Salinan Visa.</li>
          <li>Lanyard Kad Jemaah.</li>
          <li>Beg Travel</li>
          <li>Kad Hotel.</li>
          <li>Nombor Talipon Hotel.</li>
          <li>Nombor Talipon Mutawif.</li>
          <li>Nombor Talipon Waris.</li>
        </ol>
      </TabsContent>
      
      <TabsContent value="sekiranya" className="p-2 text-sm">
        <p>Sekiranya terpisah daripada kumpulan jemaah, pastinya sukar dikenali oleh pehak penguasa.</p>
      </TabsContent>
      
      <TabsContent value="nota" className="p-2 text-sm">
        <p className="mb-2">Catatan penting berkaitan pengenalan diri semasa menunaikan ibadah.</p>
      </TabsContent>
    </Tabs>
  );
}
