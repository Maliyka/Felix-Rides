import Image from "next/image";
import Link from "next/link";
import { Vehicle } from "@/lib/fleetData";

type FleetCardProps = {
  vehicle: Vehicle;
};

export default function FleetCard({ vehicle }: FleetCardProps) {
  return (
    <article className="luxury-card overflow-hidden">
      <div className="relative h-52 w-full">
        <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-heading text-xl">{vehicle.name}</h3>
          <span className="rounded-sm bg-soft px-2 py-1 text-xs text-secondary">{vehicle.classType}</span>
        </div>
        <ul className="space-y-1 text-sm text-secondary">
          <li>{vehicle.passengers} Passengers</li>
          <li>{vehicle.luggage} Luggage</li>
          {vehicle.features.slice(0, 2).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <Link
          href={`/book?vehicle=${encodeURIComponent(vehicle.name)}`}
          className="inline-block rounded-sm border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent hover:bg-accent hover:text-white"
        >
          Book This Car
        </Link>
      </div>
    </article>
  );
}
