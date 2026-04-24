"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FleetCard from "@/components/FleetCard";
import { fleetData } from "@/lib/fleetData";

const PER_PAGE = 3;

export default function FleetPreviewSlider() {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(fleetData.length / PER_PAGE);

  const currentItems = useMemo(() => {
    const start = page * PER_PAGE;
    return fleetData.slice(start, start + PER_PAGE);
  }, [page]);

  return (
    <div>
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => setPage((prev) => (prev - 1 + pageCount) % pageCount)}
          className="rounded-sm border border-border bg-white p-2 text-primary transition-colors hover:border-accent hover:text-accent"
          aria-label="Previous fleet slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => setPage((prev) => (prev + 1) % pageCount)}
          className="rounded-sm border border-border bg-white p-2 text-primary transition-colors hover:border-accent hover:text-accent"
          aria-label="Next fleet slide"
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
          {currentItems.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
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
            aria-label={`Go to fleet slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
