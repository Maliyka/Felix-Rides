import Link from "next/link";
import { Suspense } from "react";
import { Clock3, Plane, ShieldCheck, UserCheck } from "lucide-react";
import BookingWidget from "@/components/BookingWidget";
import AnimatedSection from "@/components/AnimatedSection";
import FleetCard from "@/components/FleetCard";
import TestimonialCard from "@/components/TestimonialCard";
import HeroIntro from "@/components/HeroIntro";
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
          <HeroIntro />
          <Suspense fallback={<div className="luxury-card w-full max-w-5xl p-6 text-sm text-secondary">Loading booking widget...</div>}>
            <BookingWidget />
          </Suspense>
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20" delay={0.05}>
        <h2 className="section-title">How It Works</h2>
        <div className="section-underline" />
        <p className="mt-4 max-w-3xl text-secondary">
          From your first search to the final drop-off, every stage is designed to be simple, transparent, and premium.
          Enjoy fixed pricing, executive vehicles, and professional chauffeurs with real-time communication.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            {
              title: "Search & Plan",
              detail: "Enter your pick-up, destination, date, and time. Choose one-way or round-trip travel in seconds."
            },
            {
              title: "Choose Vehicle",
              detail: "Select the ideal class for your trip, from Business Class to premium SUVs and executive MPVs."
            },
            {
              title: "Enter Details",
              detail: "Add passenger details, luggage count, flight number, and special requests for a tailored experience."
            },
            {
              title: "Confirm & Relax",
              detail: "Receive confirmation by email, then enjoy punctual chauffeur service with live support when needed."
            }
          ].map((step, idx) => (
            <article key={step.title} className="luxury-card relative p-6">
              <p className="text-xs uppercase tracking-wide text-accent">Step {idx + 1}</p>
              <h3 className="mt-2 font-heading text-xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-secondary">{step.detail}</p>
              <div className="mt-4 h-px w-12 bg-accent/70" />
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-soft px-4 py-20" delay={0.08}>
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

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20" delay={0.1}>
        <h2 className="section-title">Fleet Preview</h2>
        <div className="section-underline" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {fleetData.slice(0, 3).map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-soft px-4 py-20" delay={0.12}>
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
          <Link href="/book" className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-luxury">
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
