"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--color-navy-950)]">
      <PublicHeader />

      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)] to-[var(--color-navy-950)]" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-[var(--color-sky-accent)] font-semibold text-xs uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-4xl md:text-6xl text-white mb-5">Get in Touch</h1>
            <p className="text-[var(--color-navy-300)] max-w-xl mx-auto text-lg">Have a question about aviation English training? We&apos;re here to help.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: Mail, title: "Email", desc: "support@aviation-english.pro", sub: "We reply within 24 hours" },
              { icon: MessageCircle, title: "Live Chat", desc: "Available in-app", sub: "Pro & Premium plans" },
              { icon: Clock, title: "Hours", desc: "Mon–Fri, 9am–6pm GMT", sub: "Weekend email support" },
            ].map((c) => (
              <div key={c.title} className="bg-[var(--color-navy-900)] p-7 rounded-2xl border border-[var(--color-navy-800)] text-center hover:border-[var(--color-navy-700)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-navy-800)] flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-5 h-5 text-[var(--color-sky-accent)]" />
                </div>
                <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                <p className="text-sm text-[var(--color-navy-200)] font-medium">{c.desc}</p>
                <p className="text-xs text-[var(--color-navy-400)] mt-1">{c.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--color-navy-900)] p-8 lg:p-10 rounded-2xl border border-[var(--color-navy-800)]">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-[var(--color-navy-800)] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Send className="w-7 h-7 text-[var(--color-sky-accent)]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">Message sent!</h3>
                <p className="text-[var(--color-navy-300)] text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[var(--color-navy-200)] text-sm font-medium mb-2 block">Name</label>
                    <input placeholder="Your name" required className="w-full border border-[var(--color-navy-700)] bg-[var(--color-navy-800)]/50 rounded-xl h-12 px-4 text-sm text-white placeholder:text-[var(--color-navy-600)] focus:outline-none focus:border-[var(--color-sky-accent)] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[var(--color-navy-200)] text-sm font-medium mb-2 block">Email</label>
                    <input type="email" placeholder="your@email.com" required className="w-full border border-[var(--color-navy-700)] bg-[var(--color-navy-800)]/50 rounded-xl h-12 px-4 text-sm text-white placeholder:text-[var(--color-navy-600)] focus:outline-none focus:border-[var(--color-sky-accent)] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-[var(--color-navy-200)] text-sm font-medium mb-2 block">Subject</label>
                  <input placeholder="How can we help?" required className="w-full border border-[var(--color-navy-700)] bg-[var(--color-navy-800)]/50 rounded-xl h-12 px-4 text-sm text-white placeholder:text-[var(--color-navy-600)] focus:outline-none focus:border-[var(--color-sky-accent)] transition-colors" />
                </div>
                <div>
                  <label className="text-[var(--color-navy-200)] text-sm font-medium mb-2 block">Message</label>
                  <textarea placeholder="Tell us more..." required className="w-full border border-[var(--color-navy-700)] bg-[var(--color-navy-800)]/50 rounded-xl min-h-[140px] px-4 py-3 text-sm text-white placeholder:text-[var(--color-navy-600)] focus:outline-none focus:border-[var(--color-sky-accent)] transition-colors resize-y" />
                </div>
                <button type="submit" disabled={loading} className="bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] h-12 px-8 rounded-full font-semibold hover:brightness-110 transition disabled:opacity-50">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
