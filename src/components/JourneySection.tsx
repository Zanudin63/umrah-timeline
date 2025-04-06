
import React from "react";
import { MapPin, Video, Headphones, ChevronDown, CheckCircle, AlertCircle, DollarSign, HelpCircle, Heart } from "lucide-react";
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

export interface JourneyItem {
  id: number;
  title: string;
  description: string;
  details: string;
  audioDescription?: string;
  videoLink?: string;
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

interface JourneySectionProps {
  title: string;
  description: string;
  items: JourneyItem[];
  icon: React.ReactNode;
  currentRole: UserRole;
  initiallyOpen?: boolean;
  animationDelay?: number;
}

// Helper function to convert comma-separated lists into bullet points
const formatTextWithBullets = (text: string): React.ReactNode => {
  if (!text.includes(", ")) return text;
  
  const items = text.split(", ");
  if (items.length <= 2) return text;
  
  return (
    <ul className="list-disc pl-5 mt-2 space-y-1">
      {items.map((item, index) => (
        <li key={index} className="text-sm">{item}</li>
      ))}
    </ul>
  );
};

const JourneySection: React.FC<JourneySectionProps> = ({
  title,
  description,
  items,
  icon,
  currentRole,
  initiallyOpen = false,
  animationDelay = 0
}) => {
  const [isOpen, setIsOpen] = React.useState(initiallyOpen);
  const { toast } = useToast();

  const handleEdit = (itemId: number, role: UserRole) => {
    toast({
      title: "Edit Mode",
      description: `Editing ${items.find(item => item.id === itemId)?.title} as ${role}`,
    });
    // In a real app, this would open an edit modal or navigate to an edit page
  };

  const playAudio = (description: string) => {
    // In a real app, this would play audio using text-to-speech or a recorded audio file
    toast({
      title: "Audio Description",
      description: "Playing audio description...",
    });

    // Basic text-to-speech implementation
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(description);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div 
      className="journey-section-animation" 
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mb-6">
        <CollapsibleTrigger asChild>
          <Button 
            variant="outline" 
            className="flex w-full items-center justify-between rounded-t-md border-b-0 bg-muted/50 p-4 hover:bg-muted"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                {icon}
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
            <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </Button>
        </CollapsibleTrigger>
        
        <CollapsibleContent className="rounded-b-md border border-t-0 p-4">
          <div className="space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <CardTitle className="text-md">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                  <EditButtons 
                    itemId={item.id} 
                    currentRole={currentRole} 
                    editableBy={item.editableBy} 
                    onEdit={handleEdit} 
                  />
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{formatTextWithBullets(item.details)}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.audioDescription && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => playAudio(item.audioDescription || item.details)}
                      >
                        <Headphones className="mr-2 h-4 w-4" />
                        Listen
                      </Button>
                    )}
                    
                    {item.videoLink && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => window.open(item.videoLink, '_blank')}
                      >
                        <Video className="mr-2 h-4 w-4" />
                        Watch Video
                      </Button>
                    )}
                  </div>
                  
                  <Accordion type="multiple" className="w-full space-y-2">
                    {item.checklistItems && item.checklistItems.length > 0 && (
                      <AccordionItem value={`checklist-${item.id}`} className="border rounded-md">
                        <AccordionTrigger className="px-4 py-2">
                          <div className="flex items-center text-sm font-medium">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            Checklist
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-2">
                          <ul className="space-y-1">
                            {item.checklistItems.map((checkItem, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                                {checkItem}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}

                    {/* Common Mistakes Section */}
                    {item.commonMistakes && item.commonMistakes.length > 0 && (
                      <AccordionItem value={`mistakes-${item.id}`} className="border rounded-md">
                        <AccordionTrigger className="px-4 py-2">
                          <div className="flex items-center text-sm font-medium">
                            <AlertCircle className="mr-2 h-4 w-4 text-amber-500" />
                            Common Mistakes
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-2">
                          <ul className="space-y-1">
                            {item.commonMistakes.map((mistake, index) => (
                              <li key={index} className="flex items-center text-sm">
                                <AlertCircle className="mr-2 h-4 w-4 text-amber-500" />
                                {mistake}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}

                    {/* Costs Section */}
                    {item.costs && item.costs.length > 0 && (
                      <AccordionItem value={`costs-${item.id}`} className="border rounded-md">
                        <AccordionTrigger className="px-4 py-2">
                          <div className="flex items-center text-sm font-medium">
                            <DollarSign className="mr-2 h-4 w-4 text-blue-500" />
                            Estimated Costs
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-2">
                          <div className="space-y-1">
                            {item.costs.map((cost, index) => (
                              <div key={index} className="flex items-start gap-2 text-sm">
                                <DollarSign className="mt-0.5 h-4 w-4 text-blue-500" />
                                <div>
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium">{cost.item}:</span> 
                                    <span className="ml-2">{cost.amount}</span>
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

                    {/* What Ifs Section */}
                    {item.whatIfs && item.whatIfs.length > 0 && (
                      <AccordionItem value={`whatifs-${item.id}`} className="border rounded-md">
                        <AccordionTrigger className="px-4 py-2">
                          <div className="flex items-center text-sm font-medium">
                            <HelpCircle className="mr-2 h-4 w-4 text-purple-500" />
                            What If Scenarios
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-2">
                          <div className="space-y-3">
                            {item.whatIfs.map((scenario, index) => (
                              <div key={index} className="rounded-md bg-secondary p-2 text-sm">
                                <p className="font-medium text-primary">{scenario.scenario}</p>
                                <p className="mt-1 text-muted-foreground">{scenario.solution}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )}

                    {/* Muhasabah (Self-reflection) Section */}
                    {item.muhasabah && (
                      <AccordionItem value={`muhasabah-${item.id}`} className="border rounded-md">
                        <AccordionTrigger className="px-4 py-2">
                          <div className="flex items-center text-sm font-medium">
                            <Heart className="mr-2 h-4 w-4 text-red-500" />
                            Muhasabah (Self-reflection)
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-2">
                          <div className="italic rounded-md bg-accent/30 p-3 text-sm">
                            {item.muhasabah}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default JourneySection;
