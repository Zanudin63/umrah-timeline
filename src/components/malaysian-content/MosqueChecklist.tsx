
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface MosqueChecklistProps {}

export function MosqueChecklist({}: MosqueChecklistProps) {
  const items = [
    { id: 'nombor-pintu', label: 'Nombor Pintu' },
    { id: 'rak-selipar', label: 'Rak Selipar' },
    { id: 'doa', label: 'Doa' },
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
