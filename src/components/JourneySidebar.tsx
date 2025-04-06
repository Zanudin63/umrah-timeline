
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarTabProps {
  title: string;
  active: boolean;
  color: string;
  lightColor: string;
  onClick: () => void;
  icon: React.ReactNode;
}

const SidebarTab = ({ title, active, color, lightColor, onClick, icon }: SidebarTabProps) => {
  // Special color for Preparations phase
  const isPreparations = title.toLowerCase() === "preparations";
  
  return (
    <div 
      className={cn(
        "flex items-center p-3 cursor-pointer transition-all rounded-l-lg mb-2 w-full",
        active ? (isPreparations ? "bg-[#112eed] text-white" : `${color} text-white`) : 
                 (isPreparations ? "hover:bg-[#112eed]/80 dark:hover:bg-[#112eed]/80" : "hover:bg-muted dark:hover:bg-gray-700")
      )}
      onClick={onClick}
    >
      <div className="mr-3 text-current">{icon}</div>
      <span className={`font-medium text-sm uppercase ${isPreparations && !active ? "dark:text-[#8eed11]" : "sidebar-title"}`}>{title}</span>
      {active && <div className={`absolute right-0 h-full w-1 ${isPreparations ? "bg-[#112eed]" : color}`} />}
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
}

const JourneySidebar = ({ 
  sections, 
  activeSectionId, 
  onSectionSelect 
}: JourneySidebarProps) => {
  return (
    <div className="sticky top-6 h-[calc(100vh-3rem)] flex flex-col pr-2 overflow-y-auto w-[200px] mr-4">
      <div className="mb-6">
        <h3 className="font-bold uppercase mb-2 text-lg px-3 dark:text-[#8eed11] sidebar-title">Journey Phases</h3>
      </div>
      <div className="flex-1 flex flex-col w-full">
        {sections.map((section) => (
          <SidebarTab
            key={section.id}
            title={section.title}
            active={activeSectionId === section.id}
            color={section.title.toLowerCase() === "preparations" ? "bg-[#112eed]" : section.color}
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
