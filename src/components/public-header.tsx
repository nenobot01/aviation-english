"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function PublicHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-navy-950)]/90 backdrop-blur-md border-b border-[var(--color-navy-800)] shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-[var(--color-sky-accent)]" />
            <span className="font-semibold text-white tracking-tight text-lg">
              Aviation English<span className="text-[var(--color-sky-accent)]"> Pro</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-white bg-[var(--color-navy-800)]"
                    : "text-[var(--color-navy-300)] hover:text-white hover:bg-[var(--color-navy-800)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth/login" className="text-[var(--color-navy-200)] font-medium text-sm px-4 py-2 rounded-lg hover:bg-[var(--color-navy-800)] transition-colors">
              Sign In
            </Link>
            <Link href="/auth/signup" className="bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition">
              Start Free Trial
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[var(--color-navy-200)] p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-[var(--color-navy-950)]/95 backdrop-blur-md border-b border-[var(--color-navy-800)] md:hidden">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 px-4 text-sm font-medium rounded-xl ${
                  pathname === link.href ? "text-white bg-[var(--color-navy-800)]" : "text-[var(--color-navy-300)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link href="/auth/login" onClick={() => setOpen(false)} className="w-full text-center border border-[var(--color-navy-700)] text-[var(--color-navy-200)] rounded-full py-3 font-medium text-sm">
                Sign In
              </Link>
              <Link href="/auth/signup" onClick={() => setOpen(false)} className="w-full text-center bg-[var(--color-sky-accent)] text-[var(--color-navy-950)] rounded-full py-3 font-semibold text-sm">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
