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
  Building 
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
              icon={<Book />}
              items={preparationItems}
              registerRef={(itemId, ref) => registerRef("preparation", itemId, ref)}
              currentRole={currentRole}
              initiallyOpen={true}
            />

            <JourneySection
              id="travel"
              title="Travel Arrangements"
              icon={<Luggage />}
              items={travelArrangementsItems}
              registerRef={(itemId, ref) => registerRef("travel", itemId, ref)}
              currentRole={currentRole}
              initiallyOpen={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
