
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TravelSegment {
  id: number;
  type: "travel" | "stay";
  location: string;
  duration: number; // in hours
  color: string;
}

interface TravelHorizonChartProps {
  segments: TravelSegment[];
  totalDuration: number;
}

const TravelHorizonChart: React.FC<TravelHorizonChartProps> = ({ segments, totalDuration }) => {
  // Format hours into a nice display
  const formatHours = (hours: number) => {
    const wholeHours = Math.floor(hours);
    const minutes = Math.round((hours - wholeHours) * 60);
    
    if (minutes === 0) {
      return `${wholeHours}h`;
    }
    return `${wholeHours}h ${minutes}m`;
  };

  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle className="text-xl">Travel Horizon Chart</CardTitle>
        <CardDescription>Duration visualization of your journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mt-4 flex h-16 w-full overflow-hidden rounded-lg">
          {segments.map((segment) => {
            const widthPercentage = (segment.duration / totalDuration) * 100;
            
            return (
              <div
                key={segment.id}
                className={cn(
                  "group relative flex items-end justify-center transition-all",
                  segment.type === "travel" ? "bg-accent" : "bg-primary"
                )}
                style={{ width: `${widthPercentage}%` }}
              >
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center p-1 text-center text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="whitespace-nowrap">{segment.location}</span>
                  <span className="whitespace-nowrap">{formatHours(segment.duration)}</span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>0h</span>
          <span>{formatHours(totalDuration)}</span>
        </div>
        
        <div className="mt-4 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-accent"></div>
            <span className="text-xs">Travel</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <span className="text-xs">Stay/Transit</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TravelHorizonChart;
