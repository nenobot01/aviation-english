"use client";

import { motion, useInView } from "framer-motion";
import {
  Radio,
  Gauge,
  BookOpen,
  Headphones,
  Shield,
  Globe,
  ChevronDown,
  Check,
  ArrowRight,
  Star,
  Plane,
  AlertTriangle,
  Target,
} from "lucide-react";
import { useRef } from "react";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GlowDot({ color = "sky" }: { color?: "sky" | "amber" | "green" }) {
  const colors = {
    sky: "bg-[var(--color-sky-accent)] shadow-[0_0_8px_var(--color-sky-accent)]",
    amber: "bg-[var(--color-amber-accent)] shadow-[0_0_8px_var(--color-amber-accent)]",
    green: "bg-[var(--color-green-accent)] shadow-[0_0_8px_var(--color-green-accent)]",
  };
  return <span className={`inline-block w-2 h-2 rounded-full ${colors[color]}`} />;
}

const features = [
  {
    icon: Radio,
    title: "Radiotelephony Drills",
    desc: "Practice standard ICAO phraseology with AI-simulated ATC. From taxi clearances to emergency declarations — build muscle memory for the radio.",
  },
  {
    icon: Headphones,
    title: "Listening Comprehension",
    desc: "Train with 50+ accented English recordings from real aviation contexts. Understand controllers from New York to Mumbai to London.",
  },
  {
    icon: AlertTriangle,
    title: "Non-Routine Situations",
    desc: "Master plain English for when standard phraseology isn't enough. Bird strikes, medical emergencies, unusual ATC instructions — be ready for anything.",
  },
  {
    icon: BookOpen,
    title: "Aviation Vocabulary",
    desc: "2,500+ terms across meteorology, navigation, aircraft systems, regulations, and flight operations. Context-rich, not just word lists.",
  },
  {
    icon: Gauge,
    title: "ICAO Test Preparation",
    desc: "Structured prep for ICAO English Proficiency Tests. Target Level 4 (operational) or push for Level 5-6 (extended/expert).",
  },
  {
    icon: Globe,
    title: "Cross-Cultural Communication",
    desc: "Navigate cultural differences in international operations. CRM communication, crew briefings, and multicultural cockpit dynamics.",
  },
];

const testimonials = [
  {
    name: "Capt. Luis Fernandez",
    role: "Airline Pilot — LATAM Airlines",
    text: "The ATC simulation is incredibly realistic. I went from Level 4 to Level 5 in three months. My confidence on frequency has never been higher.",
    avatar: "LF",
  },
  {
    name: "Elena Voronova",
    role: "Air Traffic Controller — Lithuania",
    text: "Every controller should train with this. The accent comprehension module alone is worth the subscription. Real scenarios, real pressure, real improvement.",
    avatar: "EV",
  },
  {
    name: "FO James Okonkwo",
    role: "First Officer — Ethiopian Airlines",
    text: "I needed Level 4 to keep my license. Aviation English Pro got me to Level 5. The non-routine scenario practice was the game-changer.",
    avatar: "JO",
  },
];

const faqs = [
  {
    q: "What ICAO level can I achieve with this platform?",
    a: "Our curriculum is designed to take you from Pre-Operational (Level 3) to Expert (Level 6). Most users target Level 4 (minimum operational) or Level 5 (extended). Your placement test determines your starting point.",
  },
  {
    q: "Is this approved by aviation authorities?",
    a: "While we are not a formal testing center, our curriculum is aligned with ICAO Doc 9835 standards. Many flight schools and airlines use our platform as supplementary training material.",
  },
  {
    q: "How realistic are the ATC simulations?",
    a: "Our AI generates realistic radio communications based on thousands of hours of real ATC recordings. You'll practice with varied accents, speech rates, and background noise levels — just like the real frequency.",
  },
  {
    q: "I'm already Level 4 — is this useful for me?",
    a: "Absolutely. The jump from Level 4 to Level 5 is significant and opens career opportunities. Our advanced modules focus on non-routine situations, nuanced communication, and the extended vocabulary that separates good from excellent.",
  },
  {
    q: "Can flight schools get institutional access?",
    a: "Yes. We offer school licenses with student management dashboards, progress tracking, and custom modules aligned to your syllabus. Contact us for pricing.",
  },
  {
    q: "How often should I practice?",
    a: "We recommend 20-30 minutes daily. Consistency beats intensity for language acquisition. Our spaced repetition system optimizes review timing automatically.",
  },
];

const pricing = [
  {
    name: "Cadet",
    price: "$24",
    period: "/month",
    desc: "For student pilots & ab-initio",
    features: [
      "Standard phraseology drills",
      "1,000+ aviation vocabulary cards",
      "Basic ATC simulations",
      "ICAO Level 4 prep materials",
      "Progress tracking",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Captain",
    price: "$59",
    period: "/month",
    desc: "For licensed pilots & controllers",
    features: [
      "Everything in Cadet",
      "Advanced ATC simulations (unlimited)",
      "Non-routine scenario training",
      "ICAO Level 5-6 prep",
      "Accent comprehension library",
      "Personalized weakness analysis",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Fleet",
    price: "Custom",
    period: "",
    desc: "For airlines & flight schools",
    features: [
      "Everything in Captain",
      "Student/crew management dashboard",
      "Custom training modules",
      "Compliance reporting",
      "LMS integration",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[var(--color-navy-700)] last:border-0">
      <summary className="flex items-center justify-between py-5 cursor-pointer text-lg font-medium text-[var(--color-navy-100)] hover:text-[var(--color-sky-accent)] transition-colors">
        {q}
        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180 text-[var(--color-sky-accent)]" />
      </summary>
      <p className="pb-5 text-[var(--color-navy-300)] leading-relaxed">{a}</p>
    </details>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-navy-950)]/90 backdrop-blur-md border-b border-[var(--color-navy-800)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Plane className="w-6 h-6 text-[var(--color-sky-accent)]" />
            <span className="font-bold text-white tracking-tight text-lg">
              Aviation English<span className="text-[var(--color-sky-accent)]"> Pro</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--color-navy-300)]">
            <a href="/courses" className="hover:text-[var(--color-sky-accent)] transition-colors cursor-pointer">Courses</a>
            <a href="/pricing" className="hover:text-[var(--color-sky-accent)] transition-colors cursor-pointer">Pricing</a>
            <a href="/about" className="hover:text-[var(--color-sky-accent)] transition-colors cursor-pointer">About</a>
            <a href="/faq" className="hover:text-[var(--color-sky-accent)] transition-colors cursor-pointer">FAQ</a>
            <a href="/contact" className="hover:text-[var(--color-sky-accent)] transition-colors cursor-pointer">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a href="/auth/login" className="text-[var(--color-navy-200)] font-medium text-sm px-4 py-2 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer">Sign In</a>
            <a href="/auth/signup" className="bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition cursor-pointer">
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 relative">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(var(--color-sky-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-sky-accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)] via-[var(--color-navy-950)] to-[var(--color-navy-950)]" style={{ opacity: 0.5 }} />

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-navy-700)] bg-[var(--color-navy-900)] text-[var(--color-sky-accent)] text-sm font-mono font-medium mb-6">
              <GlowDot color="green" />
              ICAO Compliant Training Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] text-white mb-6">
              Cleared for
              <br />
              <span className="text-[var(--color-sky-accent)]">Level 6</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-navy-300)] leading-relaxed mb-10 max-w-2xl font-light">
              AI-powered aviation English training for pilots and air traffic
              controllers. Master radiotelephony, pass your ICAO proficiency
              test, and communicate with confidence on any frequency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] px-8 py-4 rounded-full text-lg font-semibold hover:brightness-110 transition-all hover:shadow-lg hover:shadow-[var(--color-sky-glow)] cursor-pointer flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-[var(--color-navy-600)] text-[var(--color-navy-200)] px-8 py-4 rounded-full text-lg font-medium hover:bg-[var(--color-navy-900)] transition-colors cursor-pointer">
                Listen to Demo
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { num: "2,500+", label: "Aviation Terms", dot: "sky" as const },
              { num: "96%", label: "ICAO Pass Rate", dot: "green" as const },
              { num: "50+", label: "Accent Variants", dot: "amber" as const },
              { num: "4.8/5", label: "Pilot Rating", dot: "sky" as const },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-[var(--color-navy-900)] border border-[var(--color-navy-800)] text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 font-mono">
                  {stat.num}
                </div>
                <div className="text-sm text-[var(--color-navy-400)] flex items-center justify-center gap-2">
                  <GlowDot color={stat.dot} />
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 md:py-28 border-y border-[var(--color-navy-800)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl text-white mb-6 leading-tight font-bold">
                  Standard Phraseology Is Not Enough
                </h2>
                <p className="text-[var(--color-navy-300)] text-lg leading-relaxed">
                  You memorized the standard phrases. But what happens when the
                  situation isn&apos;t standard? When ATC speaks too fast, the accent
                  is unfamiliar, or you need plain English to explain an unusual
                  situation? That&apos;s where the real communication gap lives — and
                  where careers and safety are on the line.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: AlertTriangle,
                    title: "70% of Aviation Incidents",
                    desc: "Involve communication failures. Language proficiency is not optional — it's a safety requirement.",
                    color: "red" as const,
                  },
                  {
                    icon: Shield,
                    title: "ICAO Mandate",
                    desc: "Since 2011, all pilots and controllers must demonstrate Level 4 English minimum. Many airlines require Level 5+.",
                    color: "amber" as const,
                  },
                  {
                    icon: Target,
                    title: "Career Gate",
                    desc: "International routes, airline upgrades, and ATC positions increasingly require Level 5-6 certification.",
                    color: "green" as const,
                  },
                ].map((item) => {
                  const dotColor = item.color === "red" ? "sky" : item.color;
                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 p-5 rounded-xl bg-[var(--color-navy-900)] border border-[var(--color-navy-800)]"
                    >
                      <item.icon className="w-6 h-6 text-[var(--color-sky-accent)] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-semibold mb-1 flex items-center gap-2">
                          {item.title}
                          <GlowDot color={dotColor} />
                        </h3>
                        <p className="text-[var(--color-navy-400)] text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl text-white mb-4 font-bold">
                Train Like You Fly
              </h2>
              <p className="text-[var(--color-navy-400)] text-lg">
                Every module simulates real aviation communication scenarios.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="p-8 rounded-xl bg-[var(--color-navy-900)] border border-[var(--color-navy-800)] hover:border-[var(--color-sky-accent)]/30 transition-all group h-full">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-navy-800)] flex items-center justify-center mb-5 group-hover:bg-[var(--color-navy-700)] transition-colors">
                    <f.icon className="w-6 h-6 text-[var(--color-sky-accent)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {f.title}
                  </h3>
                  <p className="text-[var(--color-navy-400)] leading-relaxed text-sm">
                    {f.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 border-y border-[var(--color-navy-800)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl text-white text-center mb-16 font-bold">
              Trusted at 40,000 Feet
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.15}>
                <div className="bg-[var(--color-navy-900)] p-8 rounded-xl border border-[var(--color-navy-800)] h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-[var(--color-amber-accent)] fill-[var(--color-amber-accent)]"
                      />
                    ))}
                  </div>
                  <p className="text-[var(--color-navy-200)] leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-navy-700)] border border-[var(--color-navy-600)] flex items-center justify-center text-[var(--color-sky-accent)] text-sm font-mono font-medium">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {t.name}
                      </div>
                      <div className="text-[var(--color-navy-400)] text-xs">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl text-white mb-4 font-bold">
                Choose Your Flight Plan
              </h2>
              <p className="text-[var(--color-navy-400)] text-lg">
                Start free. Upgrade when you&apos;re ready for takeoff.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <div
                  className={`p-8 rounded-xl h-full flex flex-col ${
                    plan.highlighted
                      ? "bg-[var(--color-navy-800)] border-2 border-[var(--color-sky-accent)] scale-105 shadow-lg shadow-[var(--color-sky-glow)]"
                      : "bg-[var(--color-navy-900)] border border-[var(--color-navy-800)]"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="text-xs font-semibold text-[var(--color-sky-accent)] uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                      <GlowDot color="sky" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-1 text-white">
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-6 text-[var(--color-navy-400)]">
                    {plan.desc}
                  </p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-bold text-white font-mono">
                      {plan.price}
                    </span>
                    <span className="text-sm text-[var(--color-navy-400)]">
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-[var(--color-sky-accent)]" />
                        <span className="text-[var(--color-navy-300)]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-full font-semibold transition cursor-pointer ${
                      plan.highlighted
                        ? "bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] hover:brightness-110"
                        : "bg-[var(--color-navy-800)] text-white hover:bg-[var(--color-navy-700)] border border-[var(--color-navy-700)]"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 border-t border-[var(--color-navy-800)]">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl text-white text-center mb-12 font-bold">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-[var(--color-navy-900)] rounded-xl p-8 border border-[var(--color-navy-800)]">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-950)] to-[var(--color-navy-900)]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl text-white mb-6 font-bold">
              Ready for Departure?
            </h2>
            <p className="text-[var(--color-navy-300)] text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of pilots and controllers who have achieved their
              ICAO proficiency targets. Your Level 6 journey starts now.
            </p>
            <button className="bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] px-10 py-4 rounded-full text-lg font-bold hover:brightness-110 transition cursor-pointer">
              Start Free Trial — No Card Required
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[var(--color-navy-800)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2.5">
              <Plane className="w-5 h-5 text-[var(--color-sky-accent)]" />
              <span className="text-white font-bold">
                Aviation English<span className="text-[var(--color-sky-accent)]"> Pro</span>
              </span>
            </div>
            <div className="text-[var(--color-navy-500)] text-sm">
              A{" "}
              <a
                href="https://mokslasodas.lt"
                className="text-[var(--color-navy-400)] hover:text-[var(--color-sky-accent)] transition-colors cursor-pointer"
              >
                Mokslo Sodas
              </a>{" "}
              product &middot; &copy; {new Date().getFullYear()} All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
