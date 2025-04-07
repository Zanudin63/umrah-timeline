
import React, { useRef, useEffect } from "react";
import { MapPin, Video, Headphones, ChevronDown, CheckCircle, AlertCircle, DollarSign, HelpCircle, Heart, FileText } from "lucide-react";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserRole } from "./EditButtons";
import { EditButtons } from "./EditButtons";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export interface JourneyItem {
  id: number;
  title: string;
  description: string;
  details: string;
  audioDescription?: string;
  audioLink?: string;
  audioCredit?: string;
  videoLink?: string;
  officialResourceLink?: string;
  checklistItems?: string[];
  editableBy: UserRole[];
  commonMistakes?: string[];
  costs?: {
    item: string;
    amount: string;
    note?: string;
  }[];
  whatIfs?: {
    scenario: string;
    solution: string;
  }[];
  muhasabah?: string;
}

export interface JourneySectionProps {
  id: string;
  title: string;
  description: string;
  items: JourneyItem[];
  icon: React.ReactNode;
  currentRole: UserRole;
  initiallyOpen?: boolean;
  animationDelay?: number;
  color?: "purple" | "blue" | "red" | "green" | "amber" | "emerald" | "indigo";
  onItemVisibilityChange?: (itemId: number, isVisible: boolean) => void;
  registerRef?: (sectionId: string, itemId: number, ref: HTMLDivElement) => void;
}

const colorClasses = {
  purple: {
    badge: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    header: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-200 dark:border-purple-800/30",
    icon: "text-purple-500 dark:text-purple-300"
  },
  blue: {
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    header: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800/30",
    icon: "text-blue-500 dark:text-blue-300"
  },
  red: {
    badge: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    header: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800/30",
    icon: "text-red-500 dark:text-red-300"
  },
  green: {
    badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    header: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800/30",
    icon: "text-green-500 dark:text-green-300"
  },
  amber: {
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    header: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800/30",
    icon: "text-amber-500 dark:text-amber-300"
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    header: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800/30",
    icon: "text-emerald-500 dark:text-emerald-300"
  },
  indigo: {
    badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    header: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-800/30",
    icon: "text-indigo-500 dark:text-indigo-300"
  }
};

const formatTextIntegrated = (text: string): string => {
  if (!text.includes(", ")) return text;
  
  return text.replace(/, /g, " ");
};

const isChecklistHeader = (item: string): boolean => {
  return item.startsWith("1-") || item.startsWith("2-") || item.startsWith("3-") || 
         item.startsWith("4-") || item.startsWith("5-");
};

const JourneySection: React.FC<JourneySectionProps> = ({
  id,
  title,
  description,
  items,
  icon,
  currentRole,
  initiallyOpen = false,
  animationDelay = 0,
  color = "purple",
  onItemVisibilityChange,
  registerRef
}) => {
  const [isOpen, setIsOpen] = React.useState(initiallyOpen);
  const { toast } = useToast();
  const itemRefs = useRef<Record<number, HTMLDivElement>>({});
  const colorStyle = colorClasses[color] || colorClasses.purple;

  const handleEdit = (itemId: number, role: UserRole) => {
    toast({
      title: "Edit Mode",
      description: `Editing ${items.find(item => item.id === itemId)?.title} as ${role}`,
    });
  };

  const playAudio = (description: string) => {
    toast({
      title: "Audio Description",
      description: "Playing audio description...",
    });

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(description);
      speechSynthesis.speak(utterance);
    }
  };

  const openAudioLink = (link: string, credit: string) => {
    window.open(link, '_blank');
    toast({
      title: "Audio Resource",
      description: credit || "Opening audio resource...",
    });
  };

  const openOfficialResource = (link: string) => {
    window.open(link, '_blank');
    toast({
      title: "Official Resource",
      description: "Opening official documentation...",
    });
  };

  useEffect(() => {
    setIsOpen(initiallyOpen);
  }, [initiallyOpen]);

  useEffect(() => {
    if (!onItemVisibilityChange) return;

    const observers: IntersectionObserver[] = [];
    
    items.forEach(item => {
      const ref = itemRefs.current[item.id];
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onItemVisibilityChange(item.id, true);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [items, onItemVisibilityChange]);

  useEffect(() => {
    if (!registerRef || !id) return;
    
    items.forEach(item => {
      const ref = itemRefs.current[item.id];
      if (ref) {
        registerRef(id, item.id, ref);
      }
    });
  }, [items, id, registerRef]);

  return (
    <div 
      id={id}
      className="journey-section-animation rounded-lg shadow-sm border dark:border-gray-700 max-w-[calc(100%-1.5rem)]" 
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            className={`flex w-full items-center justify-between rounded-t-lg py-2 hover:bg-muted ${colorStyle.header}`}
          >
            <div className="flex items-center gap-2">
              <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 ${colorStyle.icon}`}>
                {icon}
              </div>
              <div className="text-left flex flex-col items-start justify-center">
                <h3 className="text-lg font-bold uppercase leading-tight">{title}</h3>
                <p className="text-xs text-muted-foreground section-description leading-tight mt-0">{description}</p>
              </div>
            </div>
            <ChevronDown className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="rounded-b-lg p-3">
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                ref={ref => {
                  if (ref) itemRefs.current[item.id] = ref;
                }}
                id={`${id}-item-${item.id}`}
              >
                <Card 
                  className={`overflow-hidden transition-shadow hover:shadow-md ${colorStyle.border}`}
                >
                  <CardHeader className="flex flex-row items-center justify-between py-2 px-3">
                    <div>
                      <CardTitle className="flex items-center text-md">{item.title}</CardTitle>
                      <CardDescription className="section-description text-xs">{item.description}</CardDescription>
                    </div>
                    <EditButtons 
                      itemId={item.id} 
                      currentRole={currentRole} 
                      editableBy={item.editableBy} 
                      onEdit={handleEdit} 
                    />
                  </CardHeader>
                  <CardContent className="space-y-2 py-1 px-3">
                    <div className="text-sm text-muted-foreground">
                      {formatTextIntegrated(item.details)}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.audioDescription && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => playAudio(item.audioDescription || item.details)}
                          className="h-7 text-xs"
                        >
                          <Headphones className="mr-1 h-3 w-3" />
                          Listen (TTS)
                        </Button>
                      )}

                      {item.audioLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => openAudioLink(item.audioLink || "", item.audioCredit || "")}
                          className="h-7 text-xs"
                        >
                          <Headphones className="mr-1 h-3 w-3" />
                          Listen
                        </Button>
                      )}
                      
                      {item.videoLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => window.open(item.videoLink, '_blank')}
                          className="h-7 text-xs"
                        >
                          <Video className="mr-1 h-3 w-3" />
                          Watch Video
                        </Button>
                      )}

                      {item.officialResourceLink && (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => openOfficialResource(item.officialResourceLink || "")}
                          className="h-7 text-xs"
                        >
                          <FileText className="mr-1 h-3 w-3" />
                          Official Resource
                        </Button>
                      )}
                    </div>
                    
                    <Accordion 
                      type="multiple" 
                      className="w-full space-y-1"
                      defaultValue={[
                        ...(item.checklistItems && item.checklistItems.length > 0 ? [`checklist-${item.id}`] : []),
                        ...(item.commonMistakes && item.commonMistakes.length > 0 ? [`mistakes-${item.id}`] : []),
                        ...(item.costs && item.costs.length > 0 ? [`costs-${item.id}`] : []),
                        ...(item.whatIfs && item.whatIfs.length > 0 ? [`whatifs-${item.id}`] : []),
                        ...(item.muhasabah ? [`muhasabah-${item.id}`] : [])
                      ]}
                    >
                      {item.checklistItems && item.checklistItems.length > 0 && (
                        <AccordionItem value={`checklist-${item.id}`} className="border rounded-md">
                          <AccordionTrigger className="px-3 py-1">
                            <div className="flex items-center text-xs font-medium">
                              <CheckCircle className="mr-1 h-3 w-3 text-green-500" />
                              Checklist
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-1 accordion-content">
                            <ul className="space-y-0.5">
                              {item.checklistItems.map((checkItem, index) => {
                                if (isChecklistHeader(checkItem)) {
                                  return (
                                    <li key={index} className="flex items-start mt-2 first:mt-0">
                                      <div className="font-semibold text-xs text-primary dark:text-[#e3f0c0]">{checkItem}</div>
                                    </li>
                                  );
                                }
                                return (
                                  <li key={index} className="flex items-center text-xs ml-2">
                                    <CheckCircle className="mr-1 h-3 w-3 text-green-500 flex-shrink-0" />
                                    <span className="text-xs">{checkItem}</span>
                                  </li>
                                );
                              })}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}

                      {item.commonMistakes && item.commonMistakes.length > 0 && (
                        <AccordionItem value={`mistakes-${item.id}`} className="border rounded-md">
                          <AccordionTrigger className="px-3 py-1">
                            <div className="flex items-center text-xs font-medium">
                              <AlertCircle className="mr-1 h-3 w-3 text-amber-500" />
                              Common Mistakes
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-1">
                            <ul className="space-y-0.5">
                              {item.commonMistakes.map((mistake, index) => (
                                <li key={index} className="flex items-center text-xs">
                                  <AlertCircle className="mr-1 h-3 w-3 text-amber-500" />
                                  {mistake}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )}

                      {item.costs && item.costs.length > 0 && (
                        <AccordionItem value={`costs-${item.id}`} className="border rounded-md">
                          <AccordionTrigger className="px-3 py-1">
                            <div className="flex items-center text-xs font-medium">
                              <DollarSign className="mr-1 h-3 w-3 text-blue-500" />
                              Estimated Costs
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-1">
                            <div className="space-y-0.5">
                              {item.costs.map((cost, index) => (
                                <div key={index} className="flex items-start gap-1 text-xs">
                                  <DollarSign className="mt-0.5 h-3 w-3 text-blue-500" />
                                  <div>
                                    <div className="flex items-center justify-between">
                                      <span className="font-medium">{cost.item}:</span> 
                                      <span className="ml-1">{cost.amount}</span>
                                    </div>
                                    {cost.note && (
                                      <p className="text-xs text-muted-foreground">{cost.note}</p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )}

                      {item.whatIfs && item.whatIfs.length > 0 && (
                        <AccordionItem value={`whatifs-${item.id}`} className="border rounded-md">
                          <AccordionTrigger className="px-3 py-1">
                            <div className="flex items-center text-xs font-medium">
                              <HelpCircle className="mr-1 h-3 w-3 text-purple-500" />
                              What If Scenarios
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-1">
                            <div className="space-y-1">
                              {item.whatIfs.map((scenario, index) => (
                                <div key={index} className="rounded-md bg-secondary p-1 text-xs">
                                  <p className="font-medium text-primary">{scenario.scenario}</p>
                                  <p className="mt-0.5 text-muted-foreground">{scenario.solution}</p>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )}

                      {item.muhasabah && (
                        <AccordionItem value={`muhasabah-${item.id}`} className="border rounded-md">
                          <AccordionTrigger className="px-3 py-1">
                            <div className="flex items-center text-xs font-medium">
                              <Heart className="mr-1 h-3 w-3 text-red-500" />
                              Self Reflection
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-3 pb-1">
                            <div className="italic rounded-md bg-accent/30 p-2 text-xs">
                              {item.muhasabah}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default JourneySection;
