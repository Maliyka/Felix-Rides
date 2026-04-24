import Link from "next/link";
import { BadgeCheck, Car, Clock3, FileText, Plane, Search, ShieldCheck, UserCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import HeroIntro from "@/components/HeroIntro";
import FleetPreviewSlider from "@/components/FleetPreviewSlider";
import TestimonialSlider from "@/components/TestimonialSlider";

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
        <div className="mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:max-w-2xl">
            <HeroIntro />
          </div>
          <div className="w-full lg:ml-auto lg:max-w-md">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Enquiry</p>
              <h2 className="font-heading text-2xl text-white">Quick Enquiry</h2>
              <p className="mt-1 text-sm text-white/75">Send your request and we’ll reply shortly.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-soft px-4 py-20" delay={0.05}>
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

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20" delay={0.08}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">How It Works</h2>
          <div className="mx-auto section-underline" />
          <p className="mt-4 text-secondary">
            A premium experience in four simple steps—designed for speed, clarity, and comfort.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute left-1/2 top-7 hidden h-px w-[92%] -translate-x-1/2 bg-border md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                icon: Search,
                title: "Search & Plan",
                detail: "Enter pick-up, destination, date & time. Choose one-way or round-trip in seconds."
              },
              {
                icon: Car,
                title: "Choose Vehicle",
                detail: "Select Business, First Class, SUV or MPV—perfectly matched to your journey."
              },
              {
                icon: FileText,
                title: "Enter Details",
                detail: "Add passenger info, luggage, flight number (optional) and special instructions."
              },
              {
                icon: BadgeCheck,
                title: "Confirm & Relax",
                detail: "Receive confirmation by email, then enjoy punctual chauffeur service with live support."
              }
            ].map((step, idx) => (
              <article key={step.title} className="luxury-card relative overflow-hidden p-6">
                <div className="mb-5 flex items-center gap-4 md:flex-col md:items-center md:text-center">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white">
                      <step.icon className="text-accent" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="md:mt-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-accent">Step {idx + 1}</p>
                    <h3 className="mt-2 font-heading text-xl">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm leading-6 text-secondary md:text-center">{step.detail}</p>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mx-auto max-w-7xl px-4 py-20" delay={0.1}>
        <h2 className="section-title">Fleet Preview</h2>
        <div className="section-underline" />
        <div className="mt-10">
          <FleetPreviewSlider />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-soft px-4 py-20" delay={0.12}>
        <div className="mx-auto max-w-7xl">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="section-underline" />
          <div className="mt-10">
            <TestimonialSlider />
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
