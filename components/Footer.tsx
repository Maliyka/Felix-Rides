import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-soft">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
        <div>
          <h3 className="font-heading text-2xl">Felix Rides</h3>
          <p className="mt-3 text-sm text-secondary">Driven For You</p>
        </div>
        <div>
          <h4 className="font-heading text-lg">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-secondary">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/fleet">Fleet</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/book">Book Now</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-secondary">
            <li>+44 20 4617 1512</li>
            <li>info@felixrides.com</li>
            <li>Regus, 450 BATH ROAD, LONGFORD, HEATHROW, UB7 0EB</li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg">Follow</h4>
          <div className="mt-3 flex gap-3 text-secondary">
            <a href="#" aria-label="Website"><Globe size={18} /></a>
            <a href="mailto:info@felixrides.com" aria-label="Email"><Mail size={18} /></a>
            <a href="tel:+442046171512" aria-label="Phone"><Phone size={18} /></a>
          </div>
        </div>
      </div>
      <p className="border-t border-border py-4 text-center text-xs text-secondary">
        © {new Date().getFullYear()} Felix Rides. All rights reserved.
      </p>
    </footer>
  );
}
