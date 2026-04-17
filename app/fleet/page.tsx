import type { Metadata } from "next";
import FleetCard from "@/components/FleetCard";
import { fleetData } from "@/lib/fleetData";

export const metadata: Metadata = {
  title: "Our Fleet",
  description: "Explore our luxury chauffeur fleet for every occasion."
};

export default function FleetPage() {
  return (
    <main className="px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <h1 className="font-heading text-5xl">Our Fleet</h1>
          <p className="mt-4 text-secondary">Business, first class, MPV and premium SUV options for every journey.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fleetData.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </main>
  );
}
