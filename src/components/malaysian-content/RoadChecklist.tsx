
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface RoadChecklistProps {}

export function RoadChecklist({}: RoadChecklistProps) {
  // Track the tick count for each checkbox
  const [tickCounts, setTickCounts] = useState<Record<string, number>>({
    'info-hotel': 0,
    'mercu-tanda': 0,
    'tandas': 0,
  });

  const items = [
    { id: 'info-hotel', label: 'Info Hotel' },
    { id: 'mercu-tanda', label: 'Mercu Tanda' },
    { id: 'tandas', label: 'Tandas' },
  ];

  const handleCheckboxClick = (id: string) => {
    setTickCounts(prev => {
      const currentCount = prev[id] || 0;
      // After 4 ticks, it's locked
      if (currentCount >= 4) return prev;
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

  // Determine if checkbox is locked (ticked 4+ times)
  const isLocked = (id: string) => {
    return (tickCounts[id] || 0) >= 4;
  };

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox 
            id={item.id} 
            checked={isChecked(item.id)}
            disabled={isLocked(item.id)}
            className={cn(
              getCheckboxStyle(item.id),
              isLocked(item.id) && "border-[#679c19] bg-[#679c19]",
              "transition-all duration-200"
            )}
            onClick={() => handleCheckboxClick(item.id)}
          />
          <label
            htmlFor={item.id}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              isLocked(item.id) && "text-[#679c19] font-semibold"
            )}
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
}
