"use client";

import { FileText, Download, ShieldCheck, FileCheck2 } from "lucide-react";

const tenderMatrix = [
  { parameter: "Financial Turnover", requirement: "Avg. ₹2 Cr+ (Last 3 FYs)", ourStatus: "₹9.4 Cr Avg. Turnover", evidence: "CA Certified Statements" },
  { parameter: "Training Capacity", requirement: "5,000+ Candidates / Year", ourStatus: "8,500+ Annual Capacity", evidence: "Center-wise Certificate" },
  { parameter: "Past Performance", requirement: "3+ Govt/PSU Projects", ourStatus: "45+ Tenders Executed", evidence: "Completion Certificates" },
  { parameter: "Audit Compliance", requirement: "Statutory Audit (3 FYs)", ourStatus: "Zero Adverse Remarks", evidence: "Signed Audit Reports" },
  { parameter: "Registration Status", requirement: "GST, PAN, Udyam, EPF, ESI", ourStatus: "100% Active & Verified", evidence: "Compliance Sheet" },
  { parameter: "SSC Alignment", requirement: "MoU with relevant SSCs", ourStatus: "Aligned with 6 SSCs", evidence: "Alignment Letters" },
];

export default function TenderHub() {
  return (
    <section id="tenders" className="py-20 bg-white">
      <div className="container-app">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-eyebrow mx-auto">Tender Hub</div>
          <h2 className="section-title">Capability Matrix & Compliance</h2>
          <p className="section-subtitle mx-auto">
            We maintain a 100% compliance track record. Review our bid readiness and download our corporate documents for your tender evaluation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Matrix Table */}
          <div className="lg:col-span-2 card-base overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
              <FileCheck2 className="h-5 w-5 text-royal-600" />
              <h3 className="font-display font-bold text-lg text-slate-900">Tender Eligibility Matrix</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white text-slate-500 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 font-medium">Parameter</th>
                    <th className="px-6 py-4 font-medium">Our Status</th>
                    <th className="px-6 py-4 font-medium">Supporting Evidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {tenderMatrix.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
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

          {/* Downloads Panel */}
          <div className="space-y-4">
            <div className="card-base p-6 bg-royal-600 text-white border-royal-700">
              <h3 className="font-display text-xl font-bold mb-2">Download Center</h3>
              <p className="text-royal-100 text-sm mb-6">
                Instantly download our verified corporate documents to attach with your RFP or tender evaluation.
              </p>
              
              <div className="space-y-3">
                {[
                  { title: "Corporate Profile 2026", size: "3.8 MB" },
                  { title: "Audited Financial Summary", size: "1.9 MB" },
                  { title: "Tender Compliance Checklist", size: "0.7 MB" },
                  { title: "Infrastructure Register", size: "2.4 MB" },
                ].map((doc, i) => (
                  <button 
                    key={i} 
                    onClick={() => alert(`Downloading: ${doc.title}... (Simulation)`)}
                    className="w-full flex items-center justify-between p-3 rounded-lg bg-royal-700/50 hover:bg-royal-700 transition-colors border border-royal-500/30 group text-left"
                  >
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
  );
}