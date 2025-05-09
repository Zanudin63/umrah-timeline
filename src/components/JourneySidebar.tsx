
import React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Luggage, Book, MapPin, Heart, PanelsTopLeft, FileText, BookOpen, Footprints } from "lucide-react";

interface SidebarTabProps {
  title: string;
  active: boolean;
  color: string;
  lightColor: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const SidebarTab = ({ title, active, color, lightColor, onClick, icon }: SidebarTabProps) => {
  const isPreparations = title.toLowerCase() === "persediaan";
  const isTravelArrangements = title.toLowerCase() === "logistik";
  const isManasikUmrah = title.toLowerCase() === "manasik umrah";
  const isUmrahStepByStep = title.toLowerCase() === "langkah-langkah umrah";
  const isZiarah = title.toLowerCase() === "ziarah";
  const isReflection = title.toLowerCase() === "refleksi" || title.toLowerCase().includes("refleksi");
  const isManasikHaji = title.toLowerCase() === "manasik haji";
  const isAppendices = title.toLowerCase() === "lampiran";
  
  let bgColorClass = "";
  if (active) {
    if (isPreparations) {
      bgColorClass = "bg-[#112eed]";
    } else if (isTravelArrangements) {
      bgColorClass = "bg-[#410e69]";
    } else if (isManasikUmrah) {
      bgColorClass = "bg-[#800a1a]";
    } else if (isUmrahStepByStep) {
      bgColorClass = "bg-[#ff6b00]"; // Orange color for Umrah Step by Step
    } else if (isZiarah) {
      bgColorClass = "bg-[#8f6a1f]";
    } else if (isReflection) {
      bgColorClass = "bg-[#30850f]";
    } else if (isManasikHaji) {
      bgColorClass = "bg-[#0d6354]";
    } else if (isAppendices) {
      bgColorClass = "bg-[#4f46e5]";
    } else {
      bgColorClass = color;
    }
  } else if (isPreparations) {
    bgColorClass = "hover:bg-[#112eed]/80 dark:hover:bg-[#112eed]/80";
  } else if (isTravelArrangements) {
    bgColorClass = "hover:bg-[#410e69]/80 dark:hover:bg-[#410e69]/80";
  } else if (isManasikUmrah) {
    bgColorClass = "hover:bg-[#800a1a]/80 dark:hover:bg-[#800a1a]/80";
  } else if (isUmrahStepByStep) {
    bgColorClass = "hover:bg-[#ff6b00]/80 dark:hover:bg-[#ff6b00]/80"; // Hover color for Umrah Step by Step
  } else if (isZiarah) {
    bgColorClass = "hover:bg-[#8f6a1f]/80 dark:hover:bg-[#8f6a1f]/80";
  } else if (isReflection) {
    bgColorClass = "hover:bg-[#30850f]/80 dark:hover:bg-[#30850f]/80";
  } else if (isManasikHaji) {
    bgColorClass = "hover:bg-[#0d6354]/80 dark:hover:bg-[#0d6354]/80";
  } else if (isAppendices) {
    bgColorClass = "hover:bg-[#4f46e5]/80 dark:hover:bg-[#4f46e5]/80";
  } else {
    bgColorClass = "hover:bg-muted dark:hover:bg-gray-700";
  }
  
  let textColorClass = "";
  if (active) {
    textColorClass = "text-white";
  } else if ((isPreparations || isTravelArrangements || isManasikUmrah || isUmrahStepByStep || isZiarah || isReflection || isManasikHaji || isAppendices) && !active) {
    textColorClass = "dark:text-[#8eed11]";
  } else {
    textColorClass = "sidebar-title";
  }
  
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={cn(
        "flex items-center py-2 px-3 cursor-pointer transition-all rounded-l-lg mb-1 w-full border-transparent",
        bgColorClass,
        textColorClass
      )}
      onClick={onClick}
    >
      <div className="mr-2 text-current">{icon}</div>
      <span className={`font-medium ${isMobile ? "text-xs" : "text-sm"} uppercase ${textColorClass}`}>{title}</span>
      {active && (
        <div className={`absolute right-0 h-full w-1 ${
          isPreparations ? "bg-[#112eed]" : 
          isTravelArrangements ? "bg-[#410e69]" : 
          isManasikUmrah ? "bg-[#800a1a]" :
          isUmrahStepByStep ? "bg-[#ff6b00]" : // Active indicator for Umrah Step by Step
          isZiarah ? "bg-[#8f6a1f]" :
          isReflection ? "bg-[#30850f]" :
          isManasikHaji ? "bg-[#0d6354]" :
          isAppendices ? "bg-[#4f46e5]" :
          color
        }`} />
      )}
    </div>
  );
};

interface JourneySidebarProps {
  sections: {
    id: string;
    title: string;
    color: string;
    lightColor: string;
    icon: React.ReactNode;
  }[];
  activeSectionId: string | null;
  onSectionSelect: (sectionId: string) => void;
  children?: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
}

const JourneySidebar = ({ 
  sections = [], 
  activeSectionId, 
  onSectionSelect,
  children,
  show,
  onClose
}: JourneySidebarProps) => {
  // Add a default empty array to avoid undefined errors
  const updatedSections = sections ? sections.map(section => {
    // Translate section titles to Bahasa Malaysia
    if (section.title.toLowerCase() === "preparations") {
      return { ...section, title: "Persediaan" };
    } else if (section.title.toLowerCase() === "travel arrangements") {
      return { ...section, title: "Logistik" };
    } else if (section.title.toLowerCase() === "during umrah" || section.title.toLowerCase() === "manasik umrah") {
      return { ...section, title: "Manasik Umrah" };
    } else if (section.title.toLowerCase() === "umrah step by step") {
      return { ...section, title: "Langkah-Langkah Umrah" };
    } else if (section.title.toLowerCase() === "ziarah") {
      return { ...section, title: "Ziarah" };
    } else if (section.title.toLowerCase() === "reflection") {
      return { ...section, title: "Refleksi" };
    } else if (section.title.toLowerCase() === "manasik haji") {
      return { ...section, title: "Manasik Haji" };
    } else if (section.title.toLowerCase() === "appendices") {
      return { ...section, title: "Lampiran" };
    }
    return section;
  }) : [];

  const isMobile = useIsMobile();

  // If show and onClose are provided, render a mobile sidebar with children
  if (children && typeof show !== 'undefined' && onClose) {
    return (
      <div className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute right-0 top-0 h-full w-64 transform bg-background transition-transform ${show ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full overflow-auto p-4">
            <button 
              onClick={onClose}
              className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <PanelsTopLeft className="h-5 w-5" />
            </button>
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Original sidebar rendering
  return (
    <div className="sticky top-6 h-[calc(100vh-3rem)] flex flex-col pr-2 overflow-y-auto w-full max-w-[200px] mr-3 border-transparent">
      <div className="mb-2 md:mb-3">
        <h3 className={`font-bold uppercase mb-1 ${isMobile ? "text-base" : "text-lg"} px-3 dark:text-[#8eed11] sidebar-title`}>
          Fasa Perjalanan
        </h3>
      </div>
      <div className="flex-1 flex flex-col w-full">
        {updatedSections.map((section) => (
          <SidebarTab
            key={section.id}
            title={section.title}
            active={activeSectionId === section.id}
            color={
              section.title.toLowerCase() === "persediaan" ? "bg-[#112eed]" : 
              section.title.toLowerCase() === "logistik" ? "bg-[#410e69]" :
              section.title.toLowerCase() === "manasik umrah" ? "bg-[#800a1a]" :
              section.title.toLowerCase() === "langkah-langkah umrah" ? "bg-[#ff6b00]" : // Color for Umrah Step by Step
              section.title.toLowerCase() === "ziarah" ? "bg-[#8f6a1f]" :
              section.title.toLowerCase() === "refleksi" ? "bg-[#30850f]" :
              section.title.toLowerCase() === "manasik haji" ? "bg-[#0d6354]" :
              section.title.toLowerCase() === "lampiran" ? "bg-[#4f46e5]" :
              section.color
            }
            lightColor={section.lightColor}
            onClick={() => onSectionSelect(section.id)}
            icon={section.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default JourneySidebar;
