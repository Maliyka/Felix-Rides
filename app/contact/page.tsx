import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Felix Rides for premium private chauffeur bookings."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <header className="mb-10">
        <h1 className="font-heading text-5xl">Contact Us</h1>
        <p className="mt-4 text-secondary">Speak to our team about bookings, custom requests and business accounts.</p>
      </header>
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-5">
          <div className="luxury-card p-6 text-sm text-secondary">
            <p><span className="text-primary">Phone:</span> +44 20 4617 1512</p>
            <p className="mt-2"><span className="text-primary">Email:</span> info@felixrides.com</p>
            <p className="mt-2"><span className="text-primary">Address:</span> Regus, 450 BATH ROAD, LONGFORD, HEATHROW, UB7 0EB</p>
            <p className="mt-2">
              <span className="text-primary">WhatsApp:</span>{" "}
              <a href="https://wa.me/442046171512" target="_blank" rel="noreferrer" className="text-accent">
                Chat with us
              </a>
            </p>
          </div>
          <div className="overflow-hidden rounded-sm border border-border">
            <iframe
              title="Felix Rides map"
              src="https://maps.google.com/maps?q=Regus%2C%20450%20BATH%20ROAD%2C%20LONGFORD%2C%20HEATHROW%2C%20UB7%200EB&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
