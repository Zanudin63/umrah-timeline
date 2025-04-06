
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
  return (
    <div 
      className={cn(
        "flex items-center p-3 cursor-pointer transition-all rounded-l-lg mb-2 max-w-[180px]",
        active ? `${color} text-white` : "hover:bg-muted"
      )}
      onClick={onClick}
    >
      <div className="mr-3">{icon}</div>
      <span className="font-medium text-sm">{title}</span>
      {active && <div className={`absolute right-0 h-full w-1 ${color}`} />}
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
    <div className="sticky top-6 h-[calc(100vh-3rem)] flex flex-col pr-2 overflow-y-auto w-[200px]">
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-lg px-3">Journey Phases</h3>
      </div>
      <div className="flex-1 flex flex-col">
        {sections.map((section) => (
          <SidebarTab
            key={section.id}
            title={section.title}
            active={activeSectionId === section.id}
            color={section.color}
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
