"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Download, Star, X, MapPin } from "lucide-react";

// Components
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import TenderHub from "@/components/TenderHub";
import ProposalEstimator from "@/components/ProposalEstimator";
import Footer from "@/components/Footer";

// Data
import { 
  heroStats, 
  credentials, 
  coreServices, 
  sectors, 
  governmentProjects 
} from "@/lib/data";

export default function Home() {
  const [activeFacility, setActiveFacility] = useState<any>(null);

  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO SECTION */}
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
              <a href="#services" className="btn-primary">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#tenders" className="btn-ghost">
                View Project Track Record
              </a>
            </div>
          </div>

          {/* Stats Grid */}
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

      {/* CREDENTIALS BAR */}
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

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-slatebg">
        <div className="container-app grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-eyebrow">About Vageshwari</div>
            <h2 className="section-title">A Premier Skill Development & Tender Execution Firm</h2>
            <p className="section-subtitle">
              We operate at the intersection of government policy and grassroots implementation. From mobilizing rural youth to ensuring 100% SDMS compliance, we handle the entire lifecycle of skill development and employment facilitation.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Pan-state mobilization & baseline surveys", 
                "NSDC certified vocational training", 
                "Employment facilitation & career placement", 
                "100% SDMS & biometric compliance"
              ].map((item, i) => (
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

      {/* CORE SERVICES */}
      <section id="services" className="py-20 bg-white">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Our Expertise</div>
            <h2 className="section-title">Core Operations & Services</h2>
            <p className="section-subtitle mx-auto">
              End-to-end execution for government and private sector skill development initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <div key={service.id} className="card-base p-8 card-hover">
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

      {/* TRAINING SECTORS GRID */}
      <section id="sectors" className="py-20 bg-slatebg">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Training Sectors</div>
            <h2 className="section-title">Specialized Vocational Portfolio</h2>
            <p className="section-subtitle mx-auto">
              Industry-aligned certification programs with standardized assessments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <div key={sector.id} className="card-base p-6 flex flex-col hover:border-royal-300 transition-colors">
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

      {/* MAJOR GOVERNMENT PROJECTS & TENDERS */}
      <section id="projects" className="py-20 bg-white border-t border-slate-200">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Track Record</div>
            <h2 className="section-title">Major Government Projects</h2>
            <p className="section-subtitle mx-auto">
              Active and completed large-scale skilling and capacity-building initiatives across multiple states.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {governmentProjects.map((project) => (
              <div key={project.id} className="card-base p-6 border-l-4 border-l-royal-600">
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

      {/* KEEPING EXISTING COMPONENTS */}
      <TenderHub />
      <ProposalEstimator />
      <ContactSection />
      <Footer />
    </main>
  );
}
