"use client";

import { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProposalEstimator() {
  const [form, setForm] = useState({
    projectType: "PMKVY 4.0",
    sector: "IT / ITeS",
    candidates: "100",
    location: "Rajasthan"
  });

  const [calculated, setCalculated] = useState(false);

  // Simple estimation logic for demonstration
  const estimateDays = Math.ceil(parseInt(form.candidates) / 30) * 3;
  const trainersRequired = Math.ceil(parseInt(form.candidates) / 30);

  return (
    <section id="estimator" className="py-20 bg-slatebg">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-eyebrow">Interactive Tool</div>
            <h2 className="section-title">Instant Project Scope Estimator</h2>
            <p className="section-subtitle">
              Planning a skill development tender or CSR project? Select your parameters below to generate an instant scope summary, including estimated trainers and batch timelines.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                <span>Aligned with PMKVY & State Mission norms</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                <span>Includes SSC assessment & certification</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                <span>100% SDMS & biometric compliance</span>
              </div>
            </div>
          </div>

          <div className="card-base p-8 bg-white shadow-cardHover border-royal-100">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <Calculator className="h-6 w-6 text-royal-600" />
              <h3 className="font-display text-xl font-bold text-slate-900">Calculate Your Scope</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                <select 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none"
                  value={form.projectType}
                  onChange={(e) => setForm({...form, projectType: e.target.value})}
                >
                  <option>PMKVY 4.0</option>
                  <option>DDU-GKY</option>
                  <option>State Skill Mission (RSLDC/UPSDM)</option>
                  <option>Corporate CSR Project</option>
                  <option>Custom Upskilling (RPL)</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Sector</label>
                  <select 
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none"
                    value={form.sector}
                    onChange={(e) => setForm({...form, sector: e.target.value})}
                  >
                    <option>IT / ITeS</option>
                    <option>Healthcare</option>
                    <option>Apparel</option>
                    <option>Retail</option>
                    <option>Hospitality</option>
                    <option>Solar & Electrical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Candidates</label>
                  <input 
                    type="number" 
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none"
                    value={form.candidates}
                    onChange={(e) => setForm({...form, candidates: e.target.value})}
                    min="30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <select 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none"
                  value={form.location}
                  onChange={(e) => setForm({...form, location: e.target.value})}
                >
                  <option>Rajasthan</option>
                  <option>Uttar Pradesh</option>
                  <option>Madhya Pradesh</option>
                  <option>Gujarat</option>
                  <option>Pan-India</option>
                </select>
              </div>

              <button 
                onClick={() => setCalculated(true)}
                className="btn-primary w-full mt-2"
              >
                Generate Scope Summary <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {calculated && (
              <div className="mt-6 p-4 rounded-xl bg-teal-50 border border-teal-100 animate-fadeUp">
                <h4 className="font-bold text-teal-900 mb-2">Estimated Scope Summary</h4>
                <ul className="text-sm text-teal-800 space-y-1">
                  <li><strong>Project:</strong> {form.projectType} ({form.sector})</li>
                  <li><strong>Target:</strong> {form.candidates} candidates in {form.location}</li>
                  <li><strong>Trainers Required:</strong> {trainersRequired} (30:1 ratio)</li>
                  <li><strong>Estimated Duration:</strong> {estimateDays} days per batch</li>
                  <li><strong>Placement Target:</strong> {Math.round(parseInt(form.candidates) * 0.85)} candidates (85%)</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-teal-200">
                  <a href="#contact" className="text-sm font-bold text-teal-700 hover:text-teal-900 underline">
                    Discuss this scope with our tender team
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}