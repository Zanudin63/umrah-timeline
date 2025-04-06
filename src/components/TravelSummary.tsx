
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
    <div className="mx-auto mb-5 grid max-w-4xl gap-3 px-3 sm:grid-cols-2 lg:grid-cols-4"> {/* Reduced from mb-8 gap-4 px-4 to mb-5 gap-3 px-3 */}
      <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
        <CardHeader className="py-1.5 px-3"> {/* Reduced from pb-2 to py-1.5 px-3 */}
          <CardDescription className="text-xs">Origin</CardDescription> {/* Added text-xs */}
          <CardTitle className="flex items-center text-base leading-tight"> {/* Reduced from text-lg to text-base and added leading-tight */}
            <MapPin className="mr-1 h-3.5 w-3.5 text-primary" /> {/* Reduced from h-4 w-4 to h-3.5 w-3.5 */}
            {origin}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
        <CardHeader className="py-1.5 px-3"> {/* Reduced from pb-2 to py-1.5 px-3 */}
          <CardDescription className="text-xs">Destination</CardDescription> {/* Added text-xs */}
          <CardTitle className="flex items-center text-base leading-tight"> {/* Reduced from text-lg to text-base and added leading-tight */}
            <MapPin className="mr-1 h-3.5 w-3.5 text-primary" /> {/* Reduced from h-4 w-4 to h-3.5 w-3.5 */}
            {destination}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.3s" }}>
        <CardHeader className="py-1.5 px-3"> {/* Reduced from pb-2 to py-1.5 px-3 */}
          <CardDescription className="text-xs">Total Journey</CardDescription> {/* Added text-xs */}
          <CardTitle className="flex items-center text-base leading-tight"> {/* Reduced from text-lg to text-base and added leading-tight */}
            <Route className="mr-1 h-3.5 w-3.5 text-accent" /> {/* Reduced from h-4 w-4 to h-3.5 w-3.5 */}
            {totalDistance}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="animate-slide-up opacity-0" style={{ animationDelay: "0.4s" }}>
        <CardHeader className="py-1.5 px-3"> {/* Reduced from pb-2 to py-1.5 px-3 */}
          <CardDescription className="text-xs">Duration</CardDescription> {/* Added text-xs */}
          <CardTitle className="flex items-center text-base leading-tight"> {/* Reduced from text-lg to text-base and added leading-tight */}
            <Clock className="mr-1 h-3.5 w-3.5 text-accent" /> {/* Reduced from h-4 w-4 to h-3.5 w-3.5 */}
            {totalDuration}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default TravelSummary;
