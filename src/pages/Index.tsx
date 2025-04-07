import React, { useState, useRef, useEffect } from "react";
import JourneySection, { JourneyItem } from "@/components/JourneySection";
import { UserRole } from "@/components/EditButtons";
import { 
  Luggage, 
  Book, 
  MapPin, 
  Plane, 
  PanelsTopLeft, 
  BookOpen, 
  FileText, 
  Landmark, 
  User, 
  Users, 
  Star,
  Info,
  Clock,
  Building 
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import JourneySidebar from "@/components/JourneySidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import JourneyIndex from "@/components/JourneyIndex";

const Index = () => {
  const [currentRole] = useState<UserRole>("pilgrim");
  const [activeSectionId, setActiveSectionId] = useState<string | null>("preparation");
  const [activeItemId, setActiveItemId] = useState<number | null>(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const sectionRefs = useRef<Record<string, Record<number, HTMLDivElement>>>({});
  const isMobile = useIsMobile();

  const preparationItems: JourneyItem[] = [
    {
      id: 18,
      title: "Attend Umrah Courses",
      description: "Participating in structured courses to learn Umrah rituals",
      details: "Attend organized courses or workshops that provide comprehensive education about Umrah rituals, requirements, and etiquette from qualified scholars or experienced guides. The Tabung Haji Kursus Asas Haji (KAH) is an excellent resource for Malaysian pilgrims, providing detailed guidance and preparation information.",
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/TH-NOTA%20KAH%201446H%20_%20M3.pdf",
      checklistItems: [
        "Research local mosques offering Umrah courses",
        "Register for a structured Umrah preparation program (like Tabung Haji KAH for Malaysians)",
        "Attend all sessions consistently",
        "Take detailed notes during classes",
        "Ask questions to clarify doubts",
        "Practice ritual movements (like tawaf and sa'i procedures)",
        "Participate in group discussions and learning activities",
        "Review course materials thoroughly before travel",
        "Download and study official guidance materials (e.g., Tabung Haji Nota KAH)"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Skipping sessions or arriving late to classes",
        "Not taking notes during important explanations",
        "Feeling shy to ask questions about unclear topics",
        "Not practicing the physical aspects of rituals",
        "Relying only on online information without expert guidance",
        "Not referring to official documents and resources from authorized organizations"
      ],
      costs: [
        {
          item: "Basic Umrah Course",
          amount: "$0 - $50",
          note: "Many mosques offer free or low-cost programs"
        },
        {
          item: "Intensive Preparation Program",
          amount: "$50 - $200",
          note: "For multi-week courses with materials included"
        },
        {
          item: "Course Materials",
          amount: "$10 - $30",
          note: "Books, handouts, and resources"
        },
        {
          item: "Official Registration (Tabung Haji)",
          amount: "Varies",
          note: "For Malaysian pilgrims using the official Tabung Haji system"
        }
      ],
      whatIfs: [
        {
          scenario: "What if there are no courses available in my area?",
          solution: "Look for online courses from reputable Islamic institutions or official hajj/umrah management bodies like Tabung Haji. Many organizations offer virtual classes that allow remote participation and even Q&A sessions."
        },
        {
          scenario: "What if I don't understand the language used in the course?",
          solution: "Seek courses in your preferred language or bring a translator with you. Alternatively, request translated materials or find a bilingual study partner. Official institutions like Tabung Haji often provide materials in multiple languages."
        },
        {
          scenario: "What if I need more detailed documentation?",
          solution: "Refer to official resources like the Tabung Haji Nota KAH document available at https://www.tabunghaji.gov.my/sites/default/kah/TH-NOTA%20KAH%201446H%20_%20M3.pdf for comprehensive guidance on all aspects of the journey."
        }
      ],
      muhasabah: "Am I approaching these courses with sincerity and dedication? Do I value the opportunity to learn from experienced teachers? Am I making the effort to apply what I learn in preparation for my journey? Have I sought guidance from official sources and authorized institutions?"
    },
    // Rest of the preparationItems array remains the same
  ];

  const travelArrangementsItems: JourneyItem[] = [
    // Travel arrangements items remain the same
  ];

  const duringUmrahItems: JourneyItem[] = [
    // During Umrah items remain the same
  ];

  const ziarahItems: JourneyItem[] = [
    // Ziarah items remain the same, including the new specific Ibadahs sections
  ];

  const reflectionItems: JourneyItem[] = [
    // Reflection items remain the same
  ];

  const manasikHajiItems: JourneyItem[] = [
    // Manasik Haji items remain the same
  ];

  const appendicesItems: JourneyItem[] = [
    // Appendices items remain the same
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["preparation", "travel-arrangements", "during-umrah", "ziarah", "reflection", "manasik-haji", "appendices"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSectionId(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionSelect = (sectionId: string) => {
    setActiveSectionId(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (isMobile) {
      setShowSidebar(false);
    }
  };

  const handleItemVisibilityChange = (itemId: number, isVisible: boolean) => {
    if (isVisible) {
      setActiveItemId(itemId);
    }
  };

  const registerRef = (sectionId: string, itemId: number, ref: HTMLDivElement) => {
    if (!sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId] = {};
    }
    sectionRefs.current[sectionId][itemId] = ref;
  };

  const handleNavigate = (sectionId: string, itemId: number) => {
    setActiveSectionId(sectionId);
    setActiveItemId(itemId);
    
    if (sectionRefs.current[sectionId] && sectionRefs.current[sectionId][itemId]) {
      sectionRefs.current[sectionId][itemId].scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    {
      id: "preparation",
      title: "Preparations",
      description: "Essential preparation steps before Umrah",
      items: preparationItems,
      icon: <Luggage className="h-4 w-4" />,
      color: "blue",
      lightColor: "bg-blue-100"
    },
    {
      id: "travel-arrangements",
      title: "Travel Arrangements",
      description: "Planning your journey to the Holy Land",
      items: travelArrangementsItems,
      icon: <Plane className="h-4 w-4" />,
      color: "purple",
      lightColor: "bg-purple-100"
    },
    {
      id: "during-umrah",
      title: "Manasik Umrah",
      description: "Guidance for the rituals of Umrah",
      items: duringUmrahItems,
      icon: <MapPin className="h-4 w-4" />,
      color: "red",
      lightColor: "bg-red-100"
    },
    {
      id: "ziarah",
      title: "Ziarah",
      description: "Visiting significant places",
      items: ziarahItems,
      icon: <Book className="h-4 w-4" />,
      color: "amber",
      lightColor: "bg-amber-100"
    },
    {
      id: "reflection",
      title: "Reflection",
      description: "Reflecting on your spiritual journey",
      items: reflectionItems,
      icon: <PanelsTopLeft className="h-4 w-4" />,
      color: "green",
      lightColor: "bg-green-100"
    },
    {
      id: "manasik-haji",
      title: "Manasik Haji",
      description: "Understanding and performing the rituals of Hajj",
      items: manasikHajiItems,
      icon: <BookOpen className="h-4 w-4" />,
      color: "emerald",
      lightColor: "bg-emerald-100"
    },
    {
      id: "appendices",
      title: "Appendices",
      description: "Additional important knowledge and guidelines",
      items: appendicesItems,
      icon: <FileText className="h-4 w-4" />,
      color: "indigo",
      lightColor: "bg-indigo-100"
    }
  ];

  const sidebarSections = sections.map(section => ({
    id: section.id,
    title: section.title,
    color: section.color,
    lightColor: section.lightColor,
    icon: section.icon
  }));

  const indexSections = sections.map(section => ({
    id: section.id,
    title: section.title,
    color: `bg-${section.color}-100 text-${section.color}-800 dark:bg-${section.color}-900/20 dark:text-${section.color}-300`,
    icon: section.icon,
    items: section.items.map(item => ({
      id: item.id,
      title: item.title
    }))
  }));

  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-10 flex h-12 items-center justify-between border-b bg-background px-3 md:px-6">
        <h1 className="text-lg font-bold">Umrah Journey Companion</h1>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 md:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <PanelsTopLeft className="h-4 w-4" />
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className={`${isMobile ? (showSidebar ? 'fixed inset-0 z-40 block bg-background/80 backdrop-blur-sm' : 'hidden') : 'block'} md:relative md:block`}>
          <div className={`h-full border-r bg-background transition-transform md:translate-x-0 ${isMobile && !showSidebar ? '-translate-x-full' : 'translate-x-0'}`}>
            <JourneySidebar
              sections={sidebarSections}
              activeSectionId={activeSectionId}
              onSectionSelect={handleSectionSelect}
            />
          </div>
        </div>

        <main className="flex-1 overflow-auto p-3 md:p-6">
          <div className="mx-auto max-w-2xl space-y-6">
            {sections.map((section, index) => (
              <JourneySection
                key={section.id}
                id={section.id}
                title={section.title}
                description={section.description}
                items={section.items}
                icon={section.icon}
                currentRole={currentRole}
                initiallyOpen={true} 
                animationDelay={index}
                color={section.color as any}
                onItemVisibilityChange={handleItemVisibilityChange}
                registerRef={registerRef}
              />
            ))}
          </div>
        </main>

        {!isMobile && (
          <div className="hidden w-64 border-l md:block">
            <div className="sticky top-16 p-4">
              <JourneyIndex
                sections={indexSections}
                activeSectionId={activeSectionId}
                activeItemId={activeItemId}
                onNavigate={handleNavigate}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
