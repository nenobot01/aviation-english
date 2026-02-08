"use client";

import Link from "next/link";
import { Plane, Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const benefits = [
  "AI-powered ATC simulation scenarios",
  "2,500+ aviation vocabulary terms",
  "ICAO Level 4-6 exam preparation",
  "Track progress across all aviation English skills",
];

export default function SignupPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--color-navy-950)] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-8">
            <Plane className="w-7 h-7 text-[var(--color-sky-accent)]" />
            <span className="font-bold text-xl text-white">Aviation English<span className="text-[var(--color-sky-accent)]"> Pro</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Start your journey</h1>
          <p className="text-[var(--color-navy-400)] text-sm">Create your account and begin your aviation English training</p>
        </div>

        <div className="bg-[var(--color-navy-900)] rounded-xl border border-[var(--color-navy-800)] p-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-[var(--color-navy-300)] text-sm font-medium mb-2 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-navy-600)]" />
                <input type="text" placeholder="Capt. John Smith" required className="w-full pl-11 pr-4 h-12 bg-[var(--color-navy-800)]/50 border border-[var(--color-navy-700)] text-white placeholder:text-[var(--color-navy-600)] rounded-xl text-sm focus:outline-none focus:border-[var(--color-sky-accent)]" />
              </div>
            </div>
            <div>
              <label className="text-[var(--color-navy-300)] text-sm font-medium mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-navy-600)]" />
                <input type="email" placeholder="your@email.com" required className="w-full pl-11 pr-4 h-12 bg-[var(--color-navy-800)]/50 border border-[var(--color-navy-700)] text-white placeholder:text-[var(--color-navy-600)] rounded-xl text-sm focus:outline-none focus:border-[var(--color-sky-accent)]" />
              </div>
            </div>
            <div>
              <label className="text-[var(--color-navy-300)] text-sm font-medium mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-navy-600)]" />
                <input type="password" placeholder="Min. 8 characters" required minLength={8} className="w-full pl-11 pr-4 h-12 bg-[var(--color-navy-800)]/50 border border-[var(--color-navy-700)] text-white placeholder:text-[var(--color-navy-600)] rounded-xl text-sm focus:outline-none focus:border-[var(--color-sky-accent)]" />
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] h-12 rounded-xl font-semibold hover:brightness-110 transition disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? (
                <><span className="w-4 h-4 border-2 border-[var(--color-navy-950)]/20 border-t-[var(--color-navy-950)] rounded-full animate-spin" /> Creating account...</>
              ) : (
                <>Create Account <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <div className="mt-7 pt-7 border-t border-[var(--color-navy-800)]">
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[var(--color-navy-500)] text-xs">
                  <Check className="w-3.5 h-3.5 text-[var(--color-sky-accent)] mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 pt-7 border-t border-[var(--color-navy-800)] text-center">
            <p className="text-[var(--color-navy-500)] text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-[var(--color-sky-accent)] hover:brightness-110 font-semibold">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
