
import React from "react";
import { MapPin, Plane, Clock, Route } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { EditButtons, UserRole } from "./EditButtons";
import { useToast } from "@/hooks/use-toast";

export interface Location {
  id: number;
  name: string;
  description: string;
  time: string;
  duration?: string;
  icon: 'start' | 'transit' | 'end';
  notes?: string;
  editableBy?: UserRole[];
}

interface TravelInfoProps {
  location: Location;
  animationDelay: number;
  currentRole?: UserRole;
}

const TravelInfo: React.FC<TravelInfoProps> = ({ 
  location, 
  animationDelay,
  currentRole = 'traveler'
}) => {
  const { toast } = useToast();
  
  const getIcon = () => {
    switch (location.icon) {
      case 'start':
        return <MapPin className="h-4 w-4 text-primary" />; // Reduced from h-5 w-5
      case 'transit':
        return <Plane className="h-4 w-4 text-accent" />; // Reduced from h-5 w-5
      case 'end':
        return <MapPin className="h-4 w-4 text-primary" />; // Reduced from h-5 w-5
      default:
        return <MapPin className="h-4 w-4 text-primary" />; // Reduced from h-5 w-5
    }
  };

  const handleEdit = (itemId: number, role: UserRole) => {
    toast({
      title: "Edit Mode",
      description: `Editing item ${location.name} as ${role}`,
    });
    // In a real app, this would open an edit modal or navigate to an edit page
  };

  // Define which roles can edit this item based on location type
  const editableRoles = location.editableBy || determineEditableRoles(location);

  return (
    <div 
      className="timeline-animation travel-card"
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="flex flex-row items-center gap-2 py-1.5 px-3"> {/* Reduced from pb-2 to py-1.5 px-3 */}
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10"> {/* Reduced from h-8 w-8 to h-6 w-6 */}
            {getIcon()}
          </div>
          <div className="flex-1">
            <CardTitle className="text-base leading-tight">{location.name}</CardTitle> {/* Reduced from text-lg to text-base and added leading-tight */}
            <CardDescription className="text-xs">{location.time}</CardDescription> {/* Added text-xs */}
          </div>
          <EditButtons 
            itemId={location.id} 
            currentRole={currentRole} 
            editableBy={editableRoles} 
            onEdit={handleEdit} 
          />
        </CardHeader>
        <CardContent className="py-1.5 px-3"> {/* Added custom padding */}
          <p className="text-xs text-muted-foreground leading-tight">{location.description}</p> {/* Reduced from text-sm to text-xs and added leading-tight */}
          {location.duration && (
            <div className="mt-1 flex items-center text-xs text-muted-foreground"> {/* Reduced from mt-2 to mt-1 */}
              <Clock className="mr-1 h-3 w-3" /> {/* Reduced from h-3.5 w-3.5 to h-3 w-3 */}
              <span>{location.duration}</span>
            </div>
          )}
          {location.notes && (
            <div className="mt-1 rounded-md bg-secondary p-1.5 text-xs"> {/* Reduced from mt-2 p-2 to mt-1 p-1.5 */}
              <p>{location.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function to determine which roles can edit a location based on its type
function determineEditableRoles(location: Location): UserRole[] {
  // Default permissions based on location type
  if (location.icon === 'start') {
    // Home location - editable by traveler and admin
    return ['traveler', 'admin'];
  } else if (location.name.includes('Airport')) {
    // Airport locations - editable by airport staff, airline, and admin
    return ['airport', 'airline', 'admin'];
  } else if (location.name.includes('Flight')) {
    // Flight information - editable by airline and admin
    return ['airline', 'admin'];
  } else if (location.name.includes('Ground Transfer')) {
    // Ground transfers - editable by travel agent and admin
    return ['agent', 'admin'];
  } else {
    // Other locations - editable only by admin
    return ['admin'];
  }
}

export default TravelInfo;
