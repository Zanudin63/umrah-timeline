
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
    <div className="relative mx-auto max-w-4xl px-3"> {/* Reduced padding from px-4 to px-3 */}
      <div className="mb-3 flex justify-end"> {/* Reduced from mb-4 to mb-3 */}
        <Card className="p-1.5"> {/* Reduced from p-2 to p-1.5 */}
          <Select 
            value={currentRole} 
            onValueChange={(value) => setCurrentRole(value as UserRole)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select user role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="traveler">Traveler</SelectItem>
              <SelectItem value="agent">Travel Agent</SelectItem>
              <SelectItem value="airline">Airline Staff</SelectItem>
              <SelectItem value="airport">Airport Staff</SelectItem>
              <SelectItem value="admin">Administrator</SelectItem>
            </SelectContent>
          </Select>
        </Card>
      </div>
      
      <div className="ml-7 space-y-4"> {/* Reduced from ml-8 to ml-7 and space-y-6 to space-y-4 */}
        {locations.map((location, index) => (
          <div key={location.id} className="relative">
            {/* Timeline connector (vertical line) */}
            {index < locations.length - 1 && (
              <div className="absolute bottom-0 left-0 top-0 ml-[-16px]">
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
