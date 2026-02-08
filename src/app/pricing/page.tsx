import { Metadata } from "next";
import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { PublicFooter } from "@/components/public-footer";
import { Check, Sparkles, Star, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Aviation English Pro",
  description: "Choose your Aviation English Pro plan. Free starter, Pro at €24/month, or Premium at €39/month.",
};

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "",
    desc: "Get started with basic aviation vocabulary",
    icon: Zap,
    features: [
      "500 aviation vocabulary flashcards",
      "Basic radiotelephony phrases",
      "Weekly progress reports",
      "Community forum access",
      "1 ATC simulation per week",
    ],
    cta: "Start Free",
    href: "/auth/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "€24",
    period: "/month",
    desc: "Full ICAO test preparation toolkit",
    icon: Star,
    features: [
      "Everything in Free",
      "2,500+ vocabulary with pronunciation",
      "Unlimited AI ATC simulations",
      "ICAO Level 4–6 prep modules",
      "Non-routine situation practice",
      "Accent comprehension training",
      "Progress analytics dashboard",
      "Priority email support",
    ],
    cta: "Start 7-Day Free Trial",
    href: "/auth/signup",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "€39",
    period: "/month",
    desc: "Maximum preparation with advanced features",
    icon: Sparkles,
    features: [
      "Everything in Pro",
      "1-on-1 AI tutor sessions",
      "Role-specific modules (pilot/ATC/crew)",
      "Examiner-style mock tests with scoring",
      "CRM communication training",
      "Institutional-grade reporting",
      "Priority support & coaching",
      "ICAO level guarantee programme",
    ],
    cta: "Start 7-Day Free Trial",
    href: "/auth/signup",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--color-navy-950)]">
      <PublicHeader />

      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-navy-900)] to-[var(--color-navy-950)]" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <p className="text-[var(--color-sky-accent)] font-semibold text-xs uppercase tracking-widest mb-4">Pricing</p>
            <h1 className="text-4xl md:text-6xl text-white mb-5">Invest in Your Aviation Career</h1>
            <p className="text-[var(--color-navy-300)] text-lg">Start free. Upgrade when you&apos;re ready.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-8 rounded-2xl h-full flex flex-col ${
                  plan.highlighted
                    ? "bg-[var(--color-navy-800)] text-white ring-2 ring-[var(--color-sky-accent)] scale-105"
                    : "bg-[var(--color-navy-900)] border border-[var(--color-navy-800)]"
                }`}
              >
                {plan.highlighted && (
                  <div className="text-xs font-semibold text-[var(--color-sky-accent)] uppercase tracking-wider mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-[var(--color-navy-300)]" : "text-[var(--color-navy-400)]"}`}>
                  {plan.desc}
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-sm text-[var(--color-navy-400)]">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-[var(--color-sky-accent)]" : "text-[var(--color-navy-500)]"}`} />
                      <span className={plan.highlighted ? "text-[var(--color-navy-100)]" : "text-[var(--color-navy-300)]"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`w-full py-3 rounded-full font-semibold transition text-center block ${
                    plan.highlighted
                      ? "bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] hover:brightness-110"
                      : "bg-[var(--color-navy-700)] text-white hover:bg-[var(--color-navy-600)]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[var(--color-navy-400)]">
              Have questions? Check our <Link href="/faq" className="text-[var(--color-sky-accent)] font-semibold hover:brightness-110 underline">FAQ</Link> or <Link href="/contact" className="text-[var(--color-sky-accent)] font-semibold hover:brightness-110 underline">contact us</Link>.
            </p>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
