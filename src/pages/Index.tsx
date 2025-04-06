import React, { useState, useRef, useEffect } from "react";
import JourneySection, { JourneyItem } from "@/components/JourneySection";
import { UserRole } from "@/components/EditButtons";
import { Luggage, Book, MapPin, Plane, PanelsTopLeft } from "lucide-react";
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
      id: 18,
      title: "Attend Umrah Courses",
      description: "Participating in structured courses to learn Umrah rituals",
      details: "Attend organized courses or workshops that provide comprehensive education about Umrah rituals, requirements, and etiquette from qualified scholars or experienced guides. The Tabung Haji Kursus Asas Haji (KAH) is an excellent resource for Malaysian pilgrims, providing detailed guidance and preparation information.",
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/TH-NOTA%20KAH%201446H%20_%20M3.pdf",
      checklistItems: [
        "Research local mosques offering Umrah courses",
        "Register for a structured Umrah preparation program (like Tabung Haji KAH for Malaysians)",
        "Attend all sessions consistently",
        "Take detailed notes during classes",
        "Ask questions to clarify doubts",
        "Practice ritual movements (like tawaf and sa'i procedures)",
        "Participate in group discussions and learning activities",
        "Review course materials thoroughly before travel",
        "Download and study official guidance materials (e.g., Tabung Haji Nota KAH)"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Skipping sessions or arriving late to classes",
        "Not taking notes during important explanations",
        "Feeling shy to ask questions about unclear topics",
        "Not practicing the physical aspects of rituals",
        "Relying only on online information without expert guidance",
        "Not referring to official documents and resources from authorized organizations"
      ],
      costs: [
        {
          item: "Basic Umrah Course",
          amount: "$0 - $50",
          note: "Many mosques offer free or low-cost programs"
        },
        {
          item: "Intensive Preparation Program",
          amount: "$50 - $200",
          note: "For multi-week courses with materials included"
        },
        {
          item: "Course Materials",
          amount: "$10 - $30",
          note: "Books, handouts, and resources"
        },
        {
          item: "Official Registration (Tabung Haji)",
          amount: "Varies",
          note: "For Malaysian pilgrims using the official Tabung Haji system"
        }
      ],
      whatIfs: [
        {
          scenario: "What if there are no courses available in my area?",
          solution: "Look for online courses from reputable Islamic institutions or official hajj/umrah management bodies like Tabung Haji. Many organizations offer virtual classes that allow remote participation and even Q&A sessions."
        },
        {
          scenario: "What if I don't understand the language used in the course?",
          solution: "Seek courses in your preferred language or bring a translator with you. Alternatively, request translated materials or find a bilingual study partner. Official institutions like Tabung Haji often provide materials in multiple languages."
        },
        {
          scenario: "What if I need more detailed documentation?",
          solution: "Refer to official resources like the Tabung Haji Nota KAH document available at https://www.tabunghaji.gov.my/sites/default/kah/TH-NOTA%20KAH%201446H%20_%20M3.pdf for comprehensive guidance on all aspects of the journey."
        }
      ],
      muhasabah: "Am I approaching these courses with sincerity and dedication? Do I value the opportunity to learn from experienced teachers? Am I making the effort to apply what I learn in preparation for my journey? Have I sought guidance from official sources and authorized institutions?"
    },
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
      id: 19,
      title: "Miqat, Niat & Ihram",
      description: "Understanding and performing the first essential rituals of Umrah",
      details: "Miqat is the designated place/boundary where pilgrims must enter the state of Ihram before proceeding to perform Umrah or Hajj. Ihram refers to both the special clothing worn and the sacred state a pilgrim enters, while Niat (intention) consecrates the beginning of the ritual.",
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/TH-NOTA%20KAH%201446H%20_%20M3.pdf",
      checklistItems: [
        "1- Understanding Miqat Boundaries",
        "Dhul Hulaifah (Abyar Ali) - for pilgrims from Madinah (450 km from Mecca)",
        "Juhfah (Rabigh) - for pilgrims from the direction of Syria, Egypt, and North Africa (190 km from Mecca)",
        "Qarn al-Manazil - for pilgrims from the direction of Najd and Taif (90 km from Mecca)",
        "Dhat Irq - for pilgrims from the direction of Iraq (94 km from Mecca)",
        "Yalamlam - for pilgrims from the direction of Yemen (54 km from Mecca)",
        "Confirm your specific Miqat based on your travel route",
        
        "2- Preparation before Miqat",
        "Cut nails, trim moustache, and remove unwanted body hair",
        "Perform ghusl (full ritual bath) if possible, or at minimum wudhu",
        "Men: Prepare two pieces of white unsewn cloth (izar for lower body and rida for upper body)",
        "Women: Prepare regular modest clothing (any color except fully black) that covers the entire body except face and hands",
        "Bring items needed during Ihram: unscented soap, belt or money pouch, slippers/sandals, prayer mat",
        "Ensure you have the Tabung Haji guidebook or official instructions",
        
        "3- At the Miqat",
        "Perform two raka'at (units) of prayer with intention for Ihram",
        "Men: Put on the two pieces of Ihram cloth properly, leaving head uncovered",
        "Women: Maintain modest clothing but cannot cover face (niqab) or hands (gloves)",
        "Make clear intention (niat) for Umrah by saying: 'Labbayka Allahumma bi-'Umrah' ('Here I am O Allah, for Umrah')",
        "Start reciting the Talbiyah immediately after intention",
        
        "4- Talbiyah Recitation",
        "Recite: 'Labbayk Allahumma labbayk, labbayka la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak'",
        "Meaning: 'Here I am O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace and sovereignty belong to You. You have no partner'",
        "Men: Recite loudly; Women: Recite softly",
        "Continue reciting Talbiyah frequently until reaching Kaabah for Tawaf",
        
        "5- Prohibited Acts During Ihram",
        "Avoid cutting hair or nails",
        "Avoid using scented soap, perfume, or cosmetics",
        "Men: Avoid covering head or wearing stitched clothes",
        "Women: Avoid covering face or wearing gloves",
        "Avoid hunting or killing animals",
        "Avoid sexual relations or marriage proposals",
        "Avoid arguments, disputes, or using abusive language"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Entering state of Ihram before reaching the proper Miqat boundary",
        "Passing the Miqat boundary without being in the state of Ihram",
        "Men wearing stitched clothing or covering their heads after Ihram",
        "Using scented soap, shampoo, or toothpaste during Ihram",
        "Not making a clear intention (niat) for Umrah",
        "Stopping the Talbiyah recitation too early",
        "Women covering their faces or wearing gloves during Ihram",
        "Cutting nails, hair, or removing unwanted hair after entering Ihram state"
      ],
      whatIfs: [
        {
          scenario: "What if I accidentally crossed the Miqat without making intention for Ihram?",
          solution: "Return to the Miqat if possible to enter Ihram properly. If not possible, enter Ihram wherever you are, but a penalty (dam/fidyah) may be required. Consult with a scholar or Tabung Haji official for guidance."
        },
        {
          scenario: "What if I'm on an airplane passing over Miqat?",
          solution: "Make your intention and enter the state of Ihram on the airplane when the pilot announces you're passing over the Miqat. Change into Ihram clothes before reaching the Miqat or in the airplane toilet."
        },
        {
          scenario: "What if I need to change my Ihram clothes because they became unclean?",
          solution: "It is permissible to change Ihram garments if needed. The restriction is on the type of clothing (unsewn for men), not the specific garment itself. Ensure the replacement follows the same rules."
        },
        {
          scenario: "What if I have a medical necessity that conflicts with Ihram rules?",
          solution: "Islam provides concessions for necessities. If you need to wear specific clothes or use medication with scent for medical reasons, it's allowed but may require fidyah (compensation). Consult a scholar for specific guidance."
        }
      ],
      muhasabah: "Have I prepared myself spiritually for this sacred journey? Am I entering Ihram with complete submission to Allah's commands? Do I understand that Ihram is not just the clothing but a state of mind and heart? Am I ready to leave behind worldly concerns and focus entirely on worship? Am I approaching this ritual with sincerity and reverence as taught in the Tabung Haji guidance?"
    },
    {
      id: 9,
      title: "Performing Tawaf",
      description: "Performing the ritual of circling the Kaaba",
      details: "Make sure to be in a state of purity. Start at the Black Stone and circle the Kaaba seven times, reciting prayers.",
      audioDescription: "Tawaf involves circling the Kaaba seven times, starting at the Black Stone.",
      audioLink: "https://youtu.be/uacBne6E_OA?si=3ppUwAom7OQcIlOz",
      audioCredit: "credit Dato' Ustaz Daud Che Ngah - Membatalkan Tawaf",
      checklistItems: [
        "1- Getting Ready In Hotel Room",
        "Ensure you are in a state of purity (wudu)",
        "Prepare your Ihram clothing if performing with Umrah",
        "Make dua and intention (niyyah) before leaving",
        "Bring water bottle and comfortable footwear",
        
        "2- While On The Way To Tawaf",
        "Keep reciting talbiyah if in Ihram state",
        "Maintain focus and avoid worldly conversations",
        "Prepare mentally for the spiritual experience",
        "Review the duas for Tawaf",
        
        "3- Tawaf Step by Step",
        "Start Tawaf at the Black Stone (Hajar al-Aswad)",
        "Circle the Kaaba seven times counterclockwise",
        "Recite prayers and supplications during Tawaf",
        "Follow the green markers for pacing",
        "Walk at moderate pace, neither rushing nor dawdling",
        
        "4- During Tawaf",
        "Do not touch any part of The Kaabah namely the Hajarul Aswad, the black shroud, the Shazarwan, the Hijr Ismail and the short wall around Hijr Ismail",
        "Avoid pushing or causing harm to others especially around the Hajarul Aswad",
        "Be very careful to maintain focus on this Ibadah solely for Allah - please refrain from taking selfies, going online, or calling up family & friends",
        "Dedicating forward running in order to catch up with your companion is very high risk of spoiling this Ibadah",
        "Maintain your left shoulder all the time while circumbulating towards the Kaabah counterclockwise",
        "Maintain focus on Allah and avoid idle talk",
        "Keep track of your rounds (use counter if needed)",
        "Remain respectful of other worshippers",
        
        "5- Muhasabah Tawaf",
        "Reflect on the symbolism of circling Allah's house",
        "Contemplate your life revolving around Allah's commands",
        "Consider how the Kaaba unites Muslims of all backgrounds",
        "Think about your spiritual journey and commitment"
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
