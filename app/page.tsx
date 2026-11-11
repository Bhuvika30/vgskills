"use client";

import { useState, useEffect } from "react";
import {
  Menu, X, GraduationCap, ArrowRight, CheckCircle2, MapPin, Phone, 
  Mail, MessageCircle, Star, Download, FileText, FileCheck2, ShieldCheck, 
  Calculator, Users, Briefcase, Scissors, Monitor, Car, Zap, 
  Landmark, HeartHandshake, Factory, Droplets, ChevronRight
} from "lucide-react";

export default function SinglePageWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFacility, setActiveFacility] = useState<any>(null);
  const [calculated, setCalculated] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", organization: "", message: "",
  });
  const [submitted, setSubmitted] = useState<"whatsapp" | "email" | null>(null);
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- DATA ---
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Sectors", href: "#sectors" },
    { label: "Projects", href: "#projects" },
    { label: "Tenders", href: "#tenders" },
    { label: "Contact", href: "#contact" },
  ];

  const heroStats = [
    { icon: GraduationCap, value: "50,000+", label: "Youth Trained" },
    { icon: Briefcase, value: "85%", label: "Placement Rate" },
    { icon: MapPin, value: "5+", label: "States Covered" },
    { icon: Landmark, value: "10+", label: "Govt Projects" },
  ];

  const credentials = [
    { icon: ShieldCheck, label: "NSDC", sub: "Certified Courses" },
    { icon: GraduationCap, label: "ISO 9001", sub: "Quality Management" },
    { icon: Landmark, label: "PMKVY", sub: "Empaneled Partner" },
    { icon: Users, label: "MSME RAMP", sub: "Approved Vendor" },
    { icon: HeartHandshake, label: "UNICEF", sub: "AI Program Partner" },
    { icon: Factory, label: "P2E", sub: "Pathways to Employment" },
  ];

  const coreServices = [
    { icon: GraduationCap, title: "Vocational Training", description: "Industry-aligned skill development courses with NSDC certification and standardized skill assessments." },
    { icon: Briefcase, title: "Employment Facilitation", description: "Helping job seekers secure stable livelihoods through dedicated career placements and corporate tie-ups." },
    { icon: Users, title: "Grassroots Mobilization", description: "Pan-state mobilization, baseline surveys, and beneficiary identification for Government and Private sector projects." },
  ];

  const sectors = [
    { id: "apparel", title: "Apparel & Tailoring", icon: Scissors, duration: "3-6 Months", ssc: "Apparel Made-Ups & Home Furnishing SSC", description: "Basic to advanced tailoring, garment construction, and fashion design skills." },
    { id: "it", title: "Computer & IT Courses", icon: Monitor, duration: "3-12 Months", ssc: "IT-ITeS SSC (NASSCOM)", description: "Advanced & basic computer courses, digital literacy, and software fundamentals." },
    { id: "automobile", title: "Automobile Repair", icon: Car, duration: "4-6 Months", ssc: "Automotive Skills Development Council", description: "Two-wheeler and four-wheeler repair, maintenance, and service technician training." },
    { id: "electrical", title: "Electrical & Technical", icon: Zap, duration: "4-6 Months", ssc: "Power Sector Skill Council", description: "Industrial wiring, solar panel installation, and electrical safety protocols." },
    { id: "certification", title: "Govt & Industry Certifications", icon: ShieldCheck, duration: "Varies", ssc: "Various Sector Skill Councils", description: "Specialized short-term certification programs aligned with current market demands." },
  ];

  const governmentProjects = [
    { id: "pmkvy", title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)", badge: "Active", type: "National Skill Mission", states: "Pan-India Execution", desc: "Flagship scheme execution for short-term training and recognition of prior learning.", icon: Landmark },
    { id: "unicef-ai", title: "UNICEF AI Certification", badge: "Completed", type: "International Partnership", states: "Rajasthan", desc: "Specialized Artificial Intelligence training for youth in collaboration with UNICEF.", icon: HeartHandshake },
    { id: "p2e", title: "P2E (Pathways to Employment)", badge: "Active", type: "Private-Public Initiative", states: "Rajasthan, Punjab", desc: "Prepare to Earn program focused on direct employment linkages post-training.", icon: Factory },
    { id: "msme-ramp", title: "MSME RAMP Program", badge: "Ongoing", type: "Govt of India Initiative", states: "Rajasthan, Gujarat, Punjab", desc: "Raising and Accelerating MSME Performance through upskilling and capacity building.", icon: Briefcase },
    { id: "jjm", title: "Jal Jeevan Mission (JJM)", badge: "Ongoing", type: "Ministry of Jal Shakti", states: "Rajasthan, Uttar Pradesh", desc: "Skill and capacity building training for local water management and plumbing technicians.", icon: Droplets },
  ];

  const tenderMatrix = [
    { parameter: "Financial Turnover", requirement: "Avg. ₹2 Cr+ (Last 3 FYs)", ourStatus: "₹9.4 Cr Avg. Turnover", evidence: "CA Certified Statements" },
    { parameter: "Training Capacity", requirement: "5,000+ Candidates / Year", ourStatus: "8,500+ Annual Capacity", evidence: "Center-wise Certificate" },
    { parameter: "Past Performance", requirement: "3+ Govt/PSU Projects", ourStatus: "45+ Tenders Executed", evidence: "Completion Certificates" },
    { parameter: "Audit Compliance", requirement: "Statutory Audit (3 FYs)", ourStatus: "Zero Adverse Remarks", evidence: "Signed Audit Reports" },
    { parameter: "Registration Status", requirement: "GST, PAN, Udyam, EPF, ESI", ourStatus: "100% Active & Verified", evidence: "Compliance Sheet" },
    { parameter: "SSC Alignment", requirement: "MoU with relevant SSCs", ourStatus: "Aligned with 6 SSCs", evidence: "Alignment Letters" },
  ];

  const testimonials = [
    { name: "Priya Sharma", trade: "Apparel & Tailoring", location: "Jaipur, RJ", quote: "The NSDC certification helped me start my own boutique. The trainers were incredibly supportive and practical.", rating: 5 },
    { name: "Amit Patel", trade: "Electrical Technician", location: "Ahmedabad, GJ", quote: "Through the MSME RAMP program, I upgraded my skills and secured a job at a local manufacturing plant.", rating: 5 },
    { name: "Rahul Singh", trade: "Computer & IT", location: "Lucknow, UP", quote: "The Jal Jeevan Mission training gave me the technical edge I needed. I now work as a data entry operator.", rating: 4 },
  ];

  const WHATSAPP_NUMBER = "919876543210";
  const EMAIL_ADDRESS = "info@vageshwariskill.com";

  // --- HANDLERS ---
  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Organization:* ${formData.organization || "N/A"}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted("whatsapp");
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Tender/Partnership Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    setSubmitted("email");
  };

  return (
    <main className="min-h-screen bg-slatebg font-sans text-slate-900">
      
      {/* HEADER */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "glass-header border-b border-slate-200 shadow-sm" : "border-b border-transparent bg-white/60 backdrop-blur-sm"}`}>
        <div className="container-app flex h-16 items-center justify-between gap-4 lg:h-20">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal-600 text-white shadow-sm">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-slate-900 sm:text-lg">Vageshwari</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-600">Skill Solution</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-royal-600">{link.label}</a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <a href="#tenders" className="btn-ghost px-4 py-2.5"><Download className="h-4 w-4" /> Profile</a>
            <a href="#contact" className="btn-primary px-4 py-2.5"><FileText className="h-4 w-4" /> Tender Inquiry</a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 lg:hidden">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pb-6 pt-4 shadow-lg">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">{link.label}</a>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-100">
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex justify-center items-center gap-2 rounded-xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-700">
                <Phone className="h-4 w-4" /> +91 98765 43210
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-slatebg pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="container-app relative">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700 shadow-sm">
              NSDC Certified • Multi-State Execution Partner
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Empowering Youth through <span className="text-royal-600">Vocational Training</span>, Mobilization & Placement.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl">
              Executing high-impact skill development and employment facilitation projects across Rajasthan, Gujarat, Punjab, and Uttar Pradesh.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">Explore Services <ArrowRight className="h-4 w-4" /></a>
              <a href="#tenders" className="btn-ghost">View Project Track Record</a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {heroStats.map((stat, i) => (
              <div key={i} className="card-base p-6">
                <stat.icon className="h-8 w-8 text-royal-600 mb-4" />
                <div className="font-display text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="border-y border-slate-200 bg-white py-8">
        <div className="container-app">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {credentials.map((cred, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <cred.icon className="h-6 w-6 text-teal-600" />
                <div>
                  <div className="text-sm font-bold text-slate-900">{cred.label}</div>
                  <div className="text-xs text-slate-500">{cred.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-slatebg">
        <div className="container-app grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-eyebrow">About Vageshwari</div>
            <h2 className="section-title">A Premier Skill Development & Tender Execution Firm</h2>
            <p className="section-subtitle">
              We operate at the intersection of government policy and grassroots implementation. From mobilizing rural youth to ensuring 100% SDMS compliance, we handle the entire lifecycle of skill development and employment facilitation.
            </p>
            <div className="mt-8 space-y-4">
              {["Pan-state mobilization & baseline surveys", "NSDC certified vocational training", "Employment facilitation & career placement", "100% SDMS & biometric compliance"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card-base p-8 bg-gradient-to-br from-royal-600 to-royal-800 text-white">
            <h3 className="font-display text-2xl font-bold mb-4">Pan-India Footprint</h3>
            <p className="text-royal-100 leading-relaxed mb-6">
              High-level training execution and mobilization capabilities spanning multiple states, with a focus on Tier 2 and Tier 3 regions.
            </p>
            <div className="space-y-4 border-t border-royal-500/30 pt-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span className="font-semibold text-lg">Rajasthan, Gujarat, Punjab, UP</span>
              </div>
              <div className="text-sm text-royal-200">Expanding Pan-India in 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Our Expertise</div>
            <h2 className="section-title">Core Operations & Services</h2>
            <p className="section-subtitle mx-auto">End-to-end execution for government and private sector skill development initiatives.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {coreServices.map((service, i) => (
              <div key={i} className="card-base p-8 card-hover">
                <div className="p-3 rounded-xl bg-royal-50 text-royal-600 w-fit mb-5">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="py-20 bg-slatebg">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Training Sectors</div>
            <h2 className="section-title">Specialized Vocational Portfolio</h2>
            <p className="section-subtitle mx-auto">Industry-aligned certification programs with standardized assessments.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <div key={i} className="card-base p-6 flex flex-col hover:border-royal-300 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-teal-50 text-teal-600">
                    <sector.icon className="h-6 w-6" />
                  </div>
                  <span className="badge-teal text-xs">NSDC Certified</span>
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">{sector.title}</h3>
                <p className="text-sm text-slate-600 mb-6 flex-grow">{sector.description}</p>
                <div className="space-y-2 border-t border-slate-100 pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Duration:</span>
                    <span className="font-semibold text-slate-800">{sector.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">SSC Alignment:</span>
                    <span className="font-semibold text-slate-800 text-right">{sector.ssc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-white border-t border-slate-200">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Track Record</div>
            <h2 className="section-title">Major Government Projects</h2>
            <p className="section-subtitle mx-auto">Active and completed large-scale skilling and capacity-building initiatives across multiple states.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {governmentProjects.map((project, i) => (
              <div key={i} className="card-base p-6 border-l-4 border-l-royal-600">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900">{project.title}</h3>
                  </div>
                  <span className="badge-royal">{project.badge}</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-4 text-sm pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Type</span>
                    <span className="font-semibold text-slate-800">{project.type}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">States</span>
                    <span className="font-semibold text-slate-800">{project.states}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENDER HUB */}
      <section id="tenders" className="py-20 bg-slatebg">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Tender Hub</div>
            <h2 className="section-title">Capability Matrix & Compliance</h2>
            <p className="section-subtitle mx-auto">We maintain a 100% compliance track record. Review our bid readiness and download our corporate documents.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 card-base overflow-hidden">
              <div className="p-6 border-b border-slate-200 bg-white flex items-center gap-2">
                <FileCheck2 className="h-5 w-5 text-royal-600" />
                <h3 className="font-display font-bold text-lg text-slate-900">Tender Eligibility Matrix</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-500 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 font-medium">Parameter</th>
                      <th className="px-6 py-4 font-medium">Our Status</th>
                      <th className="px-6 py-4 font-medium">Supporting Evidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {tenderMatrix.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors bg-white">
                        <td className="px-6 py-4">
                          <div className="font-semibold text-slate-900">{row.parameter}</div>
                          <div className="text-xs text-slate-500 mt-1">Req: {row.requirement}</div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                            <ShieldCheck className="h-3.5 w-3.5" /> {row.ourStatus}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{row.evidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card-base p-6 bg-royal-600 text-white border-royal-700">
                <h3 className="font-display text-xl font-bold mb-2">Download Center</h3>
                <p className="text-royal-100 text-sm mb-6">Instantly download our verified corporate documents to attach with your RFP.</p>
                <div className="space-y-3">
                  {[
                    { title: "Corporate Profile 2026", size: "3.8 MB" },
                    { title: "Audited Financial Summary", size: "1.9 MB" },
                    { title: "Tender Compliance Checklist", size: "0.7 MB" },
                    { title: "Infrastructure Register", size: "2.4 MB" },
                  ].map((doc, i) => (
                    <button key={i} onClick={() => alert(`Downloading: ${doc.title}... (Simulation)`)} className="w-full flex items-center justify-between p-3 rounded-lg bg-royal-700/50 hover:bg-royal-700 transition-colors border border-royal-500/30 group text-left">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-royal-200 group-hover:text-white" />
                        <div>
                          <div className="text-sm font-semibold">{doc.title}</div>
                          <div className="text-xs text-royal-200">PDF • {doc.size}</div>
                        </div>
                      </div>
                      <Download className="h-4 w-4 text-royal-200 group-hover:text-white" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-eyebrow">Interactive Tool</div>
              <h2 className="section-title">Instant Project Scope Estimator</h2>
              <p className="section-subtitle">Planning a skill development tender or CSR project? Select your parameters below to generate an instant scope summary.</p>
              <div className="mt-8 space-y-4">
                {["Aligned with PMKVY & State Mission norms", "Includes SSC assessment & certification", "100% SDMS & biometric compliance"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-base p-8 bg-slatebg shadow-cardHover border-royal-100">
              <div className="flex items-center gap-2 mb-6 border-b border-slate-200 pb-4">
                <Calculator className="h-6 w-6 text-royal-600" />
                <h3 className="font-display text-xl font-bold text-slate-900">Calculate Your Scope</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                  <select className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none bg-white">
                    <option>PMKVY 4.0</option>
                    <option>DDU-GKY</option>
                    <option>State Skill Mission</option>
                    <option>Corporate CSR Project</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Sector</label>
                    <select className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none bg-white">
                      <option>IT / ITeS</option>
                      <option>Apparel</option>
                      <option>Healthcare</option>
                      <option>Electrical</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Candidates</label>
                    <input type="number" defaultValue={100} min="30" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none bg-white" />
                  </div>
                </div>
                <button onClick={() => setCalculated(true)} className="btn-primary w-full mt-2">Generate Scope Summary <ArrowRight className="h-4 w-4" /></button>
              </div>
              {calculated && (
                <div className="mt-6 p-4 rounded-xl bg-teal-50 border border-teal-100">
                  <h4 className="font-bold text-teal-900 mb-2">Estimated Scope Summary</h4>
                  <ul className="text-sm text-teal-800 space-y-1">
                    <li><strong>Project:</strong> PMKVY 4.0 (IT / ITeS)</li>
                    <li><strong>Target:</strong> 100 candidates in Rajasthan</li>
                    <li><strong>Trainers Required:</strong> 4 (30:1 ratio)</li>
                    <li><strong>Estimated Duration:</strong> 12 days per batch</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-teal-200">
                    <a href="#contact" className="text-sm font-bold text-teal-700 hover:text-teal-900 underline">Discuss this scope with our tender team</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slatebg border-t border-slate-200">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Success Stories</div>
            <h2 className="section-title">What Our Candidates Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-base p-6 bg-white">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < t.rating ? "fill-gold-600 text-gold-600" : "text-slate-300"}`} />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-royal-100 text-royal-600 rounded-full flex items-center justify-center font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.trade} • {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="section-eyebrow">Get in Touch</div>
              <h2 className="section-title">Let's Discuss Your Skilling Requirements</h2>
              <p className="section-subtitle mb-8">Whether you are a government authority floating a new tender, a corporate looking for CSR implementation, or a candidate seeking training, we are here to help.</p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-royal-50 text-royal-600 rounded-xl"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Head Office</h4>
                    <p className="text-sm text-slate-600 mt-1">Vageshwari Skill Solution,<br />Sector 4, Hiran Magri,<br />Udaipur, Rajasthan - 313002</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-50 text-teal-600 rounded-xl"><Phone className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone / WhatsApp</h4>
                    <p className="text-sm text-slate-600 mt-1">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gold-50 text-gold-600 rounded-xl"><Mail className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold text-slate-900">Official Email</h4>
                    <p className="text-sm text-slate-600 mt-1">{EMAIL_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-base p-8 bg-slatebg">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="h-20 w-20 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-teal-600" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Redirecting...</h3>
                  <p className="text-slate-600 mb-6 max-w-sm">
                    {submitted === "whatsapp" ? "We are opening WhatsApp with your message pre-filled." : "We are opening your email client."}
                  </p>
                  <button onClick={() => setSubmitted(null)} className="btn-ghost">Send another message</button>
                </div>
              ) : (
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none bg-white" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                      <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none bg-white" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Organization / Department</label>
                    <input type="text" value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none bg-white" placeholder="Company or Govt Dept" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none resize-none bg-white" placeholder="Tell us about your requirement..."></textarea>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button onClick={handleWhatsApp} className="btn-teal flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none">
                      <MessageCircle className="h-5 w-5" /> Send via WhatsApp
                    </button>
                    <button onClick={handleEmail} className="btn-primary flex-1">
                      <Mail className="h-5 w-5" /> Send via Email
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container-app grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-royal-600 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-base font-bold text-white">Vageshwari</span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal-400">Skill Solution</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400">Empowering India's youth through quality vocational training and seamless tender execution across Government and CSR sectors.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}><a href={link.href} className="hover:text-teal-400 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" /><span>Sector 4, Hiran Magri,<br />Udaipur, Rajasthan - 313002</span></li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-teal-400 shrink-0" /><span>+91 98765 43210</span></li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-teal-400 shrink-0" /><span>{EMAIL_ADDRESS}</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Compliance</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>GST: 08XXXXXXXXXXXZX</li>
              <li>PAN: ABCDE1234F</li>
              <li>Udyam: UDYAM-RJ-XX-XXXXXXX</li>
              <li>CIN: U80903RJ2020PTC000000</li>
              <li>ISO 9001:2015 Certified</li>
            </ul>
          </div>
        </div>
        <div className="container-app mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {year} Vageshwari Skill Solution. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
