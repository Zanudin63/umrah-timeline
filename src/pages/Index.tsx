import React, { useState, useRef, useEffect } from "react";
import JourneySection, { JourneyItem } from "@/components/JourneySection";
import { UserRole } from "@/components/EditButtons";
import { 
  Luggage, 
  Book, 
  MapPin, 
  Plane, 
  PanelsTopLeft, 
  BookOpen, 
  FileText, 
  Landmark, 
  User, 
  Users, 
  Star,
  Info,
  Clock,
  Building,
  Footprints,
  Female,
  AlertTriangle,
  FileQuestion
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import JourneySidebar from "@/components/JourneySidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import JourneyIndex from "@/components/JourneyIndex";

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
      title: "Financial Planning",
      description: "Budgeting and saving for the pilgrimage",
      details: "Estimate the total cost of the trip, including flights, accommodation, visa fees, meals, transportation, and other expenses. Set a savings goal and create a budget to track income and expenses. Consider opening a dedicated savings account for Umrah funds. Explore options for financial assistance or loans if needed.",
      checklistItems: [
        "Estimate total Umrah costs",
        "Set a savings goal",
        "Create a budget",
        "Open a dedicated savings account",
        "Explore financial assistance options"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Underestimating the total cost of the trip",
        "Not creating a detailed budget",
        "Spending savings on non-essential items",
        "Not exploring financial assistance options"
      ],
      costs: [
        {
          item: "Flights",
          amount: "$500 - $1500",
          note: "Varies depending on origin and time of booking"
        },
        {
          item: "Accommodation",
          amount: "$30 - $200 per night",
          note: "Varies depending on hotel class and location"
        },
        {
          item: "Visa Fees",
          amount: "$0 - $150",
          note: "Varies depending on nationality"
        },
        {
          item: "Transportation",
          amount: "$50 - $200",
          note: "For local travel in Saudi Arabia"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I can't afford the trip?",
          solution: "Consider postponing the trip until you have saved enough money. Look for cheaper travel options, such as budget airlines and hostels. Seek financial assistance from family, friends, or Islamic organizations."
        },
        {
          scenario: "What if I run out of money during the trip?",
          solution: "Have a backup plan, such as a credit card or a line of credit. Inform family and friends about your situation and ask for their support. Contact your embassy or consulate for assistance."
        }
      ],
      muhasabah: "Am I being honest and responsible with my finances? Am I seeking help from Allah to make this journey possible? Am I willing to make sacrifices to achieve my goal?"
    },
    {
      id: 2,
      title: "Visa Application",
      description: "Applying for an Umrah visa",
      details: "Check the visa requirements for your nationality. Gather the required documents, such as passport, photos, and proof of accommodation. Apply for the visa through an authorized travel agent or the Saudi embassy or consulate. Pay the visa fees and track the application status.",
      checklistItems: [
        "Check visa requirements",
        "Gather required documents",
        "Apply through authorized agent",
        "Pay visa fees",
        "Track application status"
      ],
      editableBy: ["agent", "admin"],
      commonMistakes: [
        "Not checking visa requirements",
        "Submitting incomplete documents",
        "Applying through unauthorized agents",
        "Not tracking application status"
      ],
      costs: [
        {
          item: "Visa Fees",
          amount: "$0 - $150",
          note: "Varies depending on nationality"
        },
        {
          item: "Travel Agent Fees",
          amount: "$50 - $200",
          note: "If applying through an agent"
        }
      ],
      whatIfs: [
        {
          scenario: "What if my visa is rejected?",
          solution: "Check the reason for rejection and reapply with the necessary corrections. Contact the Saudi embassy or consulate for clarification. Seek assistance from a travel agent."
        },
        {
          scenario: "What if my visa is delayed?",
          solution: "Contact the travel agent or the Saudi embassy or consulate to inquire about the status. Be patient and allow sufficient time for processing."
        }
      ],
      muhasabah: "Am I being truthful and transparent in my visa application? Am I following the rules and regulations set by the authorities? Am I trusting in Allah to grant me a visa?"
    },
    {
      id: 3,
      title: "Health and Fitness",
      description: "Preparing physically and mentally for the journey",
      details: "Consult a doctor for a medical checkup and vaccinations. Get travel insurance that covers medical emergencies. Start a fitness program to improve stamina and endurance. Practice walking and climbing to prepare for the physical demands of Umrah. Maintain a healthy diet and get enough sleep. Learn basic first aid and carry a medical kit.",
      checklistItems: [
        "Consult a doctor",
        "Get vaccinations",
        "Get travel insurance",
        "Start a fitness program",
        "Practice walking and climbing",
        "Maintain a healthy diet",
        "Learn basic first aid",
        "Carry a medical kit"
      ],
      editableBy: ["doctor", "admin"],
      commonMistakes: [
        "Not consulting a doctor",
        "Skipping vaccinations",
        "Not getting travel insurance",
        "Not preparing physically",
        "Ignoring health issues"
      ],
      costs: [
        {
          item: "Medical Checkup",
          amount: "$50 - $200",
          note: "Varies depending on the doctor and tests"
        },
        {
          item: "Vaccinations",
          amount: "$50 - $100",
          note: "Varies depending on the required vaccines"
        },
        {
          item: "Travel Insurance",
          amount: "$50 - $100",
          note: "For a one-month trip"
        },
        {
          item: "Medical Kit",
          amount: "$20 - $50",
          note: "For basic first aid supplies"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I get sick during the trip?",
          solution: "Seek medical attention immediately. Contact your travel insurance company for assistance. Inform your family and friends about your situation. Follow the advice of the doctor and take the necessary medications."
        },
        {
          scenario: "What if I have a pre-existing medical condition?",
          solution: "Consult your doctor before the trip and get a letter stating your condition and medications. Carry enough medication for the entire trip. Inform your travel companions about your condition and what to do in case of an emergency."
        }
      ],
      muhasabah: "Am I taking care of my health as a trust from Allah? Am I preparing myself physically and mentally for the challenges of the journey? Am I seeking healing and strength from Allah?"
    },
    {
      id: 4,
      title: "Packing Essentials",
      description: "Preparing the necessary items for the trip",
      details: "Pack light and practical clothing that is suitable for the weather and the religious environment. Pack comfortable shoes for walking and performing rituals. Pack essential toiletries, medications, and personal items. Pack a copy of your passport, visa, and other important documents. Pack a prayer mat, Quran, and other religious books. Pack a universal adapter, power bank, and other electronic accessories.",
      checklistItems: [
        "Pack light and practical clothing",
        "Pack comfortable shoes",
        "Pack essential toiletries",
        "Pack medications",
        "Pack personal items",
        "Pack copies of documents",
        "Pack prayer mat and Quran",
        "Pack electronic accessories"
      ],
      editableBy: ["guide", "admin"],
      commonMistakes: [
        "Packing too much luggage",
        "Packing inappropriate clothing",
        "Forgetting essential items",
        "Not making copies of documents",
        "Not packing religious books",
        "Not packing electronic accessories"
      ],
      costs: [
        {
          item: "Clothing",
          amount: "$50 - $200",
          note: "For ihram and other modest attire"
        },
        {
          item: "Shoes",
          amount: "$30 - $100",
          note: "For comfortable walking"
        },
        {
          item: "Toiletries",
          amount: "$20 - $50",
          note: "For personal hygiene"
        },
        {
          item: "Medications",
          amount: "$20 - $50",
          note: "For prescription and over-the-counter drugs"
        },
        {
          item: "Prayer Mat",
          amount: "$10 - $30",
          note: "For praying in public places"
        },
        {
          item: "Quran",
          amount: "$10 - $30",
          note: "For reading and reflection"
        },
        {
          item: "Electronic Accessories",
          amount: "$20 - $50",
          note: "For charging and using devices"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I forget something important?",
          solution: "Try to buy it in Saudi Arabia, if available. Ask your travel companions for help. Contact your family and friends to send it to you, if possible."
        },
        {
          scenario: "What if my luggage is lost or delayed?",
          solution: "Report it to the airline and file a claim. Buy essential items from local stores. Contact your travel insurance company for assistance."
        }
      ],
      muhasabah: "Am I being mindful of my needs and the needs of others? Am I preparing myself with the necessary tools and resources for the journey? Am I relying on Allah to provide for me and protect my belongings?"
    },
    {
      id: 5,
      title: "Learning Arabic Phrases",
      description: "Acquiring basic Arabic language skills",
      details: "Learn basic Arabic phrases for greetings, asking for directions, ordering food, and other common situations. Practice speaking Arabic with native speakers or language partners. Use Arabic language learning apps or websites. Carry a phrasebook or a dictionary. Be patient and respectful when communicating with others.",
      checklistItems: [
        "Learn basic Arabic phrases",
        "Practice speaking Arabic",
        "Use language learning apps",
        "Carry a phrasebook",
        "Be patient and respectful"
      ],
      editableBy: ["teacher", "admin"],
      commonMistakes: [
        "Not learning any Arabic phrases",
        "Being afraid to speak Arabic",
        "Not using language learning resources",
        "Being impatient and disrespectful"
      ],
      costs: [
        {
          item: "Language Learning Apps",
          amount: "$0 - $20 per month",
          note: "For premium features"
        },
        {
          item: "Phrasebook",
          amount: "$10 - $20",
          note: "For common phrases and situations"
        },
        {
          item: "Dictionary",
          amount: "$10 - $30",
          note: "For looking up words and meanings"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I can't understand or speak Arabic?",
          solution: "Use gestures, signs, or drawings to communicate. Ask for help from English-speaking locals or other pilgrims. Use a translation app or device."
        },
        {
          scenario: "What if I offend someone with my Arabic?",
          solution: "Apologize sincerely and explain that you are still learning. Ask for forgiveness and try to correct your mistake. Be respectful and humble in your interactions."
        }
      ],
      muhasabah: "Am I making an effort to learn the language of the Quran and the Prophet? Am I using my language skills to connect with others and spread kindness? Am I seeking knowledge and wisdom from Allah?"
    },
    {
      id: 6,
      title: "Understanding Umrah Rituals",
      description: "Studying the steps and requirements of Umrah",
      details: "Read books, articles, and websites about Umrah rituals. Watch videos and attend lectures about Umrah. Consult with scholars and experienced pilgrims. Learn the meanings and significance of each ritual. Understand the conditions and obligations of Umrah. Prepare yourself mentally and spiritually for the experience.",
      checklistItems: [
        "Read about Umrah rituals",
        "Watch videos and attend lectures",
        "Consult with scholars",
        "Learn the meanings and significance",
        "Understand the conditions and obligations",
        "Prepare mentally and spiritually"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not studying Umrah rituals",
        "Performing rituals incorrectly",
        "Not understanding the meanings and significance",
        "Not fulfilling the conditions and obligations",
        "Not preparing mentally and spiritually"
      ],
      costs: [
        {
          item: "Books",
          amount: "$10 - $30",
          note: "About Umrah rituals and history"
        },
        {
          item: "Videos and Lectures",
          amount: "$0 - $20",
          note: "For online access or DVDs"
        },
        {
          item: "Consultation Fees",
          amount: "$0 - $50",
          note: "For private sessions with scholars"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I forget a step or make a mistake during Umrah?",
          solution: "Consult with a scholar or a guide to find out how to correct it. Perform the missed step or make amends according to Islamic teachings. Do not panic or despair, and seek forgiveness from Allah."
        },
        {
          scenario: "What if I have doubts or questions about Umrah?",
          solution: "Ask a scholar or a guide for clarification. Refer to reliable sources of Islamic knowledge. Do not rely on rumors or unverified information. Seek certainty and understanding with sincerity."
        }
      ],
      muhasabah: "Am I approaching Umrah with knowledge and understanding? Am I performing the rituals with sincerity and devotion? Am I seeking guidance and wisdom from Allah?"
    },
    {
      id: 7,
      title: "Making Intentions (Niyyah)",
      description: "Formulating the sincere intention to perform Umrah",
      details: "Make a clear and sincere intention to perform Umrah solely for the sake of Allah. Renew your intention regularly and remind yourself of the purpose of your journey. Purify your heart from any worldly desires or distractions. Seek Allah's help and guidance to fulfill your intention. Express your intention verbally or silently before entering the state of ihram.",
      checklistItems: [
        "Make a clear and sincere intention",
        "Renew your intention regularly",
        "Purify your heart",
        "Seek Allah's help",
        "Express your intention verbally or silently"
      ],
      editableBy: ["imam", "admin"],
      commonMistakes: [
        "Not making a clear intention",
        "Making an intention for worldly reasons",
        "Not renewing the intention regularly",
        "Not purifying the heart",
        "Not seeking Allah's help"
      ],
      costs: [],
      whatIfs: [
        {
          scenario: "What if I have doubts about my intention?",
          solution: "Reflect on your motives and renew your commitment to Allah. Seek forgiveness for any shortcomings and ask for sincerity. Do not let doubts discourage you from performing Umrah."
        },
        {
          scenario: "What if I forget my intention during Umrah?",
          solution: "Remind yourself of your purpose and renew your intention immediately. Do not let forgetfulness invalidate your Umrah. Seek Allah's mercy and guidance."
        }
      ],
      muhasabah: "Am I making Umrah solely for the sake of Allah? Am I purifying my heart from any worldly desires or distractions? Am I seeking Allah's help and guidance to fulfill my intention?"
    },
    {
      id: 8,
      title: "Entering Ihram",
      description: "Preparing and entering the state of ihram",
      details: " мужчины: Take a bath or perform ablution (wudu). Wear the ihram garments (two white seamless cloths for men, modest clothing for women). Make the intention for Umrah at the designated Miqat (station). Recite the Talbiyah (a prayer invoking Allah's presence). Refrain from the prohibitions of ihram (such as cutting hair, using perfume, hunting, etc.). Maintain a state of humility, devotion, and mindfulness.",
      checklistItems: [
        "Take a bath or perform ablution",
        "Wear ihram garments",
        "Make intention at Miqat",
        "Recite the Talbiyah",
        "Refrain from prohibitions",
        "Maintain humility and devotion"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not taking a bath or performing ablution",
        "Wearing inappropriate ihram garments",
        "Not making intention at Miqat",
        "Not reciting the Talbiyah",
        "Violating the prohibitions of ihram",
        "Not maintaining humility and devotion"
      ],
      costs: [
        {
          item: "Ihram Garments",
          amount: "$20 - $50",
          note: "For men (two white seamless cloths)"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I cannot reach the Miqat on time?",
          solution: "Make the intention for Umrah at the earliest possible location before reaching Makkah. Consult with a scholar or a guide for guidance."
        },
        {
          scenario: "What if I accidentally violate a prohibition of ihram?",
          solution: "Seek forgiveness from Allah and offer a sacrifice (if required). Consult with a scholar or a guide for guidance. Do not repeat the violation intentionally."
        }
      ],
      muhasabah: "Am I entering ihram with purity and sincerity? Am I observing the rules and regulations of ihram with diligence? Am I surrendering myself to Allah's will and seeking His pleasure?"
    },
    {
      id: 9,
      title: "Performing Tawaf",
      description: "Circumambulating the Kaaba seven times",
      details: "Enter Masjid al-Haram with reverence and humility. Approach the Black Stone (Hajar al-Aswad) and kiss it or point to it. Begin the Tawaf from the corner of the Black Stone and circumambulate the Kaaba seven times counterclockwise. Recite prayers and supplications during the Tawaf. Maintain focus and avoid distractions. Complete the Tawaf with sincerity and devotion.",
      checklistItems: [
        "Enter Masjid al-Haram with reverence",
        "Approach the Black Stone",
        "Begin Tawaf from the corner",
        "Circumambulate seven times",
        "Recite prayers and supplications",
        "Maintain focus and avoid distractions",
        "Complete Tawaf with sincerity"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Entering Masjid al-Haram without reverence",
        "Not approaching the Black Stone correctly",
        "Not beginning Tawaf from the corner",
        "Not circumambulating seven times",
        "Not reciting prayers and supplications",
        "Being distracted during Tawaf",
        "Not completing Tawaf with sincerity"
      ],
      costs: [],
      whatIfs: [
        {
          scenario: "What if I cannot get close to the Black Stone?",
          solution: "Point to it from a distance and continue the Tawaf. Do not push or shove other pilgrims."
        },
        {
          scenario: "What if I lose count of the number of rounds?",
          solution: "Estimate the number of rounds based on your best judgment. If in doubt, repeat the Tawaf to be certain."
        }
      ],
      muhasabah: "Am I performing Tawaf with reverence and humility? Am I following the correct procedure and reciting the appropriate prayers? Am I focusing on Allah and seeking His forgiveness?"
    },
    {
      id: 10,
      title: "Praying Behind Maqam Ibrahim",
      description: "Offering two rak'ahs of prayer after Tawaf",
      details: "After completing the Tawaf, proceed to Maqam Ibrahim (the Station of Abraham). Offer two rak'ahs of prayer behind Maqam Ibrahim, if possible. Recite Surah al-Kafirun in the first rak'ah and Surah al-Ikhlas in the second rak'ah. Make supplications and ask Allah for His blessings. Express gratitude for the opportunity to perform Umrah.",
      checklistItems: [
        "Proceed to Maqam Ibrahim",
        "Offer two rak'ahs of prayer",
        "Recite Surah al-Kafirun and al-Ikhlas",
        "Make supplications",
        "Express gratitude"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not proceeding to Maqam Ibrahim",
        "Not offering two rak'ahs of prayer",
        "Not reciting Surah al-Kafirun and al-Ikhlas",
        "Not making supplications",
        "Not expressing gratitude"
      ],
      costs: [],
      whatIfs: [
        {
          scenario: "What if I cannot find a place behind Maqam Ibrahim?",
          solution: "Offer the prayer anywhere in Masjid al-Haram. The reward is the same."
        },
        {
          scenario: "What if I do not know Surah al-Kafirun and al-Ikhlas?",
          solution: "Recite any other surahs or verses from the Quran. The intention is what matters."
        }
      ],
      muhasabah: "Am I offering prayer with sincerity and humility? Am I reciting the Quran with understanding and reflection? Am I making supplications with hope and gratitude?"
    },
    {
      id: 11,
      title: "Drinking Zamzam Water",
      description: "Drinking the blessed water of Zamzam",
      details: "Proceed to the well of Zamzam and drink the blessed water. Make intention to drink Zamzam water for healing, blessings, and fulfillment of desires. Recite a prayer or supplication before drinking. Drink Zamzam water with reverence and gratitude. Share Zamzam water with others, if possible.",
      checklistItems: [
        "Proceed to the well of Zamzam",
        "Make intention to drink Zamzam water",
        "Recite a prayer or supplication",
        "Drink Zamzam water with reverence",
        "Share Zamzam water with others"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not proceeding to the well of Zamzam",
        "Not making intention to drink Zamzam water",
        "Not reciting a prayer or supplication",
        "Not drinking Zamzam water with reverence",
        "Not sharing Zamzam water with others"
      ],
      costs: [],
      whatIfs: [
        {
          scenario: "What if I cannot reach the well of Zamzam?",
          solution: "Drink Zamzam water from any container or source in Masjid al-Haram. The blessing is the same."
        },
        {
          scenario: "What if I do not know the prayer or supplication?",
          solution: "Make any sincere supplication in your own language. Allah understands all languages."
        }
      ],
      muhasabah: "Am I drinking Zamzam water with faith and gratitude? Am I seeking healing and blessings from Allah? Am I sharing the blessings of Zamzam with others?"
    },
    {
      id: 12,
      title: "Performing Sa'i",
      description: "Walking between the hills of Safa and Marwa seven times",
      details: "Proceed to the hills of Safa and Marwa, located near the Kaaba. Begin the Sa'i from Safa and walk towards Marwa. Recite prayers and supplications during the Sa'i. Increase your pace between the green markers. Complete the Sa'i at Marwa. Perform Sa'i with sincerity and devotion, remembering the story of Hagar.",
      checklistItems: [
        "Proceed to Safa and Marwa",
        "Begin Sa'i from Safa",
        "Walk towards Marwa",
        "Recite prayers and supplications",
        "Increase pace between green markers",
        "Complete Sa'i at Marwa",
        "Perform Sa'i with sincerity"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not proceeding to Safa and Marwa",
        "Not beginning Sa'i from Safa",
        "Not walking towards Marwa",
        "Not reciting prayers and supplications",
        "Not increasing pace between green markers",
        "Not completing Sa'i at Marwa",
        "Not performing Sa'i with sincerity"
      ],
      costs: [],
      whatIfs: [
        {
          scenario: "What if I am unable to walk between Safa and Marwa?",
          solution: "Use a wheelchair or ask for assistance from a helper. Allah does not burden a soul beyond its capacity."
        },
        {
          scenario: "What if I forget the prayers and supplications?",
          solution: "Recite any prayers or supplications that you know. The intention is what matters."
        }
      ],
      muhasabah: "Am I performing Sa'i with faith and perseverance? Am I remembering the story of Hagar and her trust in Allah? Am I seeking Allah's help and guidance in my own life?"
    },
    {
      id: 13,
      title: "Shaving or Cutting Hair (Halq or Taqsir)",
      description: "Completing Umrah by shaving or cutting hair",
      details: "Men: Shave the entire head (Halq) or cut at least one inch of hair from all parts of the head (Taqsir). Women: Cut at least one inch of hair from the end of the hair (Taqsir). Perform Halq or Taqsir with sincerity and gratitude. Dispose of the hair respectfully. Announce the completion of Umrah and express joy and satisfaction.",
      checklistItems: [
        "Men: Shave or cut hair",
        "Women: Cut hair",
        "Perform Halq or Taqsir with sincerity",
        "Dispose of hair respectfully",
        "Announce completion of Umrah"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Men: Not shaving or cutting hair properly",
        "Women: Not cutting hair properly",
        "Not performing Halq or Taqsir with sincerity",
        "Not disposing of hair respectfully",
        "Not announcing completion of Umrah"
      ],
      costs: [
        {
          item: "Barber Fee",
          amount: "$5 - $10",
          note: "For shaving or cutting hair"
        }
      ],
      whatIfs: [
        {
          scenario: "What if I am unable to shave or cut my hair?",
          solution: "Ask someone else to do it for you. If that is not possible, postpone it until you are able to do it."
        },
        {
          scenario: "What if I forget to shave or cut my hair?",
          solution: "Do it as soon as you remember. It is an essential part of Umrah."
        }
      ],
      muhasabah: "Am I completing Umrah with humility and gratitude? Am I following the Sunnah of the Prophet Muhammad (peace be upon him)? Am I seeking Allah's acceptance and reward?"
    },
    {
      id: 14,
      title: "Exiting Ihram",
      description: "Releasing oneself from the restrictions of ihram",
      details: "Once the Halq or Taqsir is completed, the state of ihram ends. All the restrictions of ihram are lifted. One can resume normal activities and wear regular clothing. Express gratitude to Allah for the successful completion of Umrah. Make intention to continue living a life of obedience and devotion.",
      checklistItems: [
        "Halq or Taqsir is completed",
        "Restrictions of ihram are lifted",
        "Resume normal activities",
        "Wear regular clothing",
        "Express gratitude to Allah",
        "Make intention to continue devotion"
      ],
      editableBy: ["imam", "guide", "admin"],
      commonMistakes: [
        "Not completing Halq or Taqsir",
        "Not lifting the restrictions of ihram",
        "Not resuming normal activities",
        "Not wearing regular clothing",
        "Not expressing gratitude to Allah",
        "Not making intention to continue devotion"
      ],
      costs: [],
      whatIfs: [
        {
          scenario: "What if I am unsure whether I have completed all the rituals of Umrah?",
          solution: "Consult with a scholar or a guide to confirm. Do not assume or guess. Seek certainty and clarity."
        },
        {
          scenario: "What if I feel tempted to return to my old ways after Umrah?",
          solution: "Remember the blessings and lessons of Umrah. Seek Allah's help and guidance to remain steadfast. Surround yourself with righteous companions and engage in good deeds."
        }
      ],
      muhasabah: "Am I exiting ihram with a renewed sense of purpose and commitment? Am I grateful to Allah for the opportunity to perform Umrah? Am I determined to continue living a life of obedience and devotion?"
    }
  ];

  const travelArrangementsItems: JourneyItem[] = [
    {
      id: 15,
      title: "Booking Flights",
      description: "Arranging air travel to Saudi Arabia",
      details: "Research different airlines and compare prices. Book flights in advance to get better deals. Consider direct flights or flights with shorter layovers. Check the baggage allowance and restrictions. Confirm the flight details and print the boarding pass.",
      checklistItems: [
        "Research airlines and compare prices",
        "Book flights in advance",
        "Consider direct flights",
        "Check baggage allowance",
        "Confirm flight details"
      ],
      editableBy: ["agent", "airline", "admin"],
      commonMistakes: [
        "Not researching airlines",
        "Not booking flights in advance",
        "Not considering direct flights",
        "Not checking baggage allowance",
        "Not confirming flight details"
      ],
      costs: [
        {
          item: "Flights",
          amount: "$500 - $1500",
          note: "Varies depending on origin and time of booking"
        }
      ],
      whatIfs: [
        {
          scenario: "What if my flight is canceled?",
          solution: "Contact the airline immediately. Request a refund or rebooking. Check your travel insurance policy. Inform your travel companions and accommodation providers about the change."
        },
        {
          scenario: "What if I miss my flight?",
          solution: "Contact the airline and explain your situation. Ask for the next available flight or a partial refund. Check your travel insurance policy for coverage of missed flights."
        }
      ],
      muhasabah: "Am I planning my travel responsibly and efficiently? Am I considering the comfort and convenience of my journey? Am I being mindful of my budget and resources?"
    },
    {
      id: 16,
      title: "Booking Accommodation",
      description: "Arranging accommodation in Saudi Arabia",
      details: "Research different hotels and hostels in Saudi Arabia. Compare prices and amenities. Book accommodation in advance to secure a good deal. Check the cancellation policy and any restrictions on booking. Confirm the booking details and print the reservation confirmation.",
      checklistItems: [
        "Research hotels and hostels",
        "Compare prices and amenities",
        "Book accommodation in advance",
        "Check cancellation policy",
        "Confirm booking details"
      ],
      editableBy: ["agent", "admin"],
      commonMistakes: [
        "Not researching hotels and hostels",
        "Not comparing prices and amenities",
        "Not booking accommodation in advance",
        "Not checking cancellation policy",
        "Not confirming booking details"
      ],
      costs: [
        {
          item: "Accommodation",
          amount: "$30 - $200 per night",
          note: "Varies depending on hotel class and location"
        }
      ],
      whatIfs: [
        {
          scenario: "What if my accommodation is canceled?",
          solution: "Contact the hotel or hostel immediately. Request a refund or rebooking. Check your travel insurance policy. Inform your travel companions and accommodation providers about the change."
        },
        {
          scenario: "What if I miss my accommodation?",
          solution: "Contact the hotel or hostel and explain your situation. Ask for the next available room or a partial refund. Check your travel insurance policy for coverage of missed accommodation."
        }
      ],
      muhasabah: "Am I planning my accommodation responsibly and efficiently? Am I considering the comfort and convenience of my accommodation? Am I being mindful of my budget and resources?"
    },
    {
      id: 17,
      title: "Booking Transportation",
      description: "Arranging transportation to and from Saudi Arabia",
      details: "Research different transportation options, such as taxis, buses, and rental cars. Book transportation in advance to get better deals. Check the availability and schedules. Confirm the booking details and print the reservation confirmation.",
      checklistItems: [
        "Research transportation options",
        "Book transportation in advance",
        "Check availability and schedules",
        "Confirm booking details"
      ],
      editableBy: ["agent", "admin"],
      commonMistakes: [
        "Not researching transportation options",
        "Not booking transportation in advance",
        "Not checking availability and schedules",
        "Not confirming booking details"
      ],
      costs: [
        {
          item: "Transportation",
          amount: "$50 - $200",
          note: "For local travel in Saudi Arabia"
        }
      ],
      whatIfs: [
        {
          scenario: "What if my transportation is canceled?",
          solution: "Contact the transportation provider immediately. Request a refund or rebooking. Check your travel insurance policy. Inform your travel companions and accommodation providers about the change."
        },
        {
          scenario: "What if I miss my transportation?",
          solution: "Contact the transportation provider and explain your situation. Ask for the next available service or a partial refund. Check your travel insurance policy for coverage of missed transportation."
        }
      ],
      muhasabah: "Am I planning my transportation responsibly and efficiently? Am I considering the comfort and convenience of my transportation? Am I being mindful of my budget and resources?"
    },
    {
      id: 18,
      title: "Booking Visa",
      description: "Applying for an Umrah visa",
      details: "Check the visa requirements for your nationality. Gather the required documents, such as passport, photos, and proof of accommodation. Apply for the visa through an authorized travel agent or the Saudi embassy or consulate. Pay the visa fees and track the application status.",
      checklistItems: [
        "Check visa requirements",
        "Gather required documents",
        "Apply through authorized agent",
        "Pay visa fees",
        "Track application status"
      ],
      editableBy: ["agent", "admin"],
      commonMistakes: [
        "Not checking visa requirements",
        "Submitting incomplete documents",
        "Applying through unauthorized agents",
        "Not tracking application status"
      ],
      costs: [
        {
          item: "Visa Fees",
          amount: "$0 - $150",
          note: "Varies depending on nationality"
        },
        {
          item: "Travel Agent Fees",
          amount: "$50 - $200",
          note: "If applying through an agent"
        }
      ],
      whatIfs: [
        {
          scenario: "What if my visa is rejected?",
          solution: "Check the reason for rejection and reapply with the necessary corrections. Contact the Saudi embassy or consulate for clarification. Seek assistance from a travel agent."
        },
        {
          scenario: "What if my visa is delayed?",
          solution: "Contact the travel agent or the Saudi embassy or consulate to inquire about the status. Be patient and allow sufficient time for processing."
        }
      ],
      muhasabah: "Am I being truthful and transparent in my visa application? Am I following the rules and regulations set by the authorities? Am I trusting in Allah to grant me a visa?"
    }
  ];

  const umrahStepByStepItems: JourneyItem[] = [
    {
      id: 101,
      title: "Introduction to Umrah",
      description: "Understanding the essence and significance of Umrah",
      details: "Umrah is often referred to as the 'minor pilgrimage' or 'lesser pilgrimage' in contrast to Hajj, the 'major pilgrimage'. Unlike Hajj, which has specific dates according to the Islamic lunar calendar, Umrah can be performed at any time during the year. The word 'Umrah' in Arabic means 'to visit a populated place.' It consists of four essential rituals: Ihram, Tawaf, Sa'i, and Halq or Taqsir. The reward for performing Umrah is expiation of sins committed between it and the previous Umrah.",
      checklistItems: [
        "Understand the meaning and significance of Umrah",
        "Learn the difference between Umrah and Hajj",
        "Recognize the four main rituals of Umrah",
        "Prepare spiritually for the journey"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if I don't understand the significance of Umrah?",
          solution: "Study the Quran and Hadith related to Umrah, attend pre-Umrah courses, or consult with knowledgeable scholars who can explain its spiritual importance and historical context."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    },
    {
      id: 102,
      title: "Entering Ihram State",
      description: "The first ritual of Umrah - purification and intention",
      details: "Ihram is the sacred state a Muslim must enter before performing Umrah or Hajj. Before entering the state of Ihram, men should trim their nails, remove unwanted hair, perform ghusl (full body ritual purification), apply perfume (before Ihram only), and wear two pieces of unstitched white cloth - one wrapped around the waist (izar) and the other draped over the shoulders (rida). Women can wear any modest, preferably white, clean clothes that cover the entire body except the face and hands, avoiding any display of adornment. At the Miqat (designated boundary points), the pilgrim makes the intention (niyyah) for Umrah and recites the Talbiyah.",
      checklistItems: [
        "Perform ghusl (full body ritual purification)",
        "Men: Wear two pieces of unstitched white cloth",
        "Women: Wear modest clothing",
        "Make the intention (niyyah) for Umrah",
        "Recite the Talbiyah"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if I unintentionally violate the rules of Ihram?",
          solution: "If you unintentionally violate the rules of Ihram, you should seek forgiveness from Allah and, depending on the violation, may need to offer a fidyah (compensation) which may be fasting, feeding the poor, or sacrificing an animal."
        },
        {
          scenario: "What if I cannot find proper Ihram garments?",
          solution: "If proper Ihram garments are not available, any clean, white, unstitched pieces of cloth can be used. In an extreme emergency, whatever is available that covers the required parts of the body would suffice."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    },
    {
      id: 103,
      title: "Entering Masjid al-Haram",
      description: "Proper etiquette for entering the Sacred Mosque",
      details: "When entering Masjid al-Haram, it is recommended to enter with the right foot first while reciting the dua for entering a mosque: 'Allahummaf-tahli abwaba rahmatik' (O Allah, open the doors of Your mercy for me). Men should ensure their right shoulder is exposed (idhtiba) when performing Tawaf. Upon first seeing the Ka'bah, raise your hands in supplication as prayers are accepted at this moment. It's a time of intense emotion and spiritual connection, so take a moment to make personal duas before proceeding with Tawaf.",
      checklistItems: [
        "Enter with right foot first",
        "Recite the dua for entering a mosque",
        "Men: Ensure right shoulder is exposed (idhtiba)",
        "Raise hands in supplication upon first seeing the Ka'bah",
        "Make personal duas"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if the crowd is too dense to maintain idhtiba?",
          solution: "Safety comes first. If maintaining idhtiba (exposing the right shoulder) is difficult due to dense crowds, it's permissible to cover both shoulders to avoid harm. The idhtiba is a Sunnah, not an obligation."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    },
    {
      id: 104,
      title: "Performing Tawaf",
      description: "Circumambulating the Ka'bah seven times",
      details: "Tawaf involves circling the Ka'bah seven times in a counter-clockwise direction, starting from and ending at the Black Stone (Hajar al-Aswad). Begin by facing the Black Stone with the Ka'bah on your left. If possible, kiss the Black Stone or touch it with your right hand and then kiss your hand. If this isn't possible due to crowds, simply point to it with your right hand and say 'Bismillah, Allahu Akbar'. Men are encouraged to perform ramal (brisk walking with shoulders thrust forward) during the first three rounds, followed by normal walking for the remaining four. Throughout Tawaf, recite personal duas or recommended prayers. After completing seven rounds, perform two rak'ahs prayer behind Maqam Ibrahim if possible, or anywhere in the mosque.",
      checklistItems: [
        "Begin at the Black Stone",
        "Circle counterclockwise with Ka'bah on your left",
        "Kiss or touch the Black Stone if possible, or point to it",
        "Men: Perform ramal for first three rounds",
        "Complete seven full rounds",
        "Recite prayers throughout",
        "Pray two rak'ahs behind Maqam Ibrahim after completion"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if I lose count during Tawaf?",
          solution: "If you're unsure about the number of rounds completed during Tawaf, act upon the lesser number you're certain of. For example, if you're unsure whether you've completed 3 or 4 rounds, assume you've completed 3 and continue with the remaining 4 rounds."
        },
        {
          scenario: "What if I need to break my Tawaf for bathroom or wudu?",
          solution: "If you need to break your Tawaf for a valid reason like using the bathroom or renewing wudu, you may continue from where you left off when you return. However, it's best to try to maintain wudu throughout if possible."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    },
    {
      id: 105,
      title: "Drinking Zamzam Water",
      description: "Partaking in the blessed water after Tawaf",
      details: "After completing Tawaf and the two rak'ahs prayer, it is recommended to drink Zamzam water. The Prophet Muhammad (peace be upon him) said, 'Zamzam water is for whatever it is drunk for.' When drinking, face the Ka'bah, say 'Bismillah', drink in three breaths, and make dua for healing, beneficial knowledge, or whatever good you seek. It's also Sunnah to pour some water on your head and body.",
      checklistItems: [
        "Locate Zamzam water coolers after Tawaf and prayer",
        "Face the Ka'bah if possible",
        "Say Bismillah before drinking",
        "Drink in three breaths",
        "Make dua for what you seek",
        "Pour some water on your head if possible"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if Zamzam water stations are very crowded?",
          solution: "If Zamzam water stations are very crowded, be patient and wait your turn. If necessary, proceed to Sa'i and drink Zamzam water later, as there are usually Zamzam coolers available throughout the Haram."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    },
    {
      id: 106,
      title: "Performing Sa'i",
      description: "Walking between Safa and Marwah seven times",
      details: "Sa'i commemorates Hajar's (Hagar's) search for water for her son Ismail. Begin at Safa by facing the Ka'bah, raising your hands, and making dua. Then walk to Marwah at a normal pace, except between the green lights where men are encouraged to hasten their pace (women walk normally). Upon reaching Marwah, face the Ka'bah, raise your hands, and make dua again. This counts as one leg. Continue until you complete seven legs, ending at Marwah. Throughout Sa'i, recite personal duas or recommended prayers.",
      checklistItems: [
        "Begin at Safa with dua facing Ka'bah",
        "Walk to Marwah",
        "Men: Hasten pace between green lights",
        "Make dua at Marwah facing Ka'bah",
        "Complete seven legs (Safa→Marwah = 1, Marwah→Safa = 2, etc.)",
        "End at Marwah",
        "Recite prayers throughout"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if I lose count during Sa'i?",
          solution: "If you lose count during Sa'i, act upon the lesser number you're certain of. For example, if you're unsure whether you've completed 3 or 4 legs, assume you've completed 3 and continue with the remaining 4 legs."
        },
        {
          scenario: "What if I'm physically unable to complete Sa'i by walking?",
          solution: "If you're physically unable to complete Sa'i by walking, you may use a wheelchair or be carried. The Sa'i area now has multiple levels, with wheelchairs available on each level. There are also electric carts available for those who need them."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    },
    {
      id: 107,
      title: "Halq or Taqsir (Shaving or Trimming)",
      description: "The final ritual to exit Ihram state",
      details: "After completing Sa'i, the final ritual of Umrah is either Halq (completely shaving the head) or Taqsir (trimming at least an inch of hair from all parts of the head). Men have the choice between the two, with Halq being more virtuous, while women only perform Taqsir, cutting a fingertip's length from their hair. This ritual symbolizes humility and detachment from worldly vanities. After Halq or Taqsir, all restrictions of Ihram are lifted, and the Umrah is complete.",
      checklistItems: [
        "Men: Choose between Halq (shaving) or Taqsir (trimming)",
        "Women: Perform Taqsir only (trim fingertip's length)",
        "Use clean instruments",
        "Recite the recommended dua",
        "Exit the state of Ihram"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if I'm completely bald?",
          solution: "If you're completely bald, it's still recommended to pass a razor over your head symbolically to fulfill the ritual. This shows your willingness to comply with all aspects of the pilgrimage."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    },
    {
      id: 108,
      title: "Special Guidelines for Women",
      description: "Gender-specific considerations for female pilgrims",
      details: "Women follow the same rituals as men for Umrah with a few differences: they don't have to wear specific Ihram garments but should wear modest, preferably white clothes; they should keep their faces and hands uncovered while in Ihram; they walk at a normal pace during all rounds of Tawaf and Sa'i; they only trim their hair (Taqsir) rather than shaving; and they maintain a safe distance from men, especially during crowded rituals. If a woman experiences menstruation before entering the state of Ihram, she should delay her Ihram until she is pure. If menstruation begins after entering Ihram, she should perform all rituals except Tawaf and its two rak'ahs, which must be delayed until she is pure.",
      checklistItems: [
        "Wear modest clothing, keeping face and hands uncovered",
        "Maintain normal walking pace during Tawaf and Sa'i",
        "Perform only Taqsir (trimming), not Halq (shaving)",
        "Keep safe distance from men during rituals",
        "Understand menstruation-related exceptions"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if menstruation begins during Umrah rituals?",
          solution: "If menstruation begins after entering Ihram but before completing Tawaf, delay Tawaf and its two rak'ahs until purification. If it begins after Tawaf but before Sa'i, you may complete Sa'i as it doesn't require ritual purity. If your travel group must leave before you can become pure, consult a scholar about options like performing Tawaf in a state of necessity."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    },
    {
      id: 109,
      title: "Common Mistakes to Avoid",
      description: "Errors that can affect the validity of Umrah",
      details: "Common mistakes during Umrah include: not making the intention at the Miqat; not covering the awrah properly; performing rituals out of sequence; shortcuts in Tawaf such as cutting corners or not completing full rounds; beginning Tawaf from the wrong place; performing Sa'i without prior Tawaf; and exiting Ihram without proper Halq or Taqsir. Other errors involve prohibited actions during Ihram like using perfume, cutting nails, removing hair, or covering the head (for men) or face (for women). Always seek knowledge before performing rituals and ask scholars when in doubt.",
      checklistItems: [
        "Make proper intention at the correct Miqat",
        "Cover awrah correctly throughout",
        "Perform rituals in correct sequence",
        "Complete full seven rounds of Tawaf without shortcuts",
        "Begin Tawaf from the Black Stone corner",
        "Only perform Sa'i after Tawaf",
        "Exit Ihram with proper Halq or Taqsir",
        "Avoid prohibited actions during Ihram"
      ],
      editableBy: ["imam", "guide", "admin"],
      whatIfs: [
        {
          scenario: "What if I realize I made a mistake after completing Umrah?",
          solution: "If you realize you made a mistake that affects the validity of your Umrah after completing it (like missing a necessary component), consult a scholar immediately. Depending on the error, you might need to offer a fidyah (compensation) or repeat certain rituals or even the entire Umrah."
        }
      ],
      officialResourceLink: "https://www.tabunghaji.gov.my/sites/default/kah/NOTA%20KAH%201446H%20_%20M10%20(1)_0.pdf"
    }
  ];

  const registerRef = (
    sectionId: string,
    itemId: number,
    ref: HTMLDivElement | null
  ) => {
    if (ref && sectionId) {
      sectionRefs.current[sectionId] = sectionRefs.current[sectionId] || {};
      sectionRefs.current[sectionId][itemId] = ref;
    }
  };

  const scrollToItem = (sectionId: string, itemId: number) => {
    if (
      sectionRefs.current[sectionId] &&
      sectionRefs.current[sectionId][itemId]
    ) {
      const sectionRef = sectionRefs.current[sectionId][itemId];
      sectionRef.scrollIntoView({ behavior: "smooth", block: "start" });
      
      setActiveSectionId(sectionId);
      setActiveItemId(itemId);
    }
  };

  const journeySections = [
    {
      id: "preparation",
      title: "Preparation",
      icon: <BookOpen className="h-4 w-4 text-white" />,
      color: "bg-indigo-500", 
      lightColor: "bg-indigo-200",
      items: preparationItems.map(item => ({ id: item.id, title: item.title }))
    },
    {
      id: "travel",
      title: "Travel Arrangements",
      icon: <Plane className="h-4 w-4 text-white" />,
      color: "bg-green-500",
      lightColor: "bg-green-200",
      items: travelArrangementsItems.map(item => ({ id: item.id, title: item.title }))
    },
    {
      id: "umrahStepByStep",
      title: "Umrah Step By Step",
      icon: <Footprints className="h-4 w-4 text-white" />,
      color: "bg-[#ff6b00]",
      lightColor: "bg-orange-200",
      items: umrahStepByStepItems.map(item => ({ id: item.id, title: item.title }))
    }
  ];

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 sm:px-6">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                <PanelsTopLeft className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-2xl font-semibold tracking-tight">Umrah Journey Planner</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {!isMobile && (
          <aside className="hidden md:block w-64 shrink-0 border-r">
            <div className="sticky top-16 overflow-y-auto p-4 h-[calc(100vh-4rem)]">
              <JourneyIndex 
                sections={journeySections}
                activeSectionId={activeSectionId}
                activeItemId={activeItemId}
                onNavigate={scrollToItem}
              />
            </div>
          </aside>
        )}

        {isMobile && (
          <JourneySidebar 
            show={showSidebar} 
            onClose={() => setShowSidebar(false)}
            sections={[]}
            activeSectionId={null}
            onSectionSelect={() => {}}
          >
            <div className="p-4">
              <JourneyIndex 
                sections={journeySections}
                activeSectionId={activeSectionId}
                activeItemId={activeItemId}
                onNavigate={(sectionId, itemId) => {
                  scrollToItem(sectionId, itemId);
                  setShowSidebar(false);
                }}
              />
            </div>
          </JourneySidebar>
        )}

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <JourneySection
              id="preparation"
              title="Preparation"
              description="Steps to prepare for Umrah"
              icon={<Book />}
              items={preparationItems}
              registerRef={registerRef}
              currentRole={currentRole}
              initiallyOpen={true}
            />

            <JourneySection
              id="travel"
              title="Travel Arrangements"
              description="Planning your journey to the Holy Land"
              icon={<Luggage />}
              items={travelArrangementsItems}
              registerRef={registerRef}
              currentRole={currentRole}
              initiallyOpen={true}
            />
            
            <JourneySection
              id="umrahStepByStep"
              title="Umrah Step By Step"
              description="Detailed instructions for performing Umrah rituals"
              icon={<Footprints />}
              items={umrahStepByStepItems}
              registerRef={registerRef}
              currentRole={currentRole}
              initiallyOpen={true}
              color="amber"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
