
import React from 'react';
import { UserPlus, Wheelchair, Thermometer, Video, FileText, Info, AlertTriangle, BookOpen, Book } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/contexts/LanguageContext';

type ExceptionType = 
  | 'female' 
  | 'handicapped' 
  | 'sick' 
  | 'video' 
  | 'nas' 
  | 'daimulhadas' 
  | 'jahil' 
  | 'taksengaja'
  | 'info';

interface ExceptionIconProps {
  type: ExceptionType;
  tooltipText?: string;
}

const exceptionLabels = {
  en: {
    female: 'For Women',
    handicapped: 'For People with Disabilities',
    sick: 'For Sick Individuals',
    video: 'Video Guide Available',
    nas: 'Reference to Texts',
    daimulhadas: 'For Daim al-Hadas',
    jahil: 'For Those without Knowledge',
    taksengaja: 'For Unintentional Mistakes',
    info: 'Important Information'
  },
  ms: {
    female: 'Untuk Wanita',
    handicapped: 'Untuk Orang Kurang Upaya',
    sick: 'Untuk Orang Sakit',
    video: 'Video Panduan Tersedia',
    nas: 'Rujukan kepada Teks',
    daimulhadas: 'Untuk Daim al-Hadas',
    jahil: 'Untuk Mereka yang Kurang Pengetahuan',
    taksengaja: 'Untuk Kesilapan Tidak Sengaja',
    info: 'Maklumat Penting'
  }
};

export function ExceptionIcon({ type, tooltipText }: ExceptionIconProps) {
  const { language } = useLanguage();
  
  const iconMap = {
    female: <UserPlus className="h-4 w-4 text-pink-500" />,
    handicapped: <Wheelchair className="h-4 w-4 text-blue-500" />,
    sick: <Thermometer className="h-4 w-4 text-red-500" />,
    video: <Video className="h-4 w-4 text-green-500" />,
    nas: <FileText className="h-4 w-4 text-amber-500" />,
    daimulhadas: <Info className="h-4 w-4 text-purple-500" />,
    jahil: <Book className="h-4 w-4 text-teal-500" />,
    taksengaja: <AlertTriangle className="h-4 w-4 text-orange-500" />,
    info: <BookOpen className="h-4 w-4 text-indigo-500" />
  };

  const labels = language === 'en' ? exceptionLabels.en : exceptionLabels.ms;
  const label = tooltipText || labels[type];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block mx-1 cursor-help">
            {iconMap[type]}
          </span>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
