import React, { useState } from 'react';
import Timeline from '@/components/Timeline';
import TravelHorizonChart from '@/components/TravelHorizonChart';
import TravelSummary from '@/components/TravelSummary';
import JourneySection from '@/components/JourneySection';
import { Location } from '@/components/TravelInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from '@/components/EditButtons';
import { 
  MapPin, Plane, Clock, Route, Calendar, Book, 
  Video, Home, Bed, Star, Flag, Compass
} from "lucide-react";

const Index = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>('traveler');
  
  const locations: Location[] = [
    {
      id: 1,
      name: "Home, Kuala Lumpur",
      description: "Departure from home in Kuala Lumpur",
      time: "08:00 AM",
      icon: "start",
      notes: "Remember to double-check all travel documents before leaving.",
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 2,
      name: "KLIA Airport",
      description: "Check-in and departure from Kuala Lumpur International Airport",
      time: "11:00 AM",
      duration: "3 hours before flight",
      icon: "transit",
      notes: "Check-in closes 60 minutes before departure.",
      editableBy: ['airport', 'airline', 'admin'] as UserRole[]
    },
    {
      id: 3,
      name: "In Flight to Jeddah",
      description: "Direct flight from KLIA to King Abdulaziz International Airport",
      time: "02:00 PM - 06:00 PM",
      duration: "10 hours",
      icon: "transit",
      editableBy: ['airline', 'admin'] as UserRole[]
    },
    {
      id: 4,
      name: "King Abdulaziz International Airport, Jeddah",
      description: "Arrival and immigration processing in Jeddah",
      time: "06:00 PM",
      duration: "2 hours",
      icon: "transit",
      notes: "Be prepared for potentially long immigration queues.",
      editableBy: ['airport', 'admin'] as UserRole[]
    },
    {
      id: 5,
      name: "Ground Transfer to Makkah",
      description: "Road journey from Jeddah to Makkah",
      time: "08:00 PM - 09:30 PM",
      duration: "1.5 hours",
      icon: "transit",
      editableBy: ['agent', 'admin'] as UserRole[]
    },
    {
      id: 6,
      name: "Makkah City",
      description: "Arrival at accommodation in Makkah",
      time: "09:30 PM",
      icon: "end",
      notes: "Check-in at hotel and prepare for Umrah.",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
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

  const travelPreparations = [
    {
      id: 101,
      title: "Ticketing",
      description: "Flight and transportation booking",
      details: "Book your roundtrip flights, internal transport between cities, and airport transfers in advance. Consider flexible booking options for unforeseen circumstances.",
      audioDescription: "For Hajj and Umrah, book your flights at least 3-4 months in advance. Choose reputable airlines with good track records for pilgrimage travel.",
      videoLink: "https://www.youtube.com/watch?v=example1",
      checklistItems: ["Book roundtrip flights", "Arrange airport transfers", "Purchase travel insurance", "Save digital copies of all tickets"],
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 102,
      title: "Travel Immigration",
      description: "Visas and passport requirements",
      details: "Apply for an Umrah visa through authorized agents. Ensure your passport has at least 6 months validity beyond your return date and has empty pages for visa stamps.",
      audioDescription: "The Umrah visa application must be done through authorized agencies. Your passport must have sufficient validity and the visa typically lasts for 30 days.",
      videoLink: "https://www.youtube.com/watch?v=example2",
      checklistItems: ["Check passport validity", "Apply for Umrah visa", "Make copies of passport", "Check entry/exit requirements"],
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 103,
      title: "Health Checks",
      description: "Medical preparations and check-ups",
      details: "Get a thorough medical check-up before travel. Discuss with your doctor about the physical demands of Umrah and any necessary precautions given your health conditions.",
      audioDescription: "Umrah involves considerable walking and standing. Ensure you're physically prepared and have any necessary medications with proper documentation.",
      checklistItems: ["Complete medical check-up", "Prepare first aid kit", "Pack regular medications", "Get doctor's note for prescribed medications"],
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 104,
      title: "Vaccinations",
      description: "Required and recommended vaccinations",
      details: "Meningococcal vaccination is mandatory for Hajj/Umrah visas. Other recommended vaccinations include seasonal influenza, pneumococcal, and COVID-19 vaccines.",
      audioDescription: "The Meningitis ACWY vaccine is required for pilgrimage visas. Make sure to get vaccinated at least 10 days before travel and carry the certificate.",
      checklistItems: ["Get meningococcal vaccination", "Consider flu vaccination", "Update routine vaccinations", "Carry vaccination certificates"],
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 105,
      title: "Accommodation",
      description: "Booking hotels and lodging",
      details: "Book accommodation in Makkah and Madinah in advance. Consider proximity to the Holy Mosques as a primary factor, especially if traveling with elderly family members.",
      audioDescription: "Accommodations near the Haram are more expensive but save time and energy on travel. Book through reputable agencies that specialize in pilgrimage trips.",
      videoLink: "https://www.youtube.com/watch?v=example3",
      checklistItems: ["Book Makkah accommodation", "Book Madinah accommodation", "Confirm all reservations", "Check cancellation policies"],
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 106,
      title: "Packing",
      description: "Essential items to bring",
      details: "Pack light and practical clothing suitable for the hot climate. For men, bring ihram garments. For women, bring modest clothing that covers the body except for the face and hands.",
      audioDescription: "Pack light, breathable fabrics. Bring a small prayer mat, umbrella for sun protection, comfortable walking shoes, and minimal toiletries.",
      videoLink: "https://www.youtube.com/watch?v=example4",
      checklistItems: ["Prayer garments", "Comfortable walking shoes", "Travel adapter", "Basic medications", "Modest clothing", "Travel prayer mat"],
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 107,
      title: "Financials",
      description: "Money matters and budgeting",
      details: "Prepare a detailed budget. Bring a mix of cash (Saudi Riyals) and cards. Inform your bank about international travel to prevent card blocks.",
      audioDescription: "Estimate costs for meals, transportation, optional tours, and gifts. Keep some emergency funds and consider money belt for security.",
      checklistItems: ["Notify bank of travel", "Exchange currency", "Prepare emergency funds", "Create detailed budget", "Research tipping customs"],
      editableBy: ['traveler', 'admin'] as UserRole[]
    }
  ];

  const umrahManasik = [
    {
      id: 201,
      title: "Miqat",
      description: "Boundary points for entering ihram state",
      details: "Miqat refers to the designated boundary points around Makkah where pilgrims must enter the state of ihram before proceeding to Umrah. For flights to Jeddah, most pilgrims will enter ihram while on the airplane as they pass over or near Qarn al-Manazil.",
      audioDescription: "Miqat is a designated boundary around Makkah where you must enter the state of Ihram. Prepare by performing ghusl (full body wash), applying unscented products, and wearing proper ihram garments before crossing this boundary.",
      videoLink: "https://www.youtube.com/watch?v=example5",
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 202,
      title: "Niat (Intention)",
      description: "Declaring intention for Umrah",
      details: "After entering the state of ihram at the Miqat, make the intention for Umrah by saying 'Labbayk Allahumma bi-Umrah' (Here I am O Allah, for Umrah). This verbal declaration should match your heartfelt intention.",
      audioDescription: "The intention or niyyah is made in your heart and then verbalized. Declare clearly 'Labbayk Allahumma bi-Umrah' (Here I am O Allah, for Umrah).",
      videoLink: "https://www.youtube.com/watch?v=example6",
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 203,
      title: "Ihram",
      description: "Sacred state and clothing",
      details: "Ihram refers to both the special clothing worn and the sacred state entered for Umrah. Men wear two white unstitched cloths, while women wear regular modest clothes. While in ihram, certain actions are prohibited, including cutting hair, trimming nails, using scented products, and engaging in marital relations.",
      audioDescription: "For men, ihram consists of two white unstitched cloths - one wrapped around the waist and the other draped over the shoulders. Women wear normal modest clothing. Maintain this sacred state by avoiding prohibited actions until completing Umrah.",
      videoLink: "https://www.youtube.com/watch?v=example7",
      checklistItems: ["Ihram garments (for men)", "Unscented toiletries", "Belt or pins to secure ihram", "Modest clothing (for women)"],
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 204,
      title: "Tawaf",
      description: "Circling the Kaaba seven times",
      details: "Tawaf involves circling the Kaaba seven times in a counterclockwise direction, starting and ending at the Black Stone. During Tawaf, make supplications and recite prayers as you circle. The first three rounds are performed at a quick pace for men, while the remaining four are done at a normal walking pace.",
      audioDescription: "Begin tawaf from the Black Stone corner. Each circuit counts when you return to this starting point. Men perform 'ramal' (brisk walking) in the first three circuits. Supplicate freely in your language during this ritual.",
      videoLink: "https://www.youtube.com/watch?v=example8",
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 205,
      title: "Saie",
      description: "Walking between Safa and Marwah",
      details: "Saie commemorates Hajar's search for water for her son Ismail. It involves walking seven times between the hills of Safa and Marwah, starting at Safa and ending at Marwah. There is a section where men traditionally jog lightly, marked by green lights.",
      audioDescription: "Begin at Safa by facing the Kaaba and reciting prayers. Walk to Marwah, then return to Safa. Each stretch counts as one lap. Men lightly jog in the marked section (between green lights). Complete seven laps, ending at Marwah.",
      videoLink: "https://www.youtube.com/watch?v=example9",
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 206,
      title: "Tahalul",
      description: "Exiting the state of ihram",
      details: "After completing Saie, men shave their heads or trim their hair, and women trim a small amount of hair. This act marks the end of Umrah and releases you from the restrictions of ihram.",
      audioDescription: "For men, shaving the head completely is more rewarding, though trimming is acceptable. Women cut a small piece of hair (about the length of a fingertip). With this, your Umrah is complete and ihram restrictions end.",
      videoLink: "https://www.youtube.com/watch?v=example10",
      editableBy: ['traveler', 'admin'] as UserRole[]
    }
  ];

  const makkahZiarah = [
    {
      id: 301,
      title: "Masjid al-Haram",
      description: "Exploring the Sacred Mosque",
      details: "Beyond performing Umrah, spend time in prayer and reflection at the Sacred Mosque. Visit the various floors and sections, observe the architecture, and find peaceful spots for personal worship.",
      audioDescription: "Masjid al-Haram has multiple levels and extensive facilities. Explore when less crowded, usually after Fajr or late evening prayers. Take time to appreciate its historical and spiritual significance.",
      videoLink: "https://www.youtube.com/watch?v=example11",
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 302,
      title: "Jabal Thawr",
      description: "Mountain where the Prophet hid during migration",
      details: "This mountain contains the cave where Prophet Muhammad ﷺ and Abu Bakr hid for three days during their migration from Makkah to Madinah. Visiting requires a short journey from Makkah and climbing the mountain path.",
      audioDescription: "The cave in Jabal Thawr provided shelter to the Prophet and his companion. The difficult journey up the mountain offers historical perspective on this pivotal moment in Islamic history.",
      videoLink: "https://www.youtube.com/watch?v=example12",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 303,
      title: "Jabal Nur (Mount of Light)",
      description: "Mountain containing Cave Hira",
      details: "Jabal Nur houses Cave Hira, where Prophet Muhammad ﷺ received his first revelation. The climb is strenuous, taking about 1-2 hours depending on fitness level.",
      audioDescription: "Cave Hira is where the first verses of the Quran were revealed. The challenging ascent offers magnificent views of Makkah and a profound spiritual connection to the beginnings of Islam.",
      videoLink: "https://www.youtube.com/watch?v=example13",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 304,
      title: "Mina, Arafat, and Muzdalifah",
      description: "Sites of Hajj rituals",
      details: "Although primarily Hajj sites, some Umrah pilgrims visit these locations to familiarize themselves with the Hajj journey. Mina is the tent city, Arafat is the plain of gathering, and Muzdalifah is where pilgrims collect pebbles for the stoning ritual.",
      audioDescription: "These sites are quieter outside Hajj season. Visiting provides insight into the complete pilgrimage experience and helps those planning for future Hajj.",
      videoLink: "https://www.youtube.com/watch?v=example14",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    }
  ];

  const madinahJourney = [
    {
      id: 401,
      title: "Travel to Madinah",
      description: "Journey from Makkah to the City of the Prophet",
      details: "Most pilgrims travel from Makkah to Madinah by bus or car, a journey of approximately 450 km taking 5-6 hours. Some choose to fly between Jeddah and Madinah to save time.",
      audioDescription: "The road journey offers views of the Arabian landscape. Buses are comfortable with air conditioning and rest stops. Consider the Haramain High Speed Rail for a premium option that cuts travel time significantly.",
      videoLink: "https://www.youtube.com/watch?v=example15",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 402,
      title: "Accommodation in Madinah",
      description: "Lodging near Masjid Nabawi",
      details: "Like in Makkah, accommodations closer to the main mosque (Masjid Nabawi) are more convenient but pricier. The central area around the mosque has hotels in all price ranges.",
      audioDescription: "Madinah generally offers more affordable accommodation compared to Makkah. Consider the Markaziyah area for proximity to the mosque while maintaining reasonable prices.",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    }
  ];

  const madinahRituals = [
    {
      id: 501,
      title: "Maqam Nabi",
      description: "Visiting the Prophet's Mosque (Masjid Nabawi)",
      details: "Masjid Nabawi houses the tomb of Prophet Muhammad ﷺ and his companions Abu Bakr and Umar. The mosque features the Rawdah (Garden of Paradise), an area between the Prophet's tomb and his pulpit, highly regarded for prayer.",
      audioDescription: "Enter with right foot first, reciting appropriate prayers. Pray in the Rawdah if possible, though this area gets extremely crowded. Visit the Prophet's tomb (women have specific times), offering salam and prayers in a calm, respectful manner.",
      videoLink: "https://www.youtube.com/watch?v=example16",
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 502,
      title: "Jannat al-Baqi",
      description: "Cemetery next to Masjid Nabawi",
      details: "This is the main cemetery of Madinah where many of the Prophet's companions, wives, and family members are buried. It's located adjacent to Masjid Nabawi.",
      audioDescription: "Men can visit Baqi during specific times. Recite appropriate prayers for the deceased and reflect on the legacy of early Muslims buried here.",
      videoLink: "https://www.youtube.com/watch?v=example17",
      editableBy: ['traveler', 'admin'] as UserRole[]
    },
    {
      id: 503,
      title: "Masjid Quba",
      description: "The first mosque in Islamic history",
      details: "Located about 5 km from Masjid Nabawi, this was the first mosque built in Islamic history. The Prophet ﷺ encouraged visiting it and praying there, saying it's equivalent to performing an Umrah.",
      audioDescription: "Visit Quba preferably on Saturday, following the Prophet's tradition. Pray two rakats and gain the reward equivalent to performing an Umrah.",
      videoLink: "https://www.youtube.com/watch?v=example18",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    }
  ];

  const madinahZiarah = [
    {
      id: 601,
      title: "Mount Uhud",
      description: "Site of the Battle of Uhud",
      details: "This mountain bears historical significance as the site of the Battle of Uhud in 625 CE. Visitors can see the martyrs' graves and gain historical perspective on this important event in Islamic history.",
      audioDescription: "The battle of Uhud taught important lessons about obedience and steadfastness. Visit the martyrs' cemetery and reflect on their sacrifice. The mountain provides context to the historical narratives of early Islam.",
      videoLink: "https://www.youtube.com/watch?v=example19",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 602,
      title: "Masjid Qiblatain",
      description: "Mosque of the Two Qiblahs",
      details: "This mosque is where the Prophet ﷺ received revelation to change the prayer direction (qiblah) from Jerusalem to the Kaaba in Makkah. It features two mihrabs (prayer niches) pointing in both directions.",
      audioDescription: "This site commemorates the transition in prayer direction. Observe the unique architecture with two mihrabs, a physical reminder of this significant change in Islamic practice.",
      videoLink: "https://www.youtube.com/watch?v=example20",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 603,
      title: "Masjid al-Qiblatayn",
      description: "Mosque of the Seven Mosques",
      details: "This area contains several small mosques commemorating the Battle of the Trench (Khandaq). Though called 'seven mosques,' the site actually contains six mosques including one where the Prophet ﷺ prayed during the battle.",
      audioDescription: "These modest mosques mark significant locations during the Siege of Medina. Understanding this battle provides insight into the challenging early period of Islam and the strategy employed to defend the city.",
      videoLink: "https://www.youtube.com/watch?v=example21",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    }
  ];

  const returnJourney = [
    {
      id: 701,
      title: "Departure Preparation",
      description: "Preparing to leave Saudi Arabia",
      details: "Check out from your hotel, ensuring you've packed all belongings. Confirm your flight details and allow sufficient time to reach the airport, considering potential traffic delays.",
      audioDescription: "Purchase any final souvenirs or gifts (dates, prayer beads, Zamzam water if permitted). Settle all bills and notify your bank about your return to prevent card issues.",
      checklistItems: ["Confirm flight details", "Check hotel checkout time", "Pack all belongings", "Arrange airport transfer"],
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[]
    },
    {
      id: 702,
      title: "Airport Procedures",
      description: "Departure from King Abdulaziz International Airport",
      details: "Arrive at the airport at least 3 hours before your international flight. The airport can be busy, particularly during Hajj and Umrah seasons. Complete all exit procedures and security checks.",
      audioDescription: "The new Jeddah airport terminal has improved facilities. Be prepared for comprehensive security screening. Check whether you're allowed to carry Zamzam water (special containers might be required or airline policies might restrict it).",
      checklistItems: ["Allow 3+ hours before departure", "Check Zamzam water regulations", "Complete exit formalities", "Keep boarding pass and documents accessible"],
      editableBy: ['traveler', 'airline', 'airport', 'admin'] as UserRole[]
    },
    {
      id: 703,
      title: "Flight to Kuala Lumpur",
      description: "Return journey by air",
      details: "The direct flight from Jeddah to Kuala Lumpur takes approximately 9-10 hours. Stay hydrated and move occasionally to prevent stiffness during the long flight.",
      audioDescription: "Use the flight time for reflection on your pilgrimage experience. Record your thoughts and memories while they're fresh. Consider your spiritual goals upon returning home.",
      editableBy: ['airline', 'admin'] as UserRole[]
    },
    {
      id: 704,
      title: "Arrival in Malaysia",
      description: "Entry procedures at KLIA",
      details: "Complete immigration and customs procedures at Kuala Lumpur International Airport. Declare any restricted items, particularly large quantities of Zamzam water if you're carrying it.",
      audioDescription: "Malaysian citizens usually have expedited entry procedures. Have your completed arrival card and passport ready. Collect luggage and proceed through customs declaration if necessary.",
      checklistItems: ["Complete arrival card", "Pass immigration control", "Collect baggage", "Clear customs"],
      editableBy: ['traveler', 'airport', 'admin'] as UserRole[]
    },
    {
      id: 705,
      title: "Return Home",
      description: "Final leg of your journey",
      details: "Arrange transportation from KLIA to your home. Share your expected arrival time with family members who might be receiving you.",
      audioDescription: "It's traditional for returning pilgrims to be warmly welcomed by family and friends. Consider how you'll integrate the spiritual lessons from your journey into daily life going forward.",
      editableBy: ['traveler', 'admin'] as UserRole[]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <header className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Umrah Journey Planner</h1>
        <p className="text-muted-foreground">Complete guide from Malaysia to the Holy Cities and back</p>
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

      <Tabs defaultValue="journey" className="mx-auto max-w-4xl">
        <TabsList className="mx-auto mb-6 grid w-[400px] grid-cols-3">
          <TabsTrigger value="journey">Timeline</TabsTrigger>
          <TabsTrigger value="preparations">Preparations</TabsTrigger>
          <TabsTrigger value="rituals">Rituals & Ziarah</TabsTrigger>
        </TabsList>
        
        <TabsContent value="journey" className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <Timeline locations={locations} />
        </TabsContent>
        
        <TabsContent value="preparations" className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="mb-4 flex justify-end">
            <div className="text-sm text-muted-foreground">
              Viewing as: 
              <select 
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value as UserRole)}
                className="ml-2 rounded border border-input bg-background px-2 py-1"
              >
                <option value="traveler">Traveler</option>
                <option value="agent">Travel Agent</option>
                <option value="airline">Airline Staff</option>
                <option value="airport">Airport Staff</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
          </div>

          <JourneySection
            title="Travel Preparations"
            description="Essential preparations before your journey"
            icon={<Calendar className="h-5 w-5" />}
            items={travelPreparations}
            currentRole={currentRole}
            initiallyOpen={true}
            animationDelay={0}
          />
          
          <JourneySection
            title="Return Journey"
            description="Preparing for departure and traveling back home"
            icon={<Home className="h-5 w-5" />}
            items={returnJourney}
            currentRole={currentRole}
            initiallyOpen={false}
            animationDelay={1}
          />
        </TabsContent>
        
        <TabsContent value="rituals" className="animate-slide-up opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="mb-4 flex justify-end">
            <div className="text-sm text-muted-foreground">
              Viewing as: 
              <select 
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value as UserRole)}
                className="ml-2 rounded border border-input bg-background px-2 py-1"
              >
                <option value="traveler">Traveler</option>
                <option value="agent">Travel Agent</option>
                <option value="airline">Airline Staff</option>
                <option value="airport">Airport Staff</option>
                <option value="admin">Administrator</option>
              </select>
            </div>
          </div>

          <JourneySection
            title="Umrah Manasik"
            description="Steps and rituals of Umrah"
            icon={<Book className="h-5 w-5" />}
            items={umrahManasik}
            currentRole={currentRole}
            initiallyOpen={true}
            animationDelay={0}
          />
          
          <JourneySection
            title="Ziarah in Makkah"
            description="Important sites to visit in Makkah"
            icon={<MapPin className="h-5 w-5" />}
            items={makkahZiarah}
            currentRole={currentRole}
            initiallyOpen={false}
            animationDelay={1}
          />
          
          <JourneySection
            title="Madinah Trip"
            description="Journey to the City of the Prophet"
            icon={<Plane className="h-5 w-5" />}
            items={madinahJourney}
            currentRole={currentRole}
            initiallyOpen={false}
            animationDelay={2}
          />
          
          <JourneySection
            title="Madinah Rituals"
            description="Important sites and practices in Madinah"
            icon={<Star className="h-5 w-5" />}
            items={madinahRituals}
            currentRole={currentRole}
            initiallyOpen={false}
            animationDelay={3}
          />
          
          <JourneySection
            title="Ziarah in Madinah"
            description="Historical sites to visit in Madinah"
            icon={<Compass className="h-5 w-5" />}
            items={madinahZiarah}
            currentRole={currentRole}
            initiallyOpen={false}
            animationDelay={4}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
