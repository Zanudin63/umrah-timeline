
import React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

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
  // Special color for Travel Arrangements phase
  const isTravelArrangements = title.toLowerCase() === "travel arrangements";
  // Special color for Manasik Umrah phase (previously "During Umrah")
  const isManasikUmrah = title.toLowerCase() === "during umrah" || title.toLowerCase() === "manasik umrah";
  // Special color for Ziarah phase
  const isZiarah = title.toLowerCase() === "ziarah";
  // Special color for Reflection phase
  const isReflection = title.toLowerCase() === "reflection" || title.toLowerCase().includes("reflection");
  
  // Transform "During Umrah" to "MANASIK UMRAH" for display
  const displayTitle = isManasikUmrah ? "MANASIK UMRAH" : title;
  
  // Determine background color based on phase type and active state
  let bgColorClass = "";
  if (active) {
    if (isPreparations) {
      bgColorClass = "bg-[#112eed]";
    } else if (isTravelArrangements) {
      bgColorClass = "bg-[#410e69]";
    } else if (isManasikUmrah) {
      bgColorClass = "bg-[#800a1a]";
    } else if (isZiarah) {
      bgColorClass = "bg-[#8f6a1f]";
    } else if (isReflection) {
      bgColorClass = "bg-[#30850f]";
    } else {
      bgColorClass = color;
    }
  } else if (isPreparations) {
    bgColorClass = "hover:bg-[#112eed]/80 dark:hover:bg-[#112eed]/80";
  } else if (isTravelArrangements) {
    bgColorClass = "hover:bg-[#410e69]/80 dark:hover:bg-[#410e69]/80";
  } else if (isManasikUmrah) {
    bgColorClass = "hover:bg-[#800a1a]/80 dark:hover:bg-[#800a1a]/80";
  } else if (isZiarah) {
    bgColorClass = "hover:bg-[#8f6a1f]/80 dark:hover:bg-[#8f6a1f]/80";
  } else if (isReflection) {
    bgColorClass = "hover:bg-[#30850f]/80 dark:hover:bg-[#30850f]/80";
  } else {
    bgColorClass = "hover:bg-muted dark:hover:bg-gray-700";
  }
  
  // Determine text color for different phases
  let textColorClass = "";
  if (active) {
    textColorClass = "text-white";
  } else if ((isPreparations || isTravelArrangements || isManasikUmrah || isZiarah || isReflection) && !active) {
    textColorClass = "dark:text-[#8eed11]";
  } else {
    textColorClass = "sidebar-title";
  }
  
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={cn(
        "flex items-center py-2 px-3 cursor-pointer transition-all rounded-l-lg mb-1 w-full border-transparent", /* Reduced py from p-3 and mb-2 to mb-1 */
        bgColorClass,
        textColorClass
      )}
      onClick={onClick}
    >
      <div className="mr-2 text-current">{icon}</div> {/* Reduced mr from mr-3 */}
      <span className={`font-medium ${isMobile ? "text-xs" : "text-sm"} uppercase ${textColorClass}`}>{displayTitle}</span>
      {active && (
        <div className={`absolute right-0 h-full w-1 ${
          isPreparations ? "bg-[#112eed]" : 
          isTravelArrangements ? "bg-[#410e69]" : 
          isManasikUmrah ? "bg-[#800a1a]" :
          isZiarah ? "bg-[#8f6a1f]" :
          isReflection ? "bg-[#30850f]" :
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
}

const JourneySidebar = ({ 
  sections, 
  activeSectionId, 
  onSectionSelect 
}: JourneySidebarProps) => {
  // Update section titles to reflect the new naming
  const updatedSections = sections.map(section => {
    if (section.title.toLowerCase() === "during umrah") {
      return { ...section, title: "Manasik Umrah" };
    }
    return section;
  });

  const isMobile = useIsMobile();

  return (
    <div className="sticky top-6 h-[calc(100vh-3rem)] flex flex-col pr-2 overflow-y-auto w-full max-w-[200px] mr-3 border-transparent"> {/* Reduced mr from mr-4 to mr-3 */}
      <div className="mb-2 md:mb-3"> {/* Reduced mb from mb-4/md:mb-6 to mb-2/md:mb-3 */}
        <h3 className={`font-bold uppercase mb-1 ${isMobile ? "text-base" : "text-lg"} px-3 dark:text-[#8eed11] sidebar-title`}> {/* Reduced mb from mb-2 to mb-1 */}
          Journey Phases
        </h3>
      </div>
      <div className="flex-1 flex flex-col w-full">
        {updatedSections.map((section) => (
          <SidebarTab
            key={section.id}
            title={section.title}
            active={activeSectionId === section.id}
            color={
              section.title.toLowerCase() === "preparations" ? "bg-[#112eed]" : 
              section.title.toLowerCase() === "travel arrangements" ? "bg-[#410e69]" :
              section.title.toLowerCase() === "manasik umrah" ? "bg-[#800a1a]" :
              section.title.toLowerCase() === "ziarah" ? "bg-[#8f6a1f]" :
              section.title.toLowerCase() === "reflection" ? "bg-[#30850f]" :
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
