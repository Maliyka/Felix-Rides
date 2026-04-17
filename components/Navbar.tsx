"use client";

import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book Now" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="border-b border-border bg-soft">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-secondary md:text-sm">
          <a href="tel:+447700900123" className="inline-flex items-center gap-2 hover:text-primary">
            <PhoneCall size={14} />
            +44 7700 900123
          </a>
          <a href="mailto:bookings@felixrides.com" className="hover:text-primary">
            bookings@felixrides.com
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-heading text-2xl text-primary">
          Felix Rides
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm uppercase tracking-wide transition-colors ${
                pathname === item.href ? "text-accent" : "text-primary hover:text-accent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="rounded-sm border border-border p-2 text-primary md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm uppercase tracking-wide ${
                  pathname === item.href ? "text-accent" : "text-primary"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
