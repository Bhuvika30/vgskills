"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, Download, Star, X } from "lucide-react";

// Components
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import TenderHub from "@/components/TenderHub";
import ProposalEstimator from "@/components/ProposalEstimator";
import Footer from "@/components/Footer";

// Data
import { heroStats, credentials, sectors, facilities, testimonials } from "@/lib/data";

export default function Home() {
  const [activeSector, setActiveSector] = useState("all");
  const [activeFacility, setActiveFacility] = useState<any>(null);

  const filteredSectors = activeSector === "all" 
    ? sectors 
    : sectors.filter(s => s.id === activeSector);

  return (
    <main className="min-h-screen">
      <Header />

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-slatebg pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />
        <div className="container-app relative">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-100 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-700 shadow-sm">
              NSDC Aligned • ISO 9001:2015 Certified
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Empowering India's Youth through <span className="text-royal-600">Quality Vocational Training</span> & Seamless Tender Execution.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              NSDC & State Skill Mission Aligned Training Partner executing Government & CSR Projects with 100% Compliance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#tenders" className="btn-ghost">
                <Download className="h-4 w-4" /> Download Tender Matrix
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
              We operate at the intersection of government policy and grassroots implementation. From mobilizing rural youth to ensuring 100% SDMS compliance, we handle the entire lifecycle of skill development.
            </p>
            <div className="mt-8 space-y-4">
              {["GST: 08XXXXXXXXXXXZX", "PAN: ABCDE1234F", "Udyam: UDYAM-RJ-XX-XXXXXXX", "CIN: U80903RJ2020PTC000000"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card-base p-8 bg-gradient-to-br from-royal-600 to-royal-800 text-white">
            <h3 className="font-display text-2xl font-bold mb-4">Leadership Team</h3>
            <p className="text-royal-100 leading-relaxed mb-6">
              Our core management brings over a decade of experience handling large-scale skill tenders for RSLDC, UPSDM, and DDU-GKY.
            </p>
            <div className="space-y-4 border-t border-royal-500/30 pt-6">
              <div>
                <div className="font-semibold">Vageshwari Devi</div>
                <div className="text-sm text-royal-200">Founder & Managing Director</div>
              </div>
              <div>
                <div className="font-semibold">Rajesh Kumar</div>
                <div className="text-sm text-royal-200">Head of Tender Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SECTORS GRID */}
      <section id="sectors" className="py-20 bg-white">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Training Sectors</div>
            <h2 className="section-title">Key Trades & Skill Domains</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button onClick={() => setActiveSector("all")} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeSector === "all" ? "bg-royal-600 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>All Sectors</button>
            {sectors.map(s => (
              <button key={s.id} onClick={() => setActiveSector(s.id)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeSector === s.id ? "bg-royal-600 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{s.title}</button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSectors.map((sector) => (
              <div key={sector.id} className="card-base card-hover p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${sector.accent === 'royal' ? 'bg-royal-50 text-royal-600' : sector.accent === 'teal' ? 'bg-teal-50 text-teal-600' : 'bg-gold-50 text-gold-600'}`}>
                    <sector.icon className="h-6 w-6" />
                  </div>
                  <span className="badge-teal">{sector.placement} Placement</span>
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

      {/* INFRASTRUCTURE SECTION & MODAL */}
      <section id="infrastructure" className="py-20 bg-slatebg">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Infrastructure</div>
            <h2 className="section-title">State-of-the-Art Training Centers</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac) => (
              <div key={fac.id} onClick={() => setActiveFacility(fac)} className="card-base p-6 cursor-pointer hover:border-royal-600 transition-all group">
                <fac.icon className="h-8 w-8 text-royal-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{fac.title}</h3>
                <p className="text-sm text-slate-600">{fac.summary}</p>
                <div className="mt-4 text-sm font-semibold text-royal-600 flex items-center gap-1">
                  View Details <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY MODAL */}
      {activeFacility && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 animate-fadeUp">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-royal-50 rounded-lg text-royal-600"><activeFacility.icon className="h-6 w-6" /></div>
                <h3 className="font-display text-xl font-bold text-slate-900">{activeFacility.title}</h3>
              </div>
              <button onClick={() => setActiveFacility(null)} className="p-2 hover:bg-slate-100 rounded-full"><X className="h-5 w-5 text-slate-500" /></button>
            </div>
            <ul className="space-y-3 mt-6">
              {activeFacility.details.map((detail: string, i: number) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
            <button onClick={() => setActiveFacility(null)} className="btn-primary w-full mt-8">Close Details</button>
          </div>
        </div>
      )}

      {/* TENDER HUB */}
      <TenderHub />

      {/* PROPOSAL ESTIMATOR */}
      <ProposalEstimator />

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="container-app">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="section-eyebrow mx-auto">Success Stories</div>
            <h2 className="section-title">What Our Candidates Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-base p-6">
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

      {/* CONTACT SECTION */}
      <ContactSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
