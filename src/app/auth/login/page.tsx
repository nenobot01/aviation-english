"use client";

import Link from "next/link";
import { Plane, Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
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
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <Plane className="w-7 h-7 text-[var(--color-sky-accent)]" />
            <span className="font-semibold text-xl text-white">Aviation English <span className="text-[var(--color-sky-accent)]">Pro</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-[var(--color-navy-400)] text-sm">Sign in to continue your aviation English training</p>
        </div>

        <div className="bg-[var(--color-navy-900)] rounded-2xl border border-[var(--color-navy-800)] p-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-[var(--color-navy-300)] text-sm font-medium mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-navy-600)]" />
                <input type="email" placeholder="your@email.com" required className="w-full pl-11 pr-4 h-12 bg-[var(--color-navy-800)]/50 border border-[var(--color-navy-700)] text-white placeholder:text-[var(--color-navy-600)] rounded-xl text-sm focus:outline-none focus:border-[var(--color-sky-accent)]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[var(--color-navy-300)] text-sm font-medium">Password</label>
                <Link href="#" className="text-[var(--color-navy-400)] text-xs hover:text-white transition-colors">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-navy-600)]" />
                <input type="password" placeholder="••••••••" required className="w-full pl-11 pr-4 h-12 bg-[var(--color-navy-800)]/50 border border-[var(--color-navy-700)] text-white placeholder:text-[var(--color-navy-600)] rounded-xl text-sm focus:outline-none focus:border-[var(--color-sky-accent)]" />
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] h-12 rounded-xl font-semibold hover:brightness-110 transition disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? (
                <><span className="w-4 h-4 border-2 border-[var(--color-navy-800)]/20 border-t-[var(--color-navy-800)] rounded-full animate-spin" /> Signing in...</>
              ) : (
                <>Sign In <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>

          <div className="mt-7 pt-7 border-t border-[var(--color-navy-800)] text-center">
            <p className="text-[var(--color-navy-500)] text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-[var(--color-sky-accent)] hover:brightness-110 font-semibold">Create one</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
