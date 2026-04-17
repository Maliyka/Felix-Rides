import Link from "next/link";
import { Suspense } from "react";
import { Clock3, Plane, ShieldCheck, UserCheck } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import AnimatedSection from "@/components/AnimatedSection";
import FleetCard from "@/components/FleetCard";
import TestimonialCard from "@/components/TestimonialCard";
import { fleetData } from "@/lib/fleetData";

export default function HomePage() {
  return (
    <main>
      <section
        className="relative min-h-[88vh] bg-cover bg-center px-4 py-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,12,12,.68), rgba(12,12,12,.68)), url('https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1800&q=80')"
        }}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-8">
          <div className="max-w-2xl text-white">
            <p className="mb-3 uppercase tracking-[0.2em] text-accent">Driven For You</p>
            <h1 className="font-heading text-5xl leading-tight md:text-6xl">Luxury Chauffeur Service in Every Mile</h1>
            <p className="mt-4 text-lg text-white/80">Private airport transfers, executive rides, and bespoke travel in premium comfort.</p>
          </div>
          <Suspense fallback={<div className="luxury-card w-full max-w-5xl p-6 text-sm text-secondary">Loading booking widget...</div>}>
            <BookingWidget />
          </Suspense>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="section-title">How It Works</h2>
        <div className="section-underline" />
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {["Search", "Choose Vehicle", "Enter Details", "Confirm"].map((step, idx) => (
            <article key={step} className="luxury-card p-6">
              <p className="text-xs uppercase tracking-wide text-accent">Step {idx + 1}</p>
              <h3 className="mt-2 font-heading text-xl">{step}</h3>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-soft px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title">Why Clients Choose Felix Rides</h2>
          <div className="section-underline" />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Plane, title: "Flight Monitoring", text: "We track your flight in real time and adjust pick-up accordingly." },
              { icon: ShieldCheck, title: "Free Cancellation", text: "Free cancellation available up to 24 hours before departure." },
              { icon: UserCheck, title: "Meet & Greet", text: "Professional chauffeurs greet you with a personalized name board." },
              { icon: Clock3, title: "24/7 Support", text: "Our team is available around the clock for urgent requests." }
            ].map((item) => (
              <article key={item.title} className="luxury-card p-6">
                <item.icon className="text-accent" />
                <h3 className="mt-4 font-heading text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="section-title">Fleet Preview</h2>
        <div className="section-underline" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {fleetData.slice(0, 3).map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-soft px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="section-underline" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard name="Charlotte M." review="Seamless airport transfer and outstanding professionalism." />
            <TestimonialCard name="James R." review="The S-Class was immaculate and the chauffeur was perfectly punctual." />
            <TestimonialCard name="Olivia K." review="Our corporate guests were deeply impressed by the service quality." />
          </div>
        </div>
      </AnimatedSection>

      <section className="px-4 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 rounded-sm border border-border bg-primary px-8 py-12 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-heading text-3xl text-white">Ready to Ride in Style?</h2>
            <p className="mt-2 text-white/70">Book your premium chauffeur journey in under two minutes.</p>
          </div>
          <Link href="/book" className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white">
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
