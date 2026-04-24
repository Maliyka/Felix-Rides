"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";

const testimonials = [
  { name: "Charlotte M.", review: "Seamless airport transfer and outstanding professionalism." },
  { name: "James R.", review: "The S-Class was immaculate and the chauffeur was perfectly punctual." },
  { name: "Olivia K.", review: "Our corporate guests were deeply impressed by the service quality." },
  { name: "Angela C.", review: "Good pricing, on-time arrival and excellent support from booking to drop-off." },
  { name: "Vincent S.", review: "Very pleasant driver and a smooth, stress-free transfer." },
  { name: "Bismi P.", review: "Great experience overall. Clean vehicle and very courteous chauffeur." },
  { name: "Michael D.", review: "Used Felix Rides for Heathrow transfer. Perfect timing and premium comfort." },
  { name: "Sofia L.", review: "Professional communication and easy booking. Will definitely book again." },
  { name: "David H.", review: "Reliable corporate service with executive-level quality throughout the journey." }
];

const PER_PAGE = 3;

export default function TestimonialSlider() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(testimonials.length / PER_PAGE);

  const currentItems = useMemo(() => {
    const start = page * PER_PAGE;
    return testimonials.slice(start, start + PER_PAGE);
  }, [page]);

  return (
    <div>
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => setPage((prev) => (prev - 1 + pageCount) % pageCount)}
          className="rounded-sm border border-border bg-white p-2 text-primary transition-colors hover:border-accent hover:text-accent"
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => setPage((prev) => (prev + 1) % pageCount)}
          className="rounded-sm border border-border bg-white p-2 text-primary transition-colors hover:border-accent hover:text-accent"
          aria-label="Next testimonials"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {currentItems.map((item) => (
            <TestimonialCard key={item.name} name={item.name} review={item.review} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: pageCount }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setPage(idx)}
            className={`h-1.5 w-7 rounded-full ${idx === page ? "bg-accent" : "bg-border"}`}
            aria-label={`Go to testimonial slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
