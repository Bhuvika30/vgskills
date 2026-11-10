"use client";
import { useEffect, useState } from "react";
import { Menu, X, GraduationCap, Download, FileSearch, Phone } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
          <a href="#contact" className="btn-primary px-4 py-2.5"><FileSearch className="h-4 w-4" /> Tender Inquiry</a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 lg:hidden">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pb-6 pt-4 shadow-lg">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">{link.label}</a>
          ))}
          <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-slate-100">
            <a href="tel:+919876543210" className="flex justify-center items-center gap-2 rounded-xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-700"><Phone className="h-4 w-4" /> +91 98765 43210</a>
          </div>
        </div>
      )}
    </header>
  );
}