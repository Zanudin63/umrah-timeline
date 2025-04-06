
import React from "react";
import TravelInfo, { Location } from "./TravelInfo";
import { Card } from "@/components/ui/card";

interface TimelineProps {
  locations: Location[];
}

const Timeline: React.FC<TimelineProps> = ({ locations }) => {
  return (
    <div className="relative mx-auto max-w-4xl px-4">
      <div className="ml-8 space-y-6">
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
            <TravelInfo location={location} animationDelay={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
