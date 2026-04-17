import type { Metadata } from "next";
import { Briefcase, CarTaxiFront, Landmark, Plane, Route } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description: "Premium private transfer services for airport, business and events."
};

const services = [
  { icon: Plane, title: "Airport Transfers", description: "Prompt airport pick-up and drop-off with flight monitoring included." },
  { icon: Briefcase, title: "Corporate Travel", description: "Executive transport designed for meetings, roadshows, and business events." },
  { icon: Landmark, title: "Wedding & Events", description: "Elegant chauffeur service for weddings, galas, and special occasions." },
  { icon: CarTaxiFront, title: "City Tours", description: "Discover London landmarks with private chauffeured comfort." },
  { icon: Route, title: "Long Distance Rides", description: "Comfortable and reliable intercity rides for private and corporate clients." }
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <header className="mb-12 text-center">
        <h1 className="font-heading text-5xl">Services</h1>
        <p className="mt-4 text-secondary">Tailored luxury transportation for every travel need.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </main>
  );
}
