"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Radio, Headphones, AlertTriangle, Gauge, BarChart3, User, Plane, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const sidebarLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/phraseology", label: "Phraseology", icon: Radio },
  { href: "/dashboard/listening", label: "Listening", icon: Headphones },
  { href: "/dashboard/non-routine", label: "Non-Routine", icon: AlertTriangle },
  { href: "/dashboard/exam-prep", label: "ICAO Prep", icon: Gauge },
  { href: "/dashboard/progress", label: "Progress", icon: BarChart3 },
  { href: "/dashboard/profile", label: "Profile", icon: User },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-navy-950)]">
      {/* Top bar */}
      <nav className="bg-[var(--color-navy-900)] h-16 fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-navy-800)]">
        <div className="h-full px-4 lg:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[var(--color-navy-400)]">
              <Menu className="w-5 h-5" />
            </button>
            <Link href="/dashboard" className="flex items-center gap-2.5">
              <Plane className="w-6 h-6 text-[var(--color-sky-accent)]" />
              <span className="font-bold text-white hidden sm:block">Aviation English<span className="text-[var(--color-sky-accent)]"> Pro</span></span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-white/[0.04] rounded-full px-3.5 py-2 border border-white/[0.06]">
              <span className="text-xs text-[var(--color-sky-accent)] font-mono font-medium">Pro Plan</span>
            </div>
            <Link href="/dashboard/profile" className="w-10 h-10 rounded-full bg-[var(--color-navy-700)] border border-[var(--color-navy-600)] flex items-center justify-center text-[var(--color-sky-accent)] font-mono font-semibold text-xs">
              LF
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
          <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-[var(--color-navy-900)] z-50 md:hidden overflow-y-auto">
            <div className="p-5">
              <div className="flex items-center justify-between mb-8">
                <Link href="/dashboard" className="flex items-center gap-2.5">
                  <Plane className="w-6 h-6 text-[var(--color-sky-accent)]" />
                  <span className="font-bold text-white">Aviation English<span className="text-[var(--color-sky-accent)]"> Pro</span></span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="text-[var(--color-navy-600)]"><X className="w-5 h-5" /></button>
              </div>
              <SidebarNav pathname={pathname} onNavigate={() => setMobileOpen(false)} />
            </div>
          </aside>
        </>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-16 bottom-0 w-[250px] bg-[var(--color-navy-900)] overflow-y-auto hidden md:block border-r border-[var(--color-navy-800)]">
        <div className="p-4">
          <SidebarNav pathname={pathname} />
        </div>
      </aside>

      <main className="pt-16 md:pl-[250px]">
        <div className="p-6 lg:p-8 max-w-[1100px]">{children}</div>
      </main>
    </div>
  );
}

function SidebarNav({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <>
      <nav className="space-y-1">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all text-sm ${
                isActive ? "bg-[var(--color-navy-800)] text-[var(--color-sky-accent)] font-medium" : "text-[var(--color-navy-500)] hover:text-[var(--color-navy-300)] hover:bg-[var(--color-navy-800)]/50"
              }`}
            >
              <link.icon className={`w-[17px] h-[17px] ${isActive ? "text-[var(--color-sky-accent)]" : ""}`} />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <Link href="/" className="flex items-center gap-3 px-3.5 py-2.5 mt-8 text-[var(--color-navy-700)] hover:text-[var(--color-navy-400)] transition-colors text-sm">
        <LogOut className="w-[17px] h-[17px]" />
        <span>Sign Out</span>
      </Link>
    </>
  );
}
