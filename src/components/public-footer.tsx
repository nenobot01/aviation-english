import Link from "next/link";
import { Plane } from "lucide-react";

const footerLinks = {
  Platform: [
    { href: "/courses", label: "Courses" },
    { href: "/pricing", label: "Pricing" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/faq", label: "FAQ" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

export function PublicFooter() {
  return (
    <footer className="bg-[var(--color-navy-950)] border-t border-[var(--color-navy-800)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Plane className="w-5 h-5 text-[var(--color-sky-accent)]" />
              <span className="text-white font-semibold">Aviation English Pro</span>
            </div>
            <p className="text-sm text-[var(--color-navy-400)] leading-relaxed max-w-xs">
              AI-powered aviation English training for pilots, controllers, and aviation professionals worldwide. A Mokslo Sodas product.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-[var(--color-navy-300)] text-xs uppercase tracking-wider mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[var(--color-navy-500)] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--color-navy-800)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-navy-600)]">
            © {new Date().getFullYear()} Aviation English Pro. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-navy-600)]">
            Part of the <a href="https://mokslasodas.lt" className="text-[var(--color-navy-400)] hover:text-white transition-colors">Mokslo Sodas</a> education platform
          </p>
        </div>
      </div>
    </footer>
  );
}
