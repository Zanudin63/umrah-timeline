
import React from "react";
import { MapPin, Plane, Clock, Route } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface Location {
  id: number;
  name: string;
  description: string;
  time: string;
  duration?: string;
  icon: 'start' | 'transit' | 'end';
  notes?: string;
}

interface TravelInfoProps {
  location: Location;
  animationDelay: number;
}

const TravelInfo: React.FC<TravelInfoProps> = ({ location, animationDelay }) => {
  const getIcon = () => {
    switch (location.icon) {
      case 'start':
        return <MapPin className="h-5 w-5 text-primary" />;
      case 'transit':
        return <Plane className="h-5 w-5 text-accent" />;
      case 'end':
        return <MapPin className="h-5 w-5 text-primary" />;
      default:
        return <MapPin className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <div 
      className="timeline-animation travel-card"
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
            {getIcon()}
          </div>
          <div>
            <CardTitle className="text-lg">{location.name}</CardTitle>
            <CardDescription>{location.time}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{location.description}</p>
          {location.duration && (
            <div className="mt-2 flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3.5 w-3.5" />
              <span>{location.duration}</span>
            </div>
          )}
          {location.notes && (
            <div className="mt-2 rounded-md bg-secondary p-2 text-xs">
              <p>{location.notes}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TravelInfo;
