"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<"whatsapp" | "email" | null>(null);

  // Replace with your actual phone number (with country code, no spaces or dashes)
  const WHATSAPP_NUMBER = "919876543210";
  const EMAIL_ADDRESS = "info@vageshwariskill.com";

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Organization:* ${formData.organization || "N/A"}%0A%0A*Message:*%0A${formData.message}`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted("whatsapp");
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Tender/Partnership Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    setSubmitted("email");
  };

  return (
    <section id="contact" className="py-20 bg-slatebg">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="section-eyebrow">Get in Touch</div>
            <h2 className="section-title">Let's Discuss Your Skilling Requirements</h2>
            <p className="section-subtitle mb-8">
              Whether you are a government authority floating a new tender, a corporate looking for CSR implementation, or a candidate seeking training, we are here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-royal-50 text-royal-600 rounded-xl">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Head Office</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Vageshwari Skill Solution,<br />
                    Sector 4, Hiran Magri,<br />
                    Udaipur, Rajasthan - 313002
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone / WhatsApp</h4>
                  <p className="text-sm text-slate-600 mt-1">+91 98765 43210</p>
                  <p className="text-sm text-slate-600">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold-50 text-gold-600 rounded-xl">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Official Email</h4>
                  <p className="text-sm text-slate-600 mt-1">{EMAIL_ADDRESS}</p>
                  <p className="text-sm text-slate-600">tenders@vageshwariskill.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="card-base p-8 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fadeUp py-12">
                <div className="h-20 w-20 bg-teal-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Redirecting...</h3>
                <p className="text-slate-600 mb-6 max-w-sm">
                  {submitted === "whatsapp" 
                    ? "We are opening WhatsApp with your message pre-filled. Just hit send!" 
                    : "We are opening your email client with the message ready to send."}
                </p>
                <button 
                  onClick={() => setSubmitted(null)} 
                  className="btn-ghost"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input 
                      required 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none focus:ring-1 focus:ring-royal-600" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                    <input 
                      required 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none focus:ring-1 focus:ring-royal-600" 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input 
                    required 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none focus:ring-1 focus:ring-royal-600" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Organization / Department</label>
                  <input 
                    type="text" 
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none focus:ring-1 focus:ring-royal-600" 
                    placeholder="Company or Govt Dept" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                  <textarea 
                    required 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-royal-600 focus:outline-none focus:ring-1 focus:ring-royal-600 resize-none" 
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleWhatsApp}
                    className="btn-teal flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white border-none"
                  >
                    <MessageCircle className="h-5 w-5" /> Send via WhatsApp
                  </button>
                  <button 
                    onClick={handleEmail}
                    className="btn-primary flex-1"
                  >
                    <Mail className="h-5 w-5" /> Send via Email
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}