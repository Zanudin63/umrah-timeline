import React from "react";
import { MapPin, Plane, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        return <MapPin className="h-4 w-4 text-primary" />;
      case 'transit':
        return <Plane className="h-4 w-4 text-accent" />;
      case 'end':
        return <MapPin className="h-4 w-4 text-primary" />;
      default:
        return <MapPin className="h-4 w-4 text-primary" />;
    }
  };

  const handleEdit = (itemId: number, role: UserRole) => {
    toast({
      title: "Edit Mode",
      description: `Editing item ${location.name} as ${role}`,
    });
  };

  const editableRoles = location.editableBy || determineEditableRoles(location);

  return (
    <div 
      className="timeline-animation travel-card"
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="flex flex-row items-center gap-2 py-1.5 px-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
            {getIcon()}
          </div>
          <div className="flex-1">
            <CardTitle className="text-base leading-tight">{location.name}</CardTitle>
            <CardDescription className="text-xs">{location.time}</CardDescription>
          </div>
          <EditButtons 
            itemId={location.id} 
            currentRole={currentRole} 
            editableBy={editableRoles} 
            onEdit={handleEdit} 
          />
        </CardHeader>
        <CardContent className="py-1.5 px-3">
          <p className="text-xs text-muted-foreground leading-tight">{location.description}</p>
          {location.duration && (
            <div className="mt-1 flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              <span>{location.duration}</span>
            </div>
          )}
          {location.notes && (
            <div className="mt-1 rounded-md bg-secondary p-1.5 text-xs">
              <p>{location.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

function determineEditableRoles(location: Location): UserRole[] {
  if (location.icon === 'start') {
    return ['traveler', 'admin'];
  } else if (location.name.includes('Airport')) {
    return ['airport', 'airline', 'admin'];
  } else if (location.name.includes('Flight')) {
    return ['airline', 'admin'];
  } else if (location.name.includes('Ground Transfer')) {
    return ['agent', 'admin'];
  } else {
    return ['admin'];
  }
}

export default TravelInfo;
