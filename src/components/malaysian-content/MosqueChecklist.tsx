
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface MosqueChecklistProps {}

export function MosqueChecklist({}: MosqueChecklistProps) {
  // Track the tick count for each checkbox
  const [tickCounts, setTickCounts] = useState<Record<string, number>>({
    'nombor-pintu': 0,
    'rak-selipar': 0,
    'doa': 0,
  });

  const items = [
    { id: 'nombor-pintu', label: 'Nombor Pintu' },
    { id: 'rak-selipar', label: 'Rak Selipar' },
    { id: 'doa', label: 'Doa', expanded: true },
  ];

  const doaContent = [
    {
      id: 'doa-masuk-masjid',
      title: '(1) Doa Masuk Masjid',
      arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      translation: 'Ya Allah, bukakanlah pintu-pintu rahmat-Mu untukku'
    },
    {
      id: 'doa-melihat-kaabah',
      title: '(2) Doa Melihat Kaabah Pertama Kali',
      arabic: 'اللَّهُمَّ زِدْ هَذَا الْبَيْتَ تَشْرِيفًا وَتَعْظِيمًا وَتَكْرِيمًا وَمَهَابَةً',
      translation: 'Ya Allah, tambahkanlah kemuliaan, keagungan, penghormatan dan kewibawaan rumah-Mu ini'
    }
  ];

  const handleCheckboxClick = (id: string) => {
    setTickCounts(prev => {
      const currentCount = prev[id] || 0;
      // No longer locked after 4 ticks
      return {
        ...prev,
        [id]: currentCount + 1
      };
    });
  };

  // Determine checkbox style based on tick count
  const getCheckboxStyle = (id: string) => {
    const count = tickCounts[id] || 0;
    
    if (count === 0) {
      return "border-gray-400 bg-gray-200 h-4 w-4";
    } else if (count >= 1 && count < 3) {
      return "border-[#93a872] bg-[#93a872]/20 h-3.5 w-3.5";
    } else if (count >= 3) {
      return "border-[#679c19] bg-[#679c19]/30 h-4 w-4";
    }
    
    return "";
  };

  // Determine if checkbox is checked
  const isChecked = (id: string) => {
    return (tickCounts[id] || 0) > 0;
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="space-y-1">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id={item.id} 
              checked={isChecked(item.id)}
              className={cn(
                getCheckboxStyle(item.id),
                "transition-all duration-200"
              )}
              onClick={() => handleCheckboxClick(item.id)}
            />
            <label
              htmlFor={item.id}
              className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                (tickCounts[item.id] || 0) >= 4 && "text-[#679c19] font-semibold"
              )}
            >
              {item.label}
            </label>
          </div>
          
          {item.expanded && item.id === 'doa' && (
            <div className="ml-6 mt-2 space-y-3 text-sm">
              {doaContent.map(doa => (
                <div key={doa.id} className="space-y-1 p-2 bg-gray-50 rounded-md">
                  <div className="font-semibold">{doa.title}</div>
                  <div className="text-right font-arabic">{doa.arabic}</div>
                  <div className="text-gray-600 italic">{doa.translation}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
