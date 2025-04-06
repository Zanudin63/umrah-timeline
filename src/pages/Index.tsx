
import React from 'react';
import Timeline from '@/components/Timeline';
import TravelHorizonChart from '@/components/TravelHorizonChart';
import TravelSummary from '@/components/TravelSummary';
import { Location } from '@/components/TravelInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const locations: Location[] = [
    {
      id: 1,
      name: "Home, Kuala Lumpur",
      description: "Departure from home in Kuala Lumpur",
      time: "08:00 AM",
      icon: "start",
      notes: "Remember to double-check all travel documents before leaving."
    },
    {
      id: 2,
      name: "KLIA Airport",
      description: "Check-in and departure from Kuala Lumpur International Airport",
      time: "11:00 AM",
      duration: "3 hours before flight",
      icon: "transit",
      notes: "Check-in closes 60 minutes before departure."
    },
    {
      id: 3,
      name: "In Flight to Jeddah",
      description: "Direct flight from KLIA to King Abdulaziz International Airport",
      time: "02:00 PM - 06:00 PM",
      duration: "10 hours",
      icon: "transit"
    },
    {
      id: 4,
      name: "King Abdulaziz International Airport, Jeddah",
      description: "Arrival and immigration processing in Jeddah",
      time: "06:00 PM",
      duration: "2 hours",
      icon: "transit",
      notes: "Be prepared for potentially long immigration queues."
    },
    {
      id: 5,
      name: "Ground Transfer to Makkah",
      description: "Road journey from Jeddah to Makkah",
      time: "08:00 PM - 09:30 PM",
      duration: "1.5 hours",
      icon: "transit"
    },
    {
      id: 6,
      name: "Makkah City",
      description: "Arrival at accommodation in Makkah",
      time: "09:30 PM",
      icon: "end",
      notes: "Check-in at hotel and prepare for Umrah."
    }
  ];

  const travelSegments = [
    { id: 1, type: "stay" as const, location: "Home", duration: 3, color: "bg-primary" },
    { id: 2, type: "stay" as const, location: "Airport", duration: 3, color: "bg-primary" },
    { id: 3, type: "travel" as const, location: "Flight", duration: 10, color: "bg-accent" },
    { id: 4, type: "stay" as const, location: "Jeddah", duration: 2, color: "bg-primary" },
    { id: 5, type: "travel" as const, location: "Road", duration: 1.5, color: "bg-accent" },
    { id: 6, type: "stay" as const, location: "Makkah", duration: 0, color: "bg-primary" }
  ];

  const totalDuration = travelSegments.reduce((sum, segment) => sum + segment.duration, 0);

  return (
    <div className="container mx-auto py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Travel Horizon Mapper</h1>
        <p className="text-muted-foreground">Kuala Lumpur to Makkah Journey</p>
      </header>

      <TravelSummary 
        origin="Kuala Lumpur, Malaysia" 
        destination="Makkah, Saudi Arabia"
        totalDistance="7,968 km"
        totalDuration="~19.5 hours"
        stopCount={2}
      />

      <div className="mb-12">
        <TravelHorizonChart segments={travelSegments} totalDuration={totalDuration} />
      </div>

      <Tabs defaultValue="timeline" className="mx-auto max-w-4xl">
        <TabsList className="mx-auto mb-6 grid w-[300px] grid-cols-2">
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="details">Journey Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="timeline" className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <Timeline locations={locations} />
        </TabsContent>
        
        <TabsContent value="details" className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="mx-auto max-w-4xl rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-semibold">Journey Details</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Total Distance</h4>
                <p className="text-sm text-muted-foreground">The journey covers approximately 7,968 kilometers from Kuala Lumpur to Makkah.</p>
              </div>
              
              <div>
                <h4 className="font-medium">Flight Information</h4>
                <p className="text-sm text-muted-foreground">
                  Direct flight from KLIA to Jeddah takes approximately 10 hours. The flight path crosses over the Indian Ocean 
                  and several countries including Thailand, India, and parts of the Middle East.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Ground Transportation</h4>
                <p className="text-sm text-muted-foreground">
                  The road journey from Jeddah to Makkah is approximately 85 kilometers and takes about 1.5 hours 
                  depending on traffic conditions. Various transportation options are available including taxis, 
                  buses, and pre-arranged hotel transfers.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Time Zone Changes</h4>
                <p className="text-sm text-muted-foreground">
                  Kuala Lumpur is in the Malaysia Time Zone (MYT/UTC+8) while Makkah is in the Arabia Standard Time (AST/UTC+3). 
                  This represents a 5-hour time difference.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
