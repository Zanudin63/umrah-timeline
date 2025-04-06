import React, { useState, useRef, useEffect } from "react";
import JourneySection, { JourneyItem } from "@/components/JourneySection";
import { UserRole } from "@/components/EditButtons";
import { MapPin, Heart, Book, User, Clipboard, Calendar, Plane, Home, Landmark } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import JourneySidebar from "@/components/JourneySidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [currentRole] = useState<UserRole>("pilgrim");
  const [activeSectionId, setActiveSectionId] = useState<string | null>("preparation");
  const [activeItemId, setActiveItemId] = useState<number | null>(1);
  const [showSidebar, setShowSidebar] = useState(false);
  const sectionRefs = useRef<Record<string, Record<number, HTMLDivElement>>>({});
  const isMobile = useIsMobile();

  const preparationItems: JourneyItem[] = [
    {
      id: 1,
      title: "Financial Readiness",
      description: "Ensuring financial preparation for Umrah journey",
      details: "Save enough money for travel expenses, accommodation, food, and other costs. Consider exchange rates and have multiple payment methods.",
      checklistItems: [
        "Calculate total budget required",
        "Prepare emergency funds (at least 20% extra)",
        "Inform bank of international travel",
        "Arrange different payment methods (cash, cards)",
        "Research exchange rates",
        "Prepare small denominations for tips and small purchases"
      ],
      editableBy: ["guide", "admin"],
      commonMistakes: [
        "Underestimating total costs",
        "Not informing bank about travel plans",
        "Carrying only one type of payment method",
        "Changing money at airport (poor rates)",
        "Not budgeting for gifts and souvenirs"
      ],
      costs: [
        {
          item: "Basic Package",
          amount: "$2,500 - $5,000",
          note: "Depending on season and accommodation quality"
        },
        {
          item: "Spending Money",
          amount: "$500 - $1,000",
          note: "For meals not included, souvenirs, and extras"
        },
        {
          item: "Emergency Fund",
          amount: "$500 - $1,000",
          note: "Kept separate from regular funds"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I lose my money/cards?",
          solution: "Report lost cards immediately. Use emergency funds kept separately. Contact your Umrah group leader or embassy if needed."
        },
        {
          scenario: "What if I run short of funds?",
          solution: "Arrange for emergency wire transfers. Contact family members for assistance through services like Western Union."
        }
      ],
      muhasabah: "Am I performing Umrah with money earned through halal means? Have I settled all debts or made arrangements for them? Am I spending excessively or sufficiently for my journey to Allah's house?"
    },
    {
      id: 2,
      title: "Health Preparation",
      description: "Preparing physically and mentally for the journey",
      details: "Ensure you are physically fit for the demands of Umrah. Get necessary vaccinations, prepare a health kit, get medical insurance, and bring sufficient prescribed medications.",
      audioDescription: "Umrah can be physically demanding. Get check-ups, vaccinations, and pack medications.",
      checklistItems: [
        "Schedule pre-travel medical check-up",
        "Get meningitis vaccine (mandatory) and others as recommended",
        "Prepare first aid and medical kit",
        "Pack sufficient prescribed medications with prescriptions",
        "Obtain medical insurance valid in Saudi Arabia",
        "Start physical conditioning (walking practice)",
        "Practice hydration habits"
      ],
      editableBy: ["doctor", "guide", "admin"],
      commonMistakes: [
        "Neglecting pre-travel medical check-ups",
        "Not bringing enough prescription medication",
        "Failing to pack essential medical documents",
        "Not building stamina before travel",
        "Ignoring hydration practices before the journey"
      ],
      costs: [
        {
          item: "Vaccinations",
          amount: "$100 - $300",
          note: "Meningitis vaccination mandatory, others recommended"
        },
        {
          item: "Medical Insurance",
          amount: "$50 - $150",
          note: "For duration of travel"
        },
        {
          item: "First Aid Kit",
          amount: "$20 - $50",
          note: "Include medications for common issues"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I fall sick during Umrah?",
          solution: "Saudi hospitals provide excellent care. Contact your group leader, use medical insurance, and visit nearby medical facilities. Many hotels have on-call doctors."
        },
        {
          scenario: "What if I run out of prescription medication?",
          solution: "Visit a pharmacy with your prescription. Major medications are available in Saudi Arabia. Consult with a local doctor if needed."
        }
      ],
      muhasabah: "Have I given my body its right to health and preparation? Am I taking steps to ensure I can worship with full energy and focus? Am I balancing between reliance on Allah and taking necessary precautions?"
    },
    {
      id: 3,
      title: "Documentation and Legal Requirements",
      description: "Ensuring all required documents are prepared",
      details: "Prepare passport with at least 6 months validity, Umrah visa, required photographs, return ticket confirmation, and accommodation details. Make copies of all documents.",
      videoLink: "https://www.youtube.com/watch?v=example",
      checklistItems: [
        "Check passport validity (minimum 6 months from return date)",
        "Apply for Umrah visa with required supporting documents",
        "Prepare passport-sized photographs (white background)",
        "Confirm and print return flight tickets",
        "Print accommodation details and booking confirmations",
        "Make physical and digital copies of all important documents",
        "Prepare required medical certificates or vaccination records"
      ],
      editableBy: ["guide", "admin"],
      commonMistakes: [
        "Leaving passport renewal too late",
        "Providing incorrect information on visa applications",
        "Not having sufficient passport validity",
        "Not having printed copies of important documents",
        "Not checking visa requirements thoroughly"
      ],
      costs: [
        {
          item: "Visa Fee",
          amount: "$100 - $200",
          note: "Varies by country and season"
        },
        {
          item: "Passport Renewal (if needed)",
          amount: "$100 - $200",
          note: "Varies by country"
        },
        {
          item: "Photographs",
          amount: "$10 - $20",
          note: "For visa and other documentation"
        }
      ],
      whatIfs: [
        {
          scenario: "What if my visa application is delayed?",
          solution: "Apply well in advance. Contact your travel agent or Saudi embassy. Consider expedited processing if available."
        },
        {
          scenario: "What if my passport is lost or damaged before travel?",
          solution: "Contact your country's passport office immediately for emergency replacement. Inform your travel agent about the situation."
        }
      ],
      muhasabah: "Have I been honest in all my documentation? Am I traveling with pure intentions? Have I sought help from others when needed for this process?"
    },
    {
      id: 4,
      title: "Cleansing of Tauhid and Akhlak",
      description: "Spiritual purification before the sacred journey",
      details: "Purify your beliefs and character before visiting Allah's house by addressing Khurafat, Sihir, Rumours and Publicity Seeking behaviors.",
      checklistItems: [
        "Examine beliefs for any shirk (polytheistic practices)",
        "Avoid superstitious practices and beliefs",
        "Seek forgiveness from those you've wronged",
        "Abandon gossip and rumor-mongering",
        "Purify intentions from seeking fame or recognition",
        "Learn about prohibited acts during Umrah"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Continuing superstitious practices",
        "Seeking barakah (blessings) from objects or places in impermissible ways",
        "Performing rituals not prescribed in Islam",
        "Documenting worship for social media fame",
        "Spreading unverified information about rituals"
      ],
      costs: [
        {
          item: "Islamic Books on Tauhid",
          amount: "$20 - $50",
          note: "For learning correct beliefs"
        },
        {
          item: "Sessions with Knowledgeable Scholar",
          amount: "$0 - $100",
          note: "Many mosques offer free pre-Umrah classes"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I'm unsure if a practice is Khurafat (superstition)?",
          solution: "Consult knowledgeable scholars or reference authentic Islamic texts. When in doubt, avoid the practice."
        },
        {
          scenario: "What if I witness others engaged in innovative practices?",
          solution: "Focus on your own worship. If appropriate, gently advise with wisdom and good manners, or inform authorities if the practice disturbs others."
        }
      ],
      muhasabah: "Have I purified my beliefs from all forms of shirk (polytheism)? Am I seeking Allah alone in my worship? Am I going to Umrah for Allah's pleasure or for recognition from others? Have I abandoned all superstitious practices?"
    },
    {
      id: 5,
      title: "Seek Essential Knowledge",
      description: "Learning required Islamic knowledge before Umrah",
      details: "Acquire necessary knowledge of Fardu Ain, Fiqh Wanita and Hukum Hakam Haji and Umrah to ensure your worship is performed correctly.",
      checklistItems: [
        "Learn basics of Islamic creed (aqidah)",
        "Study pillars of Islam in detail",
        "Women: Learn specific fiqh rulings for women",
        "Learn rules of tahara (purification) and salah (prayer)",
        "Study Umrah rituals and their correct performance",
        "Learn permissible and prohibited acts during Umrah",
        "Study the virtues and etiquette of the Two Holy Mosques"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Neglecting to learn the correct method of performing Umrah",
        "Ignoring specific rulings for women during menstruation",
        "Misunderstanding rules of ritual purity",
        "Not knowing the supplications for different rituals",
        "Confusing optional and obligatory acts"
      ],
      costs: [
        {
          item: "Books on Umrah Rituals",
          amount: "$15 - $40",
          note: "Essential guides in your language"
        },
        {
          item: "Pre-Umrah Courses",
          amount: "$0 - $100",
          note: "Many mosques offer free preparation classes"
        },
        {
          item: "Mobile Apps with Guidance",
          amount: "$0 - $10",
          note: "Digital resources with step-by-step instructions"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I realize I performed a ritual incorrectly?",
          solution: "Consult a scholar at the Haram, if possible. Some mistakes require compensation (dam), others can be rectified or forgiven. Don't stress excessively over honest mistakes."
        },
        {
          scenario: "What if I'm unable to complete a ritual due to health issues?",
          solution: "Islam provides concessions for those with valid excuses. Consult scholars about alternatives or compensations available in your situation."
        }
      ],
      muhasabah: "Have I put in sufficient effort to learn the rituals properly? Am I taking this worship seriously by preparing with knowledge? Am I balancing between fear of mistakes and trust in Allah's mercy? Have I asked questions about aspects I don't understand?"
    }
  ];

  const travelArrangementsItems: JourneyItem[] = [
    {
      id: 6,
      title: "Booking Flights",
      description: "Arranging flights for your Umrah journey",
      details: "Book flights well in advance to secure better rates. Consider direct flights for convenience. Check baggage allowance and transit visa requirements.",
      checklistItems: [
        "Compare flight prices from different airlines",
        "Check for direct flights vs connecting flights",
        "Confirm baggage allowance and restrictions",
        "Check transit visa requirements (if any)",
        "Book flights well in advance for better rates",
        "Consider travel insurance for flight delays or cancellations"
      ],
      editableBy: ["guide", "admin"],
      commonMistakes: [
        "Booking flights too late (higher prices)",
        "Not checking baggage allowance",
        "Ignoring transit visa requirements",
        "Not considering travel insurance",
        "Choosing very long layovers"
      ],
      costs: [
        {
          item: "Round Trip Flight",
          amount: "$800 - $2,000",
          note: "Varies by origin, season, and airline"
        },
        {
          item: "Travel Insurance",
          amount: "$50 - $150",
          note: "For flight delays, cancellations, and medical emergencies"
        }
      ],
      whatIfs: [
        {
          scenario: "What if my flight is delayed or cancelled?",
          solution: "Contact the airline immediately. Check your travel insurance policy. Stay updated on new flight schedules."
        },
        {
          scenario: "What if I miss my connecting flight?",
          solution: "Contact the airline to rebook. Check if your travel insurance covers missed connections."
        }
      ],
      muhasabah: "Am I being mindful of the environmental impact of my travel? Am I grateful for the ability to travel to Allah's house? Am I making this journey with the intention of pleasing Allah?"
    },
    {
      id: 7,
      title: "Accommodation",
      description: "Selecting suitable accommodation in Makkah and Madinah",
      details: "Book accommodation close to the Haramain for convenience. Consider your budget and required amenities. Read reviews before booking.",
      checklistItems: [
        "Research hotels near Haramain in Makkah and Madinah",
        "Compare prices and amenities",
        "Read reviews from previous guests",
        "Check distance from hotel to Haram",
        "Confirm booking details and cancellation policy",
        "Consider hotels offering Umrah packages"
      ],
      editableBy: ["guide", "admin"],
      commonMistakes: [
        "Booking accommodation far from Haramain",
        "Not reading reviews before booking",
        "Ignoring cancellation policies",
        "Not confirming booking details",
        "Underestimating accommodation costs"
      ],
      costs: [
        {
          item: "Hotel in Makkah",
          amount: "$100 - $500 per night",
          note: "Varies by proximity to Haram and hotel quality"
        },
        {
          item: "Hotel in Madinah",
          amount: "$80 - $400 per night",
          note: "Varies by proximity to Masjid Nabawi and hotel quality"
        }
      ],
      whatIfs: [
        {
          scenario: "What if my hotel booking is not confirmed upon arrival?",
          solution: "Contact the hotel management immediately. Keep booking confirmation handy. Contact your travel agent if needed."
        },
        {
          scenario: "What if I am not satisfied with my accommodation?",
          solution: "Discuss your concerns with hotel management. Request a room change if possible. Contact your travel agent if needed."
        }
      ],
      muhasabah: "Am I being grateful for the blessings of comfortable accommodation? Am I treating hotel staff with respect and kindness? Am I avoiding extravagance in my choice of accommodation?"
    },
    {
      id: 8,
      title: "Transportation within Saudi Arabia",
      description: "Arranging transportation between cities and holy sites",
      details: "Consider options like taxis, buses, or private cars. The Haramain High-Speed Railway is a convenient option between Makkah and Madinah.",
      checklistItems: [
        "Research transportation options between cities",
        "Consider Haramain High-Speed Railway",
        "Negotiate taxi fares before starting journey",
        "Use reputable transportation services",
        "Keep contact details of transportation providers",
        "Plan for transportation to and from airport"
      ],
      editableBy: ["guide", "admin"],
      commonMistakes: [
        "Using unlicensed taxi services",
        "Not negotiating taxi fares",
        "Not planning transportation in advance",
        "Not considering Haramain High-Speed Railway",
        "Overpaying for transportation services"
      ],
      costs: [
        {
          item: "Taxi Fares",
          amount: "$10 - $50 per ride",
          note: "Varies by distance and negotiation"
        },
        {
          item: "Haramain High-Speed Railway",
          amount: "$50 - $150 per trip",
          note: "Between Makkah and Madinah"
        },
        {
          item: "Bus Tickets",
          amount: "$5 - $20 per trip",
          note: "For travel between cities"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I get lost while using public transportation?",
          solution: "Ask for help from locals. Use GPS on your phone. Contact your group leader if needed."
        },
        {
          scenario: "What if I miss my train or bus?",
          solution: "Contact the transportation provider to rebook. Check if your travel insurance covers missed transportation."
        }
      ],
      muhasabah: "Am I being patient and courteous while using transportation services? Am I avoiding wasteful spending on transportation? Am I grateful for the ease of travel provided by modern transportation?"
    }
  ];

  const duringUmrahItems: JourneyItem[] = [
    {
      id: 9,
      title: "Performing Tawaf",
      description: "Performing the ritual of circling the Kaaba",
      details: "Make sure to be in a state of purity. Start at the Black Stone and circle the Kaaba seven times, reciting prayers.",
      audioDescription: "Tawaf involves circling the Kaaba seven times, starting at the Black Stone.",
      checklistItems: [
        "Ensure you are in a state of purity (wudu)",
        "Start Tawaf at the Black Stone (Hajar al-Aswad)",
        "Circle the Kaaba seven times counterclockwise",
        "Recite prayers and supplications during Tawaf",
        "Avoid pushing or causing harm to others",
        "Follow the guidance of your group leader"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not being in a state of purity",
        "Starting Tawaf at the wrong point",
        "Pushing or causing harm to others",
        "Talking excessively during Tawaf",
        "Rushing through the ritual without reflection"
      ],
      whatIfs: [
        {
          scenario: "What if I lose my wudu during Tawaf?",
          solution: "Stop Tawaf, perform wudu again, and resume from the beginning."
        },
        {
          scenario: "What if I am unable to complete all seven circles?",
          solution: "Complete as many circles as possible. Make up for any missed circles later if able."
        }
      ],
      muhasabah: "Am I performing Tawaf with humility and sincerity? Am I focused on Allah during this ritual? Am I avoiding distractions and worldly thoughts?"
    },
    {
      id: 10,
      title: "Performing Sa'i",
      description: "Walking between the hills of Safa and Marwa",
      details: "Walk seven times between Safa and Marwa, commemorating Hagar's search for water for her son Ishmael.",
      audioDescription: "Sa'i involves walking seven times between Safa and Marwa.",
      checklistItems: [
        "Start Sa'i at Safa",
        "Walk to Marwa, then back to Safa, repeating seven times",
        "Recite prayers and supplications during Sa'i",
        "Walk at a moderate pace",
        "Avoid causing harm to others",
        "Follow the green markers indicating the jogging section"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not starting Sa'i at Safa",
        "Walking too fast or too slow",
        "Pushing or causing harm to others",
        "Talking excessively during Sa'i",
        "Not understanding the significance of the ritual"
      ],
      whatIfs: [
        {
          scenario: "What if I am unable to walk the entire distance?",
          solution: "Use a wheelchair or ask for assistance. Complete as much of the distance as possible."
        },
        {
          scenario: "What if I forget which hill I am supposed to be on?",
          solution: "Follow the crowd and the markers. Ask for help from others if needed."
        }
      ],
      muhasabah: "Am I performing Sa'i with hope and trust in Allah? Am I remembering the struggles of Hagar during this ritual? Am I seeking Allah's mercy and provision?"
    },
    {
      id: 11,
      title: "Shaving or Trimming Hair",
      description: "Completing Umrah by shaving or trimming hair",
      details: "Men should shave their heads or trim their hair. Women should trim a small portion of their hair.",
      audioDescription: "Umrah is completed by shaving the head for men or trimming the hair for women.",
      checklistItems: [
        "Men: Shave head completely or trim hair evenly",
        "Women: Trim a small portion of hair (about an inch)",
        "Ensure the act is performed after completing Sa'i",
        "Use clean and hygienic tools",
        "Dispose of hair properly",
        "Make intention for completing Umrah"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not performing the act after Sa'i",
        "Using unhygienic tools",
        "Not disposing of hair properly",
        "Not making the intention for completing Umrah",
        "Men only trimming a few strands of hair"
      ],
      whatIfs: [
        {
          scenario: "What if I forget to shave or trim my hair?",
          solution: "Perform the act as soon as you remember. There may be a penalty for delaying the act."
        },
        {
          scenario: "What if I am unable to shave my head due to a medical condition?",
          solution: "Trim your hair as much as possible. Consult with a scholar for guidance."
        }
      ],
      muhasabah: "Am I submitting to Allah's command in this act? Am I letting go of worldly attachments? Am I grateful for the completion of Umrah?"
    }
  ];

  const ziarahItems: JourneyItem[] = [
    {
      id: 15,
      title: "Visits to Historical Mosques",
      description: "Visiting sacred mosques of historical significance",
      details: "Visit historical mosques like Quba Mosque, the first mosque in Islam, and Masjid Qiblatain, where the qibla direction was changed.",
      checklistItems: [
        "Visit Quba Mosque and pray two rakahs",
        "Visit Masjid Qiblatain and learn its history",
        "Visit the Seven Mosques (Sab'ah Masajid)",
        "Learn about the historical significance of each site",
        "Perform prayers at each mosque if possible",
        "Take respectful photos for personal remembrance"
      ],
      editableBy: ["guide", "imam", "admin"],
      commonMistakes: [
        "Rushing through visits without understanding significance",
        "Missing the opportunity to pray at Quba Mosque",
        "Visiting only popular sites and missing other significant locations",
        "Taking disrespectful photos or disturbing worshippers",
        "Not planning visits according to prayer times"
      ],
      whatIfs: [
        {
          scenario: "What if the mosques are closed when I visit?",
          solution: "Check opening times beforehand. Most historical mosques follow prayer times. Plan your visit accordingly."
        },
        {
          scenario: "What if it's too crowded during my visit?",
          solution: "Visit during off-peak hours early morning or late evening. Weekdays are generally less crowded than weekends."
        }
      ],
      muhasabah: "Am I visiting these sacred sites with proper reverence and intention? Am I taking the time to understand their historical significance in Islam? How can I apply the lessons from these places in my daily life?"
    },
    {
      id: 16,
      title: "Visit to Madinah",
      description: "Visiting the Prophet's Mosque and significant sites in Madinah",
      details: "Visit Masjid Nabawi, the Prophet's Mosque, and pay respect at the Rawdah and the Prophet's (PBUH) grave. Visit Jannat Al-Baqi cemetery and Mount Uhud.",
      checklistItems: [
        "Visit Masjid Nabawi and offer prayers",
        "Visit Rawdah (the Garden of Paradise)",
        "Send peace and blessings upon the Prophet (PBUH) at his grave",
        "Visit graves of companions at Jannat Al-Baqi",
        "Visit Mount Uhud and learn about the Battle of Uhud",
        "Visit Quba Mosque on Saturday (if possible)"
      ],
      editableBy: ["guide", "imam", "admin"],
      commonMistakes: [
        "Pushing or crowding near the Prophet's (PBUH) grave",
        "Taking photos in restricted areas",
        "Touching or kissing walls, grilles, or structures",
        "Making loud supplications disturbing others",
        "Insisting on visiting Rawdah during peak times"
      ],
      whatIfs: [
        {
          scenario: "What if I cannot enter Rawdah due to crowds?",
          solution: "Try during less busy times such as late night or early morning. Women have special times allocated. Remember, praying anywhere in Masjid Nabawi carries great reward."
        },
        {
          scenario: "What if I become separated from my group?",
          solution: "Establish meeting points before entering crowded areas. Carry your hotel information and group leader's contact. Stay calm and ask security for assistance."
        }
      ],
      muhasabah: "Am I following the Prophet's (PBUH) example in my behavior while visiting his city? Am I maintaining proper adab (etiquette) during my visit? How can I carry the spiritual connection I feel here back to my daily life?"
    },
    {
      id: 17,
      title: "Visit to Battlefield Sites",
      description: "Visiting significant battle sites in Islamic history",
      details: "Visit sites of important battles in Islamic history, such as Badr, Uhud, and Khandaq, to learn about their historical significance and the lessons they teach.",
      checklistItems: [
        "Visit Mount Uhud and learn about the Battle of Uhud",
        "Visit the site of Battle of Badr (if accessible)",
        "Visit the site of Battle of Khandaq (Trench)",
        "Learn about the strategies employed during these battles",
        "Reflect on the sacrifices made by the companions",
        "Understand how these battles shaped Islamic history"
      ],
      editableBy: ["guide", "imam", "admin"],
      commonMistakes: [
        "Treating battlefield sites as mere tourist attractions",
        "Not learning about the historical context before visiting",
        "Taking inappropriate photos or selfies at sacred sites",
        "Collecting stones or soil from the sites as souvenirs",
        "Not reflecting on the spiritual lessons from these events"
      ],
      whatIfs: [
        {
          scenario: "What if some battlefield sites are restricted or inaccessible?",
          solution: "Some sites may have restricted access or be difficult to reach. Join organized tours by reputable agencies that have necessary permissions."
        },
        {
          scenario: "What if I want to learn more about the battles than what guides provide?",
          solution: "Read books about the Seerah and Islamic history before your trip. Many educational apps offer detailed information about these sites with historical context."
        }
      ],
      muhasabah: "What lessons can I draw from the struggles and sacrifices of early Muslims? How can I apply the strategies of patience, perseverance, and trust in Allah that were demonstrated in these battles to my own challenges? Am I honoring the memory of those who sacrificed for Islam through my own actions?"
    }
  ];

  const reflectionAndImprovementItems: JourneyItem[] = [
    {
      id: 12,
      title: "Reflecting on the Journey",
      description: "Taking time to reflect on the Umrah experience",
      details: "Think about the spiritual lessons learned, the challenges faced, and the blessings received. Plan for personal growth and positive changes in your life.",
      checklistItems: [
        "Set aside time for quiet reflection",
        "Think about the spiritual lessons learned",
        "Identify challenges faced during the journey",
        "Acknowledge the blessings received",
        "Plan for personal growth and positive changes",
        "Write down reflections in a journal"
      ],
      editableBy: ["guide", "admin"],
      muhasabah: "What have I learned about myself and my relationship with Allah? How can I apply these lessons in my daily life? What changes do I need to make to become a better Muslim?"
    },
    {
      id: 13,
      title: "Making Positive Changes",
      description: "Implementing positive changes in your life after Umrah",
      details: "Strive to improve your character, increase acts of worship, strengthen family ties, and contribute positively to your community.",
      checklistItems: [
        "Identify areas for improvement in your character",
        "Increase acts of worship and devotion",
        "Strengthen family ties and relationships",
        "Contribute positively to your community",
        "Set realistic and achievable goals",
        "Seek support from friends and family"
      ],
      editableBy: ["guide", "admin"],
      muhasabah: "Am I striving to live a life that is pleasing to Allah? Am I making a positive impact on the world around me? Am I grateful for the opportunity to have performed Umrah?"
    },
    {
      id: 14,
      title: "Sharing Experiences and Knowledge",
      description: "Sharing your Umrah experiences and knowledge with others",
      details: "Share your experiences with family, friends, and community members. Offer guidance and support to those planning to perform Umrah.",
      checklistItems: [
        "Share your experiences with family and friends",
        "Offer guidance and support to others",
        "Write articles or blog posts about your journey",
        "Give presentations at your local mosque or community center",
        "Answer questions and provide advice",
        "Encourage others to perform Umrah"
      ],
      editableBy: ["guide", "admin"],
      muhasabah: "Am I using my experiences to benefit others? Am I being humble and sincere in sharing my knowledge? Am I encouraging others to seek closeness to Allah?"
    }
  ];

  const registerSectionRef = (sectionId: string, itemId: number, ref: HTMLDivElement) => {
    if (!sectionRefs.current[sectionId]) {
      sectionRefs.current[sectionId] = {};
    }
    sectionRefs.current[sectionId][itemId] = ref;
  };

  const handleNavigate = (sectionId: string, itemId: number) => {
    setActiveSectionId(sectionId);
    setActiveItemId(itemId);
    
    if (sectionRefs.current[sectionId]?.[itemId]) {
      sectionRefs.current[sectionId][itemId].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  const sidebarSections = [
    {
      id: "preparation",
      title: "Preparation",
      icon: <Clipboard className="h-5 w-5" />,
      color: "bg-purple-600",
      lightColor: "bg-purple-100"
    },
    {
      id: "travel-arrangements",
      title: "Travel & Logistics",
      icon: <Plane className="h-5 w-5" />,
      color: "bg-blue-600",
      lightColor: "bg-blue-100"
    },
    {
      id: "during-umrah",
      title: "Manasik",
      icon: <Heart className="h-5 w-5" />,
      color: "bg-red-600",
      lightColor: "bg-red-100"
    },
    {
      id: "ziarah",
      title: "Ziarah",
      icon: <Landmark className="h-5 w-5" />,
      color: "bg-amber-600",
      lightColor: "bg-amber-100"
    },
    {
      id: "reflection",
      title: "Reflection",
      icon: <Book className="h-5 w-5" />,
      color: "bg-green-600",
      lightColor: "bg-green-100"
    }
  ];

  const indexSections = [
    {
      id: "preparation",
      title: "Preparation",
      icon: <Clipboard className="h-3 w-3 text-white" />,
      color: "bg-purple-500",
      items: preparationItems.map(item => ({ id: item.id, title: item.title }))
    },
    {
      id: "travel-arrangements",
      title: "Travel Arrangements",
      icon: <Plane className="h-3 w-3 text-white" />,
      color: "bg-blue-500",
      items: travelArrangementsItems.map(item => ({ id: item.id, title: item.title }))
    },
    {
      id: "during-umrah",
      title: "During Umrah",
      icon: <Heart className="h-3 w-3 text-white" />,
      color: "bg-red-500",
      items: duringUmrahItems.map(item => ({ id: item.id, title: item.title }))
    },
    {
      id: "ziarah",
      title: "Ziarah",
      icon: <Landmark className="h-3 w-3 text-white" />,
      color: "bg-amber-500",
      items: ziarahItems.map(item => ({ id: item.id, title: item.title }))
    },
    {
      id: "reflection",
      title: "Reflection",
      icon: <Book className="h-3 w-3 text-white" />,
      color: "bg-green-500",
      items: reflectionAndImprovementItems.map(item => ({ id: item.id, title: item.title }))
    }
  ];

  const getSectionClassName = (sectionId: string) => {
    const sectionConfig = sidebarSections.find(section => section.id === sectionId);
    return sectionConfig ? sectionConfig.lightColor : "";
  };

  const getSectionLabelClass = (sectionId: string) => {
    return `phase-label ${sectionId}`;
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isMobile && showSidebar) {
        const sidebarElement = document.getElementById('journey-sidebar');
        if (sidebarElement && !sidebarElement.contains(e.target as Node)) {
          setShowSidebar(false);
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobile, showSidebar]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl md:text-3xl font-bold">Umrah Journey Map</h1>
          <div className="flex items-center gap-2">
            {isMobile && (
              <button 
                onClick={toggleSidebar} 
                className="p-2 rounded-md bg-primary/10 text-primary"
              >
                <span className="sr-only">Toggle Sidebar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>
        
        <div aria-hidden="true">
          {sidebarSections.map((section) => (
            <div 
              key={section.id}
              className={getSectionLabelClass(section.id)}
              onClick={() => {
                setActiveSectionId(section.id);
                const firstItemId = section.id === "preparation" ? 1 :
                                  section.id === "travel-arrangements" ? 6 :
                                  section.id === "during-umrah" ? 9 :
                                  section.id === "ziarah" ? 15 : 12;
                handleNavigate(section.id, firstItemId);
              }}
            >
              {section.title}
            </div>
          ))}
        </div>
        
        <div className="flex relative">
          {isMobile && showSidebar && (
            <div className="fixed inset-0 bg-black/50 z-20" onClick={() => setShowSidebar(false)}></div>
          )}
          
          <div 
            id="journey-sidebar"
            className={`${isMobile ? 'fixed z-30 left-0 top-0 bottom-0 bg-background' : 'hidden md:block'} w-64 border-r`}
            style={{ display: isMobile ? (showSidebar ? 'block' : 'none') : '' }}
          >
            <JourneySidebar 
              sections={sidebarSections}
              activeSectionId={activeSectionId}
              onSectionSelect={(sectionId) => {
                setActiveSectionId(sectionId);
                const firstItemId = sectionId === "preparation" ? 1 :
                                    sectionId === "travel-arrangements" ? 6 :
                                    sectionId === "during-umrah" ? 9 :
                                    sectionId === "ziarah" ? 15 : 12;
                handleNavigate(sectionId, firstItemId);
              }}
            />
          </div>
          
          <div className="flex-1 p-2 md:p-6 lg:pr-14">
            <div className="space-y-8 mx-auto">
              <div 
                id="preparation" 
                className={`p-4 rounded-lg ${getSectionClassName("preparation")}`}
              >
                <JourneySection
                  id="preparation"
                  title="Preparation"
                  description="Spiritual and practical preparation before departure"
                  items={preparationItems}
                  icon={<Clipboard />}
                  currentRole={currentRole}
                  initiallyOpen={activeSectionId === "preparation"}
                  animationDelay={0}
                  color="purple"
                  onItemVisibilityChange={(itemId, isVisible) => {
                    if (isVisible) {
                      setActiveSectionId("preparation");
                      setActiveItemId(itemId);
                    }
                  }}
                  registerRef={registerSectionRef}
                />
              </div>
              
              <div 
                id="travel-arrangements" 
                className={`p-4 rounded-lg ${getSectionClassName("travel-arrangements")}`}
              >
                <JourneySection
                  id="travel-arrangements"
                  title="Travel Arrangements"
                  description="Booking flights, accommodation, and transportation"
                  items={travelArrangementsItems}
                  icon={<Plane />}
                  currentRole={currentRole}
                  initiallyOpen={activeSectionId === "travel-arrangements"}
                  animationDelay={1}
                  color="blue"
                  onItemVisibilityChange={(itemId, isVisible) => {
                    if (isVisible) {
                      setActiveSectionId("travel-arrangements");
                      setActiveItemId(itemId);
                    }
                  }}
                  registerRef={registerSectionRef}
                />
              </div>
              
              <div 
                id="during-umrah" 
                className={`p-4 rounded-lg ${getSectionClassName("during-umrah")}`}
              >
                <JourneySection
                  id="during-umrah"
                  title="During Umrah"
                  description="Performing the rituals of Umrah in Makkah"
                  items={duringUmrahItems}
                  icon={<Heart />}
                  currentRole={currentRole}
                  initiallyOpen={activeSectionId === "during-umrah"}
                  animationDelay={2}
                  color="red"
                  onItemVisibilityChange={(itemId, isVisible) => {
                    if (isVisible) {
                      setActiveSectionId("during-umrah");
                      setActiveItemId(itemId);
                    }
                  }}
                  registerRef={registerSectionRef}
                />
              </div>
              
              <div 
                id="ziarah" 
                className={`p-4 rounded-lg ${getSectionClassName("ziarah")}`}
              >
                <JourneySection
                  id="ziarah"
                  title="Ziarah"
                  description="Visiting historical and significant sites in Makkah and Madinah"
                  items={ziarahItems}
                  icon={<Landmark />}
                  currentRole={currentRole}
                  initiallyOpen={activeSectionId === "ziarah"}
                  animationDelay={2.5}
                  color="amber"
                  onItemVisibilityChange={(itemId, isVisible) => {
                    if (isVisible) {
                      setActiveSectionId("ziarah");
                      setActiveItemId(itemId);
                    }
                  }}
                  registerRef={registerSectionRef}
                />
              </div>
              
              <div 
                id="reflection" 
                className={`p-4 rounded-lg ${getSectionClassName("reflection")}`}
              >
                <JourneySection
                  id="reflection"
                  title="Reflection and Improvement"
                  description="Reflecting on the journey and making positive changes"
                  items={reflectionAndImprovementItems}
                  icon={<Book />}
                  currentRole={currentRole}
                  initiallyOpen={activeSectionId === "reflection"}
                  animationDelay={3}
                  color="green"
                  onItemVisibilityChange={(itemId, isVisible) => {
                    if (isVisible) {
                      setActiveSectionId("reflection");
                      setActiveItemId(itemId);
                    }
                  }}
                  registerRef={registerSectionRef}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
