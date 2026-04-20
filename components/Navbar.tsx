"use client";

import Link from "next/link";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book Now" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="border-b border-border bg-soft">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-secondary md:text-sm">
          <a href="tel:+442046171512" className="inline-flex items-center gap-2 hover:text-primary">
            <PhoneCall size={14} />
            +44 20 4617 1512
          </a>
          <a href="mailto:info@felixrides.com" className="hover:text-primary">
            info@felixrides.com
          </a>
        </div>
      </div>
      <motion.div
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4"
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Link href="/" className="font-heading text-2xl text-primary transition-transform duration-300 hover:scale-[1.02]">
          Felix Rides
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.href === "/book"
                  ? "rounded-sm border border-accent bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-luxury"
                  : `text-sm uppercase tracking-wide transition-colors duration-300 ${
                      pathname === item.href ? "text-accent" : "text-primary hover:text-accent"
                    }`
              }
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
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-border bg-white px-4 py-3 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={
                      item.href === "/book"
                        ? "inline-block rounded-sm border border-accent bg-accent px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white"
                        : `text-sm uppercase tracking-wide ${pathname === item.href ? "text-accent" : "text-primary"}`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
