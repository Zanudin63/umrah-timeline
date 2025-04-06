
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Plane, Route, Clock } from "lucide-react";

interface TravelSummaryProps {
  origin: string;
  destination: string;
  totalDistance: string;
  totalDuration: string;
  stopCount: number;
}

const TravelSummary: React.FC<TravelSummaryProps> = ({
  origin,
  destination,
  totalDistance,
  totalDuration,
  stopCount,
}) => {
  return (
    <div className="mx-auto mb-8 grid max-w-4xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
        <CardHeader className="pb-2">
          <CardDescription>Origin</CardDescription>
          <CardTitle className="flex items-center text-lg">
            <MapPin className="mr-1 h-4 w-4 text-primary" />
            {origin}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
        <CardHeader className="pb-2">
          <CardDescription>Destination</CardDescription>
          <CardTitle className="flex items-center text-lg">
            <MapPin className="mr-1 h-4 w-4 text-primary" />
            {destination}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
        <CardHeader className="pb-2">
          <CardDescription>Total Journey</CardDescription>
          <CardTitle className="flex items-center text-lg">
            <Route className="mr-1 h-4 w-4 text-accent" />
            {totalDistance}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
        <CardHeader className="pb-2">
          <CardDescription>Duration</CardDescription>
          <CardTitle className="flex items-center text-lg">
            <Clock className="mr-1 h-4 w-4 text-accent" />
            {totalDuration}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TravelSummary;
