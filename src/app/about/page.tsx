import { Metadata } from "next";
import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { Radio, Globe, Users, Target, GraduationCap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Aviation English Pro",
  description: "Learn about our mission to help pilots and controllers master aviation English to ICAO standards through AI-powered training.",
};

const values = [
  { icon: Radio, title: "ICAO Compliance", desc: "Every lesson aligns with ICAO Doc 9835 standards. We train to the six-level proficiency scale used by civil aviation authorities worldwide." },
  { icon: Globe, title: "Global Reach", desc: "Serving aviation professionals in 52 countries, from ab-initio cadets to experienced captains upgrading their proficiency rating." },
  { icon: Target, title: "Results-Driven", desc: "94% of our users achieve their target ICAO proficiency level on the first attempt. Real results, not just study hours." },
  { icon: Users, title: "Personalised Training", desc: "AI adapts to your role — whether you're a commercial pilot, ATC officer, flight dispatcher, or cabin crew member." },
];

const stats = [
  { value: "3,500+", label: "Aviation professionals trained" },
  { value: "94%", label: "ICAO test pass rate" },
  { value: "52", label: "Countries reached" },
  { value: "4.8/5", label: "Average rating" },
];

const team = [
  { name: "Capt. James Thornton", role: "Aviation Director", desc: "Former ICAO rater and airline training captain. 20 years in aviation education and 12,000+ flight hours." },
  { name: "Dr. Ana Kovačević", role: "Curriculum Lead", desc: "PhD in Applied Linguistics specialising in aviation discourse analysis and radiotelephony communication." },
  { name: "Mark Chen", role: "AI & Technology", desc: "Speech recognition specialist focused on accented English processing and real-time communication feedback systems." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-navy-950)]">
      <PublicHeader />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)] to-[var(--color-navy-950)]" />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-navy-700)] bg-[var(--color-navy-900)] text-[var(--color-sky-accent)] text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            About Us
          </div>
          <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
            Clear Communication. Safer Skies.
          </h1>
          <p className="text-lg text-[var(--color-navy-200)] leading-relaxed max-w-2xl mb-6">
            Aviation English Pro was built on a critical truth: communication breakdowns remain a leading factor in aviation incidents. Generic English courses don&apos;t prepare you for reading back a complex clearance, declaring an emergency under pressure, or coordinating with controllers across five accents in a single flight.
          </p>
          <p className="text-[var(--color-navy-300)] leading-relaxed max-w-2xl">
            We combine artificial intelligence with operational aviation expertise to deliver English training that mirrors real cockpit and tower environments — from standard radiotelephony to non-routine situations where plain English becomes the difference between a safe outcome and a catastrophe.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-[var(--color-navy-900)] border border-[var(--color-navy-800)]">
              <div className="text-3xl font-bold text-[var(--color-sky-accent)]">{s.value}</div>
              <div className="text-sm text-[var(--color-navy-400)] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 border-y border-[var(--color-navy-800)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[var(--color-navy-900)] p-8 rounded-2xl border border-[var(--color-navy-800)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-navy-800)] flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-[var(--color-sky-accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-[var(--color-navy-300)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-white text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center p-8 rounded-2xl bg-[var(--color-navy-900)] border border-[var(--color-navy-800)]">
                <div className="w-16 h-16 rounded-full bg-[var(--color-navy-700)] flex items-center justify-center text-[var(--color-sky-accent)] text-lg font-semibold mx-auto mb-4">
                  {t.name.split(" ").map(w => w[0]).join("")}
                </div>
                <h3 className="font-semibold text-white">{t.name}</h3>
                <p className="text-sm text-[var(--color-navy-400)] mb-3">{t.role}</p>
                <p className="text-sm text-[var(--color-navy-300)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6 border-t border-[var(--color-navy-800)] bg-[var(--color-navy-900)]">
        <div className="max-w-4xl mx-auto text-center">
          <GraduationCap className="w-10 h-10 text-[var(--color-sky-accent)] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl text-white mb-6">Our Methodology</h2>
          <p className="text-[var(--color-navy-300)] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            We use a task-based approach grounded in real operational scenarios. Every module follows the same cycle: observe authentic aviation communication, practise in AI-simulated ATC environments, receive detailed feedback on pronunciation and phraseology, and apply skills under increasing cognitive load.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { step: "01", title: "Assess", desc: "Placement test maps your current ICAO level and identifies gaps in pronunciation, structure, vocabulary, fluency, comprehension, and interaction." },
              { step: "02", title: "Practise", desc: "AI simulates ATC controllers, fellow pilots, and ground crew in realistic radiotelephony and face-to-face scenarios." },
              { step: "03", title: "Progress", desc: "Detailed analytics track improvement across all six ICAO descriptors so you know exactly where you stand." },
            ].map((s) => (
              <div key={s.step} className="p-6 rounded-xl bg-[var(--color-navy-950)] border border-[var(--color-navy-800)]">
                <div className="text-[var(--color-sky-accent)] text-sm font-mono mb-3">{s.step}</div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-[var(--color-navy-400)] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
