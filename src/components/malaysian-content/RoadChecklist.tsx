
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface RoadChecklistProps {}

export function RoadChecklist({}: RoadChecklistProps) {
  const items = [
    { id: 'info-hotel', label: 'Info Hotel' },
    { id: 'mercu-tanda', label: 'Mercu Tanda' },
    { id: 'tandas', label: 'Tandas' },
  ];

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <Checkbox id={item.id} />
          <label
            htmlFor={item.id}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
}
