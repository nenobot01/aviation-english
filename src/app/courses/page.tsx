import { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { Radio, Headphones, AlertTriangle, BookOpen, GraduationCap, Globe, ArrowRight, Gauge, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Courses — Aviation English Pro",
  description: "Comprehensive aviation English courses covering ATC communication, ICAO phraseology, emergency procedures, and proficiency test preparation.",
};

const courses = [
  {
    icon: Radio,
    title: "Radiotelephony Communication",
    desc: "Master standard ICAO phraseology for all phases of flight — from pre-departure clearance through taxi, takeoff, en-route, approach, and landing. AI-simulated ATC exchanges build fluency and confidence on frequency.",
    lessons: 72,
    duration: "22 hours",
    level: "All Levels",
  },
  {
    icon: Headphones,
    title: "Listening & Accent Comprehension",
    desc: "Train with 60+ recordings featuring accented English from controllers and pilots worldwide. Understand rapid-fire instructions from New York TRACON, Mumbai ACC, London Approach, and more.",
    lessons: 48,
    duration: "16 hours",
    level: "Intermediate+",
  },
  {
    icon: AlertTriangle,
    title: "Non-Routine & Emergency English",
    desc: "When standard phraseology isn't enough, plain English becomes critical. Practise bird strikes, engine failures, medical emergencies, security threats, and weather diversions under realistic cognitive load.",
    lessons: 36,
    duration: "12 hours",
    level: "Intermediate+",
  },
  {
    icon: BookOpen,
    title: "Aviation Vocabulary Mastery",
    desc: "2,500+ terms across meteorology, navigation, aircraft systems, regulations, airport operations, and flight planning. Context-rich learning with pronunciation drills — not just word lists.",
    lessons: 56,
    duration: "18 hours",
    level: "All Levels",
  },
  {
    icon: GraduationCap,
    title: "ICAO Level 4–6 Test Preparation",
    desc: "Structured preparation for ICAO English Proficiency Tests aligned with Doc 9835 rating descriptors. Target Level 4 (Operational), or push for Level 5 (Extended) and Level 6 (Expert).",
    lessons: 60,
    duration: "24 hours",
    level: "All Levels",
  },
  {
    icon: Globe,
    title: "Cross-Cultural CRM Communication",
    desc: "Navigate cultural differences in international flight operations. Crew Resource Management communication, multicultural cockpit dynamics, assertiveness training, and crew briefing skills.",
    lessons: 28,
    duration: "10 hours",
    level: "Intermediate+",
  },
  {
    icon: Gauge,
    title: "ATC English for Controllers",
    desc: "Specialised modules for air traffic controllers covering coordination phraseology, traffic information, weather advisories, runway incursion scenarios, and CPDLC/datalink communication.",
    lessons: 44,
    duration: "15 hours",
    level: "Intermediate+",
  },
  {
    icon: MessageCircle,
    title: "Cabin Crew & Ground Operations",
    desc: "Aviation English for cabin crew, dispatchers, and ground handlers. Passenger communication, security procedures, ramp safety briefings, and inter-departmental coordination.",
    lessons: 32,
    duration: "10 hours",
    level: "All Levels",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[var(--color-navy-950)]">
      <PublicHeader />

      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)] to-[var(--color-navy-950)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-[var(--color-sky-accent)] font-semibold text-xs uppercase tracking-widest mb-4">Courses</p>
            <h1 className="text-4xl md:text-6xl text-white mb-5">Aviation English Modules</h1>
            <p className="text-[var(--color-navy-300)] max-w-xl mx-auto text-lg">Comprehensive courses built around real operational scenarios. Study at your own pace with AI-powered ATC simulation and feedback.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((c) => (
              <div key={c.title} className="bg-[var(--color-navy-900)] p-8 rounded-2xl border border-[var(--color-navy-800)] hover:border-[var(--color-navy-700)] transition-all group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-navy-800)] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <c.icon className="w-6 h-6 text-[var(--color-sky-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--color-sky-accent)] transition-colors">{c.title}</h3>
                    <p className="text-[var(--color-navy-300)] text-sm leading-relaxed mb-4">{c.desc}</p>
                    <div className="flex flex-wrap gap-3 text-xs text-[var(--color-navy-400)]">
                      <span className="bg-[var(--color-navy-800)] px-2.5 py-1 rounded-full">{c.lessons} lessons</span>
                      <span className="bg-[var(--color-navy-800)] px-2.5 py-1 rounded-full">{c.duration}</span>
                      <span className="bg-[var(--color-navy-800)] px-2.5 py-1 rounded-full">{c.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-[var(--color-navy-900)] rounded-2xl p-10 border border-[var(--color-navy-800)]">
            <h3 className="text-2xl font-semibold text-white mb-3">Ready to start training?</h3>
            <p className="text-[var(--color-navy-400)] mb-6">Begin with a free placement test to assess your ICAO level.</p>
            <Link href="/auth/signup" className="inline-flex items-center gap-2 bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] px-8 py-3 rounded-full font-semibold hover:brightness-110 transition">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
