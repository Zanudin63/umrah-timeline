
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ms' : 'en');
  };

  return (
    <div className="flex items-center space-x-2 p-2 rounded-md shadow-sm bg-background">
      <Label htmlFor="language-toggle" className="font-medium">
        {language === 'en' ? 'EN' : 'MS'}
      </Label>
      <Switch
        id="language-toggle"
        checked={language === 'ms'}
        onCheckedChange={toggleLanguage}
      />
      <span className="text-xs text-muted-foreground">
        {language === 'en' ? 'English' : 'Bahasa Malaysia'}
      </span>
    </div>
  );
}
