
import React, { useState } from "react";
import TravelInfo, { Location } from "./TravelInfo";
import { Card } from "@/components/ui/card";
import { UserRole } from "./EditButtons";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface TimelineProps {
  locations: Location[];
}

const Timeline: React.FC<TimelineProps> = ({ locations }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>('traveler');

  return (
    <div className="relative mx-auto max-w-4xl px-2">
      <div className="mb-2 flex justify-end">
        <Card className="p-1">
          <Select 
            value={currentRole} 
            onValueChange={(value) => setCurrentRole(value as UserRole)}
          >
            <SelectTrigger className="w-[180px] h-8 text-sm">
              <SelectValue placeholder="Select user role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="traveler">Traveler</SelectItem>
              <SelectItem value="agent">Travel Agent</SelectItem>
              <SelectItem value="airline">Airline Staff</SelectItem>
              <SelectItem value="airport">Airport Staff</SelectItem>
              <SelectItem value="admin">Administrator</SelectItem>
              <SelectItem value="pilgrim">Pilgrim</SelectItem>
              <SelectItem value="guide">Guide</SelectItem>
              <SelectItem value="imam">Imam</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="teacher">Teacher</SelectItem>
            </SelectContent>
          </Select>
        </Card>
      </div>
      
      <div className="ml-6 space-y-2">
        {locations.map((location, index) => (
          <div key={location.id} className="relative">
            {/* Timeline connector (vertical line) */}
            {index < locations.length - 1 && (
              <div className="absolute bottom-0 left-0 top-0 ml-[-14px]">
                <div className="timeline-connector" />
              </div>
            )}
            
            {/* Location dot */}
            <div className="location-dot">
              <div className="location-dot-inner" />
            </div>
            
            {/* Location card */}
            <TravelInfo 
              location={location} 
              animationDelay={index}
              currentRole={currentRole}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
