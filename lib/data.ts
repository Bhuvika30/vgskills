// lib/data.ts
import {
  Monitor, HeartPulse, Shirt, Store, Hotel, SunMedium, 
  ShieldCheck, FileCheck2, GraduationCap, Building2, Users, 
  MapPin, Wifi, Camera, Fingerprint, Presentation, FlaskConical, 
  Briefcase, BadgeCheck, Award, Landmark, Handshake, TrendingUp,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Tenders", href: "#tenders" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "25,000+", label: "Candidates Trained", icon: Users },
  { value: "85%+", label: "Placement Record", icon: TrendingUp },
  { value: "45+", label: "Tenders Executed", icon: FileCheck2 },
  { value: "15+", label: "Training Centers", icon: MapPin },
];

export const credentials = [
  { label: "NSDC Aligned", sub: "Training Partner", icon: GraduationCap },
  { label: "MSME Registered", sub: "Udyam Verified", icon: Building2 },
  { label: "ISO 9001:2015", sub: "Quality Certified", icon: ShieldCheck },
  { label: "Startup India", sub: "DPIIT Recognized", icon: Award },
  { label: "NCVET Compliant", sub: "Framework Aligned", icon: FileCheck2 },
  { label: "NITI Aayog Darpan", sub: "NGO Darpan ID", icon: Landmark },
];

export const sectors = [
  {
    id: "it-ites",
    title: "IT / ITeS",
    description: "Foundational and advanced digital literacy, data entry operations, CRM non-voice and web development tracks aligned to NASSCOM SSC frameworks.",
    duration: "3–6 Months",
    ssc: "NASSCOM SSC (SSC/Q2211)",
    placement: "88%",
    icon: Monitor,
    accent: "royal",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "General Duty Assistant (GDA), Home Health Aide and Emergency Medical Technician training with hospital attachment, patient safety and infection-control modules.",
    duration: "4–6 Months",
    ssc: "Healthcare SSC (HSS/Q5101)",
    placement: "86%",
    icon: HeartPulse,
    accent: "teal",
  },
  {
    id: "apparel",
    title: "Apparel & Garment",
    description: "Sewing machine operations, pattern making, industrial stitching, quality checking and self-employment garment production aligned to AMHSSC.",
    duration: "3–4 Months",
    ssc: "AMHSSC (AMH/Q0301)",
    placement: "84%",
    icon: Shirt,
    accent: "gold",
  },
  {
    id: "retail",
    title: "Retail",
    description: "Retail sales associate, cashier, team leader and inventory support roles with POS, customer handling and visual merchandising practice.",
    duration: "2–4 Months",
    ssc: "Retailers Association SSC (RAS/Q0104)",
    placement: "87%",
    icon: Store,
    accent: "royal",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Food & beverage service, front office operations, housekeeping and hospitality entrepreneurship with hotel and restaurant exposure visits.",
    duration: "3–6 Months",
    ssc: "Tourism & Hospitality SSC (THS/Q0102)",
    placement: "83%",
    icon: Hotel,
    accent: "teal",
  },
  {
    id: "solar",
    title: "Solar & Electrical",
    description: "Solar PV installer (Suryamitra), electrical wiring, inverter maintenance and rooftop solar O&M training aligned to Skill Council for Green Jobs.",
    duration: "4–6 Months",
    ssc: "SCGJ (SGJ/Q0101) & ESSCI",
    placement: "85%",
    icon: SunMedium,
    accent: "gold",
  },
];

export const facilities = [
  {
    id: "biometric",
    title: "Biometric Attendance",
    icon: Fingerprint,
    summary: "Aadhaar-linked biometric attendance on every training floor.",
    details: [
      "Aadhaar-enabled biometric devices with real-time sync to the SDMS portal.",
      "Daily attendance reconciliation and automated exception reports.",
      "Geo-tagged attendance logs for state skill mission audits.",
    ],
  },
  {
    id: "smart-classrooms",
    title: "Smart Classrooms",
    icon: Presentation,
    summary: "Projector-enabled classrooms with SSC-aligned digital content.",
    details: [
      "Interactive projectors and audio systems in every classroom.",
      "SSC-approved digital content library delivered via local servers.",
      "Offline-capable learning management system for low-bandwidth centers.",
    ],
  },
  {
    id: "practical-labs",
    title: "Practical Labs",
    icon: FlaskConical,
    summary: "Trade-specific labs inspected and aligned to SSC equipment norms.",
    details: [
      "IT lab with 30+ workstations and dedicated broadband.",
      "Healthcare lab with patient mannequins and clinical practice kits.",
      "Apparel lab with industrial sewing machines and cutting tables.",
    ],
  },
  {
    id: "cctv",
    title: "CCTV-Monitored Assessment",
    icon: Camera,
    summary: "Recorded assessment rooms for tamper-proof certification.",
    details: [
      "CCTV coverage across classrooms, labs and assessment halls.",
      "30-day retention with secure cloud backup for audit queries.",
      "Separate assessment rooms with controlled entry logging.",
    ],
  },
  {
    id: "placement-desk",
    title: "Placement Desks",
    icon: Briefcase,
    summary: "Dedicated placement officers at every training center.",
    details: [
      "Employer tie-ups across healthcare, retail, IT and hospitality sectors.",
      "Weekly job-readiness workshops, mock interviews and resume clinics.",
      "Post-placement tracking for 6 months to record retention data.",
    ],
  },
  {
    id: "wifi",
    title: "High-Speed Wi-Fi",
    icon: Wifi,
    summary: "Fiber-backed internet for SSC portals and online assessments.",
    details: [
      "Leased fiber lines with 4G failover redundancy at each center.",
      "Dedicated bandwidth lanes for online SSC assessments.",
      "Managed firewall and content-filtering policy for candidates.",
    ],
  },
];

export const testimonials = [
  {
    name: "Pooja Meena",
    trade: "General Duty Assistant",
    location: "Udaipur, Rajasthan",
    quote: "The GDA training gave me the confidence to work in a hospital. Within three months of finishing the course, I was placed in a multi-specialty hospital in Udaipur.",
    rating: 5,
  },
  {
    name: "Arjun Singh",
    trade: "Solar PV Installer",
    location: "Bhilwara, Rajasthan",
    quote: "The solar lab training was hands-on from day one. I now work as a rooftop solar technician and support my family while continuing to learn.",
    rating: 5,
  },
  {
    name: "Sneha Kumari",
    trade: "Retail Sales Associate",
    location: "Jaipur, Rajasthan",
    quote: "Mock interviews at the placement desk prepared me for real interviews. I joined a retail chain as a cashier within weeks of certification.",
    rating: 4,
  },
];