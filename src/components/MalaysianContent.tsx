
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { RitualAccordion } from '@/components/RitualAccordion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { umrahStepByStepMS } from '@/data/malaysianContent';

interface MalaysianContentProps {
  sectionId: string;
}

export function MalaysianContent({ sectionId }: MalaysianContentProps) {
  const { language } = useLanguage();
  
  // Only show this component when language is set to Malaysian
  if (language !== 'ms') return null;
  
  const sections = umrahStepByStepMS.filter(
    section => sectionId === 'all' || section.id.toString() === sectionId
  );

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <Card key={section.id} className="overflow-hidden">
          <CardHeader className="bg-primary/10">
            <CardTitle>{section.title}</CardTitle>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-4">{section.details}</p>
              
              {section.ritualSections?.map((ritualSection) => (
                <RitualAccordion 
                  key={ritualSection.id} 
                  section={ritualSection} 
                />
              ))}
              
              {section.officialResourceLink && (
                <div className="mt-4 pt-3 border-t text-xs text-muted-foreground">
                  <a 
                    href={section.officialResourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Pautan Rasmi
                  </a>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
