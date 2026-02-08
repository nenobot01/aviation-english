"use client";

import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  { q: "Who is Aviation English Pro designed for?", a: "Pilots, air traffic controllers, cabin crew, flight dispatchers, and other aviation professionals who need English proficiency for their licence or daily operations. Whether you're preparing for an ICAO English Proficiency Test, upgrading your level, or building confidence on frequency." },
  { q: "How is this different from general English courses?", a: "Every lesson, scenario, and vocabulary set is built around real aviation contexts. You learn English through operational practice — not English with an aviation word list bolted on. Our AI simulates actual ATC exchanges, emergency declarations, and crew communications with realistic pressure and pacing." },
  { q: "What ICAO levels do you prepare for?", a: "We cover the full ICAO language proficiency scale. Most users target Level 4 (Operational) — the minimum for international operations. Our advanced modules prepare you for Level 5 (Extended) and Level 6 (Expert), covering all six descriptors: pronunciation, structure, vocabulary, fluency, comprehension, and interactions." },
  { q: "How does the AI ATC simulation work?", a: "Our AI generates realistic radiotelephony exchanges based on real-world scenarios. It plays the role of approach control, tower, ground, or centre — issuing clearances, traffic information, and weather advisories. It adapts to your level, introduces non-routine situations progressively, and provides detailed feedback on phraseology accuracy and response time." },
  { q: "Does it help with accent comprehension?", a: "Yes — this is one of our strongest modules. We include 60+ recordings featuring accented English from controllers and pilots across the Americas, Europe, Asia, Africa, and the Middle East. Understanding varied accents is critical for international operations and a common weakness in ICAO testing." },
  { q: "Is there content for air traffic controllers specifically?", a: "Absolutely. We have dedicated ATC modules covering coordination phraseology, traffic information delivery, weather advisory communication, runway incursion scenarios, and CPDLC/datalink procedures. The curriculum was designed with input from active controllers at European and Asian ACC facilities." },
  { q: "Can my airline or training organisation get a group licence?", a: "Yes. We offer institutional plans with admin dashboards, fleet-wide progress tracking, and custom modules tailored to your operation type (regional, long-haul, cargo, military). Contact us for a quote — we work with airlines, ANSPs, and flight training organisations worldwide." },
  { q: "What's included in the free plan?", a: "The free plan includes 500 aviation vocabulary flashcards, basic radiotelephony phrase practice, weekly progress reports, and community forum access. It's enough to experience the platform and start building your aviation English foundation before committing to a paid plan." },
  { q: "Can I cancel my subscription anytime?", a: "Yes, absolutely. No long-term contracts. Cancel from your profile page at any time and retain access until the end of your current billing period. We also offer a 7-day free trial on Pro and Premium plans." },
  { q: "How quickly will I see improvement?", a: "Most users report noticeable improvement in radiotelephony confidence within 2–3 weeks of daily practice (20–30 minutes). For ICAO test preparation, we recommend starting at least 8–12 weeks before your test date to allow time for all six proficiency descriptors to develop." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[var(--color-navy-800)] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left cursor-pointer group">
        <span className="font-medium text-[var(--color-navy-100)] pr-4 group-hover:text-[var(--color-sky-accent)] transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-[var(--color-navy-500)] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="pb-5 text-[var(--color-navy-300)] text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-[var(--color-navy-950)]">
      <PublicHeader />

      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)] to-[var(--color-navy-950)]" />
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-[var(--color-sky-accent)] font-semibold text-xs uppercase tracking-widest mb-4">FAQ</p>
            <h1 className="text-4xl md:text-6xl text-white mb-5">Frequently Asked Questions</h1>
            <p className="text-[var(--color-navy-300)] text-lg">Everything you need to know about Aviation English Pro.</p>
          </div>

          <div className="bg-[var(--color-navy-900)] rounded-2xl p-8 border border-[var(--color-navy-800)]">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-16 text-center bg-[var(--color-navy-900)] rounded-2xl p-10 border border-[var(--color-navy-800)]">
            <h3 className="text-xl font-semibold text-white mb-3">Still have questions?</h3>
            <p className="text-[var(--color-navy-400)] text-sm mb-5">Our team is happy to help with anything about aviation English training.</p>
            <Link href="/contact" className="text-[var(--color-sky-accent)] hover:brightness-110 font-semibold text-sm">Contact us →</Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
