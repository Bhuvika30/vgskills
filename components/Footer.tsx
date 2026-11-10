"use client";

import { useEffect, useState } from "react";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  // Initialize with a safe static year to prevent hydration mismatch
  const [year, setYear] = useState(2026);

  // Update to the actual current year on the client side after mounting
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container-app grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
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
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering India's youth through quality vocational training and seamless tender execution across Government and CSR sectors.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-teal-400 transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-teal-400 mt-0.5 shrink-0" />
              <span>Sector 4, Hiran Magri,<br />Udaipur, Rajasthan - 313002</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-teal-400 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-teal-400 shrink-0" />
              <span>info@vageshwariskill.com</span>
            </li>
          </ul>
        </div>

        {/* Legal / Compliance */}
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
  );
}