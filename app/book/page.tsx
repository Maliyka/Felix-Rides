import type { Metadata } from "next";
import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Request a quote and book your premium chauffeur ride."
};

export default function BookPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <header className="mb-10">
        <h1 className="font-heading text-5xl">Book Your Ride</h1>
        <p className="mt-4 max-w-2xl text-secondary">Fill out your trip details and we will send an instant booking confirmation by email.</p>
      </header>
      <Suspense fallback={<p className="text-secondary">Loading booking form...</p>}>
        <BookingForm />
      </Suspense>
    </main>
  );
}
