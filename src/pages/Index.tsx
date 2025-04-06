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
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[],
      commonMistakes: [
        "Booking tickets too close to departure date leading to higher prices",
        "Not checking visa requirements before booking flights",
        "Choosing short layovers that risk missed connections if there are delays"
      ],
      costs: [
        { item: "Economy class roundtrip flights", amount: "RM 3,000 - 5,000", note: "Prices higher during peak seasons" },
        { item: "Airport transfers in Saudi", amount: "RM 100 - 300", note: "Per vehicle, not per person" },
        { item: "Travel insurance", amount: "RM 200 - 400", note: "For comprehensive coverage" }
      ],
      whatIfs: [
        { scenario: "What if my flight is cancelled?", solution: "Ensure your travel insurance covers this. Contact your travel agent or airline immediately for rebooking options." },
        { scenario: "What if I need to change my travel dates?", solution: "Book flexible tickets that allow changes with minimal fees. Most pilgrimage-focused travel agents offer some flexibility." }
      ],
      muhasabah: "Consider the privilege of being able to make this journey when many Muslims around the world cannot due to financial or political constraints. How can your journey benefit not just yourself but your wider community?"
    },
    {
      id: 102,
      title: "Travel Immigration",
      description: "Visas and passport requirements",
      details: "Apply for an Umrah visa through authorized agents. Ensure your passport has at least 6 months validity beyond your return date and has empty pages for visa stamps.",
      audioDescription: "The Umrah visa application must be done through authorized agencies. Your passport must have sufficient validity and the visa typically lasts for 30 days.",
      videoLink: "https://www.youtube.com/watch?v=example2",
      checklistItems: ["Check passport validity", "Apply for Umrah visa", "Make copies of passport", "Check entry/exit requirements"],
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[],
      commonMistakes: [
        "Applying for visa too late - processing can take 2-3 weeks",
        "Not checking passport expiry date which needs 6+ months validity",
        "Not bringing physical copies of all documents as backup"
      ],
      costs: [
        { item: "Umrah visa fee", amount: "~RM 300", note: "Typically included in package costs" },
        { item: "Passport renewal (if needed)", amount: "RM 200", note: "Standard fee for Malaysian passport" }
      ],
      whatIfs: [
        { scenario: "What if my visa application is rejected?", solution: "Work with your agent to address any issues and reapply promptly. Having travel insurance that covers cancellation is useful in such cases." },
        { scenario: "What if I lose my passport in Saudi Arabia?", solution: "Contact the Malaysian embassy in Riyadh or consulate in Jeddah immediately. Have digital and physical copies of your passport available." }
      ]
    },
    {
      id: 103,
      title: "Health Checks",
      description: "Medical preparations and check-ups",
      details: "Get a thorough medical check-up before travel. Discuss with your doctor about the physical demands of Umrah and any necessary precautions given your health conditions.",
      audioDescription: "Umrah involves considerable walking and standing. Ensure you're physically prepared and have any necessary medications with proper documentation.",
      checklistItems: ["Complete medical check-up", "Prepare first aid kit", "Pack regular medications", "Get doctor's note for prescribed medications"],
      editableBy: ['traveler', 'admin'] as UserRole[],
      commonMistakes: [
        "Not bringing enough prescription medication for the entire trip plus extra days",
        "Forgetting medical documentation for medications, especially controlled substances",
        "Not preparing physically for the demands of tawaf and sa'i which require significant walking"
      ],
      costs: [
        { item: "Pre-travel medical check-up", amount: "RM 150 - 300", note: "Varies by hospital/clinic" },
        { item: "Travel medical kit", amount: "RM 50 - 100", note: "Basic necessities" },
        { item: "Travel health insurance", amount: "RM 100 - 200", note: "Important for emergency coverage" }
      ],
      whatIfs: [
        { scenario: "What if I get sick during Umrah?", solution: "Saudi hospitals offer excellent care, especially in Makkah and Madinah. Have your insurance details and medication list ready. Most hotels can arrange medical assistance." },
        { scenario: "What if I have mobility issues?", solution: "Wheelchairs are available at the Haramain. Consider booking accommodation closer to the mosques. Speak with your travel agent about accessibility requirements." }
      ],
      muhasabah: "Our physical health is an amanah (trust) from Allah. The journey reveals how well we've maintained this trust and may inspire better health habits upon return."
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
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[],
      commonMistakes: [
        "Choosing accommodation solely based on price without considering distance to Haram",
        "Not checking reviews or asking for references before booking",
        "Forgetting to specify needs for family rooms or accessible facilities"
      ],
      costs: [
        { item: "Makkah hotel (per night)", amount: "RM 200 - 1,500", note: "Depends on season, proximity to Haram, and hotel category" },
        { item: "Madinah hotel (per night)", amount: "RM 150 - 1,000", note: "Generally less expensive than Makkah" }
      ],
      whatIfs: [
        { scenario: "What if my hotel room is significantly different from what was promised?", solution: "Document the issues with photos. Contact your travel agent immediately. If traveling independently, speak with hotel management and request a room change." },
        { scenario: "What if my hotel is too far from the Haram for comfortable walking?", solution: "Use the shuttle services offered by most hotels. Alternatively, familiarize yourself with local taxi services or ride-sharing apps available in Saudi Arabia." }
      ],
      muhasabah: "Consider how fortunate you are to visit these blessed places when many Muslims dream of such an opportunity their entire lives. How will this experience change your appreciation for your regular home and daily life?"
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
      editableBy: ['traveler', 'admin'] as UserRole[],
      commonMistakes: [
        "Putting on ihram garments but forgetting to make the intention (niyyah)",
        "Passing the miqat boundary without entering the state of ihram",
        "Using scented products after entering ihram"
      ],
      whatIfs: [
        { scenario: "What if I accidentally pass the miqat without entering ihram?", solution: "Return to the miqat if possible to enter ihram properly. If not possible, a fidyah (compensation) in the form of sacrificing an animal may be required." },
        { scenario: "What if I'm not sure when the plane will cross the miqat?", solution: "Ask the cabin crew as most flights to Jeddah announce the miqat crossing, or enter ihram before the flight to be safe." }
      ],
      muhasabah: "The ihram represents equality before Allah, stripping away all signs of status and wealth. Reflect on how this symbolic act should affect your daily life and interactions with others regardless of their social standing."
    },
    {
      id: 202,
      title: "Niat (Intention)",
      description: "Declaring intention for Umrah",
      details: "After entering the state of ihram at the Miqat, make the intention for Umrah by saying 'Labbayk Allahumma bi-Umrah' (Here I am O Allah, for Umrah). This verbal declaration should match your heartfelt intention.",
      audioDescription: "The intention or niyyah is made in your heart and then verbalized. Declare clearly 'Labbayk Allahumma bi-Umrah' (Here I am O Allah, for Umrah).",
      videoLink: "https://www.youtube.com/watch?v=example6",
      editableBy: ['traveler', 'admin'] as UserRole[],
      commonMistakes: [
        "Making the intention without verbalizing it",
        "Following others without understanding the meaning of the words being recited",
        "Forgetting to specify which type of Hajj/Umrah you're performing (if applicable)"
      ],
      whatIfs: [
        { scenario: "What if I'm not sure if I made my intention correctly?", solution: "If you intended in your heart and made a verbal declaration for Umrah, your intention is valid. Renew your intention to be sure." },
        { scenario: "What if I can't pronounce the Arabic words correctly?", solution: "Allah knows your intention. Try your best with the Arabic, but you can also make the intention in your own language." }
      ],
      muhasabah: "The niyyah (intention) is central not just to Umrah but to all acts of worship. How often do you pause to clarify your intentions in daily acts? Consider how purifying your intentions can transform ordinary actions into worship."
    },
    {
      id: 203,
      title: "Ihram",
      description: "Sacred state and clothing",
      details: "Ihram refers to both the special clothing worn and the sacred state entered for Umrah. Men wear two white unstitched cloths, while women wear regular modest clothes. While in ihram, certain actions are prohibited, including cutting hair, trimming nails, using scented products, and engaging in marital relations.",
      audioDescription: "For men, ihram consists of two white unstitched cloths - one wrapped around the waist and the other draped over the shoulders. Women wear normal modest clothing. Maintain this sacred state by avoiding prohibited actions until completing Umrah.",
      videoLink: "https://www.youtube.com/watch?v=example7",
      checklistItems: ["Ihram garments (for men)", "Unscented toiletries", "Belt or pins to secure ihram", "Modest clothing (for women)"],
      editableBy: ['traveler', 'admin'] as UserRole[],
      commonMistakes: [
        "Men wearing stitched clothing or covering their heads while in ihram",
        "Using scented soap or cologne while in ihram",
        "Cutting nails or hair while in the state of ihram"
      ],
      costs: [
        { item: "Ihram garments for men", amount: "RM 50 - 150", note: "Quality varies" },
        { item: "Ihram belt with secured pocket", amount: "RM 20 - 50", note: "Recommended for securing valuables" },
        { item: "Unscented toiletries", amount: "RM 30 - 60", note: "Special products for ihram state" }
      ],
      whatIfs: [
        { scenario: "What if my ihram becomes dirty or soiled?", solution: "You can change your ihram garments as needed, just ensure the new ones are also unstitched (for men)." },
        { scenario: "What if I accidentally use scented products while in ihram?", solution: "If done by mistake with no ill intention, seek forgiveness from Allah. If done knowingly, fidyah (compensation) may be required." }
      ],
      muhasabah: "The ihram state teaches patience and self-control. Consider how the restrictions of ihram compare to developing taqwa (God-consciousness) in everyday life by refraining from prohibited actions."
    },
    {
      id: 204,
      title: "Tawaf",
      description: "Circling the Kaaba seven times",
      details: "Tawaf involves circling the Kaaba seven times in a counterclockwise direction, starting and ending at the Black Stone. During Tawaf, make supplications and recite prayers as you circle. The first three rounds are performed at a quick pace for men, while the remaining four are done at a normal walking pace.",
      audioDescription: "Begin tawaf from the Black Stone corner. Each circuit counts when you return to this starting point. Men perform 'ramal' (brisk walking) in the first three circuits. Supplicate freely in your language during this ritual.",
      videoLink: "https://www.youtube.com/watch?v=example8",
      editableBy: ['traveler', 'admin'] as UserRole[],
      commonMistakes: [
        "Insisting on touching the Black Stone in crowded conditions, causing discomfort to others",
        "Losing count of the number of circuits completed",
        "Performing tawaf without wudu (ablution)"
      ],
      whatIfs: [
        { scenario: "What if I lose count during tawaf?", solution: "Take the lower number to be safe. For example, if unsure whether you completed 3 or 4 circuits, assume 3 and continue until you complete 7." },
        { scenario: "What if I need to break my tawaf for an emergency?", solution: "If possible, resume from where you left off. If a long time passes or you break wudu, perform a new wudu and restart the circuit you were on." },
        { scenario: "What if it's extremely crowded and I can't get close to the Kaaba?", solution: "Perform tawaf in the outer rings. The validity extends to all areas of the Mataf (circumambulation area)." }
      ],
      muhasabah: "During tawaf, we orbit the Kaaba as celestial bodies orbit in the universe, submitting to divine law. Reflect on how your life should similarly revolve around remembrance of Allah and obedience to His commands."
    },
    {
      id: 205,
      title: "Saie",
      description: "Walking between Safa and Marwah",
      details: "Saie commemorates Hajar's search for water for her son Ismail. It involves walking seven times between the hills of Safa and Marwah, starting at Safa and ending at Marwah. There is a section where men traditionally jog lightly, marked by green lights.",
      audioDescription: "Begin at Safa by facing the Kaaba and reciting prayers. Walk to Marwah, then return to Safa. Each stretch counts as one lap. Men lightly jog in the marked section (between green lights). Complete seven laps, ending at Marwah.",
      videoLink: "https://www.youtube.com/watch?v=example9",
      editableBy: ['traveler', 'admin'] as UserRole[],
      commonMistakes: [
        "Starting Sa'i from Marwah instead of Safa",
        "Counting one round trip as one lap instead of two separate laps",
        "Not making du'a (supplication) during this meaningful ritual"
      ],
      whatIfs: [
        { scenario: "What if I'm physically unable to complete Sa'i on foot?", solution: "Wheelchairs are available, and you can be pushed by companions or hired helpers. Electric carts are also available." },
        { scenario: "What if I miscounted my laps during Sa'i?", solution: "As with tawaf, take the lower number if in doubt. If you realize after completing Umrah, consult with a scholar about whether a compensation is needed." }
      ],
      muhasabah: "Sa'i commemorates Hajar's trust in Allah during extreme difficulty. Reflect on your own trust in Allah during hardships. Are you as persistent in seeking solutions while relying on Allah's help?"
    },
    {
      id: 206,
      title: "Tahalul",
      description: "Exiting the state of ihram",
      details: "After completing Saie, men shave their heads or trim their hair, and women trim a small amount of hair. This act marks the end of Umrah and releases you from the restrictions of ihram.",
      audioDescription: "For men, shaving the head completely is more rewarding, though trimming is acceptable. Women cut a small piece of hair (about the length of a fingertip). With this, your Umrah is complete and ihram restrictions end.",
      videoLink: "https://www.youtube.com/watch?v=example10",
      editableBy: ['traveler', 'admin'] as UserRole[],
      commonMistakes: [
        "Men cutting only a few hairs instead of proper trimming or shaving",
        "Women cutting too much or too little hair",
        "Removing ihram before completing the tahalul ritual"
      ],
      costs: [
        { item: "Haircut/shaving at barber shops near Haram", amount: "10-30 SAR", note: "Higher prices during peak seasons" }
      ],
      whatIfs: [
        { scenario: "What if I want to perform another Umrah right after completing the first one?", solution: "You'll need to exit the Haram boundaries to a place called Tan'eem (also known as Masjid Aisha), enter ihram again, and then return to perform another Umrah." },
        { scenario: "What if I don't have scissors or access to a barber after Sa'i?", solution: "You must find a way to trim or shave your hair to complete the ritual. Barber shops are plentiful around the Haram area." }
      ],
      muhasabah: "Tahalul represents the completion of a spiritual journey. Consider what you're taking back with you spiritually from this experience, and how you can maintain that connection to the sacred in your everyday life."
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
      editableBy: ['traveler', 'admin'] as UserRole[],
      commonMistakes: [
        "Rushing through prayers without experiencing spiritual connection",
        "Taking selfies during prayer times or in inappropriate areas",
        "Not exploring different sections of the mosque at different times"
      ],
      whatIfs: [
        { scenario: "What if I get lost in the massive Haram complex?", solution: "Look for the Kaaba as a reference point. Security staff and volunteers can assist. Memorize the gate number closest to your hotel." },
        { scenario: "What if I want to pray in the Hijr Ismail?", solution: "Arrive early and be patient. These special areas fill quickly, especially during peak prayer times." }
      ],
      muhasabah: "Consider how being in this sacred space changes your focus and concentration in prayer. How can you maintain this level of khushu' (mindfulness) in prayers back home?"
    },
    {
      id: 302,
      title: "Jabal Thawr",
      description: "Mountain where the Prophet hid during migration",
      details: "This mountain contains the cave where Prophet Muhammad ﷺ and Abu Bakr hid for three days during their migration from Makkah to Madinah. Visiting requires a short journey from Makkah and climbing the mountain path.",
      audioDescription: "The cave in Jabal Thawr provided shelter to the Prophet and his companion. The difficult journey up the mountain offers historical perspective on this pivotal moment in Islamic history.",
      videoLink: "https://www.youtube.com/watch?v=example12",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[],
      costs: [
        { item: "Transportation to Jabal Thawr", amount: "50-100 SAR", note: "Per taxi or group tour" },
        { item: "Local guide (optional)", amount: "50-150 SAR", note: "Recommended for historical context" }
      ],
      whatIfs: [
        { scenario: "What if I have limited mobility and cannot climb?", solution: "Consider viewing from the base or experiencing it through videos. The historical significance can still be appreciated without physically climbing." },
        { scenario: "What if there's no organized tour available?", solution: "Hire a reliable taxi and agree on a waiting time. It's not recommended to visit without transportation arrangements for return." }
      ]
    },
    {
      id: 303,
      title: "Jabal Nur (Mount of Light)",
      description: "Mountain containing Cave Hira",
      details: "Jabal Nur houses Cave Hira, where Prophet Muhammad ﷺ received his first revelation. The climb is strenuous, taking about 1-2 hours depending on fitness level.",
      audioDescription: "Cave Hira is where the first verses of the Quran were revealed. The challenging ascent offers magnificent views of Makkah and a profound spiritual connection to the beginnings of Islam.",
      videoLink: "https://www.youtube.com/watch?v=example13",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[],
      commonMistakes: [
        "Attempting the climb without proper footwear or water",
        "Climbing during midday heat instead of early morning",
        "Rushing the experience instead of taking time for reflection"
      ],
      whatIfs: [
        { scenario: "What if weather conditions are poor for climbing?", solution: "Postpone your visit. Safety should be the priority, and poor weather can make the already challenging climb dangerous." },
        { scenario: "What if I start the climb but find it too difficult?", solution: "Listen to your body and don't push beyond your limits. Many people stop at various points along the way and still gain valuable experience." }
      ],
      muhasabah: "The Prophet ﷺ regularly retreated to this cave for contemplation before revelation began. Consider the importance of spiritual seclusion in your own life. How can you create spaces for deep reflection?"
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
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[],
      commonMistakes: [
        "Not booking transportation in advance, especially during busy seasons",
        "Forgetting to pack essentials in accessible hand luggage for the journey",
        "Missing the scheduled departure time due to last-minute shopping"
      ],
      costs: [
        { item: "Bus transportation", amount: "60-120 SAR", note: "Per person one way" },
        { item: "Haramain High Speed Rail", amount: "120-250 SAR", note: "Depends on class, significantly faster" },
        { item: "Private car/taxi", amount: "600-900 SAR", note: "Total cost for vehicle" }
      ],
      whatIfs: [
        { scenario: "What if I miss my scheduled transportation to Madinah?", solution: "Contact your travel agent immediately. Alternative transportation can usually be arranged, though possibly at additional cost." },
        { scenario: "What if I get motion sickness during long road journeys?", solution: "Take appropriate medication before departure, choose a front seat if possible, and ensure you're well-rested and hydrated." }
      ],
      muhasabah: "The journey between the two holy cities follows the path of hijrah (migration). Reflect on the sacrifices made by early Muslims and consider what spiritual 'migrations' you might need to make in your own life."
    },
    {
      id: 402,
      title: "Accommodation in Madinah",
      description: "Lodging near Masjid Nabawi",
      details: "Like in Makkah, accommodations closer to the main mosque (Masjid Nabawi) are more convenient but pricier. The central area around the mosque has hotels in all price ranges.",
      audioDescription: "Madinah generally offers more affordable accommodation compared to Makkah. Consider the Markaziyah area for proximity to the mosque while maintaining reasonable prices.",
      editableBy: ['traveler', 'agent', 'admin'] as UserRole[],
      costs: [
        { item: "Budget accommodation", amount: "150-300 SAR", note: "Per night, further from Masjid Nabawi" },
        { item: "Mid-range hotels", amount: "300-600 SAR", note: "Per night, reasonable walking distance" },
        { item: "Luxury hotels with Haram view", amount: "800-2000+ SAR", note: "Per night, closest to the mosque" }
      ],
      whatIfs: [
        { scenario: "What if my hotel is overbooked despite confirmation?", solution: "This happens occasionally during peak seasons. Your travel agent should arrange alternative accommodation of similar standard. If traveling independently, have booking confirmation ready and insist on assistance." },
        { scenario: "What if I want to extend my stay in Madinah?", solution: "Check with your hotel about room availability. During non-peak times, extensions are usually possible, though you might need to change rooms." }
      ]
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
      editableBy: ['traveler', 'admin']
