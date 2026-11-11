import { 
  MapPin, Users, Briefcase, GraduationCap, Award, 
  Scissors, Monitor, Car, Zap, ShieldCheck, 
  Landmark, HeartHandshake, Factory, Droplets 
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Projects", href: "#tenders" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { icon: GraduationCap, value: "50,000+", label: "Youth Trained" },
  { icon: Briefcase, value: "85%", label: "Placement Rate" },
  { icon: MapPin, value: "5+", label: "States Covered" },
  { icon: Landmark, value: "10+", label: "Govt Projects" },
];

export const credentials = [
  { icon: ShieldCheck, label: "NSDC", sub: "Certified Courses" },
  { icon: Award, label: "ISO 9001", sub: "Quality Management" },
  { icon: Landmark, label: "PMKVY", sub: "Empaneled Partner" },
  { icon: Users, label: "MSME RAMP", sub: "Approved Vendor" },
  { icon: HeartHandshake, label: "UNICEF", sub: "AI Program Partner" },
  { icon: Factory, label: "P2E", sub: "Pathways to Employment" },
];

export const coreServices = [
  {
    id: "training",
    icon: GraduationCap,
    title: "Vocational Training",
    description: "Industry-aligned skill development courses with NSDC certification and standardized skill assessments.",
  },
  {
    id: "placement",
    icon: Briefcase,
    title: "Employment Facilitation",
    description: "Helping job seekers secure stable livelihoods through dedicated career placements and corporate tie-ups.",
  },
  {
    id: "mobilization",
    icon: Users,
    title: "Grassroots Mobilization",
    description: "Pan-state mobilization, baseline surveys, and beneficiary identification for Government and Private sector projects.",
  },
];

export const sectors = [
  {
    id: "apparel",
    title: "Apparel & Tailoring",
    icon: Scissors,
    duration: "3-6 Months",
    ssc: "Apparel Made-Ups & Home Furnishing SSC",
    description: "Basic to advanced tailoring, garment construction, and fashion design skills.",
  },
  {
    id: "it",
    title: "Computer & IT Courses",
    icon: Monitor,
    duration: "3-12 Months",
    ssc: "IT-ITeS SSC (NASSCOM)",
    description: "Advanced & basic computer courses, digital literacy, and software fundamentals.",
  },
  {
    id: "automobile",
    title: "Automobile Repair",
    icon: Car,
    duration: "4-6 Months",
    ssc: "Automotive Skills Development Council",
    description: "Two-wheeler and four-wheeler repair, maintenance, and service technician training.",
  },
  {
    id: "electrical",
    title: "Electrical & Technical",
    icon: Zap,
    duration: "4-6 Months",
    ssc: "Power Sector Skill Council",
    description: "Industrial wiring, solar panel installation, and electrical safety protocols.",
  },
  {
    id: "certification",
    title: "Govt & Industry Certifications",
    icon: ShieldCheck,
    duration: "Varies",
    ssc: "Various Sector Skill Councils",
    description: "Specialized short-term certification programs aligned with current market demands.",
  },
];

export const governmentProjects = [
  {
    id: "pmkvy",
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    badge: "Active",
    type: "National Skill Mission",
    states: "Pan-India Execution",
    desc: "Flagship scheme execution for short-term training and recognition of prior learning.",
    icon: Landmark,
  },
  {
    id: "unicef-ai",
    title: "UNICEF AI Certification",
    badge: "Completed",
    type: "International Partnership",
    states: "Rajasthan",
    desc: "Specialized Artificial Intelligence training for youth in collaboration with UNICEF.",
    icon: HeartHandshake,
  },
  {
    id: "p2e",
    title: "P2E (Pathways to Employment)",
    badge: "Active",
    type: "Private-Public Initiative",
    states: "Rajasthan, Punjab",
    desc: "Prepare to Earn program focused on direct employment linkages post-training.",
    icon: Factory,
  },
  {
    id: "msme-ramp",
    title: "MSME RAMP Program",
    badge: "Ongoing",
    type: "Govt of India Initiative",
    states: "Rajasthan, Gujarat, Punjab",
    desc: "Raising and Accelerating MSME Performance through upskilling and capacity building.",
    icon: Briefcase,
  },
  {
    id: "jjm",
    title: "Jal Jeevan Mission (JJM)",
    badge: "Ongoing",
    type: "Ministry of Jal Shakti",
    states: "Rajasthan, Uttar Pradesh",
    desc: "Skill and capacity building training for local water management and plumbing technicians.",
    icon: Droplets,
  },
];
