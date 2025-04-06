
import React from "react";
import { MapPin, Video, Headphones, ChevronDown, CheckCircle } from "lucide-react";
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

export interface JourneyItem {
  id: number;
  title: string;
  description: string;
  details: string;
  audioDescription?: string;
  videoLink?: string;
  checklistItems?: string[];
  editableBy: UserRole[];
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
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                  
                  {item.audioDescription && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => playAudio(item.audioDescription || item.details)}
                      className="mr-2"
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
                  
                  {item.checklistItems && item.checklistItems.length > 0 && (
                    <div className="mt-3">
                      <h4 className="mb-2 text-sm font-medium">Checklist:</h4>
                      <ul className="space-y-1">
                        {item.checklistItems.map((checkItem, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                            {checkItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
